import { useEffect, useState } from "react";

const DUMMY_LEAGUE_STANDINGS = {
  PL: {
    competition: {
      name: "Premier League",
      code: "PL",
      emblem:
        "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg",
      area: "England",
    },
    season: {
      startDate: "2024-08-17",
      endDate: "2025-05-25",
      currentMatchday: 15,
    },
    standings: [
      {
        type: "TOTAL",
        table: [
          {
            position: 1,
            teamId: 1001,
            team: "Liverpool FC",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 11,
            draw: 3,
            lost: 1,
            points: 36,
            gd: 22,
          },
          {
            position: 2,
            teamId: 1002,
            team: "Arsenal FC",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 10,
            draw: 4,
            lost: 1,
            points: 34,
            gd: 19,
          },
          {
            position: 3,
            teamId: 1003,
            team: "Manchester City",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 9,
            draw: 4,
            lost: 2,
            points: 31,
            gd: 16,
          },
          {
            position: 4,
            teamId: 1004,
            team: "Chelsea FC",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 8,
            draw: 5,
            lost: 2,
            points: 29,
            gd: 12,
          },
          {
            position: 5,
            teamId: 1005,
            team: "Aston Villa",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 8,
            draw: 3,
            lost: 4,
            points: 27,
            gd: 8,
          },
          {
            position: 6,
            teamId: 1006,
            team: "Tottenham Hotspur",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 7,
            draw: 4,
            lost: 4,
            points: 25,
            gd: 6,
          },
          {
            position: 7,
            teamId: 1007,
            team: "Newcastle United",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 7,
            draw: 3,
            lost: 5,
            points: 24,
            gd: 5,
          },
          {
            position: 8,
            teamId: 1008,
            team: "Brighton & Hove Albion",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 6,
            draw: 5,
            lost: 4,
            points: 23,
            gd: 3,
          },
          {
            position: 9,
            teamId: 1009,
            team: "Manchester United",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 6,
            draw: 4,
            lost: 5,
            points: 22,
            gd: 0,
          },
          {
            position: 10,
            teamId: 1010,
            team: "West Ham United",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 5,
            draw: 5,
            lost: 5,
            points: 20,
            gd: -2,
          },
          {
            position: 11,
            teamId: 1011,
            team: "Fulham FC",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 5,
            draw: 4,
            lost: 6,
            points: 19,
            gd: -3,
          },
          {
            position: 12,
            teamId: 1012,
            team: "Everton FC",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 4,
            draw: 6,
            lost: 5,
            points: 18,
            gd: -5,
          },
        ],
      },
    ],
  },
  PD: {
    competition: {
      name: "La Liga",
      code: "PD",
      emblem: "https://upload.wikimedia.org/wikipedia/commons/1/13/LaLiga.svg",
      area: "Spain",
    },
    season: {
      startDate: "2024-08-15",
      endDate: "2025-05-25",
      currentMatchday: 16,
    },
    standings: [
      {
        type: "TOTAL",
        table: [
          {
            position: 1,
            teamId: 2001,
            team: "Real Madrid",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 16,
            won: 12,
            draw: 3,
            lost: 1,
            points: 39,
            gd: 24,
          },
          {
            position: 2,
            teamId: 2002,
            team: "FC Barcelona",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 16,
            won: 11,
            draw: 4,
            lost: 1,
            points: 37,
            gd: 21,
          },
          {
            position: 3,
            teamId: 2003,
            team: "Atletico Madrid",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 16,
            won: 10,
            draw: 3,
            lost: 3,
            points: 33,
            gd: 15,
          },
          {
            position: 4,
            teamId: 2004,
            team: "Athletic Bilbao",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 16,
            won: 9,
            draw: 4,
            lost: 3,
            points: 31,
            gd: 11,
          },
          {
            position: 5,
            teamId: 2005,
            team: "Real Sociedad",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 16,
            won: 8,
            draw: 5,
            lost: 3,
            points: 29,
            gd: 8,
          },
          {
            position: 6,
            teamId: 2006,
            team: "Real Betis",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 16,
            won: 8,
            draw: 4,
            lost: 4,
            points: 28,
            gd: 6,
          },
          {
            position: 7,
            teamId: 2007,
            team: "Villarreal CF",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 16,
            won: 7,
            draw: 5,
            lost: 4,
            points: 26,
            gd: 4,
          },
          {
            position: 8,
            teamId: 2008,
            team: "Valencia CF",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 16,
            won: 7,
            draw: 4,
            lost: 5,
            points: 25,
            gd: 2,
          },
          {
            position: 9,
            teamId: 2009,
            team: "Sevilla FC",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 16,
            won: 6,
            draw: 6,
            lost: 4,
            points: 24,
            gd: 0,
          },
          {
            position: 10,
            teamId: 2010,
            team: "Osasuna",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 16,
            won: 6,
            draw: 5,
            lost: 5,
            points: 23,
            gd: -1,
          },
          {
            position: 11,
            teamId: 2011,
            team: "Getafe CF",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 16,
            won: 5,
            draw: 6,
            lost: 5,
            points: 21,
            gd: -3,
          },
          {
            position: 12,
            teamId: 2012,
            team: "Rayo Vallecano",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 16,
            won: 5,
            draw: 5,
            lost: 6,
            points: 20,
            gd: -4,
          },
        ],
      },
    ],
  },
  BL1: {
    competition: {
      name: "Bundesliga",
      code: "BL1",
      emblem:
        "https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg",
      area: "Germany",
    },
    season: {
      startDate: "2024-08-23",
      endDate: "2025-05-17",
      currentMatchday: 14,
    },
    standings: [
      {
        type: "TOTAL",
        table: [
          {
            position: 1,
            teamId: 3001,
            team: "Bayern Munich",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 11,
            draw: 2,
            lost: 1,
            points: 35,
            gd: 26,
          },
          {
            position: 2,
            teamId: 3002,
            team: "Bayer Leverkusen",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 10,
            draw: 3,
            lost: 1,
            points: 33,
            gd: 22,
          },
          {
            position: 3,
            teamId: 3003,
            team: "RB Leipzig",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 9,
            draw: 3,
            lost: 2,
            points: 30,
            gd: 18,
          },
          {
            position: 4,
            teamId: 3004,
            team: "Borussia Dortmund",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 8,
            draw: 4,
            lost: 2,
            points: 28,
            gd: 14,
          },
          {
            position: 5,
            teamId: 3005,
            team: "VfB Stuttgart",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 7,
            draw: 5,
            lost: 2,
            points: 26,
            gd: 10,
          },
          {
            position: 6,
            teamId: 3006,
            team: "Eintracht Frankfurt",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 7,
            draw: 4,
            lost: 3,
            points: 25,
            gd: 8,
          },
          {
            position: 7,
            teamId: 3007,
            team: "SC Freiburg",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 6,
            draw: 5,
            lost: 3,
            points: 23,
            gd: 5,
          },
          {
            position: 8,
            teamId: 3008,
            team: "Wolfsburg",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 6,
            draw: 4,
            lost: 4,
            points: 22,
            gd: 3,
          },
          {
            position: 9,
            teamId: 3009,
            team: "Borussia M'gladbach",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 5,
            draw: 6,
            lost: 3,
            points: 21,
            gd: 1,
          },
          {
            position: 10,
            teamId: 3010,
            team: "Union Berlin",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 5,
            draw: 5,
            lost: 4,
            points: 20,
            gd: -1,
          },
          {
            position: 11,
            teamId: 3011,
            team: "Werder Bremen",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 5,
            draw: 4,
            lost: 5,
            points: 19,
            gd: -2,
          },
          {
            position: 12,
            teamId: 3012,
            team: "Augsburg",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 4,
            draw: 6,
            lost: 4,
            points: 18,
            gd: -4,
          },
        ],
      },
    ],
  },
  SA: {
    competition: {
      name: "Serie A",
      code: "SA",
      emblem:
        "https://upload.wikimedia.org/wikipedia/commons/d/d7/SerieA_Logo.svg",
      area: "Italy",
    },
    season: {
      startDate: "2024-08-17",
      endDate: "2025-05-25",
      currentMatchday: 15,
    },
    standings: [
      {
        type: "TOTAL",
        table: [
          {
            position: 1,
            teamId: 4001,
            team: "Inter Milan",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 11,
            draw: 3,
            lost: 1,
            points: 36,
            gd: 23,
          },
          {
            position: 2,
            teamId: 4002,
            team: "AC Milan",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 10,
            draw: 4,
            lost: 1,
            points: 34,
            gd: 20,
          },
          {
            position: 3,
            teamId: 4003,
            team: "Juventus",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 9,
            draw: 5,
            lost: 1,
            points: 32,
            gd: 17,
          },
          {
            position: 4,
            teamId: 4004,
            team: "Napoli",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 9,
            draw: 3,
            lost: 3,
            points: 30,
            gd: 14,
          },
          {
            position: 5,
            teamId: 4005,
            team: "AS Roma",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 8,
            draw: 4,
            lost: 3,
            points: 28,
            gd: 10,
          },
          {
            position: 6,
            teamId: 4006,
            team: "Lazio",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 7,
            draw: 5,
            lost: 3,
            points: 26,
            gd: 8,
          },
          {
            position: 7,
            teamId: 4007,
            team: "Atalanta",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 7,
            draw: 4,
            lost: 4,
            points: 25,
            gd: 6,
          },
          {
            position: 8,
            teamId: 4008,
            team: "Fiorentina",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 6,
            draw: 6,
            lost: 3,
            points: 24,
            gd: 4,
          },
          {
            position: 9,
            teamId: 4009,
            team: "Bologna",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 6,
            draw: 5,
            lost: 4,
            points: 23,
            gd: 2,
          },
          {
            position: 10,
            teamId: 4010,
            team: "Torino",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 5,
            draw: 6,
            lost: 4,
            points: 21,
            gd: 0,
          },
          {
            position: 11,
            teamId: 4011,
            team: "Udinese",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 5,
            draw: 5,
            lost: 5,
            points: 20,
            gd: -2,
          },
          {
            position: 12,
            teamId: 4012,
            team: "Monza",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 4,
            draw: 7,
            lost: 4,
            points: 19,
            gd: -3,
          },
        ],
      },
    ],
  },
  FL1: {
    competition: {
      name: "Ligue 1",
      code: "FL1",
      emblem:
        "https://upload.wikimedia.org/wikipedia/commons/5/5e/Ligue_1_Logo.svg",
      area: "France",
    },
    season: {
      startDate: "2024-08-16",
      endDate: "2025-05-18",
      currentMatchday: 15,
    },
    standings: [
      {
        type: "TOTAL",
        table: [
          {
            position: 1,
            teamId: 5001,
            team: "Paris Saint-Germain",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 12,
            draw: 2,
            lost: 1,
            points: 38,
            gd: 27,
          },
          {
            position: 2,
            teamId: 5002,
            team: "AS Monaco",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 10,
            draw: 3,
            lost: 2,
            points: 33,
            gd: 19,
          },
          {
            position: 3,
            teamId: 5003,
            team: "Olympique Marseille",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 9,
            draw: 4,
            lost: 2,
            points: 31,
            gd: 15,
          },
          {
            position: 4,
            teamId: 5004,
            team: "Lille OSC",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 8,
            draw: 5,
            lost: 2,
            points: 29,
            gd: 12,
          },
          {
            position: 5,
            teamId: 5005,
            team: "OGC Nice",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 8,
            draw: 4,
            lost: 3,
            points: 28,
            gd: 9,
          },
          {
            position: 6,
            teamId: 5006,
            team: "Olympique Lyon",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 7,
            draw: 5,
            lost: 3,
            points: 26,
            gd: 7,
          },
          {
            position: 7,
            teamId: 5007,
            team: "RC Lens",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 7,
            draw: 4,
            lost: 4,
            points: 25,
            gd: 5,
          },
          {
            position: 8,
            teamId: 5008,
            team: "Stade Rennais",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 6,
            draw: 6,
            lost: 3,
            points: 24,
            gd: 3,
          },
          {
            position: 9,
            teamId: 5009,
            team: "Montpellier HSC",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 6,
            draw: 5,
            lost: 4,
            points: 23,
            gd: 1,
          },
          {
            position: 10,
            teamId: 5010,
            team: "Stade Brestois",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 5,
            draw: 6,
            lost: 4,
            points: 21,
            gd: -1,
          },
          {
            position: 11,
            teamId: 5011,
            team: "FC Nantes",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 5,
            draw: 5,
            lost: 5,
            points: 20,
            gd: -2,
          },
          {
            position: 12,
            teamId: 5012,
            team: "Toulouse FC",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 15,
            won: 4,
            draw: 7,
            lost: 4,
            points: 19,
            gd: -4,
          },
        ],
      },
    ],
  },
  DED: {
    competition: {
      name: "Eredivisie",
      code: "DED",
      emblem:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Eredivisie_nieuw_logo_2017-.svg",
      area: "Netherlands",
    },
    season: {
      startDate: "2024-08-09",
      endDate: "2025-05-11",
      currentMatchday: 14,
    },
    standings: [
      {
        type: "TOTAL",
        table: [
          {
            position: 1,
            teamId: 6001,
            team: "PSV Eindhoven",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 11,
            draw: 2,
            lost: 1,
            points: 35,
            gd: 32,
          },
          {
            position: 2,
            teamId: 6002,
            team: "Ajax Amsterdam",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 10,
            draw: 3,
            lost: 1,
            points: 33,
            gd: 26,
          },
          {
            position: 3,
            teamId: 6003,
            team: "Feyenoord",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 9,
            draw: 3,
            lost: 2,
            points: 30,
            gd: 21,
          },
          {
            position: 4,
            teamId: 6004,
            team: "AZ Alkmaar",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 8,
            draw: 4,
            lost: 2,
            points: 28,
            gd: 15,
          },
          {
            position: 5,
            teamId: 6005,
            team: "FC Twente",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 7,
            draw: 5,
            lost: 2,
            points: 26,
            gd: 11,
          },
          {
            position: 6,
            teamId: 6006,
            team: "FC Utrecht",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 7,
            draw: 4,
            lost: 3,
            points: 25,
            gd: 8,
          },
          {
            position: 7,
            teamId: 6007,
            team: "Go Ahead Eagles",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 6,
            draw: 5,
            lost: 3,
            points: 23,
            gd: 5,
          },
          {
            position: 8,
            teamId: 6008,
            team: "SC Heerenveen",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 5,
            draw: 6,
            lost: 3,
            points: 21,
            gd: 2,
          },
          {
            position: 9,
            teamId: 6009,
            team: "Fortuna Sittard",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 5,
            draw: 5,
            lost: 4,
            points: 20,
            gd: 0,
          },
          {
            position: 10,
            teamId: 6010,
            team: "Sparta Rotterdam",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 4,
            draw: 7,
            lost: 3,
            points: 19,
            gd: -2,
          },
          {
            position: 11,
            teamId: 6011,
            team: "NEC Nijmegen",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 4,
            draw: 6,
            lost: 4,
            points: 18,
            gd: -4,
          },
          {
            position: 12,
            teamId: 6012,
            team: "PEC Zwolle",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 14,
            won: 3,
            draw: 7,
            lost: 4,
            points: 16,
            gd: -6,
          },
        ],
      },
    ],
  },
  PPL: {
    competition: {
      name: "Primeira Liga",
      code: "PPL",
      emblem:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Liga_Portugal.svg",
      area: "Portugal",
    },
    season: {
      startDate: "2024-08-10",
      endDate: "2025-05-18",
      currentMatchday: 13,
    },
    standings: [
      {
        type: "TOTAL",
        table: [
          {
            position: 1,
            teamId: 7001,
            team: "SL Benfica",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 13,
            won: 10,
            draw: 2,
            lost: 1,
            points: 32,
            gd: 24,
          },
          {
            position: 2,
            teamId: 7002,
            team: "FC Porto",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 13,
            won: 9,
            draw: 3,
            lost: 1,
            points: 30,
            gd: 21,
          },
          {
            position: 3,
            teamId: 7003,
            team: "Sporting CP",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 13,
            won: 9,
            draw: 2,
            lost: 2,
            points: 29,
            gd: 19,
          },
          {
            position: 4,
            teamId: 7004,
            team: "SC Braga",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 13,
            won: 7,
            draw: 4,
            lost: 2,
            points: 25,
            gd: 13,
          },
          {
            position: 5,
            teamId: 7005,
            team: "Vitoria SC",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 13,
            won: 6,
            draw: 5,
            lost: 2,
            points: 23,
            gd: 9,
          },
          {
            position: 6,
            teamId: 7006,
            team: "Casa Pia AC",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 13,
            won: 6,
            draw: 4,
            lost: 3,
            points: 22,
            gd: 6,
          },
          {
            position: 7,
            teamId: 7007,
            team: "Moreirense FC",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 13,
            won: 5,
            draw: 6,
            lost: 2,
            points: 21,
            gd: 3,
          },
          {
            position: 8,
            teamId: 7008,
            team: "Rio Ave FC",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 13,
            won: 5,
            draw: 5,
            lost: 3,
            points: 20,
            gd: 1,
          },
          {
            position: 9,
            teamId: 7009,
            team: "GD Estoril Praia",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 13,
            won: 4,
            draw: 6,
            lost: 3,
            points: 18,
            gd: -1,
          },
          {
            position: 10,
            teamId: 7010,
            team: "Boavista FC",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 13,
            won: 4,
            draw: 5,
            lost: 4,
            points: 17,
            gd: -3,
          },
          {
            position: 11,
            teamId: 7011,
            team: "Arouca",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 13,
            won: 3,
            draw: 7,
            lost: 3,
            points: 16,
            gd: -5,
          },
          {
            position: 12,
            teamId: 7012,
            team: "Portimonense",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 13,
            won: 3,
            draw: 6,
            lost: 4,
            points: 15,
            gd: -7,
          },
        ],
      },
    ],
  },
  CL: {
    competition: {
      name: "UEFA Champions League",
      code: "CL",
      emblem:
        "https://upload.wikimedia.org/wikipedia/en/b/bf/UEFA_Champions_League_logo_2.svg",
      area: "Europe",
    },
    season: {
      startDate: "2024-09-17",
      endDate: "2025-05-31",
      currentMatchday: 6,
    },
    standings: [
      {
        type: "TOTAL",
        table: [
          {
            position: 1,
            teamId: 8001,
            team: "Bayern Munich",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 6,
            won: 5,
            draw: 1,
            lost: 0,
            points: 16,
            gd: 12,
          },
          {
            position: 2,
            teamId: 8002,
            team: "Manchester City",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 6,
            won: 5,
            draw: 0,
            lost: 1,
            points: 15,
            gd: 11,
          },
          {
            position: 3,
            teamId: 8003,
            team: "Real Madrid",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 6,
            won: 4,
            draw: 2,
            lost: 0,
            points: 14,
            gd: 10,
          },
          {
            position: 4,
            teamId: 8004,
            team: "Inter Milan",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 6,
            won: 4,
            draw: 1,
            lost: 1,
            points: 13,
            gd: 8,
          },
          {
            position: 5,
            teamId: 8005,
            team: "Arsenal",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 6,
            won: 4,
            draw: 1,
            lost: 1,
            points: 13,
            gd: 7,
          },
          {
            position: 6,
            teamId: 8006,
            team: "Barcelona",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 6,
            won: 4,
            draw: 0,
            lost: 2,
            points: 12,
            gd: 6,
          },
          {
            position: 7,
            teamId: 8007,
            team: "Liverpool",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 6,
            won: 3,
            draw: 2,
            lost: 1,
            points: 11,
            gd: 5,
          },
          {
            position: 8,
            teamId: 8008,
            team: "Atletico Madrid",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 6,
            won: 3,
            draw: 2,
            lost: 1,
            points: 11,
            gd: 4,
          },
          {
            position: 9,
            teamId: 8009,
            team: "PSG",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 6,
            won: 3,
            draw: 1,
            lost: 2,
            points: 10,
            gd: 3,
          },
          {
            position: 10,
            teamId: 8010,
            team: "Borussia Dortmund",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 6,
            won: 3,
            draw: 1,
            lost: 2,
            points: 10,
            gd: 2,
          },
          {
            position: 11,
            teamId: 8011,
            team: "AC Milan",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 6,
            won: 2,
            draw: 3,
            lost: 1,
            points: 9,
            gd: 1,
          },
          {
            position: 12,
            teamId: 8012,
            team: "Juventus",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 6,
            won: 2,
            draw: 2,
            lost: 2,
            points: 8,
            gd: 0,
          },
        ],
      },
    ],
  },
  EL: {
    competition: {
      name: "UEFA Europa League",
      code: "EL",
      emblem:
        "https://upload.wikimedia.org/wikipedia/en/d/df/UEFA_Europa_League_logo.svg",
      area: "Europe",
    },
    season: {
      startDate: "2024-09-25",
      endDate: "2025-05-21",
      currentMatchday: 5,
    },
    standings: [
      {
        type: "TOTAL",
        table: [
          {
            position: 1,
            teamId: 9001,
            team: "Sevilla FC",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 5,
            won: 4,
            draw: 1,
            lost: 0,
            points: 13,
            gd: 9,
          },
          {
            position: 2,
            teamId: 9002,
            team: "AS Roma",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 5,
            won: 4,
            draw: 0,
            lost: 1,
            points: 12,
            gd: 8,
          },
          {
            position: 3,
            teamId: 9003,
            team: "Bayer Leverkusen",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 5,
            won: 3,
            draw: 2,
            lost: 0,
            points: 11,
            gd: 7,
          },
          {
            position: 4,
            teamId: 9004,
            team: "West Ham United",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 5,
            won: 3,
            draw: 1,
            lost: 1,
            points: 10,
            gd: 6,
          },
          {
            position: 5,
            teamId: 9005,
            team: "Brighton",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 5,
            won: 3,
            draw: 1,
            lost: 1,
            points: 10,
            gd: 5,
          },
          {
            position: 6,
            teamId: 9006,
            team: "Atalanta",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 5,
            won: 3,
            draw: 0,
            lost: 2,
            points: 9,
            gd: 4,
          },
          {
            position: 7,
            teamId: 9007,
            team: "Rangers FC",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 5,
            won: 2,
            draw: 2,
            lost: 1,
            points: 8,
            gd: 3,
          },
          {
            position: 8,
            teamId: 9008,
            team: "Real Betis",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 5,
            won: 2,
            draw: 2,
            lost: 1,
            points: 8,
            gd: 2,
          },
          {
            position: 9,
            teamId: 9009,
            team: "Sporting CP",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 5,
            won: 2,
            draw: 1,
            lost: 2,
            points: 7,
            gd: 1,
          },
          {
            position: 10,
            teamId: 9010,
            team: "Feyenoord",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 5,
            won: 2,
            draw: 1,
            lost: 2,
            points: 7,
            gd: 0,
          },
          {
            position: 11,
            teamId: 9011,
            team: "Olympiakos",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 5,
            won: 1,
            draw: 3,
            lost: 1,
            points: 6,
            gd: -1,
          },
          {
            position: 12,
            teamId: 9012,
            team: "Slavia Prague",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 5,
            won: 1,
            draw: 2,
            lost: 2,
            points: 5,
            gd: -2,
          },
        ],
      },
    ],
  },
  WC: {
    competition: {
      name: "FIFA World Cup",
      code: "WC",
      emblem:
        "https://upload.wikimedia.org/wikipedia/en/6/67/2022_FIFA_World_Cup.svg",
      area: "World",
    },
    season: {
      startDate: "2026-06-11",
      endDate: "2026-07-19",
      currentMatchday: 0,
    },
    standings: [
      {
        type: "TOTAL",
        table: [
          {
            position: 1,
            teamId: 10001,
            team: "Brazil",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
          {
            position: 2,
            teamId: 10002,
            team: "Argentina",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
          {
            position: 3,
            teamId: 10003,
            team: "France",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
          {
            position: 4,
            teamId: 10004,
            team: "Germany",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
          {
            position: 5,
            teamId: 10005,
            team: "Spain",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
          {
            position: 6,
            teamId: 10006,
            team: "England",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
          {
            position: 7,
            teamId: 10007,
            team: "Portugal",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
          {
            position: 8,
            teamId: 10008,
            team: "Italy",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
          {
            position: 9,
            teamId: 10009,
            team: "Netherlands",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
          {
            position: 10,
            teamId: 10010,
            team: "Belgium",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
          {
            position: 11,
            teamId: 10011,
            team: "Croatia",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
          {
            position: 12,
            teamId: 10012,
            team: "Uruguay",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
        ],
      },
    ],
  },
  EC: {
    competition: {
      name: "UEFA European Championship",
      code: "EC",
      emblem:
        "https://upload.wikimedia.org/wikipedia/en/1/11/UEFA_Euro_2024_Logo.svg",
      area: "Europe",
    },
    season: {
      startDate: "2028-06-09",
      endDate: "2028-07-09",
      currentMatchday: 0,
    },
    standings: [
      {
        type: "TOTAL",
        table: [
          {
            position: 1,
            teamId: 11001,
            team: "France",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
          {
            position: 2,
            teamId: 11002,
            team: "Germany",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
          {
            position: 3,
            teamId: 11003,
            team: "Spain",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
          {
            position: 4,
            teamId: 11004,
            team: "England",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
          {
            position: 5,
            teamId: 11005,
            team: "Portugal",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
          {
            position: 6,
            teamId: 11006,
            team: "Italy",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
          {
            position: 7,
            teamId: 11007,
            team: "Netherlands",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
          {
            position: 8,
            teamId: 11008,
            team: "Belgium",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
          {
            position: 9,
            teamId: 11009,
            team: "Croatia",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
          {
            position: 10,
            teamId: 11010,
            team: "Denmark",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
          {
            position: 11,
            teamId: 11011,
            team: "Switzerland",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
          {
            position: 12,
            teamId: 11012,
            team: "Poland",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 0,
            won: 0,
            draw: 0,
            lost: 0,
            points: 0,
            gd: 0,
          },
        ],
      },
    ],
  },
  BSA: {
    competition: {
      name: "Campeonato Brasileiro Série A",
      code: "BSA",
      emblem:
        "https://upload.wikimedia.org/wikipedia/en/2/2c/Brasileir%C3%A3o_S%C3%A9rie_A_logo.svg",
      area: "Brazil",
    },
    season: {
      startDate: "2024-04-13",
      endDate: "2024-12-08",
      currentMatchday: 35,
    },
    standings: [
      {
        type: "TOTAL",
        table: [
          {
            position: 1,
            teamId: 12001,
            team: "Flamengo",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 35,
            won: 21,
            draw: 9,
            lost: 5,
            points: 72,
            gd: 28,
          },
          {
            position: 2,
            teamId: 12002,
            team: "Palmeiras",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 35,
            won: 20,
            draw: 10,
            lost: 5,
            points: 70,
            gd: 25,
          },
          {
            position: 3,
            teamId: 12003,
            team: "Atletico Mineiro",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 35,
            won: 19,
            draw: 10,
            lost: 6,
            points: 67,
            gd: 20,
          },
          {
            position: 4,
            teamId: 12004,
            team: "Sao Paulo FC",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 35,
            won: 18,
            draw: 11,
            lost: 6,
            points: 65,
            gd: 17,
          },
          {
            position: 5,
            teamId: 12005,
            team: "Botafogo",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 35,
            won: 17,
            draw: 12,
            lost: 6,
            points: 63,
            gd: 14,
          },
          {
            position: 6,
            teamId: 12006,
            team: "Gremio",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 35,
            won: 16,
            draw: 13,
            lost: 6,
            points: 61,
            gd: 11,
          },
          {
            position: 7,
            teamId: 12007,
            team: "Fluminense",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 35,
            won: 15,
            draw: 13,
            lost: 7,
            points: 58,
            gd: 8,
          },
          {
            position: 8,
            teamId: 12008,
            team: "Corinthians",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 35,
            won: 14,
            draw: 14,
            lost: 7,
            points: 56,
            gd: 5,
          },
          {
            position: 9,
            teamId: 12009,
            team: "Internacional",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 35,
            won: 13,
            draw: 15,
            lost: 7,
            points: 54,
            gd: 3,
          },
          {
            position: 10,
            teamId: 12010,
            team: "Santos FC",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 35,
            won: 12,
            draw: 16,
            lost: 7,
            points: 52,
            gd: 1,
          },
          {
            position: 11,
            teamId: 12011,
            team: "Athletico Paranaense",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 35,
            won: 11,
            draw: 17,
            lost: 7,
            points: 50,
            gd: -1,
          },
          {
            position: 12,
            teamId: 12012,
            team: "Vasco da Gama",
            crest:
              "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg",
            played: 35,
            won: 10,
            draw: 18,
            lost: 7,
            points: 48,
            gd: -3,
          },
        ],
      },
    ],
  },
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
                  className="border-b border-gray-800/80 last:border-none"
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
