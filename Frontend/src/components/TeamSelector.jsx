import { useState, useEffect } from "react";

function TeamSelector({ leagueId, onTeamSelect }) {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!leagueId) return; // Prevent unnecessary API calls

    setLoading(true);
    setTeams([]); // Clear previous teams when league changes
    setError("");

    fetch(`https://sports-analysis-1.onrender.com/teams/${leagueId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error || !Array.isArray(data) || data.length === 0) {
          console.error("API Error:", data.error || "No teams found.");
          setTeams([]);
          setError("No teams found for this league.");
        } else {
          setTeams(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching teams:", error);
        setError("Failed to load teams. Please try again.");
      })
      .finally(() => setLoading(false));
  }, [leagueId]);

  return (
    <div className="mb-4">
      <h2 className="mb-2 text-xl font-semibold text-gray-100">⚽ Select a Team</h2>

      {loading ? (
        <p className="text-gray-400 animate-pulse">Loading teams...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <select
          onChange={(e) => onTeamSelect(e.target.value)}
          className="w-full p-3 text-lg text-white transition bg-gray-800 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-gray-700"
        >
          <option value="">-- Select a Team --</option>
          {teams.map((team) => (
            <option key={team.id} value={team.id} className="bg-gray-900">
              {team.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default TeamSelector;
