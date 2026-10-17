const RECENT_RESULTS = [
  {
    "league": "Argentina Primera Division",
    "home_team": "Boca Juniors",
    "away_team": "Talleres Cordoba",
    "match_date": "2026-10-17",
    "score": "2-1",
    "over15": {
      "pred": 0.7977,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5465,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3894,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5827,
      "is_result": true
    },
    "draw": {
      "pred": 0.2487,
      "is_result": false
    },
    "away": {
      "pred": 0.1686,
      "is_result": false
    },
    "btts": {
      "pred": 0.5488,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4553,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2452,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2294,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0743,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Argentina Primera Division",
    "home_team": "Defensa y Justicia",
    "away_team": "Instituto",
    "match_date": "2026-10-17",
    "score": "0-1",
    "over15": {
      "pred": 0.8029,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6277,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3748,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4482,
      "is_result": false
    },
    "draw": {
      "pred": 0.2672,
      "is_result": false
    },
    "away": {
      "pred": 0.2846,
      "is_result": true
    },
    "btts": {
      "pred": 0.5856,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4827,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2352,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1973,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1531,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
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
    "league": "Austria Bundesliga",
    "home_team": "SK Rapid",
    "away_team": "Hartberg",
    "match_date": "2026-10-16",
    "score": "3-1",
    "over15": {
      "pred": 0.8028,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6234,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3717,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5304,
      "is_result": true
    },
    "draw": {
      "pred": 0.2595,
      "is_result": false
    },
    "away": {
      "pred": 0.2101,
      "is_result": false
    },
    "btts": {
      "pred": 0.5943,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4756,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2797,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1892,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1254,
      "hit": true,
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
    "league": "Brazil Serie A",
    "home_team": "Mirassol",
    "away_team": "Internacional",
    "match_date": "2026-10-17",
    "score": "2-0",
    "over15": {
      "pred": 0.7978,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5476,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3861,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4759,
      "is_result": true
    },
    "draw": {
      "pred": 0.2812,
      "is_result": false
    },
    "away": {
      "pred": 0.2429,
      "is_result": false
    },
    "btts": {
      "pred": 0.6051,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4643,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2403,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.214,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1509,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "Ein Frankfurt",
    "away_team": "FC Koln",
    "match_date": "2026-10-16",
    "score": "1-0",
    "over15": {
      "pred": 0.8982,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7652,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4771,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4064,
      "is_result": true
    },
    "draw": {
      "pred": 0.2287,
      "is_result": false
    },
    "away": {
      "pred": 0.3649,
      "is_result": false
    },
    "btts": {
      "pred": 0.715,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7007,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2957,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2169,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2023,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4447,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7521,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Bundesliga 2",
    "home_team": "Cottbus",
    "away_team": "Nurnberg",
    "match_date": "2026-10-16",
    "score": "1-1",
    "over15": {
      "pred": 0.9044,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7954,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.5161,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5178,
      "is_result": false
    },
    "draw": {
      "pred": 0.2174,
      "is_result": true
    },
    "away": {
      "pred": 0.2648,
      "is_result": false
    },
    "btts": {
      "pred": 0.7017,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6899,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3521,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1911,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1586,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.477,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7625,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Bundesliga 2",
    "home_team": "Holstein Kiel",
    "away_team": "Hertha",
    "match_date": "2026-10-16",
    "score": "0-0",
    "over15": {
      "pred": 0.8002,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5899,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3637,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3718,
      "is_result": false
    },
    "draw": {
      "pred": 0.2652,
      "is_result": true
    },
    "away": {
      "pred": 0.363,
      "is_result": false
    },
    "btts": {
      "pred": 0.593,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4767,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2149,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.213,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1652,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4195,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7395,
      "hit": false,
      "label": "HT O0.5"
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
      "pred": 0.5401,
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
      "pred": 0.5376,
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
      "pred": 0.5225,
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
    "home_team": "Burnley",
    "away_team": "Wolves",
    "match_date": "2026-10-16",
    "score": "1-2",
    "over15": {
      "pred": 0.8037,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6395,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3768,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4072,
      "is_result": false
    },
    "draw": {
      "pred": 0.257,
      "is_result": false
    },
    "away": {
      "pred": 0.3358,
      "is_result": true
    },
    "btts": {
      "pred": 0.6013,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4982,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2285,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2111,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1617,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4639,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7632,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Cardiff",
    "away_team": "Sheffield United",
    "match_date": NaN,
    "score": "2-2",
    "over25": {
      "pred": 0.6192,
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
      "pred": 0.5423,
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
      "pred": 0.5648,
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
      "pred": 0.6359,
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
      "pred": 0.6583,
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
      "pred": 0.6809,
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
      "pred": 0.6302,
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
      "pred": 0.6197,
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
    "league": "China Super League",
    "home_team": "Henan Songshan Longmen",
    "away_team": "Tianjin Jinmen Tiger",
    "match_date": "2026-10-16",
    "score": "0-1",
    "over15": {
      "pred": 0.8,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5373,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4071,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3907,
      "is_result": false
    },
    "draw": {
      "pred": 0.2848,
      "is_result": false
    },
    "away": {
      "pred": 0.3244,
      "is_result": true
    },
    "btts": {
      "pred": 0.6041,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4582,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2137,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2195,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1709,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Denmark Superliga",
    "home_team": "Horsens",
    "away_team": "Randers FC",
    "match_date": "2026-10-16",
    "score": "0-0",
    "over15": {
      "pred": 0.7976,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5421,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3916,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4744,
      "is_result": false
    },
    "draw": {
      "pred": 0.2846,
      "is_result": true
    },
    "away": {
      "pred": 0.241,
      "is_result": false
    },
    "btts": {
      "pred": 0.6037,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.459,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2331,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2204,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1502,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "Heerenveen",
    "away_team": "Excelsior",
    "match_date": "2026-10-16",
    "score": "4-0",
    "over15": {
      "pred": 0.8029,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6242,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3719,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4117,
      "is_result": true
    },
    "draw": {
      "pred": 0.2773,
      "is_result": false
    },
    "away": {
      "pred": 0.311,
      "is_result": false
    },
    "btts": {
      "pred": 0.5921,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4849,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2217,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2119,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1584,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4875,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.863,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "La Coruna",
    "away_team": "Levante",
    "match_date": "2026-10-16",
    "score": "1-1",
    "over15": {
      "pred": 0.8033,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6402,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3771,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5481,
      "is_result": false
    },
    "draw": {
      "pred": 0.2356,
      "is_result": true
    },
    "away": {
      "pred": 0.2163,
      "is_result": false
    },
    "btts": {
      "pred": 0.5928,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4813,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2794,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1894,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1241,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3782,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7316,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Leganes",
    "away_team": "Cordoba",
    "match_date": "2026-10-16",
    "score": "0-1",
    "over15": {
      "pred": 0.7988,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5689,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3641,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3116,
      "is_result": false
    },
    "draw": {
      "pred": 0.2307,
      "is_result": false
    },
    "away": {
      "pred": 0.4577,
      "is_result": true
    },
    "btts": {
      "pred": 0.5995,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.468,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1965,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2118,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1911,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3317,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7076,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League One",
    "home_team": "AFC Wimbledon",
    "away_team": "Wigan",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.5069,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2674,
      "is_result": true
    },
    "draw": {
      "pred": 0.2951,
      "is_result": false
    },
    "away": {
      "pred": 0.4375,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.2774,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Blackpool",
    "away_team": "Peterboro",
    "match_date": NaN,
    "score": "4-0",
    "over25": {
      "pred": 0.6512,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.571,
      "is_result": true
    },
    "draw": {
      "pred": 0.2113,
      "is_result": false
    },
    "away": {
      "pred": 0.2177,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4507,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Cambridge",
    "away_team": "Huddersfield",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.6409,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3355,
      "is_result": false
    },
    "draw": {
      "pred": 0.234,
      "is_result": false
    },
    "away": {
      "pred": 0.4305,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4447,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Leyton Orient",
    "away_team": "Barnsley",
    "match_date": NaN,
    "score": "1-3",
    "over25": {
      "pred": 0.583,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5034,
      "is_result": false
    },
    "draw": {
      "pred": 0.2387,
      "is_result": false
    },
    "away": {
      "pred": 0.2579,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4394,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Mansfield",
    "away_team": "Luton",
    "match_date": NaN,
    "score": "5-2",
    "over25": {
      "pred": 0.6371,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3729,
      "is_result": true
    },
    "draw": {
      "pred": 0.2367,
      "is_result": false
    },
    "away": {
      "pred": 0.3903,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5139,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Milton Keynes Dons",
    "away_team": "Leicester",
    "match_date": NaN,
    "score": "0-0",
    "over25": {
      "pred": 0.5644,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4245,
      "is_result": false
    },
    "draw": {
      "pred": 0.2516,
      "is_result": true
    },
    "away": {
      "pred": 0.324,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4676,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Notts County",
    "away_team": "Burton",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.5316,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4542,
      "is_result": true
    },
    "draw": {
      "pred": 0.267,
      "is_result": false
    },
    "away": {
      "pred": 0.2788,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.2937,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Plymouth",
    "away_team": "Bradford",
    "match_date": NaN,
    "score": "2-0",
    "over25": {
      "pred": 0.5205,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4217,
      "is_result": true
    },
    "draw": {
      "pred": 0.2808,
      "is_result": false
    },
    "away": {
      "pred": 0.2974,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3463,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Sheffield Wed",
    "away_team": "Bromley",
    "match_date": NaN,
    "score": "7-2",
    "over25": {
      "pred": 0.6704,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.7164,
      "is_result": true
    },
    "draw": {
      "pred": 0.1649,
      "is_result": false
    },
    "away": {
      "pred": 0.1187,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5494,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Stevenage",
    "away_team": "Doncaster",
    "match_date": NaN,
    "score": "2-2",
    "over25": {
      "pred": 0.5158,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4459,
      "is_result": false
    },
    "draw": {
      "pred": 0.2836,
      "is_result": true
    },
    "away": {
      "pred": 0.2706,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.2163,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Stockport",
    "away_team": "Wycombe",
    "match_date": NaN,
    "score": "5-1",
    "over25": {
      "pred": 0.6517,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5423,
      "is_result": true
    },
    "draw": {
      "pred": 0.2169,
      "is_result": false
    },
    "away": {
      "pred": 0.2409,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4616,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Barnet",
    "away_team": "Cheltenham",
    "match_date": NaN,
    "score": "2-2",
    "over25": {
      "pred": 0.687,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.6187,
      "is_result": false
    },
    "draw": {
      "pred": 0.1905,
      "is_result": true
    },
    "away": {
      "pred": 0.1908,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5342,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Colchester",
    "away_team": "Rochdale",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.5182,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5117,
      "is_result": true
    },
    "draw": {
      "pred": 0.27,
      "is_result": false
    },
    "away": {
      "pred": 0.2183,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3227,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Crawley Town",
    "away_team": "Bristol Rvs",
    "match_date": NaN,
    "score": "0-2",
    "over25": {
      "pred": 0.6611,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2804,
      "is_result": false
    },
    "draw": {
      "pred": 0.2209,
      "is_result": false
    },
    "away": {
      "pred": 0.4987,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3864,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Gillingham",
    "away_team": "Northampton",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.3983,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5632,
      "is_result": false
    },
    "draw": {
      "pred": 0.2932,
      "is_result": true
    },
    "away": {
      "pred": 0.1436,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.279,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Grimsby",
    "away_team": "Fleetwood Town",
    "match_date": NaN,
    "score": "2-2",
    "over25": {
      "pred": 0.6016,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5415,
      "is_result": false
    },
    "draw": {
      "pred": 0.2283,
      "is_result": true
    },
    "away": {
      "pred": 0.2302,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.425,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Newport County",
    "away_team": "Tranmere",
    "match_date": NaN,
    "score": "2-2",
    "over25": {
      "pred": 0.5534,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3961,
      "is_result": false
    },
    "draw": {
      "pred": 0.2553,
      "is_result": true
    },
    "away": {
      "pred": 0.3486,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3661,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Oldham",
    "away_team": "Swindon",
    "match_date": NaN,
    "score": "3-0",
    "over25": {
      "pred": 0.5494,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5082,
      "is_result": true
    },
    "draw": {
      "pred": 0.2446,
      "is_result": false
    },
    "away": {
      "pred": 0.2472,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3691,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Port Vale",
    "away_team": "Crewe",
    "match_date": NaN,
    "score": "0-0",
    "over25": {
      "pred": 0.5207,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3542,
      "is_result": false
    },
    "draw": {
      "pred": 0.2832,
      "is_result": true
    },
    "away": {
      "pred": 0.3626,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3271,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Rotherham",
    "away_team": "Chesterfield",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.6533,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3207,
      "is_result": true
    },
    "draw": {
      "pred": 0.2284,
      "is_result": false
    },
    "away": {
      "pred": 0.4509,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.534,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Shrewsbury",
    "away_team": "Salford",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.5361,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.289,
      "is_result": true
    },
    "draw": {
      "pred": 0.2637,
      "is_result": false
    },
    "away": {
      "pred": 0.4472,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3502,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Walsall",
    "away_team": "Accrington",
    "match_date": NaN,
    "score": "3-2",
    "over25": {
      "pred": 0.5442,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.482,
      "is_result": true
    },
    "draw": {
      "pred": 0.2527,
      "is_result": false
    },
    "away": {
      "pred": 0.2653,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3665,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "York",
    "away_team": "Exeter",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.4235,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5019,
      "is_result": true
    },
    "draw": {
      "pred": 0.3052,
      "is_result": false
    },
    "away": {
      "pred": 0.1928,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.1623,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Corum",
    "away_team": "Rizespor",
    "match_date": "2026-10-16",
    "score": "2-1",
    "over15": {
      "pred": 0.947,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.9319,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.6475,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6444,
      "is_result": true
    },
    "draw": {
      "pred": 0.1799,
      "is_result": false
    },
    "away": {
      "pred": 0.1757,
      "is_result": false
    },
    "btts": {
      "pred": 0.7128,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7128,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.412,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1634,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1374,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4729,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7671,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Le Mans",
    "away_team": "Toulouse",
    "match_date": "2026-10-16",
    "score": "0-3",
    "over15": {
      "pred": 0.8029,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5322,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4231,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.376,
      "is_result": false
    },
    "draw": {
      "pred": 0.2856,
      "is_result": false
    },
    "away": {
      "pred": 0.3383,
      "is_result": true
    },
    "btts": {
      "pred": 0.5841,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4555,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.205,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2116,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1675,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4568,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7576,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Annecy",
    "away_team": "Nancy",
    "match_date": "2026-10-16",
    "score": "1-2",
    "over15": {
      "pred": 0.8011,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.603,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3668,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5723,
      "is_result": false
    },
    "draw": {
      "pred": 0.2343,
      "is_result": false
    },
    "away": {
      "pred": 0.1934,
      "is_result": true
    },
    "btts": {
      "pred": 0.6022,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4666,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2802,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2171,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1048,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3483,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7238,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Grenoble",
    "away_team": "Boulogne",
    "match_date": "2026-10-16",
    "score": "0-2",
    "over15": {
      "pred": 0.7362,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3746,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3155,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3907,
      "is_result": false
    },
    "draw": {
      "pred": 0.3161,
      "is_result": false
    },
    "away": {
      "pred": 0.2933,
      "is_result": true
    },
    "btts": {
      "pred": 0.5335,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3169,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1796,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2571,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0968,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3419,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6571,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Laval",
    "away_team": "Clermont",
    "match_date": "2026-10-16",
    "score": "3-3",
    "over15": {
      "pred": 0.8028,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5055,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.364,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3756,
      "is_result": false
    },
    "draw": {
      "pred": 0.2986,
      "is_result": true
    },
    "away": {
      "pred": 0.3258,
      "is_result": false
    },
    "btts": {
      "pred": 0.516,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4104,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1834,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1991,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1334,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3384,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6756,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Reims",
    "away_team": "Dijon",
    "match_date": "2026-10-16",
    "score": "4-2",
    "over15": {
      "pred": 0.8145,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6478,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3804,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5012,
      "is_result": true
    },
    "draw": {
      "pred": 0.2488,
      "is_result": false
    },
    "away": {
      "pred": 0.2501,
      "is_result": false
    },
    "btts": {
      "pred": 0.5893,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4941,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2632,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1792,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1469,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4825,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.764,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Mexico Liga MX",
    "home_team": "Atlante",
    "away_team": "UNAM Pumas",
    "match_date": "2026-10-17",
    "score": "1-2",
    "over15": {
      "pred": 0.7982,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5489,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3826,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3526,
      "is_result": false
    },
    "draw": {
      "pred": 0.2818,
      "is_result": false
    },
    "away": {
      "pred": 0.3656,
      "is_result": true
    },
    "btts": {
      "pred": 0.5988,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4683,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2133,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2184,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1672,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Mexico Liga MX",
    "home_team": "Club Tijuana",
    "away_team": "Puebla",
    "match_date": "2026-10-17",
    "score": "0-0",
    "over15": {
      "pred": 0.8092,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6386,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3793,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5495,
      "is_result": false
    },
    "draw": {
      "pred": 0.2418,
      "is_result": true
    },
    "away": {
      "pred": 0.2087,
      "is_result": false
    },
    "btts": {
      "pred": 0.5929,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4788,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2881,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1861,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1186,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Mexico Liga MX",
    "home_team": "Necaxa",
    "away_team": "Atlas",
    "match_date": "2026-10-17",
    "score": "0-2",
    "over15": {
      "pred": 0.8178,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6446,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3824,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4589,
      "is_result": false
    },
    "draw": {
      "pred": 0.2602,
      "is_result": false
    },
    "away": {
      "pred": 0.2809,
      "is_result": true
    },
    "btts": {
      "pred": 0.6041,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4979,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2542,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1963,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1536,
      "hit": true,
      "label": "BTTS+Away"
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
    "league": "Poland Ekstraklasa",
    "home_team": "Widzew Lodz",
    "away_team": "Wisla",
    "match_date": "2026-10-16",
    "score": "0-0",
    "over15": {
      "pred": 0.8026,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6128,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3691,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3803,
      "is_result": false
    },
    "draw": {
      "pred": 0.2817,
      "is_result": true
    },
    "away": {
      "pred": 0.3379,
      "is_result": false
    },
    "btts": {
      "pred": 0.5883,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4825,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2119,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2172,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1593,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Poland Ekstraklasa",
    "home_team": "Wieczysta Krakow",
    "away_team": "Rakow",
    "match_date": "2026-10-16",
    "score": "1-2",
    "over15": {
      "pred": 0.8029,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6185,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3705,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.367,
      "is_result": false
    },
    "draw": {
      "pred": 0.2815,
      "is_result": false
    },
    "away": {
      "pred": 0.3515,
      "is_result": true
    },
    "btts": {
      "pred": 0.5937,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4841,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2132,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2199,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1606,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Aston Villa",
    "away_team": "Arsenal",
    "match_date": NaN,
    "score": "0-1",
    "over25": {
      "pred": 0.5717,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2986,
      "is_result": false
    },
    "draw": {
      "pred": 0.2681,
      "is_result": false
    },
    "away": {
      "pred": 0.4332,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3151,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Bournemouth",
    "away_team": "Everton",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.5412,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4197,
      "is_result": false
    },
    "draw": {
      "pred": 0.2821,
      "is_result": true
    },
    "away": {
      "pred": 0.2983,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.2932,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Chelsea",
    "away_team": "Brighton",
    "match_date": NaN,
    "score": "4-3",
    "over25": {
      "pred": 0.6669,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3724,
      "is_result": true
    },
    "draw": {
      "pred": 0.2429,
      "is_result": false
    },
    "away": {
      "pred": 0.3847,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5226,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Coventry",
    "away_team": "Hull",
    "match_date": NaN,
    "score": "0-1",
    "over25": {
      "pred": 0.361,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3099,
      "is_result": false
    },
    "draw": {
      "pred": 0.3611,
      "is_result": false
    },
    "away": {
      "pred": 0.3289,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.253,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Crystal Palace",
    "away_team": "Man City",
    "match_date": NaN,
    "score": "1-4",
    "over25": {
      "pred": 0.62,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2426,
      "is_result": false
    },
    "draw": {
      "pred": 0.2466,
      "is_result": false
    },
    "away": {
      "pred": 0.5108,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4383,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Leeds",
    "away_team": "Brentford",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.5941,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3969,
      "is_result": false
    },
    "draw": {
      "pred": 0.2653,
      "is_result": true
    },
    "away": {
      "pred": 0.3378,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3159,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Liverpool",
    "away_team": "Nott'm Forest",
    "match_date": NaN,
    "score": "2-2",
    "over25": {
      "pred": 0.6102,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5375,
      "is_result": false
    },
    "draw": {
      "pred": 0.2435,
      "is_result": true
    },
    "away": {
      "pred": 0.219,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3606,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Man United",
    "away_team": "Ipswich",
    "match_date": NaN,
    "score": "5-2",
    "over25": {
      "pred": 0.6882,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.6396,
      "is_result": true
    },
    "draw": {
      "pred": 0.1962,
      "is_result": false
    },
    "away": {
      "pred": 0.1642,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4781,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Sunderland",
    "away_team": "Fulham",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.5344,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3664,
      "is_result": true
    },
    "draw": {
      "pred": 0.2914,
      "is_result": false
    },
    "away": {
      "pred": 0.3422,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.2514,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Tottenham",
    "away_team": "Newcastle",
    "match_date": NaN,
    "score": "0-2",
    "over25": {
      "pred": 0.5705,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3573,
      "is_result": false
    },
    "draw": {
      "pred": 0.2718,
      "is_result": false
    },
    "away": {
      "pred": 0.3709,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4911,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Romania Superliga",
    "home_team": "Dinamo Bucuresti",
    "away_team": "FC Botosani",
    "match_date": "2026-10-16",
    "score": "2-0",
    "over15": {
      "pred": 0.8503,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6778,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3918,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6549,
      "is_result": true
    },
    "draw": {
      "pred": 0.1843,
      "is_result": false
    },
    "away": {
      "pred": 0.1608,
      "is_result": false
    },
    "btts": {
      "pred": 0.5925,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4875,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3346,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1641,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0938,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Romania Superliga",
    "home_team": "Otelul",
    "away_team": "Csikszereda M. Ciuc",
    "match_date": "2026-10-16",
    "score": "1-1",
    "over15": {
      "pred": 0.805,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5291,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4285,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5546,
      "is_result": false
    },
    "draw": {
      "pred": 0.2597,
      "is_result": true
    },
    "away": {
      "pred": 0.1857,
      "is_result": false
    },
    "btts": {
      "pred": 0.5117,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4475,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.204,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2356,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0721,
      "hit": true,
      "label": "BTTS+Away"
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
  },
  {
    "league": "Serie A",
    "home_team": "Frosinone",
    "away_team": "Sassuolo",
    "match_date": "2026-10-16",
    "score": "4-2",
    "over15": {
      "pred": 0.7996,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5793,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3613,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4199,
      "is_result": true
    },
    "draw": {
      "pred": 0.2662,
      "is_result": false
    },
    "away": {
      "pred": 0.3139,
      "is_result": false
    },
    "btts": {
      "pred": 0.5951,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4732,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2188,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2105,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1658,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4479,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7532,
      "hit": true,
      "label": "HT O0.5"
    }
  }
];
