const RECENT_RESULTS = [
  {
    "league": "Argentina Primera Division",
    "home_team": "Huracan",
    "away_team": "Gimnasia L.P.",
    "match_date": "2026-10-16",
    "score": "1-2",
    "over15": {
      "pred": 0.8127,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5115,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3797,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4264,
      "is_result": false
    },
    "draw": {
      "pred": 0.2977,
      "is_result": false
    },
    "away": {
      "pred": 0.2759,
      "is_result": true
    },
    "btts": {
      "pred": 0.511,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4264,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.192,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1995,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1194,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Bragantino",
    "away_team": "Cruzeiro",
    "match_date": "2026-10-13",
    "score": "4-2",
    "over15": {
      "pred": 0.7985,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5903,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3616,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.395,
      "is_result": true
    },
    "draw": {
      "pred": 0.2763,
      "is_result": false
    },
    "away": {
      "pred": 0.3287,
      "is_result": false
    },
    "btts": {
      "pred": 0.5942,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4849,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2135,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2146,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1662,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Championship",
    "home_team": "Birmingham",
    "away_team": "Preston",
    "match_date": "2026-10-13",
    "score": "4-0",
    "over15": {
      "pred": 0.7997,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.536,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3895,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5089,
      "is_result": true
    },
    "draw": {
      "pred": 0.2757,
      "is_result": false
    },
    "away": {
      "pred": 0.2154,
      "is_result": false
    },
    "btts": {
      "pred": 0.5859,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4547,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2493,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2128,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1238,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4508,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7516,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6107,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Championship",
    "home_team": "Blackburn",
    "away_team": "QPR",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.5374,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3785,
      "is_result": false
    },
    "draw": {
      "pred": 0.2697,
      "is_result": false
    },
    "away": {
      "pred": 0.3518,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4326,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Bolton",
    "away_team": "Lincoln",
    "match_date": NaN,
    "score": "0-1",
    "over25": {
      "pred": 0.5352,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5825,
      "is_result": false
    },
    "draw": {
      "pred": 0.2412,
      "is_result": false
    },
    "away": {
      "pred": 0.1763,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3389,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Bristol City",
    "away_team": "Blackburn",
    "match_date": "2026-10-13",
    "score": "0-1",
    "over15": {
      "pred": 0.7653,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4345,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3323,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4383,
      "is_result": false
    },
    "draw": {
      "pred": 0.3068,
      "is_result": false
    },
    "away": {
      "pred": 0.2548,
      "is_result": true
    },
    "btts": {
      "pred": 0.5275,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3573,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1947,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2361,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0967,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3333,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7034,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5938,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Championship",
    "home_team": "Bristol City",
    "away_team": "Portsmouth",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.5224,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4226,
      "is_result": true
    },
    "draw": {
      "pred": 0.2837,
      "is_result": false
    },
    "away": {
      "pred": 0.2937,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3026,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Burnley",
    "away_team": "Charlton",
    "match_date": "2026-10-13",
    "score": "2-2",
    "over15": {
      "pred": 0.8026,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5004,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3625,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5275,
      "is_result": false
    },
    "draw": {
      "pred": 0.2877,
      "is_result": true
    },
    "away": {
      "pred": 0.1848,
      "is_result": false
    },
    "btts": {
      "pred": 0.5282,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3746,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2002,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2697,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0583,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3273,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7274,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6199,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Championship",
    "home_team": "Cardiff",
    "away_team": "Sheffield United",
    "match_date": NaN,
    "score": "2-2",
    "over25": {
      "pred": 0.6193,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4264,
      "is_result": false
    },
    "draw": {
      "pred": 0.2441,
      "is_result": true
    },
    "away": {
      "pred": 0.3294,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4004,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Cardiff",
    "away_team": "Watford",
    "match_date": "2026-10-13",
    "score": "5-1",
    "over15": {
      "pred": 0.8068,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5279,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4196,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4407,
      "is_result": true
    },
    "draw": {
      "pred": 0.2869,
      "is_result": false
    },
    "away": {
      "pred": 0.2724,
      "is_result": false
    },
    "btts": {
      "pred": 0.5561,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4499,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2081,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2072,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1409,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3532,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7368,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6143,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Championship",
    "home_team": "Charlton",
    "away_team": "Preston",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.5205,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3757,
      "is_result": true
    },
    "draw": {
      "pred": 0.2888,
      "is_result": false
    },
    "away": {
      "pred": 0.3355,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3341,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Derby",
    "away_team": "Swansea",
    "match_date": NaN,
    "score": "0-3",
    "over25": {
      "pred": 0.5392,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4022,
      "is_result": false
    },
    "draw": {
      "pred": 0.267,
      "is_result": false
    },
    "away": {
      "pred": 0.3308,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3944,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Lincoln",
    "away_team": "West Ham",
    "match_date": "2026-10-14",
    "score": "0-6",
    "over15": {
      "pred": 0.8071,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6437,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3753,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.293,
      "is_result": false
    },
    "draw": {
      "pred": 0.2001,
      "is_result": false
    },
    "away": {
      "pred": 0.5069,
      "is_result": true
    },
    "btts": {
      "pred": 0.5938,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4804,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1624,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1855,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2458,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4573,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7568,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6182,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Championship",
    "home_team": "Middlesbrough",
    "away_team": "West Brom",
    "match_date": NaN,
    "score": "3-1",
    "over25": {
      "pred": 0.5615,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4977,
      "is_result": true
    },
    "draw": {
      "pred": 0.2476,
      "is_result": false
    },
    "away": {
      "pred": 0.2547,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3456,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Millwall",
    "away_team": "Swansea",
    "match_date": "2026-10-13",
    "score": "0-1",
    "over15": {
      "pred": 0.7983,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6091,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3632,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4938,
      "is_result": false
    },
    "draw": {
      "pred": 0.2664,
      "is_result": false
    },
    "away": {
      "pred": 0.2398,
      "is_result": true
    },
    "btts": {
      "pred": 0.5958,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4838,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2521,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1946,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1491,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4332,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7483,
      "hit": false,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6045,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Championship",
    "home_team": "Norwich",
    "away_team": "Burnley",
    "match_date": NaN,
    "score": "4-1",
    "over25": {
      "pred": 0.6367,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.445,
      "is_result": true
    },
    "draw": {
      "pred": 0.2388,
      "is_result": false
    },
    "away": {
      "pred": 0.3162,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5109,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Norwich",
    "away_team": "Southampton",
    "match_date": "2026-10-14",
    "score": "0-1",
    "over15": {
      "pred": 0.8516,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6762,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3897,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.404,
      "is_result": false
    },
    "draw": {
      "pred": 0.2481,
      "is_result": false
    },
    "away": {
      "pred": 0.3479,
      "is_result": true
    },
    "btts": {
      "pred": 0.6583,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.562,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2647,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.222,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1717,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4637,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7592,
      "hit": false,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6265,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Championship",
    "home_team": "Portsmouth",
    "away_team": "Sheffield United",
    "match_date": "2026-10-14",
    "score": "3-2",
    "over15": {
      "pred": 0.8005,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5354,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3975,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3734,
      "is_result": true
    },
    "draw": {
      "pred": 0.2852,
      "is_result": false
    },
    "away": {
      "pred": 0.3414,
      "is_result": false
    },
    "btts": {
      "pred": 0.6035,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4593,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.214,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2214,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1681,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3398,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7372,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5979,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Championship",
    "home_team": "QPR",
    "away_team": "Derby",
    "match_date": "2026-10-14",
    "score": "4-1",
    "over15": {
      "pred": 0.8043,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5307,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4265,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4569,
      "is_result": true
    },
    "draw": {
      "pred": 0.2857,
      "is_result": false
    },
    "away": {
      "pred": 0.2574,
      "is_result": false
    },
    "btts": {
      "pred": 0.5708,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4531,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2171,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2116,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1421,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3311,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7271,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5903,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Championship",
    "home_team": "Southampton",
    "away_team": "Millwall",
    "match_date": NaN,
    "score": "5-1",
    "over25": {
      "pred": 0.6588,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4889,
      "is_result": true
    },
    "draw": {
      "pred": 0.2268,
      "is_result": false
    },
    "away": {
      "pred": 0.2843,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4008,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Stoke",
    "away_team": "Middlesbrough",
    "match_date": "2026-10-13",
    "score": "2-3",
    "over15": {
      "pred": 0.7987,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5817,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3608,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.325,
      "is_result": false
    },
    "draw": {
      "pred": 0.2604,
      "is_result": false
    },
    "away": {
      "pred": 0.4146,
      "is_result": true
    },
    "btts": {
      "pred": 0.596,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4799,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2033,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2131,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1795,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4498,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7512,
      "hit": false,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6054,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Championship",
    "home_team": "Watford",
    "away_team": "West Ham",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.6811,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.1662,
      "is_result": false
    },
    "draw": {
      "pred": 0.1876,
      "is_result": true
    },
    "away": {
      "pred": 0.6462,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5594,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Wolves",
    "away_team": "Bolton",
    "match_date": "2026-10-13",
    "score": "1-3",
    "over15": {
      "pred": 0.8522,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6942,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3876,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6141,
      "is_result": false
    },
    "draw": {
      "pred": 0.2042,
      "is_result": false
    },
    "away": {
      "pred": 0.1817,
      "is_result": true
    },
    "btts": {
      "pred": 0.591,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.518,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3154,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1712,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1044,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5304,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.9041,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.7177,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Championship",
    "home_team": "Wolves",
    "away_team": "Stoke",
    "match_date": NaN,
    "score": "4-1",
    "over25": {
      "pred": 0.631,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5459,
      "is_result": true
    },
    "draw": {
      "pred": 0.226,
      "is_result": false
    },
    "away": {
      "pred": 0.2281,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4882,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Wrexham",
    "away_team": "Birmingham",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.6198,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4138,
      "is_result": false
    },
    "draw": {
      "pred": 0.2448,
      "is_result": false
    },
    "away": {
      "pred": 0.3414,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.5105,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Wrexham",
    "away_team": "West Brom",
    "match_date": "2026-10-13",
    "score": "1-2",
    "over15": {
      "pred": 0.8069,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5277,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4189,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.392,
      "is_result": false
    },
    "draw": {
      "pred": 0.2885,
      "is_result": false
    },
    "away": {
      "pred": 0.3195,
      "is_result": true
    },
    "btts": {
      "pred": 0.5623,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4503,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1997,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.205,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1576,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.331,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7333,
      "hit": false,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5945,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League South",
    "home_team": "Ebbsfleet United",
    "away_team": "AFC Totton",
    "match_date": "2026-10-13",
    "score": "5-0",
    "over15": {
      "pred": 0.7986,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6091,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3632,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.698,
      "is_result": true
    },
    "draw": {
      "pred": 0.1808,
      "is_result": false
    },
    "away": {
      "pred": 0.1211,
      "is_result": false
    },
    "btts": {
      "pred": 0.5396,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4539,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3046,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1734,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0616,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4051,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7438,
      "hit": false,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5954,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Scottish Championship",
    "home_team": "Queens Park",
    "away_team": "Inverness C",
    "match_date": "2026-10-13",
    "score": "2-1",
    "over15": {
      "pred": 0.8006,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5329,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4099,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.291,
      "is_result": true
    },
    "draw": {
      "pred": 0.2415,
      "is_result": false
    },
    "away": {
      "pred": 0.4674,
      "is_result": false
    },
    "btts": {
      "pred": 0.5676,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4511,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.162,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2134,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1922,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3306,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7238,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6085,
      "hit": false,
      "label": "Goal Each Half"
    }
  }
];
