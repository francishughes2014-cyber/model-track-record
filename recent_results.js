const RECENT_RESULTS = [
  {
    "league": "Argentina Primera Division",
    "home_team": "Defensa y Justicia",
    "away_team": "Gimnasia Mendoza",
    "match_date": "2026-09-12",
    "score": "2-0",
    "over15": {
      "pred": 0.7672,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5127,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3465,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3917,
      "is_result": true
    },
    "draw": {
      "pred": 0.3011,
      "is_result": false
    },
    "away": {
      "pred": 0.3072,
      "is_result": false
    },
    "btts": {
      "pred": 0.5602,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.424,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1895,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.218,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1527,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Argentina Primera Division",
    "home_team": "Estudiantes L.P.",
    "away_team": "Platense",
    "match_date": "2026-09-12",
    "score": "2-1",
    "over15": {
      "pred": 0.7351,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4057,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3497,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4761,
      "is_result": true
    },
    "draw": {
      "pred": 0.296,
      "is_result": false
    },
    "away": {
      "pred": 0.2279,
      "is_result": false
    },
    "btts": {
      "pred": 0.5138,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.347,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2099,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2165,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0874,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Argentina Primera Division",
    "home_team": "Independiente",
    "away_team": "San Lorenzo",
    "match_date": "2026-09-14",
    "score": "1-1",
    "over15": {
      "pred": 0.5189,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3368,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0935,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4446,
      "is_result": false
    },
    "draw": {
      "pred": 0.322,
      "is_result": true
    },
    "away": {
      "pred": 0.2334,
      "is_result": false
    },
    "btts": {
      "pred": 0.3157,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2802,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.109,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1552,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0515,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Coritiba",
    "away_team": "Athletico-PR",
    "match_date": "2026-09-12",
    "score": "3-3",
    "over15": {
      "pred": 0.7544,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4789,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3476,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3735,
      "is_result": false
    },
    "draw": {
      "pred": 0.2935,
      "is_result": true
    },
    "away": {
      "pred": 0.333,
      "is_result": false
    },
    "btts": {
      "pred": 0.5477,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4092,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1758,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2152,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1566,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Gremio",
    "away_team": "Vasco",
    "match_date": "2026-09-12",
    "score": "1-2",
    "over15": {
      "pred": 0.7708,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5383,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3457,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4659,
      "is_result": false
    },
    "draw": {
      "pred": 0.2804,
      "is_result": false
    },
    "away": {
      "pred": 0.2537,
      "is_result": true
    },
    "btts": {
      "pred": 0.5555,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.427,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2342,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2009,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1204,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "Augsburg",
    "away_team": "Leverkusen",
    "match_date": "2026-09-12",
    "score": "2-2",
    "over15": {
      "pred": 0.7734,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6141,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3479,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2939,
      "is_result": false
    },
    "draw": {
      "pred": 0.2247,
      "is_result": true
    },
    "away": {
      "pred": 0.4814,
      "is_result": false
    },
    "btts": {
      "pred": 0.5689,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.507,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.134,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1766,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2583,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4507,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "Dortmund",
    "away_team": "Paderborn",
    "match_date": "2026-09-12",
    "score": "3-0",
    "over15": {
      "pred": 0.6987,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3483,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1088,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6102,
      "is_result": true
    },
    "draw": {
      "pred": 0.2938,
      "is_result": false
    },
    "away": {
      "pred": 0.0959,
      "is_result": false
    },
    "btts": {
      "pred": 0.2523,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2523,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1183,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1115,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0226,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4046,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "FC Koln",
    "away_team": "Werder Bremen",
    "match_date": "2026-09-12",
    "score": "1-1",
    "over15": {
      "pred": 0.7583,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4864,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3474,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4841,
      "is_result": false
    },
    "draw": {
      "pred": 0.2859,
      "is_result": true
    },
    "away": {
      "pred": 0.23,
      "is_result": false
    },
    "btts": {
      "pred": 0.5368,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3967,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2322,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2056,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.099,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3463,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "Freiburg",
    "away_team": "M'gladbach",
    "match_date": "2026-09-12",
    "score": "5-0",
    "over15": {
      "pred": 0.7723,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6242,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3529,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3325,
      "is_result": true
    },
    "draw": {
      "pred": 0.2387,
      "is_result": false
    },
    "away": {
      "pred": 0.4288,
      "is_result": false
    },
    "btts": {
      "pred": 0.5881,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.548,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1848,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1772,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2261,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3758,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "Hoffenheim",
    "away_team": "Stuttgart",
    "match_date": "2026-09-12",
    "score": "2-1",
    "over15": {
      "pred": 0.7755,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5967,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3434,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3203,
      "is_result": true
    },
    "draw": {
      "pred": 0.2684,
      "is_result": false
    },
    "away": {
      "pred": 0.4113,
      "is_result": false
    },
    "btts": {
      "pred": 0.5665,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4666,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1616,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1989,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.206,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4547,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "Mainz",
    "away_team": "Ein Frankfurt",
    "match_date": "2026-09-12",
    "score": "1-3",
    "over15": {
      "pred": 0.8704,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6775,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.357,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3166,
      "is_result": false
    },
    "draw": {
      "pred": 0.2198,
      "is_result": false
    },
    "away": {
      "pred": 0.4636,
      "is_result": true
    },
    "btts": {
      "pred": 0.637,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5691,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1849,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1821,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.27,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4138,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "Union Berlin",
    "away_team": "Schalke 04",
    "match_date": "2026-09-11",
    "score": "1-3",
    "over15": {
      "pred": 0.4378,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.2928,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0611,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4244,
      "is_result": false
    },
    "draw": {
      "pred": 0.3391,
      "is_result": false
    },
    "away": {
      "pred": 0.2365,
      "is_result": true
    },
    "btts": {
      "pred": 0.2551,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.1338,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3018,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga 2",
    "home_team": "Darmstadt",
    "away_team": "Bielefeld",
    "match_date": "2026-09-11",
    "score": "2-1",
    "over15": {
      "pred": 0.7753,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5688,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3594,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3404,
      "is_result": true
    },
    "draw": {
      "pred": 0.2934,
      "is_result": false
    },
    "away": {
      "pred": 0.3662,
      "is_result": false
    },
    "btts": {
      "pred": 0.5579,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4351,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4033,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga 2",
    "home_team": "Nurnberg",
    "away_team": "Hannover",
    "match_date": "2026-09-11",
    "score": "2-1",
    "over15": {
      "pred": 0.7893,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5949,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3629,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3504,
      "is_result": true
    },
    "draw": {
      "pred": 0.2832,
      "is_result": false
    },
    "away": {
      "pred": 0.3664,
      "is_result": false
    },
    "btts": {
      "pred": 0.5631,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4525,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4108,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Blackburn",
    "away_team": "Millwall",
    "match_date": "2026-09-12",
    "score": "3-1",
    "over15": {
      "pred": 0.7344,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4076,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3497,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2971,
      "is_result": true
    },
    "draw": {
      "pred": 0.2708,
      "is_result": false
    },
    "away": {
      "pred": 0.4321,
      "is_result": false
    },
    "btts": {
      "pred": 0.5235,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3618,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1142,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.222,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1873,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3473,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Blackburn",
    "away_team": "QPR",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.467,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3785,
      "is_result": false
    },
    "draw": {
      "pred": 0.3005,
      "is_result": false
    },
    "away": {
      "pred": 0.3211,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4033,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Blackburn",
    "away_team": "Sheffield United",
    "match_date": "2026-09-08",
    "score": "1-2",
    "over15": {
      "pred": 0.755,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4157,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3587,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3438,
      "is_result": false
    },
    "draw": {
      "pred": 0.3145,
      "is_result": false
    },
    "away": {
      "pred": 0.3418,
      "is_result": true
    },
    "btts": {
      "pred": 0.5211,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3708,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3273,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Bolton",
    "away_team": "Cardiff",
    "match_date": "2026-09-12",
    "score": "1-0",
    "over15": {
      "pred": 0.7409,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.428,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3491,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4036,
      "is_result": true
    },
    "draw": {
      "pred": 0.309,
      "is_result": false
    },
    "away": {
      "pred": 0.2874,
      "is_result": false
    },
    "btts": {
      "pred": 0.533,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3787,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1773,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2229,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1328,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4488,
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
      "pred": 0.3644,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3862,
      "is_result": false
    },
    "draw": {
      "pred": 0.3377,
      "is_result": false
    },
    "away": {
      "pred": 0.2761,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.5201,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Bolton",
    "away_team": "West Ham",
    "match_date": "2026-09-08",
    "score": "2-3",
    "over15": {
      "pred": 0.7926,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5361,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3501,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3313,
      "is_result": false
    },
    "draw": {
      "pred": 0.2984,
      "is_result": false
    },
    "away": {
      "pred": 0.3703,
      "is_result": true
    },
    "btts": {
      "pred": 0.5532,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4143,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.5145,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Bristol City",
    "away_team": "Portsmouth",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.4312,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4388,
      "is_result": true
    },
    "draw": {
      "pred": 0.3041,
      "is_result": false
    },
    "away": {
      "pred": 0.2571,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3107,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Cardiff",
    "away_team": "Sheffield United",
    "match_date": NaN,
    "score": "2-2",
    "over25": {
      "pred": 0.5278,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3562,
      "is_result": false
    },
    "draw": {
      "pred": 0.2859,
      "is_result": true
    },
    "away": {
      "pred": 0.3579,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3931,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Cardiff",
    "away_team": "Stoke",
    "match_date": "2026-09-08",
    "score": "1-1",
    "over15": {
      "pred": 0.7492,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4029,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3597,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3974,
      "is_result": false
    },
    "draw": {
      "pred": 0.3294,
      "is_result": true
    },
    "away": {
      "pred": 0.2731,
      "is_result": false
    },
    "btts": {
      "pred": 0.5151,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.358,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3589,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Charlton",
    "away_team": "Portsmouth",
    "match_date": "2026-09-12",
    "score": "0-0",
    "over15": {
      "pred": 0.7215,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3814,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3508,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3376,
      "is_result": false
    },
    "draw": {
      "pred": 0.2972,
      "is_result": true
    },
    "away": {
      "pred": 0.3653,
      "is_result": false
    },
    "btts": {
      "pred": 0.5163,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3437,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1338,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2304,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1521,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3427,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Charlton",
    "away_team": "Preston",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.4027,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3401,
      "is_result": true
    },
    "draw": {
      "pred": 0.3203,
      "is_result": false
    },
    "away": {
      "pred": 0.3396,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3139,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Charlton",
    "away_team": "QPR",
    "match_date": "2026-09-09",
    "score": "0-0",
    "over15": {
      "pred": 0.7568,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4676,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3602,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3488,
      "is_result": false
    },
    "draw": {
      "pred": 0.3006,
      "is_result": true
    },
    "away": {
      "pred": 0.3506,
      "is_result": false
    },
    "btts": {
      "pred": 0.5298,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3957,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3241,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Derby",
    "away_team": "Birmingham",
    "match_date": "2026-09-12",
    "score": "1-2",
    "over15": {
      "pred": 0.7352,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4101,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3496,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4115,
      "is_result": false
    },
    "draw": {
      "pred": 0.3093,
      "is_result": false
    },
    "away": {
      "pred": 0.2792,
      "is_result": true
    },
    "btts": {
      "pred": 0.5266,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3663,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1788,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2238,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1239,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3972,
      "hit": false,
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
      "pred": 0.4847,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4297,
      "is_result": false
    },
    "draw": {
      "pred": 0.292,
      "is_result": false
    },
    "away": {
      "pred": 0.2783,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3895,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Derby",
    "away_team": "West Brom",
    "match_date": "2026-09-09",
    "score": "0-1",
    "over15": {
      "pred": 0.725,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3962,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.362,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3646,
      "is_result": false
    },
    "draw": {
      "pred": 0.3152,
      "is_result": false
    },
    "away": {
      "pred": 0.3202,
      "is_result": true
    },
    "btts": {
      "pred": 0.5084,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3413,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3265,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Middlesbrough",
    "away_team": "Norwich",
    "match_date": "2026-09-12",
    "score": "4-3",
    "over15": {
      "pred": 0.7732,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6161,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3489,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4636,
      "is_result": true
    },
    "draw": {
      "pred": 0.259,
      "is_result": false
    },
    "away": {
      "pred": 0.2774,
      "is_result": false
    },
    "btts": {
      "pred": 0.5697,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5175,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2469,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1762,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1465,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4156,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Middlesbrough",
    "away_team": "West Brom",
    "match_date": NaN,
    "score": "3-1",
    "over25": {
      "pred": 0.5251,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4632,
      "is_result": true
    },
    "draw": {
      "pred": 0.2784,
      "is_result": false
    },
    "away": {
      "pred": 0.2585,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3531,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Norwich",
    "away_team": "Birmingham",
    "match_date": "2026-09-09",
    "score": "2-1",
    "over15": {
      "pred": 0.7986,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6018,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3559,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5408,
      "is_result": true
    },
    "draw": {
      "pred": 0.2429,
      "is_result": false
    },
    "away": {
      "pred": 0.2163,
      "is_result": false
    },
    "btts": {
      "pred": 0.5511,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.429,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4591,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Norwich",
    "away_team": "Burnley",
    "match_date": NaN,
    "score": "4-1",
    "over25": {
      "pred": 0.4878,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3666,
      "is_result": true
    },
    "draw": {
      "pred": 0.2956,
      "is_result": false
    },
    "away": {
      "pred": 0.3378,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4773,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Preston",
    "away_team": "Lincoln",
    "match_date": "2026-09-12",
    "score": "0-1",
    "over15": {
      "pred": 0.7177,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3754,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.351,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4018,
      "is_result": false
    },
    "draw": {
      "pred": 0.3154,
      "is_result": false
    },
    "away": {
      "pred": 0.2828,
      "is_result": true
    },
    "btts": {
      "pred": 0.5112,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3348,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1626,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2301,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1186,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4127,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Southampton",
    "away_team": "Bristol City",
    "match_date": "2026-09-12",
    "score": "4-1",
    "over15": {
      "pred": 0.7741,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6084,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3451,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5207,
      "is_result": true
    },
    "draw": {
      "pred": 0.2416,
      "is_result": false
    },
    "away": {
      "pred": 0.2377,
      "is_result": false
    },
    "btts": {
      "pred": 0.567,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4819,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2726,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1781,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1163,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4236,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Southampton",
    "away_team": "Millwall",
    "match_date": NaN,
    "score": "5-1",
    "over25": {
      "pred": 0.6065,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4681,
      "is_result": true
    },
    "draw": {
      "pred": 0.2511,
      "is_result": false
    },
    "away": {
      "pred": 0.2807,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4247,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Southampton",
    "away_team": "Swansea",
    "match_date": "2026-09-08",
    "score": "3-1",
    "over15": {
      "pred": 0.8854,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7117,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3323,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5987,
      "is_result": true
    },
    "draw": {
      "pred": 0.1895,
      "is_result": false
    },
    "away": {
      "pred": 0.2117,
      "is_result": false
    },
    "btts": {
      "pred": 0.5968,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5885,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.472,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Swansea",
    "away_team": "Burnley",
    "match_date": "2026-09-12",
    "score": "3-1",
    "over15": {
      "pred": 0.7345,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4077,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3497,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3092,
      "is_result": true
    },
    "draw": {
      "pred": 0.2778,
      "is_result": false
    },
    "away": {
      "pred": 0.413,
      "is_result": false
    },
    "btts": {
      "pred": 0.5257,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3646,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1229,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2239,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1789,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4142,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Watford",
    "away_team": "Preston",
    "match_date": "2026-09-08",
    "score": "2-1",
    "over15": {
      "pred": 0.7714,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4649,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3553,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4279,
      "is_result": true
    },
    "draw": {
      "pred": 0.3163,
      "is_result": false
    },
    "away": {
      "pred": 0.2557,
      "is_result": false
    },
    "btts": {
      "pred": 0.5292,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3952,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3763,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Watford",
    "away_team": "Stoke",
    "match_date": "2026-09-12",
    "score": "1-2",
    "over15": {
      "pred": 0.7003,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3494,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1099,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.398,
      "is_result": false
    },
    "draw": {
      "pred": 0.3208,
      "is_result": false
    },
    "away": {
      "pred": 0.2812,
      "is_result": true
    },
    "btts": {
      "pred": 0.4959,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3057,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1509,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2352,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1099,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3505,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Watford",
    "away_team": "West Ham",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.5926,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2828,
      "is_result": false
    },
    "draw": {
      "pred": 0.2615,
      "is_result": true
    },
    "away": {
      "pred": 0.4558,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5605,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "West Brom",
    "away_team": "QPR",
    "match_date": "2026-09-12",
    "score": "1-1",
    "over15": {
      "pred": 0.7543,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4728,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3478,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4197,
      "is_result": false
    },
    "draw": {
      "pred": 0.3033,
      "is_result": true
    },
    "away": {
      "pred": 0.277,
      "is_result": false
    },
    "btts": {
      "pred": 0.5445,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4032,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1965,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2166,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1313,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3805,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "West Ham",
    "away_team": "Wrexham",
    "match_date": "2026-09-11",
    "score": "6-0",
    "over15": {
      "pred": 0.9151,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8142,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3822,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5366,
      "is_result": true
    },
    "draw": {
      "pred": 0.2061,
      "is_result": false
    },
    "away": {
      "pred": 0.2573,
      "is_result": false
    },
    "btts": {
      "pred": 0.7608,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.712,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.6939,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Wolves",
    "away_team": "Stoke",
    "match_date": NaN,
    "score": "4-1",
    "over25": {
      "pred": 0.6145,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5695,
      "is_result": true
    },
    "draw": {
      "pred": 0.228,
      "is_result": false
    },
    "away": {
      "pred": 0.2026,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.6683,
      "hit": true,
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
      "pred": 0.5819,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4603,
      "is_result": false
    },
    "draw": {
      "pred": 0.2668,
      "is_result": false
    },
    "away": {
      "pred": 0.273,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.5123,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Wrexham",
    "away_team": "Burnley",
    "match_date": "2026-09-08",
    "score": "1-1",
    "over15": {
      "pred": 0.788,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.518,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3515,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3105,
      "is_result": false
    },
    "draw": {
      "pred": 0.2716,
      "is_result": true
    },
    "away": {
      "pred": 0.4179,
      "is_result": false
    },
    "btts": {
      "pred": 0.5455,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4103,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4168,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "AZ Alkmaar",
    "away_team": "Willem II",
    "match_date": "2026-09-11",
    "score": "1-1",
    "over15": {
      "pred": 0.7997,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5991,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3621,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.644,
      "is_result": false
    },
    "draw": {
      "pred": 0.2217,
      "is_result": true
    },
    "away": {
      "pred": 0.1344,
      "is_result": false
    },
    "btts": {
      "pred": 0.5548,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4367,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3886,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "For Sittard",
    "away_team": "Ajax",
    "match_date": "2026-09-12",
    "score": "1-5",
    "over15": {
      "pred": 0.769,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.52,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3463,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3123,
      "is_result": false
    },
    "draw": {
      "pred": 0.273,
      "is_result": false
    },
    "away": {
      "pred": 0.4148,
      "is_result": true
    },
    "btts": {
      "pred": 0.5608,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4261,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1447,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2157,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2004,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3877,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "Go Ahead Eagles",
    "away_team": "Groningen",
    "match_date": "2026-09-12",
    "score": "1-1",
    "over15": {
      "pred": 0.7758,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5858,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.344,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3668,
      "is_result": false
    },
    "draw": {
      "pred": 0.2885,
      "is_result": true
    },
    "away": {
      "pred": 0.3447,
      "is_result": false
    },
    "btts": {
      "pred": 0.5662,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4591,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1873,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2048,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.174,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4363,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "Nijmegen",
    "away_team": "Excelsior",
    "match_date": "2026-09-08",
    "score": "2-2",
    "over15": {
      "pred": 0.8898,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7157,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3307,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5809,
      "is_result": false
    },
    "draw": {
      "pred": 0.2035,
      "is_result": true
    },
    "away": {
      "pred": 0.2157,
      "is_result": false
    },
    "btts": {
      "pred": 0.6567,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6041,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4582,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "Twente",
    "away_team": "Telstar",
    "match_date": "2026-09-09",
    "score": "1-0",
    "over15": {
      "pred": 0.8081,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6027,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3563,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4188,
      "is_result": true
    },
    "draw": {
      "pred": 0.2911,
      "is_result": false
    },
    "away": {
      "pred": 0.2901,
      "is_result": false
    },
    "btts": {
      "pred": 0.5701,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4955,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3874,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "Utrecht",
    "away_team": "Go Ahead Eagles",
    "match_date": "2026-09-08",
    "score": "3-3",
    "over15": {
      "pred": 0.7935,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5566,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3485,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3734,
      "is_result": false
    },
    "draw": {
      "pred": 0.3118,
      "is_result": true
    },
    "away": {
      "pred": 0.3148,
      "is_result": false
    },
    "btts": {
      "pred": 0.5595,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4174,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3722,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "AFC Whyteleafe",
    "away_team": "Stanway Rovers",
    "match_date": "2026-09-12",
    "score": "4-0",
    "over15": {
      "pred": 0.7677,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5437,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3455,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5161,
      "is_result": true
    },
    "draw": {
      "pred": 0.2385,
      "is_result": false
    },
    "away": {
      "pred": 0.2454,
      "is_result": false
    },
    "btts": {
      "pred": 0.5472,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4243,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2512,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.186,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.11,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4554,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "Aveley",
    "away_team": "Leatherhead",
    "match_date": "2026-09-12",
    "score": "1-2",
    "over15": {
      "pred": 0.9048,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8088,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.381,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5785,
      "is_result": false
    },
    "draw": {
      "pred": 0.1682,
      "is_result": false
    },
    "away": {
      "pred": 0.2533,
      "is_result": true
    },
    "btts": {
      "pred": 0.708,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6148,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3833,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1635,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1612,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3646,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "Burgess Hill Town",
    "away_team": "Ramsgate",
    "match_date": "2026-09-12",
    "score": "2-2",
    "over15": {
      "pred": 0.8777,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7308,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3663,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.359,
      "is_result": false
    },
    "draw": {
      "pred": 0.1962,
      "is_result": true
    },
    "away": {
      "pred": 0.4448,
      "is_result": false
    },
    "btts": {
      "pred": 0.6846,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5969,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2356,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1807,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2684,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4886,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "Carshalton Athletic",
    "away_team": "Dartford",
    "match_date": "2026-09-12",
    "score": "0-3",
    "over15": {
      "pred": 0.7748,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.607,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3444,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3149,
      "is_result": false
    },
    "draw": {
      "pred": 0.2117,
      "is_result": false
    },
    "away": {
      "pred": 0.4735,
      "is_result": true
    },
    "btts": {
      "pred": 0.5673,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4916,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1527,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1765,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2382,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4069,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "Chatham Town",
    "away_team": "Lewes",
    "match_date": "2026-09-12",
    "score": "3-2",
    "over15": {
      "pred": 0.7748,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6064,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3441,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7458,
      "is_result": true
    },
    "draw": {
      "pred": 0.1575,
      "is_result": false
    },
    "away": {
      "pred": 0.0967,
      "is_result": false
    },
    "btts": {
      "pred": 0.5269,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4169,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3403,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1348,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0517,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3949,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "Dulwich Hamlet",
    "away_team": "Brentwood Town",
    "match_date": "2026-09-12",
    "score": "2-1",
    "over15": {
      "pred": 0.7744,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6104,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.346,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4108,
      "is_result": true
    },
    "draw": {
      "pred": 0.233,
      "is_result": false
    },
    "away": {
      "pred": 0.3562,
      "is_result": false
    },
    "btts": {
      "pred": 0.5684,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5062,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2155,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1756,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1774,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4241,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "Eastbourne Borough",
    "away_team": "Cheshunt",
    "match_date": "2026-09-12",
    "score": "3-0",
    "over15": {
      "pred": 0.7634,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5286,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.346,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4187,
      "is_result": true
    },
    "draw": {
      "pred": 0.2677,
      "is_result": false
    },
    "away": {
      "pred": 0.3136,
      "is_result": false
    },
    "btts": {
      "pred": 0.5551,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4303,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2055,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1981,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1514,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3395,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "Enfield Town",
    "away_team": "Cray Wanderers",
    "match_date": "2026-09-12",
    "score": "3-2",
    "over15": {
      "pred": 0.956,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.956,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.7279,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7928,
      "is_result": true
    },
    "draw": {
      "pred": 0.1086,
      "is_result": false
    },
    "away": {
      "pred": 0.0985,
      "is_result": false
    },
    "btts": {
      "pred": 0.7126,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6834,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.5327,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1034,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0764,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5413,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "Maldon & Tiptree",
    "away_team": "Whitehawk",
    "match_date": "2026-09-12",
    "score": "3-2",
    "over15": {
      "pred": 0.7721,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6671,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3562,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4949,
      "is_result": true
    },
    "draw": {
      "pred": 0.2123,
      "is_result": false
    },
    "away": {
      "pred": 0.2927,
      "is_result": false
    },
    "btts": {
      "pred": 0.5841,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5611,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2657,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1591,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1593,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.695,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "St Albans City",
    "away_team": "Three Bridges",
    "match_date": "2026-09-12",
    "score": "4-0",
    "over15": {
      "pred": 0.9577,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.9577,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.7371,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.617,
      "is_result": true
    },
    "draw": {
      "pred": 0.1492,
      "is_result": false
    },
    "away": {
      "pred": 0.2338,
      "is_result": false
    },
    "btts": {
      "pred": 0.9201,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7694,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.5563,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1696,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1942,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.7264,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "Welling United",
    "away_team": "Wingate & Finchley",
    "match_date": "2026-09-12",
    "score": "4-1",
    "over15": {
      "pred": 0.7757,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5999,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3427,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.423,
      "is_result": true
    },
    "draw": {
      "pred": 0.2461,
      "is_result": false
    },
    "away": {
      "pred": 0.3309,
      "is_result": false
    },
    "btts": {
      "pred": 0.5662,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4744,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2174,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1846,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1643,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3439,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "Beveren",
    "away_team": "St Truiden",
    "match_date": "2026-09-12",
    "score": "2-0",
    "over15": {
      "pred": 0.7746,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6045,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3432,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2786,
      "is_result": true
    },
    "draw": {
      "pred": 0.2164,
      "is_result": false
    },
    "away": {
      "pred": 0.505,
      "is_result": false
    },
    "btts": {
      "pred": 0.5658,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4685,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1095,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1802,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2761,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4086,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "Mechelen",
    "away_team": "Anderlecht",
    "match_date": "2026-09-11",
    "score": "0-1",
    "over15": {
      "pred": 0.8115,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6061,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3601,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4618,
      "is_result": false
    },
    "draw": {
      "pred": 0.2658,
      "is_result": false
    },
    "away": {
      "pred": 0.2725,
      "is_result": true
    },
    "btts": {
      "pred": 0.57,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5236,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3956,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "Oud-Heverlee Leuven",
    "away_team": "Cercle Brugge",
    "match_date": "2026-09-12",
    "score": "1-1",
    "over15": {
      "pred": 0.7532,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4697,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3479,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3807,
      "is_result": false
    },
    "draw": {
      "pred": 0.2992,
      "is_result": true
    },
    "away": {
      "pred": 0.3201,
      "is_result": false
    },
    "btts": {
      "pred": 0.5463,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4047,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1765,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.219,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1507,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3544,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "St. Gilloise",
    "away_team": "Lommel SK",
    "match_date": "2026-09-12",
    "score": "5-0",
    "over15": {
      "pred": 0.4709,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3088,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0742,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4433,
      "is_result": true
    },
    "draw": {
      "pred": 0.3208,
      "is_result": false
    },
    "away": {
      "pred": 0.2359,
      "is_result": false
    },
    "btts": {
      "pred": 0.2747,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2505,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0937,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1397,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0413,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3384,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "Westerlo",
    "away_team": "Standard",
    "match_date": "2026-09-12",
    "score": "4-2",
    "over15": {
      "pred": 0.7579,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4861,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3474,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.378,
      "is_result": true
    },
    "draw": {
      "pred": 0.2969,
      "is_result": false
    },
    "away": {
      "pred": 0.3251,
      "is_result": false
    },
    "btts": {
      "pred": 0.5511,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4123,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1786,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2174,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1551,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3843,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Ath Bilbao",
    "away_team": "Elche",
    "match_date": "2026-09-12",
    "score": "1-1",
    "over15": {
      "pred": 0.7764,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5791,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3443,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4935,
      "is_result": false
    },
    "draw": {
      "pred": 0.2562,
      "is_result": true
    },
    "away": {
      "pred": 0.2503,
      "is_result": false
    },
    "btts": {
      "pred": 0.5635,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4436,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2514,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1919,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1201,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3577,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Osasuna",
    "away_team": "Espanol",
    "match_date": "2026-09-12",
    "score": "0-2",
    "over15": {
      "pred": 0.7571,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4935,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3471,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4225,
      "is_result": false
    },
    "draw": {
      "pred": 0.2967,
      "is_result": false
    },
    "away": {
      "pred": 0.2808,
      "is_result": true
    },
    "btts": {
      "pred": 0.5473,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4128,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2026,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2079,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1368,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3543,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Real Madrid",
    "away_team": "Vallecano",
    "match_date": "2026-09-12",
    "score": "4-1",
    "over15": {
      "pred": 0.7733,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6171,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3494,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7021,
      "is_result": true
    },
    "draw": {
      "pred": 0.17,
      "is_result": false
    },
    "away": {
      "pred": 0.128,
      "is_result": false
    },
    "btts": {
      "pred": 0.5643,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4684,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3427,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1479,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0737,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4048,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Santander",
    "away_team": "Alaves",
    "match_date": "2026-09-12",
    "score": "2-1",
    "over15": {
      "pred": 0.7739,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.612,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3468,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5238,
      "is_result": true
    },
    "draw": {
      "pred": 0.2271,
      "is_result": false
    },
    "away": {
      "pred": 0.2491,
      "is_result": false
    },
    "btts": {
      "pred": 0.5676,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.495,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2728,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1715,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1233,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5087,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Sevilla",
    "away_team": "Valencia",
    "match_date": "2026-09-11",
    "score": "1-0",
    "over15": {
      "pred": 0.7727,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5671,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3593,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.528,
      "is_result": true
    },
    "draw": {
      "pred": 0.2496,
      "is_result": false
    },
    "away": {
      "pred": 0.2224,
      "is_result": false
    },
    "btts": {
      "pred": 0.5462,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4218,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3221,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Burgos",
    "away_team": "Ceuta",
    "match_date": "2026-09-11",
    "score": "3-1",
    "over15": {
      "pred": 0.7248,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3838,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3478,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4078,
      "is_result": true
    },
    "draw": {
      "pred": 0.3189,
      "is_result": false
    },
    "away": {
      "pred": 0.2733,
      "is_result": false
    },
    "btts": {
      "pred": 0.5037,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3353,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3816,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "AFC Wimbledon",
    "away_team": "Wigan",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.4034,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2612,
      "is_result": true
    },
    "draw": {
      "pred": 0.2951,
      "is_result": false
    },
    "away": {
      "pred": 0.4437,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.2913,
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
      "pred": 0.6092,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5665,
      "is_result": true
    },
    "draw": {
      "pred": 0.2192,
      "is_result": false
    },
    "away": {
      "pred": 0.2143,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4447,
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
      "pred": 0.5963,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.275,
      "is_result": false
    },
    "draw": {
      "pred": 0.2409,
      "is_result": false
    },
    "away": {
      "pred": 0.4841,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4566,
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
      "pred": 0.5635,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4873,
      "is_result": false
    },
    "draw": {
      "pred": 0.2515,
      "is_result": false
    },
    "away": {
      "pred": 0.2613,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4537,
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
      "pred": 0.5894,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3819,
      "is_result": true
    },
    "draw": {
      "pred": 0.2529,
      "is_result": false
    },
    "away": {
      "pred": 0.3653,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4992,
      "hit": false,
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
      "pred": 0.4965,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4918,
      "is_result": false
    },
    "draw": {
      "pred": 0.2644,
      "is_result": true
    },
    "away": {
      "pred": 0.2438,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5524,
      "hit": false,
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
      "pred": 0.4984,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5419,
      "is_result": true
    },
    "draw": {
      "pred": 0.254,
      "is_result": false
    },
    "away": {
      "pred": 0.2042,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4043,
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
      "pred": 0.4712,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4293,
      "is_result": true
    },
    "draw": {
      "pred": 0.2785,
      "is_result": false
    },
    "away": {
      "pred": 0.2922,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3736,
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
      "pred": 0.5963,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.6686,
      "is_result": true
    },
    "draw": {
      "pred": 0.1969,
      "is_result": false
    },
    "away": {
      "pred": 0.1345,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5232,
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
      "pred": 0.4107,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4515,
      "is_result": false
    },
    "draw": {
      "pred": 0.2912,
      "is_result": true
    },
    "away": {
      "pred": 0.2573,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.2204,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Stevenage",
    "away_team": "Luton",
    "match_date": "2026-09-10",
    "score": "2-1",
    "over15": {
      "pred": 0.7453,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4331,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3487,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3181,
      "is_result": true
    },
    "draw": {
      "pred": 0.2719,
      "is_result": false
    },
    "away": {
      "pred": 0.41,
      "is_result": false
    },
    "btts": {
      "pred": 0.5256,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3764,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1054,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1756,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1578,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3461,
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
      "pred": 0.5824,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5135,
      "is_result": true
    },
    "draw": {
      "pred": 0.2436,
      "is_result": false
    },
    "away": {
      "pred": 0.2429,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4686,
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
      "pred": 0.6108,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5696,
      "is_result": false
    },
    "draw": {
      "pred": 0.2172,
      "is_result": true
    },
    "away": {
      "pred": 0.2133,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5404,
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
      "pred": 0.4801,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5828,
      "is_result": true
    },
    "draw": {
      "pred": 0.2456,
      "is_result": false
    },
    "away": {
      "pred": 0.1716,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4235,
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
      "pred": 0.605,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2784,
      "is_result": false
    },
    "draw": {
      "pred": 0.237,
      "is_result": false
    },
    "away": {
      "pred": 0.4846,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3664,
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
      "pred": 0.3265,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4546,
      "is_result": false
    },
    "draw": {
      "pred": 0.3292,
      "is_result": true
    },
    "away": {
      "pred": 0.2162,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3377,
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
      "pred": 0.5904,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4941,
      "is_result": false
    },
    "draw": {
      "pred": 0.2454,
      "is_result": true
    },
    "away": {
      "pred": 0.2605,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4129,
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
      "pred": 0.5371,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3552,
      "is_result": false
    },
    "draw": {
      "pred": 0.2653,
      "is_result": true
    },
    "away": {
      "pred": 0.3795,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4005,
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
      "pred": 0.5189,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5066,
      "is_result": true
    },
    "draw": {
      "pred": 0.2559,
      "is_result": false
    },
    "away": {
      "pred": 0.2375,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3733,
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
      "pred": 0.4431,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3831,
      "is_result": false
    },
    "draw": {
      "pred": 0.2857,
      "is_result": true
    },
    "away": {
      "pred": 0.3311,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3203,
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
      "pred": 0.5169,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3491,
      "is_result": true
    },
    "draw": {
      "pred": 0.2694,
      "is_result": false
    },
    "away": {
      "pred": 0.3815,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5112,
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
      "pred": 0.4372,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.275,
      "is_result": true
    },
    "draw": {
      "pred": 0.2824,
      "is_result": false
    },
    "away": {
      "pred": 0.4426,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3088,
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
      "pred": 0.5373,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.469,
      "is_result": true
    },
    "draw": {
      "pred": 0.2584,
      "is_result": false
    },
    "away": {
      "pred": 0.2726,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3915,
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
      "pred": 0.4836,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4972,
      "is_result": true
    },
    "draw": {
      "pred": 0.2644,
      "is_result": false
    },
    "away": {
      "pred": 0.2385,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5317,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Academico Viseu",
    "away_team": "Guimaraes",
    "match_date": "2026-09-12",
    "score": "2-1",
    "over15": {
      "pred": 0.7331,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.418,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3494,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3926,
      "is_result": true
    },
    "draw": {
      "pred": 0.2974,
      "is_result": false
    },
    "away": {
      "pred": 0.31,
      "is_result": false
    },
    "btts": {
      "pred": 0.5258,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3735,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1734,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2142,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1382,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3658,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Casa Pia",
    "away_team": "Porto",
    "match_date": "2026-09-12",
    "score": "1-4",
    "over15": {
      "pred": 0.7436,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.451,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3484,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2548,
      "is_result": false
    },
    "draw": {
      "pred": 0.2023,
      "is_result": false
    },
    "away": {
      "pred": 0.5429,
      "is_result": true
    },
    "btts": {
      "pred": 0.4931,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3357,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0573,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1761,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2597,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3759,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Estrela",
    "away_team": "Sp Braga",
    "match_date": "2026-09-10",
    "score": "2-1",
    "over15": {
      "pred": 0.7899,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6103,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3542,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4349,
      "is_result": true
    },
    "draw": {
      "pred": 0.2509,
      "is_result": false
    },
    "away": {
      "pred": 0.3142,
      "is_result": false
    },
    "btts": {
      "pred": 0.5738,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5147,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2513,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1871,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1729,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3657,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Moreirense",
    "away_team": "Benfica",
    "match_date": "2026-09-09",
    "score": "0-4",
    "over15": {
      "pred": 0.8005,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6022,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3561,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3096,
      "is_result": false
    },
    "draw": {
      "pred": 0.1598,
      "is_result": false
    },
    "away": {
      "pred": 0.5306,
      "is_result": true
    },
    "btts": {
      "pred": 0.5426,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4256,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4101,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Nacional",
    "away_team": "Alverca",
    "match_date": "2026-09-12",
    "score": "1-3",
    "over15": {
      "pred": 0.7103,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3712,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3512,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4067,
      "is_result": false
    },
    "draw": {
      "pred": 0.3082,
      "is_result": false
    },
    "away": {
      "pred": 0.2851,
      "is_result": true
    },
    "btts": {
      "pred": 0.5037,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3299,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1646,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2201,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.119,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.341,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Alanyaspor",
    "away_team": "Goztep",
    "match_date": "2026-09-12",
    "score": "2-2",
    "over15": {
      "pred": 0.7512,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4547,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3483,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3163,
      "is_result": false
    },
    "draw": {
      "pred": 0.2815,
      "is_result": true
    },
    "away": {
      "pred": 0.4022,
      "is_result": false
    },
    "btts": {
      "pred": 0.5431,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3952,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1353,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2247,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1832,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3428,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Besiktas",
    "away_team": "Erzurumspor",
    "match_date": "2026-09-11",
    "score": "3-0",
    "over15": {
      "pred": 0.7864,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5924,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3615,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7009,
      "is_result": true
    },
    "draw": {
      "pred": 0.2103,
      "is_result": false
    },
    "away": {
      "pred": 0.0888,
      "is_result": false
    },
    "btts": {
      "pred": 0.5205,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.401,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4686,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Eyupspor",
    "away_team": "Rizespor",
    "match_date": "2026-09-12",
    "score": "0-2",
    "over15": {
      "pred": 0.7726,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5305,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3459,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3778,
      "is_result": false
    },
    "draw": {
      "pred": 0.2978,
      "is_result": false
    },
    "away": {
      "pred": 0.3244,
      "is_result": true
    },
    "btts": {
      "pred": 0.5642,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4329,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1857,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2169,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1616,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3438,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Konyaspor",
    "away_team": "Trabzonspor",
    "match_date": "2026-09-12",
    "score": "1-0",
    "over15": {
      "pred": 0.7608,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4883,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3473,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2893,
      "is_result": true
    },
    "draw": {
      "pred": 0.264,
      "is_result": false
    },
    "away": {
      "pred": 0.4467,
      "is_result": false
    },
    "btts": {
      "pred": 0.5475,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4066,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1191,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2163,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2121,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4002,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Samsunspor",
    "away_team": "Corum",
    "match_date": "2026-09-12",
    "score": "1-5",
    "over15": {
      "pred": 0.7755,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.595,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3437,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.439,
      "is_result": false
    },
    "draw": {
      "pred": 0.2952,
      "is_result": false
    },
    "away": {
      "pred": 0.2658,
      "is_result": true
    },
    "btts": {
      "pred": 0.5658,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4573,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2294,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2007,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1357,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3454,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Auxerre",
    "away_team": "Nice",
    "match_date": "2026-09-12",
    "score": "1-0",
    "over15": {
      "pred": 0.7327,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.403,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3498,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4222,
      "is_result": true
    },
    "draw": {
      "pred": 0.3078,
      "is_result": false
    },
    "away": {
      "pred": 0.27,
      "is_result": false
    },
    "btts": {
      "pred": 0.5225,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3598,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.184,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2226,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.116,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3896,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Le Havre",
    "away_team": "Angers",
    "match_date": "2026-09-12",
    "score": "0-0",
    "over15": {
      "pred": 0.713,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3685,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1284,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3916,
      "is_result": false
    },
    "draw": {
      "pred": 0.3176,
      "is_result": true
    },
    "away": {
      "pred": 0.2908,
      "is_result": false
    },
    "btts": {
      "pred": 0.5079,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3282,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1542,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2317,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.122,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3409,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Lorient",
    "away_team": "Toulouse",
    "match_date": "2026-09-12",
    "score": "2-2",
    "over15": {
      "pred": 0.745,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4419,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3487,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.347,
      "is_result": false
    },
    "draw": {
      "pred": 0.2945,
      "is_result": true
    },
    "away": {
      "pred": 0.3585,
      "is_result": false
    },
    "btts": {
      "pred": 0.5387,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3897,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1552,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2225,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.161,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3441,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Paris FC",
    "away_team": "Lyon",
    "match_date": "2026-09-12",
    "score": "0-0",
    "over15": {
      "pred": 0.7748,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6025,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3423,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3716,
      "is_result": false
    },
    "draw": {
      "pred": 0.2741,
      "is_result": true
    },
    "away": {
      "pred": 0.3543,
      "is_result": false
    },
    "btts": {
      "pred": 0.5678,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4831,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1946,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1928,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1804,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3457,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Rennes",
    "away_team": "Marseille",
    "match_date": "2026-09-11",
    "score": "1-0",
    "over15": {
      "pred": 0.8999,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.764,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3731,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5837,
      "is_result": true
    },
    "draw": {
      "pred": 0.1913,
      "is_result": false
    },
    "away": {
      "pred": 0.225,
      "is_result": false
    },
    "btts": {
      "pred": 0.6651,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6514,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3953,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Strasbourg",
    "away_team": "Monaco",
    "match_date": "2026-09-12",
    "score": "1-1",
    "over15": {
      "pred": 0.7757,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5956,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3436,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4619,
      "is_result": false
    },
    "draw": {
      "pred": 0.2776,
      "is_result": true
    },
    "away": {
      "pred": 0.2605,
      "is_result": false
    },
    "btts": {
      "pred": 0.5654,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4564,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.24,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1952,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1301,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3595,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Clermont",
    "away_team": "Boulogne",
    "match_date": "2026-09-11",
    "score": "0-0",
    "over15": {
      "pred": 0.4887,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3234,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0841,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3514,
      "is_result": false
    },
    "draw": {
      "pred": 0.3168,
      "is_result": true
    },
    "away": {
      "pred": 0.3317,
      "is_result": false
    },
    "btts": {
      "pred": 0.3139,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2761,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.2661,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Dijon",
    "away_team": "Laval",
    "match_date": "2026-09-11",
    "score": "3-2",
    "over15": {
      "pred": 0.7383,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4194,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3503,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3527,
      "is_result": true
    },
    "draw": {
      "pred": 0.3071,
      "is_result": false
    },
    "away": {
      "pred": 0.3402,
      "is_result": false
    },
    "btts": {
      "pred": 0.5218,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3714,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.0909,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Dunkerque",
    "away_team": "St Etienne",
    "match_date": "2026-09-12",
    "score": "2-1",
    "over15": {
      "pred": 0.7727,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6213,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3516,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3031,
      "is_result": true
    },
    "draw": {
      "pred": 0.2095,
      "is_result": false
    },
    "away": {
      "pred": 0.4874,
      "is_result": false
    },
    "btts": {
      "pred": 0.5702,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5317,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.143,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1671,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2601,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4971,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Guingamp",
    "away_team": "Annecy",
    "match_date": "2026-09-12",
    "score": "2-1",
    "over15": {
      "pred": 0.7704,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5389,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3457,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.367,
      "is_result": true
    },
    "draw": {
      "pred": 0.2848,
      "is_result": false
    },
    "away": {
      "pred": 0.3482,
      "is_result": false
    },
    "btts": {
      "pred": 0.564,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4371,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1847,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2077,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1716,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3474,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Nancy",
    "away_team": "Reims",
    "match_date": "2026-09-11",
    "score": "1-2",
    "over15": {
      "pred": 0.7884,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5952,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3631,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3158,
      "is_result": false
    },
    "draw": {
      "pred": 0.2306,
      "is_result": false
    },
    "away": {
      "pred": 0.4537,
      "is_result": true
    },
    "btts": {
      "pred": 0.5597,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4467,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3996,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Rodez",
    "away_team": "Grenoble",
    "match_date": "2026-09-11",
    "score": "0-1",
    "over15": {
      "pred": 0.7353,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4083,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3497,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4824,
      "is_result": false
    },
    "draw": {
      "pred": 0.2966,
      "is_result": false
    },
    "away": {
      "pred": 0.221,
      "is_result": true
    },
    "btts": {
      "pred": 0.5038,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3427,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3205,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Sochaux",
    "away_team": "Nantes",
    "match_date": "2026-09-12",
    "score": "1-0",
    "over15": {
      "pred": 0.4017,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.2783,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0509,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3608,
      "is_result": true
    },
    "draw": {
      "pred": 0.3341,
      "is_result": false
    },
    "away": {
      "pred": 0.3051,
      "is_result": false
    },
    "btts": {
      "pred": 0.2493,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.1276,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0571,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1366,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0556,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3857,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Aldershot",
    "away_team": "Harrogate",
    "match_date": NaN,
    "score": "3-1",
    "over25": {
      "pred": 0.7055,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2888,
      "is_result": true
    },
    "draw": {
      "pred": 0.2162,
      "is_result": false
    },
    "away": {
      "pred": 0.495,
      "is_result": false
    }
  },
  {
    "league": "National League",
    "home_team": "Altrincham",
    "away_team": "Halifax",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.5254,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4032,
      "is_result": true
    },
    "draw": {
      "pred": 0.2728,
      "is_result": false
    },
    "away": {
      "pred": 0.324,
      "is_result": false
    }
  },
  {
    "league": "National League",
    "home_team": "Barrow",
    "away_team": "Yeovil",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.5517,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5014,
      "is_result": false
    },
    "draw": {
      "pred": 0.2557,
      "is_result": false
    },
    "away": {
      "pred": 0.2429,
      "is_result": true
    }
  },
  {
    "league": "National League",
    "home_team": "Boston Utd",
    "away_team": "Wealdstone",
    "match_date": "2026-09-12",
    "score": "1-3",
    "over15": {
      "pred": 0.7748,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6041,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.343,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4535,
      "is_result": false
    },
    "draw": {
      "pred": 0.2637,
      "is_result": false
    },
    "away": {
      "pred": 0.2828,
      "is_result": true
    },
    "btts": {
      "pred": 0.5672,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.482,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2361,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1849,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1462,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3776,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Carlisle",
    "away_team": "Southend",
    "match_date": "2026-09-12",
    "score": "2-2",
    "over15": {
      "pred": 0.7753,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5998,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3428,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4264,
      "is_result": false
    },
    "draw": {
      "pred": 0.2707,
      "is_result": true
    },
    "away": {
      "pred": 0.303,
      "is_result": false
    },
    "btts": {
      "pred": 0.5666,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4733,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2197,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1906,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1563,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3586,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Eastleigh",
    "away_team": "Boreham Wood",
    "match_date": "2026-09-12",
    "score": "1-1",
    "over15": {
      "pred": 0.7722,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6451,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3545,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2979,
      "is_result": false
    },
    "draw": {
      "pred": 0.197,
      "is_result": true
    },
    "away": {
      "pred": 0.505,
      "is_result": false
    },
    "btts": {
      "pred": 0.5709,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5443,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1346,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1599,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2764,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3778,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Forest Green",
    "away_team": "Gateshead",
    "match_date": "2026-09-12",
    "score": "4-0",
    "over15": {
      "pred": 0.7741,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.61,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3459,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5856,
      "is_result": true
    },
    "draw": {
      "pred": 0.2009,
      "is_result": false
    },
    "away": {
      "pred": 0.2135,
      "is_result": false
    },
    "btts": {
      "pred": 0.5654,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4721,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3041,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1659,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0954,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3972,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Fylde",
    "away_team": "Forest Green",
    "match_date": NaN,
    "score": "2-0",
    "over25": {
      "pred": 0.6068,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2758,
      "is_result": true
    },
    "draw": {
      "pred": 0.2387,
      "is_result": false
    },
    "away": {
      "pred": 0.4856,
      "is_result": false
    }
  },
  {
    "league": "National League",
    "home_team": "Gateshead",
    "away_team": "Sutton",
    "match_date": NaN,
    "score": "0-1",
    "over25": {
      "pred": 0.6002,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4348,
      "is_result": false
    },
    "draw": {
      "pred": 0.248,
      "is_result": false
    },
    "away": {
      "pred": 0.3171,
      "is_result": true
    }
  },
  {
    "league": "National League",
    "home_team": "Halifax",
    "away_team": "Hornchurch",
    "match_date": "2026-09-12",
    "score": "3-0",
    "over15": {
      "pred": 0.7749,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6036,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3428,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3299,
      "is_result": true
    },
    "draw": {
      "pred": 0.2478,
      "is_result": false
    },
    "away": {
      "pred": 0.4223,
      "is_result": false
    },
    "btts": {
      "pred": 0.5676,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4854,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1702,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1878,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2096,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3496,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Harrogate",
    "away_team": "Tamworth",
    "match_date": "2026-09-12",
    "score": "3-1",
    "over15": {
      "pred": 0.8815,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7229,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3648,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6007,
      "is_result": true
    },
    "draw": {
      "pred": 0.1803,
      "is_result": false
    },
    "away": {
      "pred": 0.2191,
      "is_result": false
    },
    "btts": {
      "pred": 0.5921,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5865,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3283,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1481,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1156,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4351,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Hartlepool",
    "away_team": "Eastleigh",
    "match_date": NaN,
    "score": "0-1",
    "over25": {
      "pred": 0.5581,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4593,
      "is_result": false
    },
    "draw": {
      "pred": 0.2607,
      "is_result": false
    },
    "away": {
      "pred": 0.28,
      "is_result": true
    }
  },
  {
    "league": "National League",
    "home_team": "Hornchurch",
    "away_team": "Woking",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.5935,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5411,
      "is_result": true
    },
    "draw": {
      "pred": 0.2366,
      "is_result": false
    },
    "away": {
      "pred": 0.2223,
      "is_result": false
    }
  },
  {
    "league": "National League",
    "home_team": "Kidderminster",
    "away_team": "Hartlepool",
    "match_date": "2026-09-11",
    "score": "2-0",
    "over15": {
      "pred": 0.7244,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3806,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3476,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3719,
      "is_result": true
    },
    "draw": {
      "pred": 0.3194,
      "is_result": false
    },
    "away": {
      "pred": 0.3087,
      "is_result": false
    },
    "btts": {
      "pred": 0.5064,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3358,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3145,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Scunthorpe",
    "away_team": "Solihull",
    "match_date": NaN,
    "score": "3-1",
    "over25": {
      "pred": 0.6375,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5231,
      "is_result": true
    },
    "draw": {
      "pred": 0.2202,
      "is_result": false
    },
    "away": {
      "pred": 0.2568,
      "is_result": false
    }
  },
  {
    "league": "National League",
    "home_team": "Solihull",
    "away_team": "Aldershot",
    "match_date": "2026-09-12",
    "score": "1-2",
    "over15": {
      "pred": 0.7722,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.642,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3542,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.448,
      "is_result": false
    },
    "draw": {
      "pred": 0.2389,
      "is_result": false
    },
    "away": {
      "pred": 0.3131,
      "is_result": true
    },
    "btts": {
      "pred": 0.5849,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5532,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2466,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.169,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1693,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.422,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Southend",
    "away_team": "Kidderminster",
    "match_date": NaN,
    "score": "1-3",
    "over25": {
      "pred": 0.4737,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.521,
      "is_result": false
    },
    "draw": {
      "pred": 0.2679,
      "is_result": false
    },
    "away": {
      "pred": 0.211,
      "is_result": true
    }
  },
  {
    "league": "National League",
    "home_team": "Sutton",
    "away_team": "Scunthorpe",
    "match_date": "2026-09-12",
    "score": "0-2",
    "over15": {
      "pred": 0.7742,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6093,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3455,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3337,
      "is_result": false
    },
    "draw": {
      "pred": 0.2426,
      "is_result": false
    },
    "away": {
      "pred": 0.4237,
      "is_result": true
    },
    "btts": {
      "pred": 0.5687,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.503,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.175,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1824,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2113,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3861,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Tamworth",
    "away_team": "Worthing",
    "match_date": NaN,
    "score": "3-2",
    "over25": {
      "pred": 0.7911,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4066,
      "is_result": true
    },
    "draw": {
      "pred": 0.2118,
      "is_result": false
    },
    "away": {
      "pred": 0.3816,
      "is_result": false
    }
  },
  {
    "league": "National League",
    "home_team": "Wealdstone",
    "away_team": "Carlisle",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.6228,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2361,
      "is_result": false
    },
    "draw": {
      "pred": 0.2205,
      "is_result": true
    },
    "away": {
      "pred": 0.5435,
      "is_result": false
    }
  },
  {
    "league": "National League",
    "home_team": "Woking",
    "away_team": "Altrincham",
    "match_date": "2026-09-12",
    "score": "5-1",
    "over15": {
      "pred": 0.7572,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4919,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3472,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4092,
      "is_result": true
    },
    "draw": {
      "pred": 0.2969,
      "is_result": false
    },
    "away": {
      "pred": 0.2939,
      "is_result": false
    },
    "btts": {
      "pred": 0.5487,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4133,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1952,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2104,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1431,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3458,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Worthing",
    "away_team": "Barrow",
    "match_date": "2026-09-12",
    "score": "2-2",
    "over15": {
      "pred": 0.8689,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6874,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3585,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4216,
      "is_result": false
    },
    "draw": {
      "pred": 0.2351,
      "is_result": true
    },
    "away": {
      "pred": 0.3433,
      "is_result": false
    },
    "btts": {
      "pred": 0.654,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6009,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2652,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1831,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2057,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3705,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Yeovil",
    "away_team": "Fylde",
    "match_date": "2026-09-12",
    "score": "1-4",
    "over15": {
      "pred": 0.7753,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6001,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3427,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4094,
      "is_result": false
    },
    "draw": {
      "pred": 0.2689,
      "is_result": false
    },
    "away": {
      "pred": 0.3217,
      "is_result": true
    },
    "btts": {
      "pred": 0.5668,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4753,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2118,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1909,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1641,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3479,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "AFC Telford United",
    "away_team": "Oxford City",
    "match_date": "2026-09-08",
    "score": "1-0",
    "over15": {
      "pred": 0.7943,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6029,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3441,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4291,
      "is_result": true
    },
    "draw": {
      "pred": 0.2788,
      "is_result": false
    },
    "away": {
      "pred": 0.2921,
      "is_result": false
    },
    "btts": {
      "pred": 0.5635,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4248,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3243,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Buxton",
    "away_team": "Brackley Town",
    "match_date": "2026-09-08",
    "score": "5-0",
    "over15": {
      "pred": 0.7933,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5772,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3468,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4668,
      "is_result": true
    },
    "draw": {
      "pred": 0.2754,
      "is_result": false
    },
    "away": {
      "pred": 0.2578,
      "is_result": false
    },
    "btts": {
      "pred": 0.5522,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4181,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.2297,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Buxton",
    "away_team": "Chester",
    "match_date": "2026-09-12",
    "score": "3-1",
    "over15": {
      "pred": 0.7766,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5845,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3441,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4664,
      "is_result": true
    },
    "draw": {
      "pred": 0.2533,
      "is_result": false
    },
    "away": {
      "pred": 0.2804,
      "is_result": false
    },
    "btts": {
      "pred": 0.5644,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4522,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2362,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.189,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1392,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3461,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Chester",
    "away_team": "Merthyr Town",
    "match_date": "2026-09-08",
    "score": "0-1",
    "over15": {
      "pred": 0.7973,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5991,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.346,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4393,
      "is_result": false
    },
    "draw": {
      "pred": 0.2588,
      "is_result": false
    },
    "away": {
      "pred": 0.3019,
      "is_result": true
    },
    "btts": {
      "pred": 0.5861,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5029,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.37,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Chorley",
    "away_team": "Darlington",
    "match_date": "2026-09-08",
    "score": "5-2",
    "over15": {
      "pred": 0.7949,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6022,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.343,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4039,
      "is_result": true
    },
    "draw": {
      "pred": 0.2716,
      "is_result": false
    },
    "away": {
      "pred": 0.3245,
      "is_result": false
    },
    "btts": {
      "pred": 0.5691,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4284,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3945,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Harborough Town",
    "away_team": "AFC Telford United",
    "match_date": "2026-09-12",
    "score": "0-0",
    "over15": {
      "pred": 0.7763,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5951,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3437,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3238,
      "is_result": false
    },
    "draw": {
      "pred": 0.2328,
      "is_result": true
    },
    "away": {
      "pred": 0.4434,
      "is_result": false
    },
    "btts": {
      "pred": 0.5653,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.462,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1611,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1895,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2146,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3427,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Harborough Town",
    "away_team": "Hereford",
    "match_date": "2026-09-08",
    "score": "0-3",
    "over15": {
      "pred": 0.7944,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6029,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.344,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4993,
      "is_result": false
    },
    "draw": {
      "pred": 0.2549,
      "is_result": false
    },
    "away": {
      "pred": 0.2458,
      "is_result": true
    },
    "btts": {
      "pred": 0.5565,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4217,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3944,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Hebburn Town",
    "away_team": "Hednesford Town",
    "match_date": "2026-09-12",
    "score": "2-1",
    "over15": {
      "pred": 0.8746,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7208,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3644,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4177,
      "is_result": true
    },
    "draw": {
      "pred": 0.2074,
      "is_result": false
    },
    "away": {
      "pred": 0.3749,
      "is_result": false
    },
    "btts": {
      "pred": 0.6725,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5919,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2685,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1791,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2249,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4498,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Hereford",
    "away_team": "South Shields",
    "match_date": "2026-09-12",
    "score": "6-0",
    "over15": {
      "pred": 0.7765,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5862,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.344,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2855,
      "is_result": true
    },
    "draw": {
      "pred": 0.2035,
      "is_result": false
    },
    "away": {
      "pred": 0.5111,
      "is_result": false
    },
    "btts": {
      "pred": 0.5571,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4411,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.109,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1804,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2677,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3778,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "King's Lynn Town",
    "away_team": "Chorley",
    "match_date": "2026-09-12",
    "score": "2-0",
    "over15": {
      "pred": 0.7732,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5642,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3448,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3632,
      "is_result": true
    },
    "draw": {
      "pred": 0.2534,
      "is_result": false
    },
    "away": {
      "pred": 0.3834,
      "is_result": false
    },
    "btts": {
      "pred": 0.5644,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.449,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1836,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1962,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1846,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.362,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "King's Lynn Town",
    "away_team": "Hednesford Town",
    "match_date": "2026-09-08",
    "score": "2-3",
    "over15": {
      "pred": 0.7927,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5594,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3482,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4122,
      "is_result": false
    },
    "draw": {
      "pred": 0.2886,
      "is_result": false
    },
    "away": {
      "pred": 0.2992,
      "is_result": true
    },
    "btts": {
      "pred": 0.5526,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4173,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.32,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Macclesfield",
    "away_team": "Scarborough Athletic",
    "match_date": "2026-09-08",
    "score": "0-0",
    "over15": {
      "pred": 0.7935,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5841,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3462,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4475,
      "is_result": false
    },
    "draw": {
      "pred": 0.2837,
      "is_result": true
    },
    "away": {
      "pred": 0.2688,
      "is_result": false
    },
    "btts": {
      "pred": 0.5561,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4202,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.306,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Marine",
    "away_team": "Darlington",
    "match_date": "2026-09-12",
    "score": "2-1",
    "over15": {
      "pred": 0.775,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6052,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3436,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3978,
      "is_result": true
    },
    "draw": {
      "pred": 0.2393,
      "is_result": false
    },
    "away": {
      "pred": 0.3629,
      "is_result": false
    },
    "btts": {
      "pred": 0.5675,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4909,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2071,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.181,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1795,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.349,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Morecambe",
    "away_team": "Brackley Town",
    "match_date": "2026-09-12",
    "score": "3-0",
    "over15": {
      "pred": 0.7447,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4593,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3482,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6469,
      "is_result": true
    },
    "draw": {
      "pred": 0.2231,
      "is_result": false
    },
    "away": {
      "pred": 0.13,
      "is_result": false
    },
    "btts": {
      "pred": 0.4948,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3416,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2635,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1721,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0591,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.0337,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Radcliffe",
    "away_team": "Hebburn Town",
    "match_date": "2026-09-08",
    "score": "5-1",
    "over15": {
      "pred": 0.7981,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5981,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.347,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3131,
      "is_result": true
    },
    "draw": {
      "pred": 0.2103,
      "is_result": false
    },
    "away": {
      "pred": 0.4766,
      "is_result": false
    },
    "btts": {
      "pred": 0.5883,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5229,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4064,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Radcliffe",
    "away_team": "Oxford City",
    "match_date": "2026-09-12",
    "score": "0-3",
    "over15": {
      "pred": 0.7752,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6036,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3428,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.338,
      "is_result": false
    },
    "draw": {
      "pred": 0.23,
      "is_result": false
    },
    "away": {
      "pred": 0.432,
      "is_result": true
    },
    "btts": {
      "pred": 0.5671,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4856,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1748,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1823,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.21,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3476,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Scarborough Athletic",
    "away_team": "Merthyr Town",
    "match_date": "2026-09-12",
    "score": "0-0",
    "over15": {
      "pred": 0.7742,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6119,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3468,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4406,
      "is_result": false
    },
    "draw": {
      "pred": 0.2353,
      "is_result": true
    },
    "away": {
      "pred": 0.3241,
      "is_result": false
    },
    "btts": {
      "pred": 0.5686,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5088,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2307,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1737,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1642,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3476,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "South Shields",
    "away_team": "Marine",
    "match_date": "2026-09-08",
    "score": "2-1",
    "over15": {
      "pred": 0.7946,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6027,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3436,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6944,
      "is_result": true
    },
    "draw": {
      "pred": 0.1928,
      "is_result": false
    },
    "away": {
      "pred": 0.1128,
      "is_result": false
    },
    "btts": {
      "pred": 0.5202,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4072,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3273,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Southport",
    "away_team": "Morecambe",
    "match_date": "2026-09-08",
    "score": "2-1",
    "over15": {
      "pred": 0.7548,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4321,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3576,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3014,
      "is_result": true
    },
    "draw": {
      "pred": 0.2551,
      "is_result": false
    },
    "away": {
      "pred": 0.4434,
      "is_result": false
    },
    "btts": {
      "pred": 0.5101,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3662,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.0738,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Spalding United",
    "away_team": "Bedford Town",
    "match_date": "2026-09-12",
    "score": "2-1",
    "over15": {
      "pred": 0.7348,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4268,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3491,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6578,
      "is_result": true
    },
    "draw": {
      "pred": 0.2255,
      "is_result": false
    },
    "away": {
      "pred": 0.1167,
      "is_result": false
    },
    "btts": {
      "pred": 0.3206,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3157,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1718,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1145,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0344,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3395,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Spennymoor Town",
    "away_team": "Macclesfield",
    "match_date": "2026-09-12",
    "score": "1-1",
    "over15": {
      "pred": 0.7757,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5993,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3428,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3107,
      "is_result": false
    },
    "draw": {
      "pred": 0.2197,
      "is_result": true
    },
    "away": {
      "pred": 0.4696,
      "is_result": false
    },
    "btts": {
      "pred": 0.5658,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4698,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1472,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1838,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2347,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3474,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Spennymoor Town",
    "away_team": "Spalding United",
    "match_date": "2026-09-08",
    "score": "1-3",
    "over15": {
      "pred": 0.475,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3215,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.081,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3021,
      "is_result": false
    },
    "draw": {
      "pred": 0.2561,
      "is_result": false
    },
    "away": {
      "pred": 0.4417,
      "is_result": true
    },
    "btts": {
      "pred": 0.2568,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2506,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.2415,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Worksop Town",
    "away_team": "Bedford Town",
    "match_date": "2026-09-08",
    "score": "1-2",
    "over15": {
      "pred": 0.795,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6021,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3431,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.421,
      "is_result": false
    },
    "draw": {
      "pred": 0.2733,
      "is_result": false
    },
    "away": {
      "pred": 0.3057,
      "is_result": true
    },
    "btts": {
      "pred": 0.5688,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4284,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4305,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Worksop Town",
    "away_team": "Southport",
    "match_date": "2026-09-12",
    "score": "2-0",
    "over15": {
      "pred": 0.7753,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6026,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3424,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.417,
      "is_result": true
    },
    "draw": {
      "pred": 0.2443,
      "is_result": false
    },
    "away": {
      "pred": 0.3387,
      "is_result": false
    },
    "btts": {
      "pred": 0.5669,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4821,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2156,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1828,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1685,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3655,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "AFC Totton",
    "away_team": "Slough Town",
    "match_date": "2026-09-12",
    "score": "0-1",
    "over15": {
      "pred": 0.8665,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6977,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3603,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.496,
      "is_result": false
    },
    "draw": {
      "pred": 0.2101,
      "is_result": false
    },
    "away": {
      "pred": 0.2939,
      "is_result": true
    },
    "btts": {
      "pred": 0.6223,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5751,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2851,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1659,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1713,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4993,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Braintree Town",
    "away_team": "Maidstone United",
    "match_date": "2026-09-12",
    "score": "2-1",
    "over15": {
      "pred": 0.863,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6865,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3584,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2753,
      "is_result": true
    },
    "draw": {
      "pred": 0.1398,
      "is_result": false
    },
    "away": {
      "pred": 0.5849,
      "is_result": false
    },
    "btts": {
      "pred": 0.5686,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5295,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0904,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1329,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.3453,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4819,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Chesham United",
    "away_team": "Billericay Town",
    "match_date": "2026-09-08",
    "score": "1-2",
    "over15": {
      "pred": 0.7975,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5988,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3463,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4189,
      "is_result": false
    },
    "draw": {
      "pred": 0.2543,
      "is_result": false
    },
    "away": {
      "pred": 0.3267,
      "is_result": true
    },
    "btts": {
      "pred": 0.5886,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5161,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4484,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Dagenham & Redbridge",
    "away_team": "Dover Athletic",
    "match_date": "2026-09-08",
    "score": "0-1",
    "over15": {
      "pred": 0.7939,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5972,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3451,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5048,
      "is_result": false
    },
    "draw": {
      "pred": 0.2529,
      "is_result": false
    },
    "away": {
      "pred": 0.2423,
      "is_result": true
    },
    "btts": {
      "pred": 0.5523,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4192,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3417,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Dorking Wanderers",
    "away_team": "Chelmsford City",
    "match_date": "2026-09-08",
    "score": "3-3",
    "over15": {
      "pred": 0.7953,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6017,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3435,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4554,
      "is_result": false
    },
    "draw": {
      "pred": 0.2718,
      "is_result": true
    },
    "away": {
      "pred": 0.2727,
      "is_result": false
    },
    "btts": {
      "pred": 0.5692,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4292,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3485,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Ebbsfleet United",
    "away_team": "Hemel Hempstead Town",
    "match_date": "2026-09-08",
    "score": "0-0",
    "over15": {
      "pred": 0.7513,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4226,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3582,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4396,
      "is_result": false
    },
    "draw": {
      "pred": 0.3091,
      "is_result": true
    },
    "away": {
      "pred": 0.2513,
      "is_result": false
    },
    "btts": {
      "pred": 0.5102,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3644,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3222,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Ebbsfleet United",
    "away_team": "Salisbury",
    "match_date": "2026-09-12",
    "score": "1-1",
    "over15": {
      "pred": 0.7574,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5048,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3468,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4958,
      "is_result": false
    },
    "draw": {
      "pred": 0.2555,
      "is_result": true
    },
    "away": {
      "pred": 0.2488,
      "is_result": false
    },
    "btts": {
      "pred": 0.5383,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4086,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2364,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1923,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1096,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3437,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Farnborough",
    "away_team": "Dover Athletic",
    "match_date": "2026-09-12",
    "score": "0-1",
    "over15": {
      "pred": 0.8599,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6801,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3573,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4425,
      "is_result": false
    },
    "draw": {
      "pred": 0.2154,
      "is_result": false
    },
    "away": {
      "pred": 0.3422,
      "is_result": true
    },
    "btts": {
      "pred": 0.6188,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5715,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2588,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1696,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1903,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3851,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Folkestone Invicta",
    "away_team": "Farnham Town",
    "match_date": "2026-09-12",
    "score": "1-2",
    "over15": {
      "pred": 0.7741,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5659,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3447,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5503,
      "is_result": false
    },
    "draw": {
      "pred": 0.2212,
      "is_result": false
    },
    "away": {
      "pred": 0.2284,
      "is_result": true
    },
    "btts": {
      "pred": 0.5475,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4275,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2694,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1793,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0988,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4086,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Folkestone Invicta",
    "away_team": "Horsham",
    "match_date": "2026-09-08",
    "score": "1-1",
    "over15": {
      "pred": 0.7653,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4633,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3554,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5397,
      "is_result": false
    },
    "draw": {
      "pred": 0.2486,
      "is_result": true
    },
    "away": {
      "pred": 0.2117,
      "is_result": false
    },
    "btts": {
      "pred": 0.5027,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3613,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.2737,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Hampton & Richmond Borough",
    "away_team": "Chelmsford City",
    "match_date": "2026-09-12",
    "score": "1-1",
    "over15": {
      "pred": 0.7748,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6062,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.344,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3027,
      "is_result": false
    },
    "draw": {
      "pred": 0.2061,
      "is_result": true
    },
    "away": {
      "pred": 0.4912,
      "is_result": false
    },
    "btts": {
      "pred": 0.5667,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4839,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1362,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1753,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2552,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3716,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Hampton & Richmond Borough",
    "away_team": "Farnborough",
    "match_date": "2026-09-08",
    "score": "2-0",
    "over15": {
      "pred": 0.7992,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6233,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3489,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3788,
      "is_result": true
    },
    "draw": {
      "pred": 0.2364,
      "is_result": false
    },
    "away": {
      "pred": 0.3848,
      "is_result": false
    },
    "btts": {
      "pred": 0.6652,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6064,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3988,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Hemel Hempstead Town",
    "away_team": "Tonbridge Angels",
    "match_date": "2026-09-12",
    "score": "1-1",
    "over15": {
      "pred": 0.7277,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4064,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3497,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3814,
      "is_result": false
    },
    "draw": {
      "pred": 0.2926,
      "is_result": true
    },
    "away": {
      "pred": 0.3259,
      "is_result": false
    },
    "btts": {
      "pred": 0.5209,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3669,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1671,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2119,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.142,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.345,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Horsham",
    "away_team": "Chesham United",
    "match_date": "2026-09-12",
    "score": "1-4",
    "over15": {
      "pred": 0.7251,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3985,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3499,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3773,
      "is_result": false
    },
    "draw": {
      "pred": 0.2928,
      "is_result": false
    },
    "away": {
      "pred": 0.33,
      "is_result": true
    },
    "btts": {
      "pred": 0.5187,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3622,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1637,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2127,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1423,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.339,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Maidenhead United",
    "away_team": "Billericay Town",
    "match_date": "2026-09-12",
    "score": "2-2",
    "over15": {
      "pred": 0.756,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5002,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3469,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4171,
      "is_result": false
    },
    "draw": {
      "pred": 0.278,
      "is_result": true
    },
    "away": {
      "pred": 0.3049,
      "is_result": false
    },
    "btts": {
      "pred": 0.5471,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.417,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2001,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2016,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1454,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3785,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Maidenhead United",
    "away_team": "Torquay United",
    "match_date": "2026-09-08",
    "score": "0-4",
    "over15": {
      "pred": 0.7584,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4438,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3568,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4342,
      "is_result": false
    },
    "draw": {
      "pred": 0.3098,
      "is_result": false
    },
    "away": {
      "pred": 0.256,
      "is_result": true
    },
    "btts": {
      "pred": 0.5176,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3807,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3651,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Salisbury",
    "away_team": "Slough Town",
    "match_date": "2026-09-08",
    "score": "5-1",
    "over15": {
      "pred": 0.7961,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6007,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3444,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5078,
      "is_result": true
    },
    "draw": {
      "pred": 0.2438,
      "is_result": false
    },
    "away": {
      "pred": 0.2484,
      "is_result": false
    },
    "btts": {
      "pred": 0.5694,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4306,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3969,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Tonbridge Angels",
    "away_team": "Maidstone United",
    "match_date": "2026-09-08",
    "score": "0-1",
    "over15": {
      "pred": 0.7928,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5627,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.348,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3558,
      "is_result": false
    },
    "draw": {
      "pred": 0.2767,
      "is_result": false
    },
    "away": {
      "pred": 0.3675,
      "is_result": true
    },
    "btts": {
      "pred": 0.5547,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4185,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3746,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Torquay United",
    "away_team": "Dorking Wanderers",
    "match_date": "2026-09-12",
    "score": "2-2",
    "over15": {
      "pred": 0.7729,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.623,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3525,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4572,
      "is_result": false
    },
    "draw": {
      "pred": 0.2246,
      "is_result": true
    },
    "away": {
      "pred": 0.3182,
      "is_result": false
    },
    "btts": {
      "pred": 0.5707,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5424,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2432,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1635,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.164,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4242,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Truro City",
    "away_team": "Walton & Hersham",
    "match_date": "2026-09-12",
    "score": "1-1",
    "over15": {
      "pred": 0.9441,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.9236,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.6709,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.9842,
      "is_result": false
    },
    "draw": {
      "pred": 0.0143,
      "is_result": true
    },
    "away": {
      "pred": 0.0015,
      "is_result": false
    },
    "btts": {
      "pred": 0.0923,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.0881,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0874,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.0047,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0002,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5178,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Weston-super-Mare",
    "away_team": "AFC Totton",
    "match_date": "2026-09-08",
    "score": "3-1",
    "over15": {
      "pred": 0.7861,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5304,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3505,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5494,
      "is_result": true
    },
    "draw": {
      "pred": 0.2351,
      "is_result": false
    },
    "away": {
      "pred": 0.2155,
      "is_result": false
    },
    "btts": {
      "pred": 0.522,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4042,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3471,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Weston-super-Mare",
    "away_team": "Dagenham & Redbridge",
    "match_date": "2026-09-12",
    "score": "1-0",
    "over15": {
      "pred": 0.7202,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3894,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3504,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.455,
      "is_result": true
    },
    "draw": {
      "pred": 0.2935,
      "is_result": false
    },
    "away": {
      "pred": 0.2516,
      "is_result": false
    },
    "btts": {
      "pred": 0.5049,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3409,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.199,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2062,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0996,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3409,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Northern Premier League",
    "home_team": "Ashton United",
    "away_team": "Cleethorpes Town",
    "match_date": "2026-09-12",
    "score": "0-1",
    "over15": {
      "pred": 0.7663,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5206,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3463,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.291,
      "is_result": false
    },
    "draw": {
      "pred": 0.2578,
      "is_result": false
    },
    "away": {
      "pred": 0.4511,
      "is_result": true
    },
    "btts": {
      "pred": 0.5533,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4216,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.126,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2056,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2218,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3425,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Northern Premier League",
    "home_team": "Bamber Bridge",
    "away_team": "Alfreton Town",
    "match_date": "2026-09-12",
    "score": "1-0",
    "over15": {
      "pred": 0.7747,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6042,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3431,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2707,
      "is_result": true
    },
    "draw": {
      "pred": 0.1965,
      "is_result": false
    },
    "away": {
      "pred": 0.5328,
      "is_result": false
    },
    "btts": {
      "pred": 0.5644,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.457,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0936,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1734,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2974,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3456,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Northern Premier League",
    "home_team": "Bury",
    "away_team": "Emley AFC",
    "match_date": "2026-09-12",
    "score": "4-0",
    "over15": {
      "pred": 0.7755,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5979,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3431,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7261,
      "is_result": true
    },
    "draw": {
      "pred": 0.1791,
      "is_result": false
    },
    "away": {
      "pred": 0.0949,
      "is_result": false
    },
    "btts": {
      "pred": 0.5219,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4016,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3184,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1514,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0521,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4348,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Northern Premier League",
    "home_team": "FC United of Manchester",
    "away_team": "Warrington Town",
    "match_date": "2026-09-12",
    "score": "4-1",
    "over15": {
      "pred": 0.7738,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6115,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3466,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4971,
      "is_result": true
    },
    "draw": {
      "pred": 0.2446,
      "is_result": false
    },
    "away": {
      "pred": 0.2583,
      "is_result": false
    },
    "btts": {
      "pred": 0.5681,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4978,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2608,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1762,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1311,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3474,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Northern Premier League",
    "home_team": "Gainsborough Trinity",
    "away_team": "Avro",
    "match_date": "2026-09-12",
    "score": "0-2",
    "over15": {
      "pred": 0.937,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8924,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3984,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3382,
      "is_result": false
    },
    "draw": {
      "pred": 0.1854,
      "is_result": false
    },
    "away": {
      "pred": 0.4764,
      "is_result": true
    },
    "btts": {
      "pred": 0.889,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7316,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2962,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.207,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.3857,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4897,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Northern Premier League",
    "home_team": "Guiseley",
    "away_team": "Quorn",
    "match_date": "2026-09-12",
    "score": "4-1",
    "over15": {
      "pred": 0.8708,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6875,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3586,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5533,
      "is_result": true
    },
    "draw": {
      "pred": 0.2041,
      "is_result": false
    },
    "away": {
      "pred": 0.2426,
      "is_result": false
    },
    "btts": {
      "pred": 0.5752,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5567,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.298,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1535,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1237,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3444,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Northern Premier League",
    "home_team": "Hyde United",
    "away_team": "Whitby Town",
    "match_date": "2026-09-12",
    "score": "1-3",
    "over15": {
      "pred": 0.7736,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6131,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3474,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5143,
      "is_result": false
    },
    "draw": {
      "pred": 0.236,
      "is_result": false
    },
    "away": {
      "pred": 0.2496,
      "is_result": true
    },
    "btts": {
      "pred": 0.5681,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4996,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2698,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1732,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1251,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4126,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Northern Premier League",
    "home_team": "Lancaster City",
    "away_team": "Curzon Ashton",
    "match_date": "2026-09-12",
    "score": "0-2",
    "over15": {
      "pred": 0.7733,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6159,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3488,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2932,
      "is_result": false
    },
    "draw": {
      "pred": 0.2119,
      "is_result": false
    },
    "away": {
      "pred": 0.495,
      "is_result": true
    },
    "btts": {
      "pred": 0.5688,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5101,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1298,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1713,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2677,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4276,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Northern Premier League",
    "home_team": "Redcar Athletic",
    "away_team": "Leek Town",
    "match_date": "2026-09-12",
    "score": "3-2",
    "over15": {
      "pred": 0.7767,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.563,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3448,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7903,
      "is_result": true
    },
    "draw": {
      "pred": 0.1514,
      "is_result": false
    },
    "away": {
      "pred": 0.0582,
      "is_result": false
    },
    "btts": {
      "pred": 0.3141,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3141,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2042,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.0897,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0202,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.339,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Northern Premier League",
    "home_team": "Warrington Rylands",
    "away_team": "Stockton Town",
    "match_date": "2026-09-12",
    "score": "1-1",
    "over15": {
      "pred": 0.7756,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5969,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3433,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4883,
      "is_result": false
    },
    "draw": {
      "pred": 0.2607,
      "is_result": true
    },
    "away": {
      "pred": 0.251,
      "is_result": false
    },
    "btts": {
      "pred": 0.5651,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4566,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.252,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1902,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1229,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3884,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Northern Premier League",
    "home_team": "Workington AFC",
    "away_team": "Ilkeston Town",
    "match_date": "2026-09-12",
    "score": "3-1",
    "over15": {
      "pred": 0.7762,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5801,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3442,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4611,
      "is_result": true
    },
    "draw": {
      "pred": 0.2763,
      "is_result": false
    },
    "away": {
      "pred": 0.2627,
      "is_result": false
    },
    "btts": {
      "pred": 0.5646,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4482,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2377,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1968,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1301,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3442,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Poland Ekstraklasa",
    "home_team": "Slask Wroclaw",
    "away_team": "Korona Kielce",
    "match_date": "2026-09-12",
    "score": "1-2",
    "over15": {
      "pred": 0.7388,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4129,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3495,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4161,
      "is_result": false
    },
    "draw": {
      "pred": 0.3125,
      "is_result": false
    },
    "away": {
      "pred": 0.2715,
      "is_result": true
    },
    "btts": {
      "pred": 0.5292,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3667,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1819,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2285,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1188,
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
      "pred": 0.5273,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2849,
      "is_result": false
    },
    "draw": {
      "pred": 0.2928,
      "is_result": false
    },
    "away": {
      "pred": 0.4222,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.318,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Aston Villa",
    "away_team": "Nott'm Forest",
    "match_date": "2026-09-12",
    "score": "1-2",
    "over15": {
      "pred": 0.7494,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4486,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3485,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.332,
      "is_result": false
    },
    "draw": {
      "pred": 0.2905,
      "is_result": false
    },
    "away": {
      "pred": 0.3774,
      "is_result": true
    },
    "btts": {
      "pred": 0.5427,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3932,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.145,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2265,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1712,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3517,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Bournemouth",
    "away_team": "Brentford",
    "match_date": "2026-09-12",
    "score": "2-2",
    "over15": {
      "pred": 0.7746,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6025,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3423,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4147,
      "is_result": false
    },
    "draw": {
      "pred": 0.2934,
      "is_result": true
    },
    "away": {
      "pred": 0.292,
      "is_result": false
    },
    "btts": {
      "pred": 0.5678,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4806,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2164,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.195,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1563,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4338,
      "hit": false,
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
      "pred": 0.4751,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4214,
      "is_result": false
    },
    "draw": {
      "pred": 0.3054,
      "is_result": true
    },
    "away": {
      "pred": 0.2732,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.306,
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
      "pred": 0.6002,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4144,
      "is_result": true
    },
    "draw": {
      "pred": 0.2694,
      "is_result": false
    },
    "away": {
      "pred": 0.3162,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5136,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Chelsea",
    "away_team": "Hull",
    "match_date": "2026-09-12",
    "score": "2-2",
    "over15": {
      "pred": 0.4201,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.2819,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0535,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3849,
      "is_result": false
    },
    "draw": {
      "pred": 0.3433,
      "is_result": true
    },
    "away": {
      "pred": 0.2717,
      "is_result": false
    },
    "btts": {
      "pred": 0.2609,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.13,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0673,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1459,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0476,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3448,
      "hit": false,
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
      "pred": 0.0466,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.1104,
      "is_result": false
    },
    "draw": {
      "pred": 0.5222,
      "is_result": false
    },
    "away": {
      "pred": 0.3673,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.1715,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Crystal Palace",
    "away_team": "Ipswich",
    "match_date": "2026-09-12",
    "score": "2-3",
    "over15": {
      "pred": 0.7452,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4354,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3489,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4306,
      "is_result": false
    },
    "draw": {
      "pred": 0.3074,
      "is_result": false
    },
    "away": {
      "pred": 0.2619,
      "is_result": true
    },
    "btts": {
      "pred": 0.5332,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3777,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1955,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.223,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1146,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4106,
      "hit": false,
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
      "pred": 0.567,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2565,
      "is_result": false
    },
    "draw": {
      "pred": 0.2785,
      "is_result": false
    },
    "away": {
      "pred": 0.465,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4072,
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
      "pred": 0.5645,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3769,
      "is_result": false
    },
    "draw": {
      "pred": 0.2873,
      "is_result": true
    },
    "away": {
      "pred": 0.3358,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3071,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Liverpool",
    "away_team": "Fulham",
    "match_date": "2026-09-12",
    "score": "0-0",
    "over15": {
      "pred": 0.7763,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5652,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3448,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4933,
      "is_result": false
    },
    "draw": {
      "pred": 0.2773,
      "is_result": true
    },
    "away": {
      "pred": 0.2294,
      "is_result": false
    },
    "btts": {
      "pred": 0.5606,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4331,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.253,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2001,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1074,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.403,
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
      "pred": 0.5915,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5335,
      "is_result": false
    },
    "draw": {
      "pred": 0.2573,
      "is_result": true
    },
    "away": {
      "pred": 0.2093,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3721,
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
      "pred": 0.6205,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.6524,
      "is_result": true
    },
    "draw": {
      "pred": 0.2078,
      "is_result": false
    },
    "away": {
      "pred": 0.1399,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5107,
      "hit": true,
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
      "pred": 0.4435,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.359,
      "is_result": true
    },
    "draw": {
      "pred": 0.3183,
      "is_result": false
    },
    "away": {
      "pred": 0.3227,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.2432,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Tottenham",
    "away_team": "Everton",
    "match_date": "2026-09-12",
    "score": "0-0",
    "over15": {
      "pred": 0.7543,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4653,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.348,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3188,
      "is_result": false
    },
    "draw": {
      "pred": 0.282,
      "is_result": true
    },
    "away": {
      "pred": 0.3993,
      "is_result": false
    },
    "btts": {
      "pred": 0.5465,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4016,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.139,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2237,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1837,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3849,
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
      "pred": 0.5414,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.333,
      "is_result": false
    },
    "draw": {
      "pred": 0.2928,
      "is_result": false
    },
    "away": {
      "pred": 0.3742,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4826,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish Championship",
    "home_team": "Ayr",
    "away_team": "Inverness C",
    "match_date": "2026-09-12",
    "score": "1-3",
    "over15": {
      "pred": 0.7333,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3901,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3503,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4181,
      "is_result": false
    },
    "draw": {
      "pred": 0.3204,
      "is_result": false
    },
    "away": {
      "pred": 0.2615,
      "is_result": true
    },
    "btts": {
      "pred": 0.5234,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3477,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1767,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2387,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.108,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3452,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish Championship",
    "home_team": "Dunfermline",
    "away_team": "Queens Park",
    "match_date": "2026-09-12",
    "score": "2-0",
    "over15": {
      "pred": 0.7576,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4638,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.348,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4573,
      "is_result": true
    },
    "draw": {
      "pred": 0.305,
      "is_result": false
    },
    "away": {
      "pred": 0.2377,
      "is_result": false
    },
    "btts": {
      "pred": 0.5395,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3871,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2154,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2233,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1009,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3435,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish Championship",
    "home_team": "Raith Rvs",
    "away_team": "Arbroath",
    "match_date": "2026-09-12",
    "score": "4-0",
    "over15": {
      "pred": 0.7762,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5553,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3451,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4933,
      "is_result": true
    },
    "draw": {
      "pred": 0.2863,
      "is_result": false
    },
    "away": {
      "pred": 0.2204,
      "is_result": false
    },
    "btts": {
      "pred": 0.5597,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4263,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2514,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2075,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1008,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3405,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish League One",
    "home_team": "Airdrie Utd",
    "away_team": "Alloa",
    "match_date": "2026-09-12",
    "score": "1-0",
    "over15": {
      "pred": 0.7405,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4214,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3493,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2655,
      "is_result": true
    },
    "draw": {
      "pred": 0.2568,
      "is_result": false
    },
    "away": {
      "pred": 0.4778,
      "is_result": false
    },
    "btts": {
      "pred": 0.5143,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3502,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0811,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2123,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.221,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3417,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish League One",
    "home_team": "East Kilbride",
    "away_team": "Peterhead",
    "match_date": "2026-09-12",
    "score": "3-1",
    "over15": {
      "pred": 0.7725,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6204,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3511,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5498,
      "is_result": true
    },
    "draw": {
      "pred": 0.2252,
      "is_result": false
    },
    "away": {
      "pred": 0.2249,
      "is_result": false
    },
    "btts": {
      "pred": 0.5689,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5123,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2931,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1662,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1096,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4313,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish League One",
    "home_team": "Montrose",
    "away_team": "Cove Rangers",
    "match_date": "2026-09-12",
    "score": "2-1",
    "over15": {
      "pred": 0.7742,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6058,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3438,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3385,
      "is_result": true
    },
    "draw": {
      "pred": 0.2767,
      "is_result": false
    },
    "away": {
      "pred": 0.3848,
      "is_result": false
    },
    "btts": {
      "pred": 0.5687,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4931,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1792,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.193,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1964,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3726,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish League One",
    "home_team": "Queen of Sth",
    "away_team": "East Fife",
    "match_date": "2026-09-12",
    "score": "1-1",
    "over15": {
      "pred": 0.7767,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5511,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3452,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4936,
      "is_result": false
    },
    "draw": {
      "pred": 0.2798,
      "is_result": true
    },
    "away": {
      "pred": 0.2266,
      "is_result": false
    },
    "btts": {
      "pred": 0.556,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4258,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2504,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2014,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1042,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.342,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish League Two",
    "home_team": "Annan Athletic",
    "away_team": "Elgin",
    "match_date": "2026-09-12",
    "score": "2-0",
    "over15": {
      "pred": 0.7749,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6013,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3424,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3366,
      "is_result": true
    },
    "draw": {
      "pred": 0.2676,
      "is_result": false
    },
    "away": {
      "pred": 0.3958,
      "is_result": false
    },
    "btts": {
      "pred": 0.5675,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4797,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1756,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1938,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1981,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.347,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish League Two",
    "home_team": "Clyde",
    "away_team": "Kelty Hearts",
    "match_date": "2026-09-12",
    "score": "4-1",
    "over15": {
      "pred": 0.7724,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6234,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3527,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5424,
      "is_result": true
    },
    "draw": {
      "pred": 0.219,
      "is_result": false
    },
    "away": {
      "pred": 0.2386,
      "is_result": false
    },
    "btts": {
      "pred": 0.5698,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5268,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2883,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1623,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1191,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4757,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish League Two",
    "home_team": "Edinburgh City",
    "away_team": "Stirling",
    "match_date": "2026-09-12",
    "score": "7-3",
    "over15": {
      "pred": 0.7723,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.626,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.353,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.455,
      "is_result": true
    },
    "draw": {
      "pred": 0.2527,
      "is_result": false
    },
    "away": {
      "pred": 0.2922,
      "is_result": false
    },
    "btts": {
      "pred": 0.5714,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5447,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2439,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1693,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1582,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4165,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish League Two",
    "home_team": "Spartans",
    "away_team": "Forfar",
    "match_date": "2026-09-12",
    "score": "5-1",
    "over15": {
      "pred": 0.7655,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5141,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3465,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4725,
      "is_result": true
    },
    "draw": {
      "pred": 0.2868,
      "is_result": false
    },
    "away": {
      "pred": 0.2407,
      "is_result": false
    },
    "btts": {
      "pred": 0.5473,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4133,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2336,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2039,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1098,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3433,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish League Two",
    "home_team": "Stranraer",
    "away_team": "Dumbarton",
    "match_date": "2026-09-12",
    "score": "3-1",
    "over15": {
      "pred": 0.7581,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4873,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3473,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4559,
      "is_result": true
    },
    "draw": {
      "pred": 0.2941,
      "is_result": false
    },
    "away": {
      "pred": 0.25,
      "is_result": false
    },
    "btts": {
      "pred": 0.542,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4036,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2207,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2089,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1124,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3606,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "Aberdeen",
    "away_team": "Rangers",
    "match_date": NaN,
    "score": "0-1",
    "over25": {
      "pred": 0.5844,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2528,
      "is_result": false
    },
    "draw": {
      "pred": 0.252,
      "is_result": false
    },
    "away": {
      "pred": 0.4952,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3827,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "Celtic",
    "away_team": "Falkirk",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.6283,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.739,
      "is_result": true
    },
    "draw": {
      "pred": 0.1617,
      "is_result": false
    },
    "away": {
      "pred": 0.0994,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.6159,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "Dundee",
    "away_team": "Hibernian",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.5879,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3093,
      "is_result": false
    },
    "draw": {
      "pred": 0.2576,
      "is_result": false
    },
    "away": {
      "pred": 0.4332,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4695,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "Hearts",
    "away_team": "St Johnstone",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.561,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.6157,
      "is_result": true
    },
    "draw": {
      "pred": 0.2279,
      "is_result": false
    },
    "away": {
      "pred": 0.1564,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4428,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "Kilmarnock",
    "away_team": "Dundee United",
    "match_date": NaN,
    "score": "0-4",
    "over25": {
      "pred": 0.4389,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3991,
      "is_result": false
    },
    "draw": {
      "pred": 0.296,
      "is_result": false
    },
    "away": {
      "pred": 0.3049,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3069,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "Rangers",
    "away_team": "St Mirren",
    "match_date": "2026-09-09",
    "score": "1-0",
    "over15": {
      "pred": 0.812,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6035,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3567,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7449,
      "is_result": true
    },
    "draw": {
      "pred": 0.16,
      "is_result": false
    },
    "away": {
      "pred": 0.0952,
      "is_result": false
    },
    "btts": {
      "pred": 0.5419,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4295,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3767,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "St Johnstone",
    "away_team": "Celtic",
    "match_date": "2026-09-09",
    "score": "0-1",
    "over15": {
      "pred": 0.904,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7826,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.377,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2987,
      "is_result": false
    },
    "draw": {
      "pred": 0.1226,
      "is_result": false
    },
    "away": {
      "pred": 0.5787,
      "is_result": true
    },
    "btts": {
      "pred": 0.5728,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5964,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4604,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "St Mirren",
    "away_team": "Motherwell",
    "match_date": NaN,
    "score": "3-3",
    "over25": {
      "pred": 0.4247,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3218,
      "is_result": false
    },
    "draw": {
      "pred": 0.3011,
      "is_result": true
    },
    "away": {
      "pred": 0.3771,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3316,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Atalanta",
    "away_team": "Cagliari",
    "match_date": "2026-09-12",
    "score": "1-2",
    "over15": {
      "pred": 0.7144,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3743,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3511,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4744,
      "is_result": false
    },
    "draw": {
      "pred": 0.295,
      "is_result": false
    },
    "away": {
      "pred": 0.2306,
      "is_result": true
    },
    "btts": {
      "pred": 0.4948,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3173,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1988,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2132,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0827,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3575,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Genoa",
    "away_team": "Frosinone",
    "match_date": "2026-09-12",
    "score": "1-1",
    "over15": {
      "pred": 0.7341,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4142,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3495,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3151,
      "is_result": false
    },
    "draw": {
      "pred": 0.2764,
      "is_result": true
    },
    "away": {
      "pred": 0.4085,
      "is_result": false
    },
    "btts": {
      "pred": 0.5259,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3698,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1298,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2185,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1776,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3785,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Lazio",
    "away_team": "Milan",
    "match_date": "2026-09-12",
    "score": "2-2",
    "over15": {
      "pred": 0.7728,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5484,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3453,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3061,
      "is_result": false
    },
    "draw": {
      "pred": 0.2563,
      "is_result": true
    },
    "away": {
      "pred": 0.4376,
      "is_result": false
    },
    "btts": {
      "pred": 0.5639,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4382,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1456,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2038,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2144,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3488,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Venezia",
    "away_team": "Fiorentina",
    "match_date": "2026-09-11",
    "score": "2-4",
    "over15": {
      "pred": 0.491,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3247,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0852,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3507,
      "is_result": false
    },
    "draw": {
      "pred": 0.3159,
      "is_result": false
    },
    "away": {
      "pred": 0.3334,
      "is_result": true
    },
    "btts": {
      "pred": 0.3156,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2775,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.2899,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie B",
    "home_team": "Empoli",
    "away_team": "Arezzo",
    "match_date": "2026-09-11",
    "score": "0-1",
    "over15": {
      "pred": 0.9189,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8093,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3813,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3832,
      "is_result": false
    },
    "draw": {
      "pred": 0.2402,
      "is_result": false
    },
    "away": {
      "pred": 0.3766,
      "is_result": true
    },
    "btts": {
      "pred": 0.8147,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6767,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3211,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie B",
    "home_team": "Padova",
    "away_team": "Ascoli",
    "match_date": "2026-09-12",
    "score": "1-0",
    "over15": {
      "pred": 0.5039,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3217,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.085,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3388,
      "is_result": true
    },
    "draw": {
      "pred": 0.3162,
      "is_result": false
    },
    "away": {
      "pred": 0.345,
      "is_result": false
    },
    "btts": {
      "pred": 0.3278,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2767,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0736,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1684,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0858,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3424,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie B",
    "home_team": "Pisa",
    "away_team": "Virtus Entella",
    "match_date": "2026-09-11",
    "score": "1-4",
    "over15": {
      "pred": 0.769,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5334,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.357,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.601,
      "is_result": false
    },
    "draw": {
      "pred": 0.2681,
      "is_result": false
    },
    "away": {
      "pred": 0.1308,
      "is_result": true
    },
    "btts": {
      "pred": 0.5277,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3992,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3455,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie B",
    "home_team": "Sudtirol",
    "away_team": "Modena",
    "match_date": "2026-09-12",
    "score": "1-1",
    "over15": {
      "pred": 0.7654,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5025,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3468,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3465,
      "is_result": false
    },
    "draw": {
      "pred": 0.2941,
      "is_result": true
    },
    "away": {
      "pred": 0.3594,
      "is_result": false
    },
    "btts": {
      "pred": 0.5593,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4203,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1653,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.222,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.172,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3676,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie B",
    "home_team": "Vicenza",
    "away_team": "Juve Stabia",
    "match_date": "2026-09-12",
    "score": "1-1",
    "over15": {
      "pred": 0.8852,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7085,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3623,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3364,
      "is_result": false
    },
    "draw": {
      "pred": 0.2348,
      "is_result": true
    },
    "away": {
      "pred": 0.4288,
      "is_result": false
    },
    "btts": {
      "pred": 0.6925,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5862,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2256,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1971,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2699,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5054,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Southern League Central",
    "home_team": "Alvechurch",
    "away_team": "Stamford",
    "match_date": "2026-09-12",
    "score": "4-0",
    "over15": {
      "pred": 0.7373,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4243,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3492,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5324,
      "is_result": true
    },
    "draw": {
      "pred": 0.265,
      "is_result": false
    },
    "away": {
      "pred": 0.2026,
      "is_result": false
    },
    "btts": {
      "pred": 0.5033,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3419,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2352,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1963,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0719,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3371,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Southern League Central",
    "home_team": "Banbury United",
    "away_team": "Leiston",
    "match_date": "2026-09-12",
    "score": "1-2",
    "over15": {
      "pred": 0.7764,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5777,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3443,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3172,
      "is_result": false
    },
    "draw": {
      "pred": 0.2583,
      "is_result": false
    },
    "away": {
      "pred": 0.4246,
      "is_result": true
    },
    "btts": {
      "pred": 0.5652,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4535,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1565,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1996,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.209,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3799,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Southern League Central",
    "home_team": "Bishop's Stortford",
    "away_team": "Leamington",
    "match_date": "2026-09-12",
    "score": "3-1",
    "over15": {
      "pred": 0.7599,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4997,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3469,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3283,
      "is_result": true
    },
    "draw": {
      "pred": 0.277,
      "is_result": false
    },
    "away": {
      "pred": 0.3947,
      "is_result": false
    },
    "btts": {
      "pred": 0.5528,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4183,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1552,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2117,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1858,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3411,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Southern League Central",
    "home_team": "Bromsgrove Sporting",
    "away_team": "Bury Town",
    "match_date": "2026-09-12",
    "score": "1-0",
    "over15": {
      "pred": 0.7752,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6007,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3426,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3082,
      "is_result": true
    },
    "draw": {
      "pred": 0.2404,
      "is_result": false
    },
    "away": {
      "pred": 0.4514,
      "is_result": false
    },
    "btts": {
      "pred": 0.5667,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4747,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.151,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1897,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2261,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3894,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Southern League Central",
    "home_team": "Halesowen Town",
    "away_team": "Leighton Town",
    "match_date": "2026-09-12",
    "score": "4-2",
    "over15": {
      "pred": 0.8696,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6873,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3585,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4976,
      "is_result": true
    },
    "draw": {
      "pred": 0.2244,
      "is_result": false
    },
    "away": {
      "pred": 0.2779,
      "is_result": false
    },
    "btts": {
      "pred": 0.6176,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5682,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2873,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1696,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1606,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.433,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Southern League Central",
    "home_team": "Hitchin Town",
    "away_team": "Stourbridge",
    "match_date": "2026-09-12",
    "score": "1-1",
    "over15": {
      "pred": 0.7712,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5412,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3456,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2899,
      "is_result": false
    },
    "draw": {
      "pred": 0.2467,
      "is_result": true
    },
    "away": {
      "pred": 0.4634,
      "is_result": false
    },
    "btts": {
      "pred": 0.5568,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4294,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1237,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2005,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2326,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4179,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Southern League Central",
    "home_team": "Kettering Town",
    "away_team": "Stratford Town",
    "match_date": "2026-09-12",
    "score": "1-0",
    "over15": {
      "pred": 0.774,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.552,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3452,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5113,
      "is_result": true
    },
    "draw": {
      "pred": 0.2559,
      "is_result": false
    },
    "away": {
      "pred": 0.2328,
      "is_result": false
    },
    "btts": {
      "pred": 0.5519,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.426,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2543,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1925,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1051,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3444,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Southern League Central",
    "home_team": "Needham Market",
    "away_team": "Worcester City",
    "match_date": "2026-09-12",
    "score": "2-0",
    "over15": {
      "pred": 0.761,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5036,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3468,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3596,
      "is_result": true
    },
    "draw": {
      "pred": 0.287,
      "is_result": false
    },
    "away": {
      "pred": 0.3533,
      "is_result": false
    },
    "btts": {
      "pred": 0.5546,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4208,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1743,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.212,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1684,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.347,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Southern League Central",
    "home_team": "Peterborough Sports",
    "away_team": "Rushall Olympic",
    "match_date": "2026-09-12",
    "score": "4-2",
    "over15": {
      "pred": 0.7737,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6127,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3472,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3293,
      "is_result": true
    },
    "draw": {
      "pred": 0.2382,
      "is_result": false
    },
    "away": {
      "pred": 0.4326,
      "is_result": false
    },
    "btts": {
      "pred": 0.5694,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.513,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1727,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1795,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2172,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4385,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Southern League Central",
    "home_team": "Racing Club Warwick",
    "away_team": "Anstey Nomads",
    "match_date": "2026-09-12",
    "score": "2-3",
    "over15": {
      "pred": 0.7303,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4023,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3498,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2498,
      "is_result": false
    },
    "draw": {
      "pred": 0.2253,
      "is_result": false
    },
    "away": {
      "pred": 0.5249,
      "is_result": true
    },
    "btts": {
      "pred": 0.3254,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3098,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0362,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1262,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.163,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.347,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Southern League Central",
    "home_team": "Real Bedford",
    "away_team": "Redditch United",
    "match_date": "2026-09-12",
    "score": "2-1",
    "over15": {
      "pred": 0.7724,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6322,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3535,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6075,
      "is_result": true
    },
    "draw": {
      "pred": 0.1814,
      "is_result": false
    },
    "away": {
      "pred": 0.2111,
      "is_result": false
    },
    "btts": {
      "pred": 0.5681,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5132,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3217,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1509,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0956,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3838,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Southern League South",
    "home_team": "Bath City",
    "away_team": "Chippenham Town",
    "match_date": "2026-09-12",
    "score": "2-0",
    "over15": {
      "pred": 0.7499,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4693,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3479,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6607,
      "is_result": true
    },
    "draw": {
      "pred": 0.2261,
      "is_result": false
    },
    "away": {
      "pred": 0.1132,
      "is_result": false
    },
    "btts": {
      "pred": 0.4943,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3393,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2675,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1728,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.054,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3344,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Southern League South",
    "home_team": "Chertsey Town",
    "away_team": "Malvern Town",
    "match_date": "2026-09-12",
    "score": "5-0",
    "over15": {
      "pred": 0.9254,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8604,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3913,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.8441,
      "is_result": true
    },
    "draw": {
      "pred": 0.0981,
      "is_result": false
    },
    "away": {
      "pred": 0.0578,
      "is_result": false
    },
    "btts": {
      "pred": 0.5662,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5211,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4421,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.0852,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0389,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3474,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Southern League South",
    "home_team": "Evesham United",
    "away_team": "Berkhamsted",
    "match_date": "2026-09-12",
    "score": "0-0",
    "over15": {
      "pred": 0.7685,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5354,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3458,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3306,
      "is_result": false
    },
    "draw": {
      "pred": 0.2699,
      "is_result": true
    },
    "away": {
      "pred": 0.3994,
      "is_result": false
    },
    "btts": {
      "pred": 0.5619,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.435,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1636,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2057,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1926,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3461,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Southern League South",
    "home_team": "Frome Town",
    "away_team": "Hanwell Town",
    "match_date": "2026-09-12",
    "score": "2-2",
    "over15": {
      "pred": 0.7525,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.478,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3476,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7115,
      "is_result": false
    },
    "draw": {
      "pred": 0.2008,
      "is_result": true
    },
    "away": {
      "pred": 0.0877,
      "is_result": false
    },
    "btts": {
      "pred": 0.3211,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.321,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.186,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1071,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.028,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3453,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Southern League South",
    "home_team": "Gloucester City",
    "away_team": "Basingstoke Town",
    "match_date": "2026-09-12",
    "score": "1-1",
    "over15": {
      "pred": 0.8848,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7357,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3671,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6902,
      "is_result": false
    },
    "draw": {
      "pred": 0.1574,
      "is_result": true
    },
    "away": {
      "pred": 0.1523,
      "is_result": false
    },
    "btts": {
      "pred": 0.5701,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5501,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3499,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1318,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0884,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4444,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Southern League South",
    "home_team": "Gosport Borough",
    "away_team": "Taunton Town",
    "match_date": "2026-09-12",
    "score": "3-1",
    "over15": {
      "pred": 0.893,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7598,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3716,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4362,
      "is_result": true
    },
    "draw": {
      "pred": 0.2155,
      "is_result": false
    },
    "away": {
      "pred": 0.3483,
      "is_result": false
    },
    "btts": {
      "pred": 0.7246,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6088,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3043,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1894,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2308,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4633,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Southern League South",
    "home_team": "Hanworth Villa",
    "away_team": "Yate Town",
    "match_date": "2026-09-12",
    "score": "2-3",
    "over15": {
      "pred": 0.7594,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5023,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3469,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7718,
      "is_result": false
    },
    "draw": {
      "pred": 0.1656,
      "is_result": false
    },
    "away": {
      "pred": 0.0626,
      "is_result": true
    },
    "btts": {
      "pred": 0.2833,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2833,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1779,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.0869,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0184,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3405,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Southern League South",
    "home_team": "Havant & Waterlooville",
    "away_team": "Poole Town",
    "match_date": "2026-09-12",
    "score": "0-1",
    "over15": {
      "pred": 0.7728,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6218,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3519,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3593,
      "is_result": false
    },
    "draw": {
      "pred": 0.2299,
      "is_result": false
    },
    "away": {
      "pred": 0.4108,
      "is_result": true
    },
    "btts": {
      "pred": 0.5712,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.543,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1937,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1701,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2074,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Southern League South",
    "home_team": "Sholing",
    "away_team": "Plymouth Parkway",
    "match_date": "2026-09-12",
    "score": "1-3",
    "over15": {
      "pred": 0.7724,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6324,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3535,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5145,
      "is_result": false
    },
    "draw": {
      "pred": 0.2203,
      "is_result": false
    },
    "away": {
      "pred": 0.2652,
      "is_result": true
    },
    "btts": {
      "pred": 0.5706,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5401,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2718,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1613,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1375,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4146,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Southern League South",
    "home_team": "Uxbridge",
    "away_team": "Chichester City",
    "match_date": "2026-09-12",
    "score": "5-0",
    "over15": {
      "pred": 0.7727,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6226,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3523,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3759,
      "is_result": true
    },
    "draw": {
      "pred": 0.2321,
      "is_result": false
    },
    "away": {
      "pred": 0.392,
      "is_result": false
    },
    "btts": {
      "pred": 0.5713,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5456,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2029,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1694,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.199,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4719,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Southern League South",
    "home_team": "Wimborne Town",
    "away_team": "Bracknell Town",
    "match_date": "2026-09-12",
    "score": "2-0",
    "over15": {
      "pred": 0.7747,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.605,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3435,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4695,
      "is_result": true
    },
    "draw": {
      "pred": 0.2538,
      "is_result": false
    },
    "away": {
      "pred": 0.2767,
      "is_result": false
    },
    "btts": {
      "pred": 0.5671,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4828,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2437,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.182,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1414,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3619,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Switzerland Super League",
    "home_team": "St. Gallen",
    "away_team": "Sion",
    "match_date": "2026-09-12",
    "score": "0-3",
    "over15": {
      "pred": 0.7753,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5992,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3429,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4052,
      "is_result": false
    },
    "draw": {
      "pred": 0.2794,
      "is_result": false
    },
    "away": {
      "pred": 0.3154,
      "is_result": true
    },
    "btts": {
      "pred": 0.5669,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4731,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2098,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1943,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1627,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Atlanta Utd",
    "away_team": "Orlando City",
    "match_date": "2026-09-10",
    "score": "2-3",
    "over15": {
      "pred": 0.7752,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5581,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3591,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3388,
      "is_result": false
    },
    "draw": {
      "pred": 0.2948,
      "is_result": false
    },
    "away": {
      "pred": 0.3664,
      "is_result": true
    },
    "btts": {
      "pred": 0.5578,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4339,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1661,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1974,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1778,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Austin FC",
    "away_team": "Colorado Rapids",
    "match_date": "2026-09-10",
    "score": "1-1",
    "over15": {
      "pred": 0.7481,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4495,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.352,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4,
      "is_result": false
    },
    "draw": {
      "pred": 0.3181,
      "is_result": true
    },
    "away": {
      "pred": 0.2819,
      "is_result": false
    },
    "btts": {
      "pred": 0.5311,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.389,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1558,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1863,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.112,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "CF Montreal",
    "away_team": "Charlotte",
    "match_date": "2026-09-10",
    "score": "1-2",
    "over15": {
      "pred": 0.7648,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5175,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3563,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3324,
      "is_result": false
    },
    "draw": {
      "pred": 0.2903,
      "is_result": false
    },
    "away": {
      "pred": 0.3773,
      "is_result": true
    },
    "btts": {
      "pred": 0.5525,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4192,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1443,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1944,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1713,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Chicago Fire",
    "away_team": "Inter Miami",
    "match_date": "2026-09-10",
    "score": "1-1",
    "over15": {
      "pred": 0.8924,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.743,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3685,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3575,
      "is_result": false
    },
    "draw": {
      "pred": 0.2351,
      "is_result": true
    },
    "away": {
      "pred": 0.4075,
      "is_result": false
    },
    "btts": {
      "pred": 0.7279,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6739,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2517,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1959,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2725,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Columbus Crew",
    "away_team": "New York City",
    "match_date": "2026-09-13",
    "score": "1-2",
    "over15": {
      "pred": 0.7706,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5393,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3505,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3756,
      "is_result": false
    },
    "draw": {
      "pred": 0.3029,
      "is_result": false
    },
    "away": {
      "pred": 0.3215,
      "is_result": true
    },
    "btts": {
      "pred": 0.5568,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4278,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.178,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1953,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1488,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "DC United",
    "away_team": "Columbus Crew",
    "match_date": "2026-09-10",
    "score": "2-1",
    "over15": {
      "pred": 0.7804,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5759,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3604,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3622,
      "is_result": true
    },
    "draw": {
      "pred": 0.2987,
      "is_result": false
    },
    "away": {
      "pred": 0.3391,
      "is_result": false
    },
    "btts": {
      "pred": 0.5597,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4401,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1851,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1981,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1711,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Houston Dynamo",
    "away_team": "Real Salt Lake",
    "match_date": "2026-09-10",
    "score": "2-1",
    "over15": {
      "pred": 0.7537,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4713,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3534,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3883,
      "is_result": true
    },
    "draw": {
      "pred": 0.3144,
      "is_result": false
    },
    "away": {
      "pred": 0.2972,
      "is_result": false
    },
    "btts": {
      "pred": 0.5385,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4028,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1592,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1898,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1244,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Minnesota United",
    "away_team": "FC Dallas",
    "match_date": "2026-09-10",
    "score": "1-2",
    "over15": {
      "pred": 0.8052,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6048,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3611,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.423,
      "is_result": false
    },
    "draw": {
      "pred": 0.2819,
      "is_result": false
    },
    "away": {
      "pred": 0.2951,
      "is_result": true
    },
    "btts": {
      "pred": 0.5685,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.502,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2469,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.196,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1708,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "New York City",
    "away_team": "New England Revolution",
    "match_date": "2026-09-10",
    "score": "1-2",
    "over15": {
      "pred": 0.7684,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5335,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3574,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.426,
      "is_result": false
    },
    "draw": {
      "pred": 0.3093,
      "is_result": false
    },
    "away": {
      "pred": 0.2647,
      "is_result": true
    },
    "btts": {
      "pred": 0.5523,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4212,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2016,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1882,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1195,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Philadelphia Union",
    "away_team": "FC Cincinnati",
    "match_date": "2026-09-10",
    "score": "5-0",
    "over15": {
      "pred": 0.8048,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6045,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3612,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4321,
      "is_result": true
    },
    "draw": {
      "pred": 0.2823,
      "is_result": false
    },
    "away": {
      "pred": 0.2856,
      "is_result": false
    },
    "btts": {
      "pred": 0.568,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4983,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2511,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1948,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1648,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Portland Timbers",
    "away_team": "St. Louis City",
    "match_date": "2026-09-10",
    "score": "2-2",
    "over15": {
      "pred": 0.8068,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6064,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3609,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.455,
      "is_result": false
    },
    "draw": {
      "pred": 0.2728,
      "is_result": true
    },
    "away": {
      "pred": 0.2722,
      "is_result": false
    },
    "btts": {
      "pred": 0.568,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5016,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2647,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1916,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1544,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "San Diego FC",
    "away_team": "San Jose Earthquakes",
    "match_date": "2026-09-10",
    "score": "2-3",
    "over15": {
      "pred": 0.7988,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5989,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3621,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4928,
      "is_result": false
    },
    "draw": {
      "pred": 0.2625,
      "is_result": false
    },
    "away": {
      "pred": 0.2447,
      "is_result": true
    },
    "btts": {
      "pred": 0.563,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.456,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2643,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1847,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1277,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Toronto FC",
    "away_team": "Nashville SC",
    "match_date": "2026-09-10",
    "score": "2-1",
    "over15": {
      "pred": 0.7539,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4724,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3534,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3351,
      "is_result": true
    },
    "draw": {
      "pred": 0.2941,
      "is_result": false
    },
    "away": {
      "pred": 0.3708,
      "is_result": false
    },
    "btts": {
      "pred": 0.5395,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4037,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1308,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1909,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1542,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Vancouver Whitecaps",
    "away_team": "Austin FC",
    "match_date": "2026-09-14",
    "score": "1-2",
    "over15": {
      "pred": 0.7922,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5888,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3595,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5609,
      "is_result": false
    },
    "draw": {
      "pred": 0.2389,
      "is_result": false
    },
    "away": {
      "pred": 0.2002,
      "is_result": true
    },
    "btts": {
      "pred": 0.5804,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4511,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2961,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1883,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0959,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Vancouver Whitecaps",
    "away_team": "Los Angeles Galaxy",
    "match_date": "2026-09-10",
    "score": "3-0",
    "over15": {
      "pred": 0.821,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.631,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3584,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5846,
      "is_result": true
    },
    "draw": {
      "pred": 0.2049,
      "is_result": false
    },
    "away": {
      "pred": 0.2105,
      "is_result": false
    },
    "btts": {
      "pred": 0.5686,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5307,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3311,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1691,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1148,
      "hit": true,
      "label": "BTTS+Away"
    }
  }
];
