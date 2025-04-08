import { useState } from "react";
import LeagueSelector from "./components/LeagueSelector";
import TeamSelector from "./components/TeamSelector";
import TeamStatistics from "./components/TeamStatistics";

function App() {
  const [selectedLeague, setSelectedLeague] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-3xl p-8 border border-gray-700 shadow-xl bg-white/10 backdrop-blur-lg rounded-2xl">
        <h1 className="mb-6 text-4xl font-extrabold text-center text-gray-100">
          ⚽ Sports Analysis Dashboard
        </h1>

        {/* League Selection */}
        <div className="mb-4">
          <LeagueSelector
            onLeagueSelect={(league) => {
              setSelectedLeague(league);
              setSelectedTeam(""); // Reset team when league changes
            }}
          />
        </div>

        {/* Team Selection */}
        {selectedLeague && (
          <div className="mb-4">
            <TeamSelector
              leagueId={selectedLeague}
              onTeamSelect={(team) => setSelectedTeam(team)}
              backendUrl="https://sports-analysis-1.onrender.com" // ✅ Pass the backend URL
            />
          </div>
        )}

        {/* Team Statistics */}
        {selectedTeam ? (
          <TeamStatistics 
            teamId={selectedTeam} 
            backendUrl="https://sports-analysis-1.onrender.com" // ✅ Pass the backend URL
          />
        ) : (
          <p className="text-lg text-center text-gray-400">
            Select a team to view statistics 📊
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
