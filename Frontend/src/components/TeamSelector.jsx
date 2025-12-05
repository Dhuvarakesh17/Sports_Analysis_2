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
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2 text-sm font-semibold tracking-wide text-blue-300 uppercase">
        <span className="inline-flex items-center justify-center w-8 h-8 text-base bg-gray-800 border border-blue-400/40 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
          ⚽
        </span>
        <span>Team List</span>
      </div>

      {loading ? (
        <p className="text-gray-400 animate-pulse">Loading teams...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="relative">
          <select
            onChange={(e) => onTeamSelect(e.target.value)}
            className="w-full p-4 pr-12 text-lg text-white transition border rounded-2xl appearance-none bg-gray-900/70 border-gray-700/80 shadow-[0_12px_45px_rgba(0,0,0,0.35)] focus:outline-none focus:ring-2 focus:ring-blue-400/80 hover:border-blue-400/60"
          >
            <option value="">Pick a team</option>
            {teams.map((team) => (
              <option
                key={team.id}
                value={team.id}
                className="bg-gray-900 text-white"
              >
                {team.name}
              </option>
            ))}
          </select>
          <span className="absolute text-blue-300 pointer-events-none right-4 top-1/2 -translate-y-1/2">
            ▾
          </span>
        </div>
      )}
    </div>
  );
}

export default TeamSelector;
