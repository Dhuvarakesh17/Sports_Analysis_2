import { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const TeamStatistics = ({ teamId }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastFetchedTeam, setLastFetchedTeam] = useState(null);

  useEffect(() => {
    if (!teamId || teamId === lastFetchedTeam) return;

    setLoading(true);
    setError(null);

    axios
      .get(`https://sports-analysis-1.onrender.com/team-stats/${teamId}`)
      .then((response) => {
        if (response.data.error) throw new Error(response.data.error);
        setStats(response.data);
        setLastFetchedTeam(teamId);
      })
      .catch((err) => {
        console.error("Error fetching team stats:", err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [teamId]);

  if (loading) return <p className="text-center text-blue-500">Loading team data...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!stats) return <p className="text-center text-gray-500">No data available</p>;

  // ✅ Process Squad Data for Charts
  const positionCounts = stats.squad.reduce((acc, player) => {
    const position = player.position || "Unknown";
    acc[position] = (acc[position] || 0) + 1;
    return acc;
  }, {});

  // ✅ Bar Chart Data (Players per Position)
  const barData = {
    labels: Object.keys(positionCounts),
    datasets: [
      {
        label: "Players by Position",
        data: Object.values(positionCounts),
        backgroundColor: ["#4CAF50", "#2196F3", "#FF9800", "#E91E63", "#9C27B0"],
      },
    ],
  };

  // ✅ Pie Chart Data (Competitions)
  const pieData = {
    labels: stats.competitions,
    datasets: [
      {
        data: stats.competitions.map(() => 100 / stats.competitions.length),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center">{stats.name} Statistics</h2>
      <div className="flex justify-center">
        <img src={stats.crest} alt="Team Crest" width="100" className="my-4" />
      </div>
      <p className="text-center text-gray-700">Founded: {stats.founded}</p>
      <p className="text-center text-gray-700">Home Stadium: {stats.venue}</p>

      {/* ✅ Grid Layout for Charts */}
      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-center">Players per Position</h3>
          <Bar data={barData} />
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-center">Competitions</h3>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default TeamStatistics;
