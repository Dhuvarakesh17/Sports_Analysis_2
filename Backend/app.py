from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import os
import time
from dotenv import load_dotenv

# Load API Key from .env
load_dotenv()
API_KEY = os.getenv("FOOTBALL_API_KEY")

if not API_KEY:
    raise ValueError("FOOTBALL_API_KEY is not set in the environment variables!")

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
    
    try:
        response = requests.get(f"{BASE_URL}/{endpoint}", headers=HEADERS)
        
        if response.status_code == 429:
            return {"error": "Rate limit exceeded. Try again later."}, 429  # Handle rate limit
        
        if response.status_code != 200:
            return {"error": "Failed to fetch data"}, response.status_code  # Handle other errors

        data = response.json()
        CACHE[endpoint] = {"data": data, "time": current_time}  # Store in cache
        return data
    except requests.exceptions.RequestException as e:
        return {"error": f"Request failed: {str(e)}"}, 500  # Handle connection errors

# Fetch available leagues (Free Plan Leagues Only)
@app.route("/leagues", methods=["GET"])
def get_leagues():
    data = fetch_with_cache("competitions")
    
    if isinstance(data, tuple):  # If an error tuple is returned
        return jsonify(data[0]), data[1]

    free_leagues = ["PL", "PD", "BL1", "SA", "FL1", "DED", "PPL", "CL", "EL", "WC", "EC", "BSA"]
    leagues = [{"id": comp["code"], "name": comp["name"]} for comp in data.get("competitions", []) if comp["code"] in free_leagues]

    return jsonify(leagues)

# Fetch teams in a league using league code
@app.route("/teams/<league_code>", methods=["GET"])
def get_teams(league_code):
    data = fetch_with_cache(f"competitions/{league_code}/teams")
    
    if isinstance(data, tuple):  # If an error tuple is returned
        return jsonify(data[0]), data[1]

    teams = [{"id": team["id"], "name": team["name"]} for team in data.get("teams", [])]
    return jsonify(teams)

# Fetch team statistics
@app.route("/team-stats/<int:team_id>", methods=["GET"])
def get_team_stats(team_id):
    data = fetch_with_cache(f"teams/{team_id}")

    if isinstance(data, tuple):  # If an error tuple is returned
        return jsonify(data[0]), data[1]

    if "error" in data:
        return jsonify(data), 403

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
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
