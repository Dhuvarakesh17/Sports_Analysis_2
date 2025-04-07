from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv

# Load API Key
load_dotenv()
API_KEY = os.getenv("FOOTBALL_API_KEY")

app = Flask(__name__)
CORS(app)

BASE_URL = "https://api.football-data.org/v4"
HEADERS = {"X-Auth-Token": API_KEY}
CACHE = {}  # Stores cached responses
CACHE_EXPIRY = 60  # Cache expiry time in seconds (1 minute)

def fetch_with_cache(endpoint):
    """Fetch data with caching to avoid API rate limits."""
    current_time = time.time()
    if endpoint in CACHE and (current_time - CACHE[endpoint]["time"] < CACHE_EXPIRY):
        return CACHE[endpoint]["data"]  # Return cached data
    
    response = requests.get(f"{BASE_URL}/{endpoint}", headers=HEADERS)

    if response.status_code == 429:
        return {"error": "Rate limit exceeded. Try again later."}, 429  # Handle rate limit
    
    if response.status_code != 200:
        return {"error": "Failed to fetch data"}, response.status_code  # Handle other errors

    data = response.json()
    CACHE[endpoint] = {"data": data, "time": current_time}  # Store in cache
    return data

# Fetch available leagues (Free Plan Leagues Only)
@app.route("/leagues", methods=["GET"])
def get_leagues():
    url = f"{BASE_URL}/competitions"
    response = requests.get(url, headers=HEADERS)

    if response.status_code != 200:
        return jsonify({"error": "Failed to fetch leagues"}), response.status_code

    data = response.json()
    # Keep only free plan leagues
    free_leagues = ["PL", "PD", "BL1", "SA", "FL1", "DED", "PPL", "CL", "EL", "WC", "EC", "BSA"]
    leagues = [{"id": comp["code"], "name": comp["name"]} for comp in data.get("competitions", []) if comp["code"] in free_leagues]

    return jsonify(leagues)

# Fetch teams in a league using league code
@app.route("/teams/<league_code>", methods=["GET"])
def get_teams(league_code):
    url = f"{BASE_URL}/competitions/{league_code}/teams"
    response = requests.get(url, headers=HEADERS)

    if response.status_code != 200:
        return jsonify({"error": f"Failed to fetch teams for {league_code}"}), response.status_code

    data = response.json()
    teams = [{"id": team["id"], "name": team["name"]} for team in data.get("teams", [])]
    return jsonify(teams)

# Fetch team statistics
@app.route("/team-stats/<int:team_id>", methods=["GET"])
def get_team_stats(team_id):
    url = f"{BASE_URL}/teams/{team_id}"
    response = requests.get(url, headers=HEADERS)

    # Handle restricted data
    if response.status_code == 403:
        return jsonify({"error": "Access denied for this team. Upgrade your API plan to access more details."}), 403

    # Handle other errors
    if response.status_code != 200:
        return jsonify({"error": "Failed to fetch team stats"}), response.status_code

    data = response.json()

    # Extract available details in free tier
    stats = {
        "name": data.get("name", "Unknown"),
        "shortName": data.get("shortName", "N/A"),
        "founded": data.get("founded", "N/A"),
        "venue": data.get("venue", "Unknown"),
        "crest": data.get("crest", ""),  # Team logo
        "squad": [{"name": player["name"], "position": player.get("position", "Unknown")}
                  for player in data.get("squad", [])],
        "competitions": [comp["name"] for comp in data.get("runningCompetitions", [])]
    }

    return jsonify(stats)


if __name__ == "__main__":
    app.run(debug=True)

