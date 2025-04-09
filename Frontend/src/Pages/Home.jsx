import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-3xl p-8 text-center border border-gray-700 shadow-xl bg-white/10 backdrop-blur-lg rounded-2xl">
        <h1 className="mb-6 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          ⚽ Sports Analytics Hub
        </h1>
        
        <p className="mb-8 text-xl text-gray-300">
          Unlock powerful insights into football teams, players, and competitions with our advanced analytics platform.
        </p>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-6 transition transform bg-gray-800 rounded-lg hover:scale-105 hover:bg-gray-700">
            <h2 className="mb-3 text-2xl font-bold text-yellow-400">Team Analysis</h2>
            <p className="mb-4 text-gray-400">Detailed statistics and visualizations for any team</p>
            <Link 
              to="/analysis" 
              className="px-6 py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
          
          <div className="p-6 transition transform bg-gray-800 rounded-lg hover:scale-105 hover:bg-gray-700">
            <h2 className="mb-3 text-2xl font-bold text-green-400">League Insights</h2>
            <p className="mb-4 text-gray-400">Compare teams across different competitions</p>
            <Link 
              to="/analysis" 
              className="px-6 py-2 font-semibold text-white transition bg-green-600 rounded-lg hover:bg-green-700"
            >
              Explore Leagues
            </Link>
          </div>
        </div>
        
        <div className="mt-10">
          <h3 className="mb-4 text-xl font-semibold text-gray-300">Features</h3>
          <ul className="grid gap-3 text-left md:grid-cols-3">
            <li className="flex items-center">
              <span className="mr-2 text-green-400">✓</span> Player Position Analysis
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-400">✓</span> Competition Breakdown
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-400">✓</span> Team Statistics
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}