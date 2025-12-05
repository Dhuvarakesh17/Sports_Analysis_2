import { useState } from "react";
import LeagueSelector from "../components/LeagueSelector";
import TeamSelector from "../components/TeamSelector";
import TeamStatistics from "../components/TeamStatistics";
import LeagueStatistics from "../components/LeagueStatistics";
import { Link } from "react-router-dom";

export default function Analysis() {
  const [selectedLeague, setSelectedLeague] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-6xl p-8 border border-gray-700 shadow-xl bg-white/10 backdrop-blur-lg rounded-2xl">
        <div className="flex justify-between mb-6">
          <h1 className="text-4xl font-extrabold text-gray-100">
            📊 Team Analysis Dashboard
          </h1>
          <Link
            to="/"
            className="px-4 py-2 text-sm font-semibold text-white transition bg-gray-700 rounded-lg hover:bg-gray-600"
          >
            ← Back to Home
          </Link>
        </div>

        {/* League Selection */}
        <div className="mb-4">
          <LeagueSelector
            onLeagueSelect={(league) => {
              setSelectedLeague(league);
              setSelectedTeam("");
            }}
          />
        </div>

        {/* Team Selection */}
        {selectedLeague && (
          <div className="mb-6">
            <TeamSelector
              leagueId={selectedLeague}
              onTeamSelect={(team) => setSelectedTeam(team)}
            />
          </div>
        )}

        {/* League Statistics OR Team Statistics */}
        {selectedTeam ? (
          <TeamStatistics teamId={selectedTeam} />
        ) : selectedLeague ? (
          <LeagueStatistics leagueId={selectedLeague} />
        ) : (
          <div className="p-8 text-center bg-gray-800/50 rounded-xl">
            <p className="text-xl text-gray-400">
              Start by selecting a league above 🌍
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
