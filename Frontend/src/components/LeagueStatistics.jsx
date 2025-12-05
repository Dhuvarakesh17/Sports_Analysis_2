import { useEffect, useState } from "react";

const DUMMY_LEAGUE_STANDINGS = {
  SAMPLE: {
    competition: {
      name: "Sample Premier League",
      code: "SPL",
      emblem:
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/Football_pictogram.svg",
      area: "Demo",
    },
    season: {
      startDate: "2024-08-10",
      endDate: "2025-05-18",
      currentMatchday: 26,
    },
    standings: [
      {
        type: "TOTAL",
        table: [
          {
            position: 1,
            teamId: 101,
            team: "Redbridge City",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 25,
            won: 18,
            draw: 4,
            lost: 3,
            points: 58,
            gd: 29,
          },
          {
            position: 2,
            teamId: 102,
            team: "Harbor United",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 25,
            won: 17,
            draw: 5,
            lost: 3,
            points: 56,
            gd: 25,
          },
          {
            position: 3,
            teamId: 103,
            team: "Vale Rovers",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 25,
            won: 15,
            draw: 7,
            lost: 3,
            points: 52,
            gd: 20,
          },
          {
            position: 4,
            teamId: 104,
            team: "Cobalt Town",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 25,
            won: 13,
            draw: 6,
            lost: 6,
            points: 45,
            gd: 10,
          },
          {
            position: 5,
            teamId: 105,
            team: "Northside FC",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 25,
            won: 12,
            draw: 6,
            lost: 7,
            points: 42,
            gd: 7,
          },
          {
            position: 6,
            teamId: 106,
            team: "Oldcastle",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 25,
            won: 11,
            draw: 6,
            lost: 8,
            points: 39,
            gd: 4,
          },
          {
            position: 7,
            teamId: 107,
            team: "Rivergate",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 25,
            won: 10,
            draw: 5,
            lost: 10,
            points: 35,
            gd: -2,
          },
          {
            position: 8,
            teamId: 108,
            team: "Eastborough",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 25,
            won: 9,
            draw: 7,
            lost: 9,
            points: 34,
            gd: -1,
          },
          {
            position: 9,
            teamId: 109,
            team: "Meadow Athletic",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 25,
            won: 8,
            draw: 7,
            lost: 10,
            points: 31,
            gd: -4,
          },
          {
            position: 10,
            teamId: 110,
            team: "Forge Albion",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 25,
            won: 7,
            draw: 6,
            lost: 12,
            points: 27,
            gd: -9,
          },
          {
            position: 11,
            teamId: 111,
            team: "Southpoint",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 25,
            won: 6,
            draw: 6,
            lost: 13,
            points: 24,
            gd: -12,
          },
          {
            position: 12,
            teamId: 112,
            team: "Lakeside Town",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 25,
            won: 5,
            draw: 7,
            lost: 13,
            points: 22,
            gd: -14,
          },
        ],
      },
    ],
  },
};

const getDummyLeague = (leagueId) => {
  if (!leagueId) return null;
  const base =
    DUMMY_LEAGUE_STANDINGS[leagueId] || DUMMY_LEAGUE_STANDINGS.SAMPLE;
  return {
    ...base,
    competition: {
      ...base.competition,
      code: base.competition.code || leagueId,
      name: base.competition.name || `League ${leagueId}`,
    },
  };
};

const LeagueStatistics = ({ leagueId }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [usingDummy, setUsingDummy] = useState(false);

  useEffect(() => {
    if (!leagueId) {
      setData(null);
      setError(null);
      setUsingDummy(false);
      return;
    }

    setLoading(true);
    setError(null);
    setUsingDummy(false);

    fetch(`https://sports-analysis-1.onrender.com/league-stats/${leagueId}`)
      .then(async (res) => {
        const body = await res.json();
        if (!res.ok || body.error) {
          throw new Error(body.error || "Unable to load league statistics.");
        }
        return body;
      })
      .then((body) => {
        const hasStandings =
          Array.isArray(body?.standings) && body.standings.length > 0;
        if (hasStandings) {
          setData(body);
          setUsingDummy(false);
        } else {
          const fallback = getDummyLeague(leagueId);
          setData(fallback);
          setUsingDummy(true);
        }
      })
      .catch((err) => {
        const fallback = getDummyLeague(leagueId);
        if (fallback) {
          setData(fallback);
          setUsingDummy(true);
          setError(null);
        } else {
          setError(err.message);
        }
      })
      .finally(() => setLoading(false));
  }, [leagueId]);

  if (!leagueId) return null;
  if (loading)
    return <p className="text-gray-300">Loading league insights...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!data) return null;

  const primaryTable =
    data.standings?.find((s) => s.type === "TOTAL") ||
    data.standings?.[0] ||
    null;

  return (
    <div className="p-6 text-white bg-gray-900/70 border border-gray-700/70 rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <div className="space-y-1">
          <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
            League Insights
          </p>
          <div className="flex items-center gap-3 text-2xl font-bold">
            {data.competition?.emblem ? (
              <img
                src={data.competition.emblem}
                alt={`${data.competition.name} crest`}
                className="w-10 h-10 p-1 rounded-full bg-white/10"
              />
            ) : null}
            <span>{data.competition?.name || "League"}</span>
          </div>
          <p className="text-sm text-gray-400">
            Matchday {data.season?.currentMatchday ?? "-"} •{" "}
            {data.season?.startDate} – {data.season?.endDate}
          </p>
        </div>
        <div className="px-3 py-1 text-xs font-semibold text-yellow-300 border rounded-full bg-yellow-500/10 border-yellow-400/30">
          {data.competition?.code || leagueId}
        </div>
      </div>

      {usingDummy ? (
        <div className="mb-3 text-xs font-semibold text-amber-300">
          Showing sample standings (API data unavailable for this league).
        </div>
      ) : null}

      {primaryTable && primaryTable.table?.length ? (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-400 uppercase border-b border-gray-700/80">
              <tr>
                <th className="pb-2 pr-3 font-semibold">#</th>
                <th className="pb-2 pr-3 font-semibold">Team</th>
                <th className="pb-2 pr-3 font-semibold">P</th>
                <th className="pb-2 pr-3 font-semibold">W</th>
                <th className="pb-2 pr-3 font-semibold">D</th>
                <th className="pb-2 pr-3 font-semibold">L</th>
                <th className="pb-2 pr-3 font-semibold text-yellow-300">Pts</th>
                <th className="pb-2 pr-3 font-semibold">GD</th>
              </tr>
            </thead>
            <tbody>
              {primaryTable.table.slice(0, 12).map((row) => (
                <tr
                  key={row.teamId}
                  className="border-b border-gray-800/80 last:border-none hover:bg-white/5"
                >
                  <td className="py-2 pr-3 text-gray-400">{row.position}</td>
                  <td className="py-2 pr-3">
                    <div className="flex items-center gap-2">
                      {row.crest ? (
                        <img
                          src={row.crest}
                          alt={row.team}
                          className="w-6 h-6 rounded-full"
                        />
                      ) : null}
                      <span className="font-semibold">{row.team}</span>
                    </div>
                  </td>
                  <td className="py-2 pr-3 text-gray-200">{row.played}</td>
                  <td className="py-2 pr-3 text-green-300">{row.won}</td>
                  <td className="py-2 pr-3 text-yellow-200">{row.draw}</td>
                  <td className="py-2 pr-3 text-red-300">{row.lost}</td>
                  <td className="py-2 pr-3 font-bold text-yellow-300">
                    {row.points}
                  </td>
                  <td className="py-2 pr-3 text-gray-200">{row.gd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-400">No standings available for this league.</p>
      )}
    </div>
  );
};

export default LeagueStatistics;
