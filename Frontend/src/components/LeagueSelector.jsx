import { useState, useEffect } from "react";

function LeagueSelector({ onLeagueSelect }) {
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const response = await fetch("https://sports-analysis-1.onrender.com/leagues");
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
    <div className="mb-4">
      <h2 className="mb-2 text-xl font-semibold text-gray-100">🌍 Select a League</h2>
      
      {loading ? (
        <p className="text-gray-400">Loading leagues...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <select
          onChange={(e) => onLeagueSelect(e.target.value)}
          className="w-full p-3 text-lg text-white transition bg-gray-800 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:bg-gray-700"
        >
          <option value="">-- Select a League --</option>
          {leagues.map((league) => (
            <option key={league.id} value={league.id} className="bg-gray-900">
              {league.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default LeagueSelector;
