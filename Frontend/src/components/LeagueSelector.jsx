import { useState, useEffect } from "react";

function LeagueSelector({ onLeagueSelect }) {
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const response = await fetch(
          "https://sports-analysis-1.onrender.com/leagues"
        );
        if (!response.ok) throw new Error("Failed to fetch leagues");
        const data = await response.json();
        setLeagues(data);
      } catch (err) {
        console.error("Error fetching leagues:", err);
        setError("Unable to load leagues. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchLeagues();
  }, []);

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2 text-sm font-semibold tracking-wide text-yellow-300 uppercase">
        <span className="inline-flex items-center justify-center w-8 h-8 text-base bg-gray-800 border border-yellow-400/40 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
          🌍
        </span>
        <span>League List</span>
      </div>

      {loading ? (
        <p className="text-gray-400">Loading leagues...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="relative">
          <select
            onChange={(e) => onLeagueSelect(e.target.value)}
            className="w-full p-4 pr-12 text-lg text-white transition border rounded-2xl appearance-none bg-gray-900/70 border-gray-700/80 shadow-[0_12px_45px_rgba(0,0,0,0.35)] focus:outline-none focus:ring-2 focus:ring-yellow-400/80 hover:border-yellow-400/60"
          >
            <option value="">Pick a league</option>
            {leagues.map((league) => (
              <option
                key={league.id}
                value={league.id}
                className="text-white bg-gray-900"
              >
                {league.name}
              </option>
            ))}
          </select>
          <span className="absolute text-yellow-300 -translate-y-1/2 pointer-events-none right-4 top-1/2">
            ▾
          </span>
        </div>
      )}
    </div>
  );
}

export default LeagueSelector;
