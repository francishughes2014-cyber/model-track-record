const RECENT_RESULTS = [
  {
    "league": "Argentina Primera Division",
    "home_team": "Banfield",
    "away_team": "Barracas Central",
    "match_date": "2026-09-15",
    "score": "1-1",
    "over15": {
      "pred": 0.75,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4781,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3438,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4427,
      "is_result": false
    },
    "draw": {
      "pred": 0.3087,
      "is_result": true
    },
    "away": {
      "pred": 0.2486,
      "is_result": false
    },
    "btts": {
      "pred": 0.5524,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4123,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2402,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2034,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1089,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Argentina Primera Division",
    "home_team": "Dep. Riestra",
    "away_team": "Lanus",
    "match_date": "2026-09-15",
    "score": "0-3",
    "over15": {
      "pred": 0.7379,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4574,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3412,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3781,
      "is_result": false
    },
    "draw": {
      "pred": 0.3131,
      "is_result": false
    },
    "away": {
      "pred": 0.3088,
      "is_result": true
    },
    "btts": {
      "pred": 0.5516,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4038,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1612,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2501,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1402,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Argentina Primera Division",
    "home_team": "Gimnasia L.P.",
    "away_team": "Banfield",
    "match_date": "2026-09-19",
    "score": "2-2",
    "over15": {
      "pred": 0.7973,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5442,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3848,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5098,
      "is_result": false
    },
    "draw": {
      "pred": 0.2818,
      "is_result": true
    },
    "away": {
      "pred": 0.2085,
      "is_result": false
    },
    "btts": {
      "pred": 0.5784,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2567,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1893,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1324,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Argentina Primera Division",
    "home_team": "Gimnasia Mendoza",
    "away_team": "Dep. Riestra",
    "match_date": "2026-09-19",
    "score": "0-0",
    "over15": {
      "pred": 0.809,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5094,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3754,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4982,
      "is_result": false
    },
    "draw": {
      "pred": 0.2989,
      "is_result": true
    },
    "away": {
      "pred": 0.2029,
      "is_result": false
    },
    "btts": {
      "pred": 0.5127,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4082,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2227,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1818,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1081,
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
    "league": "Argentina Primera Division",
    "home_team": "Instituto",
    "away_team": "Talleres Cordoba",
    "match_date": "2026-09-20",
    "score": "3-1",
    "over15": {
      "pred": 0.8008,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5379,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4092,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4119,
      "is_result": true
    },
    "draw": {
      "pred": 0.2962,
      "is_result": false
    },
    "away": {
      "pred": 0.2919,
      "is_result": false
    },
    "btts": {
      "pred": 0.5843,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4463,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1987,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2203,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1654,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Argentina Primera Division",
    "home_team": "San Lorenzo",
    "away_team": "Boca Juniors",
    "match_date": "2026-09-20",
    "score": "0-2",
    "over15": {
      "pred": 0.7936,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4823,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3501,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3042,
      "is_result": false
    },
    "draw": {
      "pred": 0.2879,
      "is_result": false
    },
    "away": {
      "pred": 0.4079,
      "is_result": true
    },
    "btts": {
      "pred": 0.5152,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3879,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1622,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1926,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1603,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Argentina Primera Division",
    "home_team": "Union de Santa Fe",
    "away_team": "Independiente",
    "match_date": "2026-09-19",
    "score": "1-2",
    "over15": {
      "pred": 0.7782,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6065,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3377,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.416,
      "is_result": false
    },
    "draw": {
      "pred": 0.2799,
      "is_result": false
    },
    "away": {
      "pred": 0.3041,
      "is_result": true
    },
    "btts": {
      "pred": 0.543,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4851,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2008,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1886,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1537,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Austria Bundesliga",
    "home_team": "A. Lustenau",
    "away_team": "Altach",
    "match_date": "2026-09-19",
    "score": "2-0",
    "over15": {
      "pred": 0.8112,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4977,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3644,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3494,
      "is_result": true
    },
    "draw": {
      "pred": 0.3171,
      "is_result": false
    },
    "away": {
      "pred": 0.3335,
      "is_result": false
    },
    "btts": {
      "pred": 0.5072,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4166,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1413,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2078,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.158,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Austria Bundesliga",
    "home_team": "Hartberg",
    "away_team": "LASK",
    "match_date": "2026-09-20",
    "score": "3-3",
    "over15": {
      "pred": 0.891,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.71,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4607,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3559,
      "is_result": false
    },
    "draw": {
      "pred": 0.2422,
      "is_result": true
    },
    "away": {
      "pred": 0.4019,
      "is_result": false
    },
    "btts": {
      "pred": 0.7855,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6167,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2966,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2775,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2115,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Austria Bundesliga",
    "home_team": "Ried",
    "away_team": "Wolfsberger AC",
    "match_date": "2026-09-20",
    "score": "4-1",
    "over15": {
      "pred": 0.809,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5128,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3751,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.37,
      "is_result": true
    },
    "draw": {
      "pred": 0.3064,
      "is_result": false
    },
    "away": {
      "pred": 0.3236,
      "is_result": false
    },
    "btts": {
      "pred": 0.5158,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4376,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.173,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2006,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1422,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Austria Bundesliga",
    "home_team": "SK Rapid",
    "away_team": "Tirol",
    "match_date": "2026-09-18",
    "score": "3-0",
    "over15": {
      "pred": 0.9055,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8119,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3751,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6608,
      "is_result": true
    },
    "draw": {
      "pred": 0.1712,
      "is_result": false
    },
    "away": {
      "pred": 0.168,
      "is_result": false
    },
    "btts": {
      "pred": 0.6008,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6008,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3551,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1417,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.104,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Austria Bundesliga",
    "home_team": "Salzburg",
    "away_team": "Sturm Graz",
    "match_date": "2026-09-20",
    "score": "3-0",
    "over15": {
      "pred": 0.8817,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6909,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4394,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5177,
      "is_result": true
    },
    "draw": {
      "pred": 0.243,
      "is_result": false
    },
    "away": {
      "pred": 0.2393,
      "is_result": false
    },
    "btts": {
      "pred": 0.7099,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5661,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.347,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1986,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1644,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Bahia",
    "away_team": "Remo",
    "match_date": "2026-09-15",
    "score": "2-1",
    "over15": {
      "pred": 0.7709,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.622,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3599,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.573,
      "is_result": true
    },
    "draw": {
      "pred": 0.2155,
      "is_result": false
    },
    "away": {
      "pred": 0.2115,
      "is_result": false
    },
    "btts": {
      "pred": 0.5837,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.514,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3087,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1628,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1122,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Botafogo RJ",
    "away_team": "Gremio",
    "match_date": "2026-09-17",
    "score": "3-2",
    "over15": {
      "pred": 0.7946,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5485,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.342,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5572,
      "is_result": true
    },
    "draw": {
      "pred": 0.2511,
      "is_result": false
    },
    "away": {
      "pred": 0.1917,
      "is_result": false
    },
    "btts": {
      "pred": 0.5711,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4419,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2963,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1779,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0969,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Corinthians",
    "away_team": "Fluminense",
    "match_date": "2026-09-20",
    "score": "1-3",
    "over15": {
      "pred": 0.7999,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5377,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3986,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3841,
      "is_result": false
    },
    "draw": {
      "pred": 0.2885,
      "is_result": false
    },
    "away": {
      "pred": 0.3274,
      "is_result": true
    },
    "btts": {
      "pred": 0.5965,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.444,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.201,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2214,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.174,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Gremio",
    "away_team": "Palmeiras",
    "match_date": "2026-09-20",
    "score": "0-0",
    "over15": {
      "pred": 0.8023,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.538,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4142,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3215,
      "is_result": false
    },
    "draw": {
      "pred": 0.2765,
      "is_result": true
    },
    "away": {
      "pred": 0.402,
      "is_result": false
    },
    "btts": {
      "pred": 0.5726,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.447,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1855,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2138,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1732,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Mirassol",
    "away_team": "Botafogo RJ",
    "match_date": "2026-09-19",
    "score": "2-0",
    "over15": {
      "pred": 0.7921,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5502,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3579,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4225,
      "is_result": true
    },
    "draw": {
      "pred": 0.2838,
      "is_result": false
    },
    "away": {
      "pred": 0.2937,
      "is_result": false
    },
    "btts": {
      "pred": 0.586,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.459,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2148,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.203,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1683,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Remo",
    "away_team": "Santos",
    "match_date": "2026-09-20",
    "score": "1-2",
    "over15": {
      "pred": 0.7863,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5748,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.34,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3668,
      "is_result": false
    },
    "draw": {
      "pred": 0.2757,
      "is_result": false
    },
    "away": {
      "pred": 0.3575,
      "is_result": true
    },
    "btts": {
      "pred": 0.5642,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4726,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1908,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1984,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1751,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Sao Paulo",
    "away_team": "Internacional",
    "match_date": "2026-09-20",
    "score": "1-0",
    "over15": {
      "pred": 0.7949,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.537,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3694,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4685,
      "is_result": true
    },
    "draw": {
      "pred": 0.2838,
      "is_result": false
    },
    "away": {
      "pred": 0.2477,
      "is_result": false
    },
    "btts": {
      "pred": 0.5978,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4434,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2217,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2172,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1589,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Vasco",
    "away_team": "Coritiba",
    "match_date": "2026-09-20",
    "score": "5-0",
    "over15": {
      "pred": 0.7769,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6357,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2993,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4659,
      "is_result": true
    },
    "draw": {
      "pred": 0.2616,
      "is_result": false
    },
    "away": {
      "pred": 0.2725,
      "is_result": false
    },
    "btts": {
      "pred": 0.5581,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5064,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2307,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1818,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1456,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Vitoria",
    "away_team": "Cruzeiro",
    "match_date": "2026-09-20",
    "score": "1-3",
    "over15": {
      "pred": 0.8031,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5381,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4116,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3325,
      "is_result": false
    },
    "draw": {
      "pred": 0.2817,
      "is_result": false
    },
    "away": {
      "pred": 0.3859,
      "is_result": true
    },
    "btts": {
      "pred": 0.567,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4479,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1848,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2119,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1703,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "Bayern Munich",
    "away_team": "Union Berlin",
    "match_date": "2026-09-18",
    "score": "7-0",
    "over15": {
      "pred": 0.9317,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.9086,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3928,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7888,
      "is_result": true
    },
    "draw": {
      "pred": 0.1326,
      "is_result": false
    },
    "away": {
      "pred": 0.0786,
      "is_result": false
    },
    "btts": {
      "pred": 0.5899,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5523,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4412,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.0984,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0503,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4583,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8424,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "Ein Frankfurt",
    "away_team": "Freiburg",
    "match_date": "2026-09-19",
    "score": "2-2",
    "over15": {
      "pred": 0.9472,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.9472,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.6667,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6237,
      "is_result": false
    },
    "draw": {
      "pred": 0.1698,
      "is_result": true
    },
    "away": {
      "pred": 0.2065,
      "is_result": false
    },
    "btts": {
      "pred": 0.9046,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.8998,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.503,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.189,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2126,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4757,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8553,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "Hamburg",
    "away_team": "FC Koln",
    "match_date": "2026-09-19",
    "score": "2-1",
    "over15": {
      "pred": 0.8055,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5291,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3947,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2481,
      "is_result": true
    },
    "draw": {
      "pred": 0.2483,
      "is_result": false
    },
    "away": {
      "pred": 0.5036,
      "is_result": false
    },
    "btts": {
      "pred": 0.5062,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4421,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0611,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2044,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2407,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3588,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6208,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "Leverkusen",
    "away_team": "RB Leipzig",
    "match_date": "2026-09-20",
    "score": "2-0",
    "over15": {
      "pred": 0.9304,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8962,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.6319,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6012,
      "is_result": true
    },
    "draw": {
      "pred": 0.2026,
      "is_result": false
    },
    "away": {
      "pred": 0.1962,
      "is_result": false
    },
    "btts": {
      "pred": 0.7754,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6878,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3903,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2068,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1783,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5151,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8937,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "M'gladbach",
    "away_team": "Mainz",
    "match_date": "2026-09-19",
    "score": "3-4",
    "over15": {
      "pred": 0.9106,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8269,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3582,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5067,
      "is_result": false
    },
    "draw": {
      "pred": 0.2186,
      "is_result": false
    },
    "away": {
      "pred": 0.2747,
      "is_result": true
    },
    "btts": {
      "pred": 0.8775,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7608,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4901,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.19,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1974,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4296,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8151,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "Paderborn",
    "away_team": "Hoffenheim",
    "match_date": "2026-09-20",
    "score": "3-1",
    "over15": {
      "pred": 0.7596,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4147,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3285,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2787,
      "is_result": true
    },
    "draw": {
      "pred": 0.2455,
      "is_result": false
    },
    "away": {
      "pred": 0.4759,
      "is_result": false
    },
    "btts": {
      "pred": 0.4676,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2804,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0437,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2472,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1768,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3455,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7076,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "Schalke 04",
    "away_team": "Elversberg",
    "match_date": "2026-09-20",
    "score": "0-0",
    "over15": {
      "pred": 0.4632,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3128,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0827,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.311,
      "is_result": false
    },
    "draw": {
      "pred": 0.3071,
      "is_result": true
    },
    "away": {
      "pred": 0.382,
      "is_result": false
    },
    "btts": {
      "pred": 0.3023,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2024,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0387,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.202,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0617,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3455,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.709,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "Stuttgart",
    "away_team": "Dortmund",
    "match_date": "2026-09-19",
    "score": "0-1",
    "over15": {
      "pred": 0.7987,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6704,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3648,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4915,
      "is_result": false
    },
    "draw": {
      "pred": 0.2447,
      "is_result": false
    },
    "away": {
      "pred": 0.2638,
      "is_result": true
    },
    "btts": {
      "pred": 0.6569,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.549,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3414,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1658,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1497,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4341,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8192,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "Werder Bremen",
    "away_team": "Augsburg",
    "match_date": "2026-09-19",
    "score": "3-2",
    "over15": {
      "pred": 0.8002,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5397,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4048,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2812,
      "is_result": true
    },
    "draw": {
      "pred": 0.2857,
      "is_result": false
    },
    "away": {
      "pred": 0.4331,
      "is_result": false
    },
    "btts": {
      "pred": 0.5883,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1606,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2221,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2056,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.355,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6598,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Bundesliga 2",
    "home_team": "Bielefeld",
    "away_team": "Heidenheim",
    "match_date": "2026-09-20",
    "score": "2-2",
    "over15": {
      "pred": 0.884,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7339,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4811,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4077,
      "is_result": false
    },
    "draw": {
      "pred": 0.2295,
      "is_result": true
    },
    "away": {
      "pred": 0.3628,
      "is_result": false
    },
    "btts": {
      "pred": 0.7797,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6438,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3302,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.247,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2024,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5079,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8675,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Bundesliga 2",
    "home_team": "Cottbus",
    "away_team": "St Pauli",
    "match_date": "2026-09-20",
    "score": "1-1",
    "over15": {
      "pred": 0.9339,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8782,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.6141,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5646,
      "is_result": false
    },
    "draw": {
      "pred": 0.2069,
      "is_result": true
    },
    "away": {
      "pred": 0.2284,
      "is_result": false
    },
    "btts": {
      "pred": 0.7948,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7198,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3951,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2149,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1849,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4339,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7163,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Bundesliga 2",
    "home_team": "Dresden",
    "away_team": "Hertha",
    "match_date": "2026-09-19",
    "score": "1-2",
    "over15": {
      "pred": 0.8412,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7037,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4249,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3772,
      "is_result": false
    },
    "draw": {
      "pred": 0.2219,
      "is_result": false
    },
    "away": {
      "pred": 0.4009,
      "is_result": true
    },
    "btts": {
      "pred": 0.8081,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6268,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3725,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2629,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1726,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4401,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.804,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Bundesliga 2",
    "home_team": "Greuther Furth",
    "away_team": "Magdeburg",
    "match_date": "2026-09-18",
    "score": "1-1",
    "over15": {
      "pred": 0.777,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7045,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3574,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4253,
      "is_result": false
    },
    "draw": {
      "pred": 0.2287,
      "is_result": true
    },
    "away": {
      "pred": 0.346,
      "is_result": false
    },
    "btts": {
      "pred": 0.6315,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6277,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2485,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1949,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1881,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5164,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8696,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Bundesliga 2",
    "home_team": "Hannover",
    "away_team": "Bochum",
    "match_date": "2026-09-20",
    "score": "2-1",
    "over15": {
      "pred": 0.7995,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5375,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3903,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4932,
      "is_result": true
    },
    "draw": {
      "pred": 0.2758,
      "is_result": false
    },
    "away": {
      "pred": 0.2311,
      "is_result": false
    },
    "btts": {
      "pred": 0.5714,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4451,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2239,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2146,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1329,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3973,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7271,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Bundesliga 2",
    "home_team": "Holstein Kiel",
    "away_team": "Osnabruck",
    "match_date": "2026-09-19",
    "score": "1-1",
    "over15": {
      "pred": 0.7748,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6645,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.353,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6316,
      "is_result": false
    },
    "draw": {
      "pred": 0.1851,
      "is_result": true
    },
    "away": {
      "pred": 0.1832,
      "is_result": false
    },
    "btts": {
      "pred": 0.553,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4946,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3528,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1076,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0926,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3925,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7564,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Bundesliga 2",
    "home_team": "Kaiserslautern",
    "away_team": "Braunschweig",
    "match_date": "2026-09-19",
    "score": "1-0",
    "over15": {
      "pred": 0.7728,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.642,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3346,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.41,
      "is_result": true
    },
    "draw": {
      "pred": 0.2458,
      "is_result": false
    },
    "away": {
      "pred": 0.3443,
      "is_result": false
    },
    "btts": {
      "pred": 0.5809,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5202,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2273,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1796,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1741,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.467,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8284,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Bundesliga 2",
    "home_team": "Karlsruhe",
    "away_team": "Nurnberg",
    "match_date": "2026-09-19",
    "score": "0-1",
    "over15": {
      "pred": 0.8559,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7244,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4094,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3265,
      "is_result": false
    },
    "draw": {
      "pred": 0.2118,
      "is_result": false
    },
    "away": {
      "pred": 0.4617,
      "is_result": true
    },
    "btts": {
      "pred": 0.8308,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.66,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4026,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.3498,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0784,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4342,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7987,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Bundesliga 2",
    "home_team": "Wolfsburg",
    "away_team": "Darmstadt",
    "match_date": "2026-09-18",
    "score": "5-1",
    "over15": {
      "pred": 0.7791,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6741,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3562,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7041,
      "is_result": true
    },
    "draw": {
      "pred": 0.1635,
      "is_result": false
    },
    "away": {
      "pred": 0.1324,
      "is_result": false
    },
    "btts": {
      "pred": 0.5902,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4913,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3589,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1457,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0857,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5413,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8874,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Birmingham",
    "away_team": "Middlesbrough",
    "match_date": "2026-09-19",
    "score": "2-2",
    "over15": {
      "pred": 0.7774,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6137,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3372,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4118,
      "is_result": false
    },
    "draw": {
      "pred": 0.2733,
      "is_result": true
    },
    "away": {
      "pred": 0.3149,
      "is_result": false
    },
    "btts": {
      "pred": 0.5394,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4886,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1986,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1848,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.156,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4444,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8236,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Blackburn",
    "away_team": "QPR",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.5376,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3947,
      "is_result": false
    },
    "draw": {
      "pred": 0.2793,
      "is_result": false
    },
    "away": {
      "pred": 0.326,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4146,
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
      "pred": 0.3916,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3378,
      "is_result": false
    },
    "draw": {
      "pred": 0.3441,
      "is_result": false
    },
    "away": {
      "pred": 0.3181,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3652,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Bristol City",
    "away_team": "Lincoln",
    "match_date": "2026-09-15",
    "score": "0-1",
    "over15": {
      "pred": 0.7175,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4289,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3377,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4269,
      "is_result": false
    },
    "draw": {
      "pred": 0.3149,
      "is_result": false
    },
    "away": {
      "pred": 0.2583,
      "is_result": true
    },
    "btts": {
      "pred": 0.5297,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3672,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1916,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2234,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1147,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.376,
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
      "pred": 0.5382,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4395,
      "is_result": true
    },
    "draw": {
      "pred": 0.2862,
      "is_result": false
    },
    "away": {
      "pred": 0.2743,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3021,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Bristol City",
    "away_team": "Watford",
    "match_date": "2026-09-18",
    "score": "1-0",
    "over15": {
      "pred": 0.7474,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4712,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3261,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4176,
      "is_result": true
    },
    "draw": {
      "pred": 0.3116,
      "is_result": false
    },
    "away": {
      "pred": 0.2708,
      "is_result": false
    },
    "btts": {
      "pred": 0.5406,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3996,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1888,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2224,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1295,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3538,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6624,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Burnley",
    "away_team": "Derby",
    "match_date": "2026-09-19",
    "score": "1-1",
    "over15": {
      "pred": 0.805,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5307,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3964,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.466,
      "is_result": false
    },
    "draw": {
      "pred": 0.2997,
      "is_result": true
    },
    "away": {
      "pred": 0.2342,
      "is_result": false
    },
    "btts": {
      "pred": 0.5266,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2116,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1864,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1286,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3526,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6778,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Cardiff",
    "away_team": "Charlton",
    "match_date": "2026-09-19",
    "score": "3-1",
    "over15": {
      "pred": 0.7979,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4873,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3548,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4353,
      "is_result": true
    },
    "draw": {
      "pred": 0.3179,
      "is_result": false
    },
    "away": {
      "pred": 0.2467,
      "is_result": false
    },
    "btts": {
      "pred": 0.515,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3918,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1966,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1904,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.128,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3562,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6438,
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
      "pred": 0.5371,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3527,
      "is_result": false
    },
    "draw": {
      "pred": 0.2714,
      "is_result": true
    },
    "away": {
      "pred": 0.3759,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3663,
      "hit": false,
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
      "pred": 0.52,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3577,
      "is_result": true
    },
    "draw": {
      "pred": 0.3049,
      "is_result": false
    },
    "away": {
      "pred": 0.3375,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3044,
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
      "pred": 0.5373,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4214,
      "is_result": false
    },
    "draw": {
      "pred": 0.2732,
      "is_result": false
    },
    "away": {
      "pred": 0.3054,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3953,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Lincoln",
    "away_team": "Swansea",
    "match_date": "2026-09-19",
    "score": "1-2",
    "over15": {
      "pred": 0.8033,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5342,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4054,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4085,
      "is_result": false
    },
    "draw": {
      "pred": 0.3014,
      "is_result": false
    },
    "away": {
      "pred": 0.2901,
      "is_result": true
    },
    "btts": {
      "pred": 0.5605,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1973,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2064,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1567,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3778,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.751,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Middlesbrough",
    "away_team": "Millwall",
    "match_date": "2026-09-15",
    "score": "2-2",
    "over15": {
      "pred": 0.7708,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6205,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3602,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4052,
      "is_result": false
    },
    "draw": {
      "pred": 0.2645,
      "is_result": true
    },
    "away": {
      "pred": 0.3303,
      "is_result": false
    },
    "btts": {
      "pred": 0.5755,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5458,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2442,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1849,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1464,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3736,
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
      "pred": 0.5691,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4969,
      "is_result": true
    },
    "draw": {
      "pred": 0.2517,
      "is_result": false
    },
    "away": {
      "pred": 0.2514,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3757,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Millwall",
    "away_team": "West Ham",
    "match_date": "2026-09-19",
    "score": "2-2",
    "over15": {
      "pred": 0.8724,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7321,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4055,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2992,
      "is_result": false
    },
    "draw": {
      "pred": 0.2217,
      "is_result": true
    },
    "away": {
      "pred": 0.4791,
      "is_result": false
    },
    "btts": {
      "pred": 0.852,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.663,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4235,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.4012,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0274,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4919,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8635,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Norwich",
    "away_team": "Bolton",
    "match_date": "2026-09-20",
    "score": "3-4",
    "over15": {
      "pred": 0.7915,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5471,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.359,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5346,
      "is_result": false
    },
    "draw": {
      "pred": 0.2698,
      "is_result": false
    },
    "away": {
      "pred": 0.1956,
      "is_result": true
    },
    "btts": {
      "pred": 0.5985,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4418,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2706,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2119,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1159,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4602,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6996,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Norwich",
    "away_team": "Burnley",
    "match_date": NaN,
    "score": "4-1",
    "over25": {
      "pred": 0.608,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4785,
      "is_result": true
    },
    "draw": {
      "pred": 0.2474,
      "is_result": false
    },
    "away": {
      "pred": 0.2742,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5052,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Portsmouth",
    "away_team": "Blackburn",
    "match_date": "2026-09-19",
    "score": "2-2",
    "over15": {
      "pred": 0.806,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5254,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.391,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4314,
      "is_result": false
    },
    "draw": {
      "pred": 0.3058,
      "is_result": true
    },
    "away": {
      "pred": 0.2628,
      "is_result": false
    },
    "btts": {
      "pred": 0.5299,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1971,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1943,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1385,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3524,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6804,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "QPR",
    "away_team": "Preston",
    "match_date": "2026-09-19",
    "score": "2-2",
    "over15": {
      "pred": 0.7739,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6287,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3359,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4917,
      "is_result": false
    },
    "draw": {
      "pred": 0.2601,
      "is_result": true
    },
    "away": {
      "pred": 0.2482,
      "is_result": false
    },
    "btts": {
      "pred": 0.5408,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4907,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.263,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1502,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1276,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4179,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7988,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Southampton",
    "away_team": "Millwall",
    "match_date": NaN,
    "score": "5-1",
    "over25": {
      "pred": 0.6792,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.505,
      "is_result": true
    },
    "draw": {
      "pred": 0.2219,
      "is_result": false
    },
    "away": {
      "pred": 0.2731,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4308,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Stoke",
    "away_team": "Sheffield United",
    "match_date": "2026-09-19",
    "score": "2-1",
    "over15": {
      "pred": 0.8001,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5395,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4055,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3372,
      "is_result": true
    },
    "draw": {
      "pred": 0.2918,
      "is_result": false
    },
    "away": {
      "pred": 0.371,
      "is_result": false
    },
    "btts": {
      "pred": 0.5947,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1883,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2211,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1854,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3575,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7225,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Watford",
    "away_team": "West Ham",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.6521,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2242,
      "is_result": false
    },
    "draw": {
      "pred": 0.2225,
      "is_result": true
    },
    "away": {
      "pred": 0.5533,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5666,
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
      "pred": 0.662,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.6093,
      "is_result": true
    },
    "draw": {
      "pred": 0.2064,
      "is_result": false
    },
    "away": {
      "pred": 0.1843,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.6317,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Wolves",
    "away_team": "West Brom",
    "match_date": "2026-09-20",
    "score": "1-0",
    "over15": {
      "pred": 0.8188,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6593,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3431,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5265,
      "is_result": true
    },
    "draw": {
      "pred": 0.2482,
      "is_result": false
    },
    "away": {
      "pred": 0.2253,
      "is_result": false
    },
    "btts": {
      "pred": 0.5909,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5229,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2823,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1686,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.14,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5029,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8766,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Wrexham",
    "away_team": "Birmingham",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.6101,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4338,
      "is_result": false
    },
    "draw": {
      "pred": 0.2518,
      "is_result": false
    },
    "away": {
      "pred": 0.3144,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.5176,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Wrexham",
    "away_team": "Southampton",
    "match_date": "2026-09-19",
    "score": "2-1",
    "over15": {
      "pred": 0.8327,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6899,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4043,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2864,
      "is_result": true
    },
    "draw": {
      "pred": 0.2294,
      "is_result": false
    },
    "away": {
      "pred": 0.4843,
      "is_result": false
    },
    "btts": {
      "pred": 0.7579,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5868,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.343,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.3445,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0704,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.405,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7858,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "China Super League",
    "home_team": "Zhejiang Professional",
    "away_team": "Wuhan Three Towns",
    "match_date": "2026-09-18",
    "score": "4-1",
    "over15": {
      "pred": 0.8868,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7606,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3664,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5405,
      "is_result": true
    },
    "draw": {
      "pred": 0.2159,
      "is_result": false
    },
    "away": {
      "pred": 0.2436,
      "is_result": false
    },
    "btts": {
      "pred": 0.6549,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6481,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.313,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1779,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.164,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Denmark Superliga",
    "home_team": "Brondby",
    "away_team": "FC Copenhagen",
    "match_date": "2026-09-20",
    "score": "0-1",
    "over15": {
      "pred": 0.7859,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6412,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2933,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3183,
      "is_result": false
    },
    "draw": {
      "pred": 0.2527,
      "is_result": false
    },
    "away": {
      "pred": 0.429,
      "is_result": true
    },
    "btts": {
      "pred": 0.606,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5183,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.203,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2276,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1755,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Denmark Superliga",
    "home_team": "Horsens",
    "away_team": "Aarhus",
    "match_date": "2026-09-20",
    "score": "2-2",
    "over15": {
      "pred": 0.779,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6241,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3127,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3304,
      "is_result": false
    },
    "draw": {
      "pred": 0.265,
      "is_result": true
    },
    "away": {
      "pred": 0.4046,
      "is_result": false
    },
    "btts": {
      "pred": 0.5607,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5005,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1864,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2102,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1641,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Denmark Superliga",
    "home_team": "Lyngby",
    "away_team": "Silkeborg",
    "match_date": "2026-09-18",
    "score": "0-4",
    "over15": {
      "pred": 0.7964,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5432,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3429,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4381,
      "is_result": false
    },
    "draw": {
      "pred": 0.2939,
      "is_result": false
    },
    "away": {
      "pred": 0.268,
      "is_result": true
    },
    "btts": {
      "pred": 0.5907,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4496,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2314,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2099,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1494,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Denmark Superliga",
    "home_team": "Midtjylland",
    "away_team": "Brondby",
    "match_date": "2026-09-14",
    "score": "4-1",
    "over15": {
      "pred": 0.7987,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5669,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3561,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4336,
      "is_result": true
    },
    "draw": {
      "pred": 0.2971,
      "is_result": false
    },
    "away": {
      "pred": 0.2694,
      "is_result": false
    },
    "btts": {
      "pred": 0.5907,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4557,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2446,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2201,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1261,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Denmark Superliga",
    "home_team": "Odense",
    "away_team": "Midtjylland",
    "match_date": "2026-09-19",
    "score": "1-1",
    "over15": {
      "pred": 0.7684,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.649,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3339,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2453,
      "is_result": false
    },
    "draw": {
      "pred": 0.2395,
      "is_result": true
    },
    "away": {
      "pred": 0.5152,
      "is_result": false
    },
    "btts": {
      "pred": 0.5945,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5189,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2398,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2657,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.089,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Denmark Superliga",
    "home_team": "Sonderjyske",
    "away_team": "Randers FC",
    "match_date": "2026-09-20",
    "score": "4-2",
    "over15": {
      "pred": 0.8077,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5211,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3823,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3623,
      "is_result": true
    },
    "draw": {
      "pred": 0.3029,
      "is_result": false
    },
    "away": {
      "pred": 0.3348,
      "is_result": false
    },
    "btts": {
      "pred": 0.527,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4501,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1735,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.201,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1525,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Denmark Superliga",
    "home_team": "Viborg",
    "away_team": "Nordsjaelland",
    "match_date": "2026-09-20",
    "score": "4-1",
    "over15": {
      "pred": 0.7802,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6155,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3179,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3092,
      "is_result": true
    },
    "draw": {
      "pred": 0.2575,
      "is_result": false
    },
    "away": {
      "pred": 0.4333,
      "is_result": false
    },
    "btts": {
      "pred": 0.5578,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4939,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1836,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2101,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1641,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "AZ Alkmaar",
    "away_team": "Telstar",
    "match_date": "2026-09-20",
    "score": "1-0",
    "over15": {
      "pred": 0.7774,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6276,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3092,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5379,
      "is_result": true
    },
    "draw": {
      "pred": 0.2626,
      "is_result": false
    },
    "away": {
      "pred": 0.1995,
      "is_result": false
    },
    "btts": {
      "pred": 0.5721,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4811,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2746,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1792,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1183,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3943,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7235,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "Ajax",
    "away_team": "Excelsior",
    "match_date": "2026-09-19",
    "score": "2-2",
    "over15": {
      "pred": 0.818,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6766,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3773,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6064,
      "is_result": false
    },
    "draw": {
      "pred": 0.2095,
      "is_result": true
    },
    "away": {
      "pred": 0.1841,
      "is_result": false
    },
    "btts": {
      "pred": 0.5504,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5178,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3449,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.111,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0945,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.531,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8899,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "Ajax",
    "away_team": "Willem II",
    "match_date": "2026-09-15",
    "score": "5-1",
    "over15": {
      "pred": 0.7703,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6208,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3601,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7072,
      "is_result": true
    },
    "draw": {
      "pred": 0.1874,
      "is_result": false
    },
    "away": {
      "pred": 0.1054,
      "is_result": false
    },
    "btts": {
      "pred": 0.5879,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4704,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3653,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1519,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0707,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4272,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "Den Haag",
    "away_team": "Cambuur",
    "match_date": "2026-09-19",
    "score": "1-1",
    "over15": {
      "pred": 0.7763,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6506,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3337,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3019,
      "is_result": false
    },
    "draw": {
      "pred": 0.2599,
      "is_result": true
    },
    "away": {
      "pred": 0.4382,
      "is_result": false
    },
    "btts": {
      "pred": 0.6472,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5309,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.235,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2626,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1496,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3578,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6253,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "Feyenoord",
    "away_team": "Utrecht",
    "match_date": "2026-09-20",
    "score": "5-0",
    "over15": {
      "pred": 0.9175,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7792,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.5222,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.523,
      "is_result": true
    },
    "draw": {
      "pred": 0.2382,
      "is_result": false
    },
    "away": {
      "pred": 0.2387,
      "is_result": false
    },
    "btts": {
      "pred": 0.7726,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6244,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3784,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2149,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1794,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4827,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8531,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "Groningen",
    "away_team": "Zwolle",
    "match_date": "2026-09-18",
    "score": "3-0",
    "over15": {
      "pred": 0.7853,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6008,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3528,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5811,
      "is_result": true
    },
    "draw": {
      "pred": 0.2357,
      "is_result": false
    },
    "away": {
      "pred": 0.1832,
      "is_result": false
    },
    "btts": {
      "pred": 0.5901,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4617,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.302,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1793,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1088,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4103,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7991,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "Nijmegen",
    "away_team": "Go Ahead Eagles",
    "match_date": "2026-09-20",
    "score": "1-1",
    "over15": {
      "pred": 0.8293,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6599,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3451,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.405,
      "is_result": false
    },
    "draw": {
      "pred": 0.2679,
      "is_result": true
    },
    "away": {
      "pred": 0.327,
      "is_result": false
    },
    "btts": {
      "pred": 0.6765,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5424,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2585,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2359,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1821,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3885,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.725,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "Sparta Rotterdam",
    "away_team": "Heerenveen",
    "match_date": "2026-09-19",
    "score": "0-4",
    "over15": {
      "pred": 0.793,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5473,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3709,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4019,
      "is_result": false
    },
    "draw": {
      "pred": 0.2957,
      "is_result": false
    },
    "away": {
      "pred": 0.3024,
      "is_result": true
    },
    "btts": {
      "pred": 0.5869,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4531,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2009,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2207,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1654,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.355,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6538,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "Twente",
    "away_team": "PSV Eindhoven",
    "match_date": "2026-09-20",
    "score": "3-2",
    "over15": {
      "pred": 0.9634,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.9634,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.7192,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2936,
      "is_result": true
    },
    "draw": {
      "pred": 0.1845,
      "is_result": false
    },
    "away": {
      "pred": 0.5219,
      "is_result": false
    },
    "btts": {
      "pred": 0.7878,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7682,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2007,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1754,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.4118,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5654,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.9124,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "Willem II",
    "away_team": "For Sittard",
    "match_date": "2026-09-19",
    "score": "0-1",
    "over15": {
      "pred": 0.7984,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5412,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3981,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3115,
      "is_result": false
    },
    "draw": {
      "pred": 0.2959,
      "is_result": false
    },
    "away": {
      "pred": 0.3926,
      "is_result": true
    },
    "btts": {
      "pred": 0.6077,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1823,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2349,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1904,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3504,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6958,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "Aveley",
    "away_team": "Wingate & Finchley",
    "match_date": "2026-09-14",
    "score": "3-4",
    "over15": {
      "pred": 0.7835,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6075,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.362,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.602,
      "is_result": false
    },
    "draw": {
      "pred": 0.1952,
      "is_result": false
    },
    "away": {
      "pred": 0.2028,
      "is_result": true
    },
    "btts": {
      "pred": 0.5917,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4682,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3266,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1669,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0982,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4038,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "Brentwood Town",
    "away_team": "Stanway Rovers",
    "match_date": "2026-09-15",
    "score": "2-3",
    "over15": {
      "pred": 0.9211,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8672,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3884,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.9406,
      "is_result": false
    },
    "draw": {
      "pred": 0.045,
      "is_result": false
    },
    "away": {
      "pred": 0.0144,
      "is_result": true
    },
    "btts": {
      "pred": 0.2949,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2949,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2584,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.03,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0065,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4062,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "Cheshunt",
    "away_team": "Lewes",
    "match_date": "2026-09-19",
    "score": "3-1",
    "over15": {
      "pred": 0.7957,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5499,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3592,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4133,
      "is_result": true
    },
    "draw": {
      "pred": 0.2616,
      "is_result": false
    },
    "away": {
      "pred": 0.3251,
      "is_result": false
    },
    "btts": {
      "pred": 0.5937,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4594,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2211,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1895,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1831,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3711,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7149,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5162,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "Cray Wanderers",
    "away_team": "St Albans City",
    "match_date": "2026-09-15",
    "score": "3-3",
    "over15": {
      "pred": 0.8704,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7309,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3635,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4165,
      "is_result": false
    },
    "draw": {
      "pred": 0.2215,
      "is_result": true
    },
    "away": {
      "pred": 0.362,
      "is_result": false
    },
    "btts": {
      "pred": 0.6576,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.608,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2767,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2167,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1641,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4924,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "Eastbourne Borough",
    "away_team": "Chatham Town",
    "match_date": "2026-09-15",
    "score": "2-1",
    "over15": {
      "pred": 0.7928,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5943,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3642,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.309,
      "is_result": true
    },
    "draw": {
      "pred": 0.2261,
      "is_result": false
    },
    "away": {
      "pred": 0.4649,
      "is_result": false
    },
    "btts": {
      "pred": 0.5893,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4799,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1493,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1828,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2573,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3319,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "Enfield Town",
    "away_team": "Dartford",
    "match_date": "2026-09-15",
    "score": "0-2",
    "over15": {
      "pred": 0.933,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.9127,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3979,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6403,
      "is_result": false
    },
    "draw": {
      "pred": 0.152,
      "is_result": false
    },
    "away": {
      "pred": 0.2077,
      "is_result": true
    },
    "btts": {
      "pred": 0.7384,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6794,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4083,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.137,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1931,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5012,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "Leatherhead",
    "away_team": "AFC Whyteleafe",
    "match_date": "2026-09-15",
    "score": "0-0",
    "over15": {
      "pred": 0.9701,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.9073,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.7747,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.8555,
      "is_result": false
    },
    "draw": {
      "pred": 0.0816,
      "is_result": true
    },
    "away": {
      "pred": 0.0629,
      "is_result": false
    },
    "btts": {
      "pred": 0.5975,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5975,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4813,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.0703,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0458,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "Lewes",
    "away_team": "Carshalton Athletic",
    "match_date": "2026-09-15",
    "score": "3-0",
    "over15": {
      "pred": 0.7831,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6082,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3621,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.342,
      "is_result": true
    },
    "draw": {
      "pred": 0.2348,
      "is_result": false
    },
    "away": {
      "pred": 0.4232,
      "is_result": false
    },
    "btts": {
      "pred": 0.5821,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5173,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2209,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2039,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1573,
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
    "league": "Isthmian League",
    "home_team": "Maldon & Tiptree",
    "away_team": "Carshalton Athletic",
    "match_date": "2026-09-19",
    "score": "2-3",
    "over15": {
      "pred": 0.8597,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7494,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3974,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4323,
      "is_result": false
    },
    "draw": {
      "pred": 0.2129,
      "is_result": false
    },
    "away": {
      "pred": 0.3548,
      "is_result": true
    },
    "btts": {
      "pred": 0.8479,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6954,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4309,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2094,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2076,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5003,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8447,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6668,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "Ramsgate",
    "away_team": "Maldon & Tiptree",
    "match_date": "2026-09-15",
    "score": "2-0",
    "over15": {
      "pred": 0.939,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.9331,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.6612,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5416,
      "is_result": true
    },
    "draw": {
      "pred": 0.185,
      "is_result": false
    },
    "away": {
      "pred": 0.2734,
      "is_result": false
    },
    "btts": {
      "pred": 0.8558,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7304,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4576,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.194,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2042,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.6162,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "Welling United",
    "away_team": "Cheshunt",
    "match_date": "2026-09-15",
    "score": "2-0",
    "over15": {
      "pred": 0.7776,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6164,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3608,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4542,
      "is_result": true
    },
    "draw": {
      "pred": 0.2421,
      "is_result": false
    },
    "away": {
      "pred": 0.3037,
      "is_result": false
    },
    "btts": {
      "pred": 0.5801,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5319,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2354,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1616,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1831,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3477,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "Whitehawk",
    "away_team": "Three Bridges",
    "match_date": "2026-09-15",
    "score": "3-2",
    "over15": {
      "pred": 0.9481,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.9481,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.6912,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4907,
      "is_result": true
    },
    "draw": {
      "pred": 0.1905,
      "is_result": false
    },
    "away": {
      "pred": 0.3188,
      "is_result": false
    },
    "btts": {
      "pred": 0.9166,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7612,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4347,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.197,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2849,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.7183,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "Anderlecht",
    "away_team": "Waregem",
    "match_date": "2026-09-19",
    "score": "3-0",
    "over15": {
      "pred": 0.7769,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6608,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.346,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3922,
      "is_result": true
    },
    "draw": {
      "pred": 0.2473,
      "is_result": false
    },
    "away": {
      "pred": 0.3604,
      "is_result": false
    },
    "btts": {
      "pred": 0.6662,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5492,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2554,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2094,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2013,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4423,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8223,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "Antwerp",
    "away_team": "St. Gilloise",
    "match_date": "2026-09-20",
    "score": "0-2",
    "over15": {
      "pred": 0.8026,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.538,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4151,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2747,
      "is_result": false
    },
    "draw": {
      "pred": 0.2176,
      "is_result": false
    },
    "away": {
      "pred": 0.5077,
      "is_result": true
    },
    "btts": {
      "pred": 0.5106,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4424,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0739,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2361,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2006,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3385,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7256,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "Charleroi",
    "away_team": "Cercle Brugge",
    "match_date": "2026-09-19",
    "score": "3-2",
    "over15": {
      "pred": 0.8031,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6763,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3765,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5447,
      "is_result": true
    },
    "draw": {
      "pred": 0.2243,
      "is_result": false
    },
    "away": {
      "pred": 0.231,
      "is_result": false
    },
    "btts": {
      "pred": 0.6183,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5436,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3613,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1293,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1278,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.432,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8128,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "Club Brugge",
    "away_team": "Genk",
    "match_date": "2026-09-20",
    "score": "3-0",
    "over15": {
      "pred": 0.9173,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8157,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.5548,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7008,
      "is_result": true
    },
    "draw": {
      "pred": 0.2083,
      "is_result": false
    },
    "away": {
      "pred": 0.0909,
      "is_result": false
    },
    "btts": {
      "pred": 0.5719,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5156,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3311,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1803,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0606,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4898,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8627,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "Gent",
    "away_team": "Standard",
    "match_date": "2026-09-18",
    "score": "2-1",
    "over15": {
      "pred": 0.7905,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5826,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3514,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3025,
      "is_result": true
    },
    "draw": {
      "pred": 0.2492,
      "is_result": false
    },
    "away": {
      "pred": 0.4483,
      "is_result": false
    },
    "btts": {
      "pred": 0.5897,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4762,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1779,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2075,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2043,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.393,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7845,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "Kortrijk",
    "away_team": "Beveren",
    "match_date": "2026-09-20",
    "score": "1-0",
    "over15": {
      "pred": 0.8048,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4983,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.363,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2897,
      "is_result": true
    },
    "draw": {
      "pred": 0.2624,
      "is_result": false
    },
    "away": {
      "pred": 0.448,
      "is_result": false
    },
    "btts": {
      "pred": 0.5161,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3984,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1538,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2034,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.159,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.339,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7244,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "Lommel SK",
    "away_team": "Mechelen",
    "match_date": "2026-09-19",
    "score": "0-0",
    "over15": {
      "pred": 0.8074,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5212,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3869,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4039,
      "is_result": false
    },
    "draw": {
      "pred": 0.3018,
      "is_result": true
    },
    "away": {
      "pred": 0.2943,
      "is_result": false
    },
    "btts": {
      "pred": 0.5239,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.188,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1877,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1482,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3569,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6372,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "Oud-Heverlee Leuven",
    "away_team": "RAAL La Louviere",
    "match_date": "2026-09-19",
    "score": "2-0",
    "over15": {
      "pred": 0.7841,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4761,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3468,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4156,
      "is_result": true
    },
    "draw": {
      "pred": 0.3166,
      "is_result": false
    },
    "away": {
      "pred": 0.2678,
      "is_result": false
    },
    "btts": {
      "pred": 0.5184,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3812,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1813,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1973,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1397,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3581,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6246,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "St Truiden",
    "away_team": "Westerlo",
    "match_date": "2026-09-20",
    "score": "0-2",
    "over15": {
      "pred": 0.8048,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6553,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3319,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5199,
      "is_result": false
    },
    "draw": {
      "pred": 0.2458,
      "is_result": false
    },
    "away": {
      "pred": 0.2343,
      "is_result": true
    },
    "btts": {
      "pred": 0.5788,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5202,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2724,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1667,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1398,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4284,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7137,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Alaves",
    "away_team": "Valencia",
    "match_date": "2026-09-15",
    "score": "0-1",
    "over15": {
      "pred": 0.797,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5853,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3606,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4451,
      "is_result": false
    },
    "draw": {
      "pred": 0.2786,
      "is_result": false
    },
    "away": {
      "pred": 0.2764,
      "is_result": true
    },
    "btts": {
      "pred": 0.5908,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4718,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2302,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1742,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1864,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3502,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Ath Bilbao",
    "away_team": "Alaves",
    "match_date": "2026-09-19",
    "score": "0-0",
    "over15": {
      "pred": 0.7725,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6433,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3345,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5503,
      "is_result": false
    },
    "draw": {
      "pred": 0.2236,
      "is_result": true
    },
    "away": {
      "pred": 0.2261,
      "is_result": false
    },
    "btts": {
      "pred": 0.547,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4936,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3092,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.122,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1158,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3513,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6778,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Ath Madrid",
    "away_team": "Osasuna",
    "match_date": "2026-09-16",
    "score": "4-0",
    "over15": {
      "pred": 0.8897,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7733,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3696,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7139,
      "is_result": true
    },
    "draw": {
      "pred": 0.1611,
      "is_result": false
    },
    "away": {
      "pred": 0.125,
      "is_result": false
    },
    "btts": {
      "pred": 0.5803,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5498,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3723,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1285,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0795,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3711,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7232,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6092,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Ath Madrid",
    "away_team": "Real Madrid",
    "match_date": "2026-09-20",
    "score": "2-1",
    "over15": {
      "pred": 0.8825,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7298,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4775,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4242,
      "is_result": true
    },
    "draw": {
      "pred": 0.2309,
      "is_result": false
    },
    "away": {
      "pred": 0.3448,
      "is_result": false
    },
    "btts": {
      "pred": 0.7742,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6352,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3359,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2394,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1988,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3966,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7266,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Barcelona",
    "away_team": "Santander",
    "match_date": "2026-09-16",
    "score": "7-2",
    "over15": {
      "pred": 0.9468,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.9468,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.6739,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7842,
      "is_result": true
    },
    "draw": {
      "pred": 0.1261,
      "is_result": false
    },
    "away": {
      "pred": 0.0897,
      "is_result": false
    },
    "btts": {
      "pred": 0.5747,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5747,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4315,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.0893,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0539,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.832,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.956,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.8726,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Betis",
    "away_team": "Getafe",
    "match_date": "2026-09-17",
    "score": "1-0",
    "over15": {
      "pred": 0.7093,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4085,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3173,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.546,
      "is_result": true
    },
    "draw": {
      "pred": 0.2878,
      "is_result": false
    },
    "away": {
      "pred": 0.1661,
      "is_result": false
    },
    "btts": {
      "pred": 0.3048,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2987,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1368,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1273,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0407,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3549,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.575,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.3804,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Celta",
    "away_team": "Santander",
    "match_date": "2026-09-19",
    "score": "5-0",
    "over15": {
      "pred": 0.8052,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5332,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.402,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4359,
      "is_result": true
    },
    "draw": {
      "pred": 0.2913,
      "is_result": false
    },
    "away": {
      "pred": 0.2728,
      "is_result": false
    },
    "btts": {
      "pred": 0.5368,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2091,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1782,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1496,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4169,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7849,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Elche",
    "away_team": "Real Madrid",
    "match_date": "2026-09-15",
    "score": "2-3",
    "over15": {
      "pred": 0.8791,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7394,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3649,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3081,
      "is_result": false
    },
    "draw": {
      "pred": 0.2023,
      "is_result": false
    },
    "away": {
      "pred": 0.4896,
      "is_result": true
    },
    "btts": {
      "pred": 0.6391,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5995,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1886,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1595,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.291,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4024,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Espanol",
    "away_team": "Elche",
    "match_date": "2026-09-18",
    "score": "1-3",
    "over15": {
      "pred": 0.793,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5751,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3504,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4738,
      "is_result": false
    },
    "draw": {
      "pred": 0.2583,
      "is_result": false
    },
    "away": {
      "pred": 0.268,
      "is_result": true
    },
    "btts": {
      "pred": 0.5901,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4606,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2614,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1775,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1512,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3616,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.713,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Getafe",
    "away_team": "Malaga",
    "match_date": "2026-09-20",
    "score": "1-0",
    "over15": {
      "pred": 0.3885,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3285,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0572,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4384,
      "is_result": true
    },
    "draw": {
      "pred": 0.3504,
      "is_result": false
    },
    "away": {
      "pred": 0.2112,
      "is_result": false
    },
    "btts": {
      "pred": 0.2277,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.1251,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0883,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1198,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0195,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3405,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7157,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "La Coruna",
    "away_team": "Betis",
    "match_date": "2026-09-20",
    "score": "1-1",
    "over15": {
      "pred": 0.8051,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5383,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4043,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3934,
      "is_result": false
    },
    "draw": {
      "pred": 0.2886,
      "is_result": true
    },
    "away": {
      "pred": 0.3179,
      "is_result": false
    },
    "btts": {
      "pred": 0.5474,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1877,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1983,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1614,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4248,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7193,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "La Coruna",
    "away_team": "Sevilla",
    "match_date": "2026-09-16",
    "score": "0-1",
    "over15": {
      "pred": 0.7991,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.568,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3468,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5984,
      "is_result": false
    },
    "draw": {
      "pred": 0.2273,
      "is_result": false
    },
    "away": {
      "pred": 0.1743,
      "is_result": true
    },
    "btts": {
      "pred": 0.5744,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4466,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3011,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1789,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0944,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4273,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.804,
      "hit": false,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6539,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Malaga",
    "away_team": "Villarreal",
    "match_date": "2026-09-17",
    "score": "1-3",
    "over15": {
      "pred": 0.7863,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5367,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3393,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2851,
      "is_result": false
    },
    "draw": {
      "pred": 0.2546,
      "is_result": false
    },
    "away": {
      "pred": 0.4603,
      "is_result": true
    },
    "btts": {
      "pred": 0.5787,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4441,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.142,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2079,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2288,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4656,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8383,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5462,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Osasuna",
    "away_team": "Vallecano",
    "match_date": "2026-09-19",
    "score": "1-1",
    "over15": {
      "pred": 0.7969,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5474,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3709,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3813,
      "is_result": false
    },
    "draw": {
      "pred": 0.2761,
      "is_result": true
    },
    "away": {
      "pred": 0.3427,
      "is_result": false
    },
    "btts": {
      "pred": 0.5971,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4541,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2087,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2027,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1857,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3496,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6928,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Sevilla",
    "away_team": "Barcelona",
    "match_date": "2026-09-19",
    "score": "1-3",
    "over15": {
      "pred": 0.9212,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8778,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.6088,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2715,
      "is_result": false
    },
    "draw": {
      "pred": 0.1453,
      "is_result": false
    },
    "away": {
      "pred": 0.5831,
      "is_result": true
    },
    "btts": {
      "pred": 0.7862,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6837,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1514,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1628,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.472,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.459,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8251,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Valencia",
    "away_team": "Sociedad",
    "match_date": "2026-09-20",
    "score": "2-3",
    "over15": {
      "pred": 0.8092,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5209,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.382,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.396,
      "is_result": false
    },
    "draw": {
      "pred": 0.2938,
      "is_result": false
    },
    "away": {
      "pred": 0.3103,
      "is_result": true
    },
    "btts": {
      "pred": 0.5102,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4482,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1808,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1899,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1396,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.337,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7239,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Vallecano",
    "away_team": "Espanol",
    "match_date": "2026-09-15",
    "score": "2-1",
    "over15": {
      "pred": 0.7664,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5171,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3491,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4441,
      "is_result": true
    },
    "draw": {
      "pred": 0.2976,
      "is_result": false
    },
    "away": {
      "pred": 0.2583,
      "is_result": false
    },
    "btts": {
      "pred": 0.5665,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4391,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.257,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1894,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1201,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3721,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Villarreal",
    "away_team": "Betis",
    "match_date": "2026-09-14",
    "score": "1-2",
    "over15": {
      "pred": 0.788,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5976,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3626,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.418,
      "is_result": false
    },
    "draw": {
      "pred": 0.2701,
      "is_result": false
    },
    "away": {
      "pred": 0.3119,
      "is_result": true
    },
    "btts": {
      "pred": 0.5846,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4773,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2248,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1899,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1699,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5108,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Villarreal",
    "away_team": "Levante",
    "match_date": "2026-09-20",
    "score": "3-1",
    "over15": {
      "pred": 0.8334,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6735,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3837,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.568,
      "is_result": true
    },
    "draw": {
      "pred": 0.2213,
      "is_result": false
    },
    "away": {
      "pred": 0.2107,
      "is_result": false
    },
    "btts": {
      "pred": 0.5892,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5323,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2923,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.172,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1249,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4726,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6985,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Albacete",
    "away_team": "Cordoba",
    "match_date": "2026-09-18",
    "score": "1-2",
    "over15": {
      "pred": 0.7931,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5758,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3506,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3164,
      "is_result": false
    },
    "draw": {
      "pred": 0.2482,
      "is_result": false
    },
    "away": {
      "pred": 0.4354,
      "is_result": true
    },
    "btts": {
      "pred": 0.5899,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4662,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1918,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1982,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1999,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.361,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7042,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Almeria",
    "away_team": "Celta B",
    "match_date": "2026-09-20",
    "score": "2-0",
    "over15": {
      "pred": 0.9337,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.9337,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.6362,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6196,
      "is_result": true
    },
    "draw": {
      "pred": 0.1927,
      "is_result": false
    },
    "away": {
      "pred": 0.1877,
      "is_result": false
    },
    "btts": {
      "pred": 0.7815,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7299,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4032,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2025,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1757,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4931,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8563,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Andorra",
    "away_team": "Sp Gijon",
    "match_date": "2026-09-19",
    "score": "1-3",
    "over15": {
      "pred": 0.7709,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6509,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3337,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5195,
      "is_result": false
    },
    "draw": {
      "pred": 0.2301,
      "is_result": false
    },
    "away": {
      "pred": 0.2503,
      "is_result": true
    },
    "btts": {
      "pred": 0.5382,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5137,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2913,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1233,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1236,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3503,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6794,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Cadiz",
    "away_team": "Girona",
    "match_date": "2026-09-19",
    "score": "1-2",
    "over15": {
      "pred": 0.7704,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.653,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3335,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.24,
      "is_result": false
    },
    "draw": {
      "pred": 0.2058,
      "is_result": false
    },
    "away": {
      "pred": 0.5542,
      "is_result": true
    },
    "btts": {
      "pred": 0.5505,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5181,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.254,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2447,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0518,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4353,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7947,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Castellon",
    "away_team": "Tenerife",
    "match_date": "2026-09-19",
    "score": "5-0",
    "over15": {
      "pred": 0.7884,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5742,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.34,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6375,
      "is_result": true
    },
    "draw": {
      "pred": 0.1964,
      "is_result": false
    },
    "away": {
      "pred": 0.1661,
      "is_result": false
    },
    "btts": {
      "pred": 0.5686,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4495,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3402,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1348,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0936,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3562,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6267,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Celta B",
    "away_team": "Eibar",
    "match_date": "2026-09-14",
    "score": "0-4",
    "over15": {
      "pred": 0.7799,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5234,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3518,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5738,
      "is_result": false
    },
    "draw": {
      "pred": 0.2344,
      "is_result": false
    },
    "away": {
      "pred": 0.1918,
      "is_result": true
    },
    "btts": {
      "pred": 0.5348,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4203,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3015,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1632,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0702,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.0677,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Ceuta",
    "away_team": "Valladolid",
    "match_date": "2026-09-20",
    "score": "1-1",
    "over15": {
      "pred": 0.8047,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5382,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4079,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4798,
      "is_result": false
    },
    "draw": {
      "pred": 0.287,
      "is_result": true
    },
    "away": {
      "pred": 0.2332,
      "is_result": false
    },
    "btts": {
      "pred": 0.5267,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4508,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2026,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2118,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1123,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3524,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7384,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Eldense",
    "away_team": "Eibar",
    "match_date": "2026-09-19",
    "score": "1-2",
    "over15": {
      "pred": 0.7968,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4935,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3604,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3509,
      "is_result": false
    },
    "draw": {
      "pred": 0.2999,
      "is_result": false
    },
    "away": {
      "pred": 0.3492,
      "is_result": true
    },
    "btts": {
      "pred": 0.5127,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4099,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1471,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1908,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1748,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3622,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.561,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Las Palmas",
    "away_team": "Burgos",
    "match_date": "2026-09-20",
    "score": "1-2",
    "over15": {
      "pred": 0.727,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3572,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3132,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3627,
      "is_result": false
    },
    "draw": {
      "pred": 0.3134,
      "is_result": false
    },
    "away": {
      "pred": 0.3239,
      "is_result": true
    },
    "btts": {
      "pred": 0.5347,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3056,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1766,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.257,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1011,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3364,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7226,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Leganes",
    "away_team": "Granada",
    "match_date": "2026-09-20",
    "score": "3-2",
    "over15": {
      "pred": 0.8031,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.538,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4133,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3733,
      "is_result": true
    },
    "draw": {
      "pred": 0.2833,
      "is_result": false
    },
    "away": {
      "pred": 0.3434,
      "is_result": false
    },
    "btts": {
      "pred": 0.5677,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4466,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1927,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2051,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1698,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3452,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Sabadell",
    "away_team": "Oviedo",
    "match_date": "2026-09-20",
    "score": "3-1",
    "over15": {
      "pred": 0.7639,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4397,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3358,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4744,
      "is_result": true
    },
    "draw": {
      "pred": 0.304,
      "is_result": false
    },
    "away": {
      "pred": 0.2216,
      "is_result": false
    },
    "btts": {
      "pred": 0.5296,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.345,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.189,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2673,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0734,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3348,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.726,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Sociedad B",
    "away_team": "Mallorca",
    "match_date": "2026-09-19",
    "score": "0-1",
    "over15": {
      "pred": 0.7843,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5938,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3386,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3878,
      "is_result": false
    },
    "draw": {
      "pred": 0.2558,
      "is_result": false
    },
    "away": {
      "pred": 0.3564,
      "is_result": true
    },
    "btts": {
      "pred": 0.5581,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4808,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1989,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1832,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1759,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4097,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7712,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League One",
    "home_team": "AFC Wimbledon",
    "away_team": "Milton Keynes Dons",
    "match_date": "2026-09-17",
    "score": "0-0",
    "over15": {
      "pred": 0.7731,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5153,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3346,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2764,
      "is_result": false
    },
    "draw": {
      "pred": 0.2555,
      "is_result": true
    },
    "away": {
      "pred": 0.4681,
      "is_result": false
    },
    "btts": {
      "pred": 0.5615,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4354,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.123,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2047,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2338,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3617,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7226,
      "hit": false,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5572,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "League One",
    "home_team": "AFC Wimbledon",
    "away_team": "Wigan",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.5053,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2627,
      "is_result": true
    },
    "draw": {
      "pred": 0.29,
      "is_result": false
    },
    "away": {
      "pred": 0.4473,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.2775,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Barnsley",
    "away_team": "Leicester",
    "match_date": "2026-09-19",
    "score": "1-1",
    "over15": {
      "pred": 0.7935,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6729,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3697,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4176,
      "is_result": false
    },
    "draw": {
      "pred": 0.2403,
      "is_result": true
    },
    "away": {
      "pred": 0.3421,
      "is_result": false
    },
    "btts": {
      "pred": 0.6973,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5659,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3002,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2003,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1967,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5815,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.9148,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Blackpool",
    "away_team": "Peterboro",
    "match_date": NaN,
    "score": "4-0",
    "over25": {
      "pred": 0.6538,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5869,
      "is_result": true
    },
    "draw": {
      "pred": 0.2072,
      "is_result": false
    },
    "away": {
      "pred": 0.2059,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4562,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Blackpool",
    "away_team": "Plymouth",
    "match_date": "2026-09-19",
    "score": "2-4",
    "over15": {
      "pred": 0.7828,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5958,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3385,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4097,
      "is_result": false
    },
    "draw": {
      "pred": 0.2647,
      "is_result": false
    },
    "away": {
      "pred": 0.3256,
      "is_result": true
    },
    "btts": {
      "pred": 0.5553,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.481,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2024,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1858,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1671,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4069,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7883,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Bromley",
    "away_team": "Huddersfield",
    "match_date": "2026-09-19",
    "score": "2-1",
    "over15": {
      "pred": 0.7811,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6045,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3379,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2644,
      "is_result": true
    },
    "draw": {
      "pred": 0.2145,
      "is_result": false
    },
    "away": {
      "pred": 0.5211,
      "is_result": false
    },
    "btts": {
      "pred": 0.582,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4702,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1784,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2861,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1174,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4001,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7792,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Burton",
    "away_team": "Mansfield",
    "match_date": "2026-09-19",
    "score": "2-2",
    "over15": {
      "pred": 0.7992,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5428,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3915,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3471,
      "is_result": false
    },
    "draw": {
      "pred": 0.28,
      "is_result": true
    },
    "away": {
      "pred": 0.3729,
      "is_result": false
    },
    "btts": {
      "pred": 0.6039,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4495,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1989,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2116,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1934,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3563,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.721,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Cambridge",
    "away_team": "Huddersfield",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.6658,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3117,
      "is_result": false
    },
    "draw": {
      "pred": 0.2243,
      "is_result": false
    },
    "away": {
      "pred": 0.464,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.448,
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
      "pred": 0.5992,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5147,
      "is_result": false
    },
    "draw": {
      "pred": 0.2335,
      "is_result": false
    },
    "away": {
      "pred": 0.2518,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4623,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Leyton Orient",
    "away_team": "Stevenage",
    "match_date": "2026-09-19",
    "score": "1-0",
    "over15": {
      "pred": 0.8093,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5138,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3796,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4506,
      "is_result": true
    },
    "draw": {
      "pred": 0.3003,
      "is_result": false
    },
    "away": {
      "pred": 0.2491,
      "is_result": false
    },
    "btts": {
      "pred": 0.5075,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4318,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2025,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.175,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.13,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3544,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6621,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Luton",
    "away_team": "Bradford",
    "match_date": "2026-09-19",
    "score": "0-1",
    "over15": {
      "pred": 0.7897,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5635,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3447,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3945,
      "is_result": false
    },
    "draw": {
      "pred": 0.2735,
      "is_result": false
    },
    "away": {
      "pred": 0.3319,
      "is_result": true
    },
    "btts": {
      "pred": 0.5753,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4673,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.204,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1964,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1749,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4037,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7845,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Mansfield",
    "away_team": "Luton",
    "match_date": NaN,
    "score": "5-2",
    "over25": {
      "pred": 0.6259,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3949,
      "is_result": true
    },
    "draw": {
      "pred": 0.2389,
      "is_result": false
    },
    "away": {
      "pred": 0.3662,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4921,
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
      "pred": 0.5496,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4329,
      "is_result": false
    },
    "draw": {
      "pred": 0.2553,
      "is_result": true
    },
    "away": {
      "pred": 0.3118,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5217,
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
      "pred": 0.5418,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5221,
      "is_result": true
    },
    "draw": {
      "pred": 0.2524,
      "is_result": false
    },
    "away": {
      "pred": 0.2255,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3539,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Oxford",
    "away_team": "Cambridge",
    "match_date": "2026-09-19",
    "score": "1-1",
    "over15": {
      "pred": 0.836,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6986,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4224,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7215,
      "is_result": false
    },
    "draw": {
      "pred": 0.1463,
      "is_result": true
    },
    "away": {
      "pred": 0.1323,
      "is_result": false
    },
    "btts": {
      "pred": 0.5628,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4955,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3937,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.0956,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0735,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3512,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6906,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Peterboro",
    "away_team": "Doncaster",
    "match_date": "2026-09-19",
    "score": "0-2",
    "over15": {
      "pred": 0.7705,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6488,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3339,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.532,
      "is_result": false
    },
    "draw": {
      "pred": 0.2327,
      "is_result": false
    },
    "away": {
      "pred": 0.2353,
      "is_result": true
    },
    "btts": {
      "pred": 0.5366,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5046,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2978,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1211,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1177,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3577,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.723,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Plymouth",
    "away_team": "Bradford",
    "match_date": NaN,
    "score": "2-0",
    "over25": {
      "pred": 0.5379,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.446,
      "is_result": true
    },
    "draw": {
      "pred": 0.2692,
      "is_result": false
    },
    "away": {
      "pred": 0.2847,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3728,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Reading",
    "away_team": "Notts County",
    "match_date": "2026-09-19",
    "score": "2-0",
    "over15": {
      "pred": 0.7805,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6073,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3377,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4854,
      "is_result": true
    },
    "draw": {
      "pred": 0.255,
      "is_result": false
    },
    "away": {
      "pred": 0.2596,
      "is_result": false
    },
    "btts": {
      "pred": 0.5593,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4809,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2598,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1579,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1416,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4337,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8132,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Sheffield Wed",
    "away_team": "Bromley",
    "match_date": NaN,
    "score": "7-2",
    "over25": {
      "pred": 0.6533,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.706,
      "is_result": true
    },
    "draw": {
      "pred": 0.1724,
      "is_result": false
    },
    "away": {
      "pred": 0.1216,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5954,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Sheffield Wed",
    "away_team": "Stockport",
    "match_date": "2026-09-19",
    "score": "0-0",
    "over15": {
      "pred": 0.8423,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7021,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4275,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4991,
      "is_result": false
    },
    "draw": {
      "pred": 0.2243,
      "is_result": true
    },
    "away": {
      "pred": 0.2766,
      "is_result": false
    },
    "btts": {
      "pred": 0.7598,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5985,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.42,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1695,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1704,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.6285,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.9218,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Stevenage",
    "away_team": "Doncaster",
    "match_date": NaN,
    "score": "2-2",
    "over25": {
      "pred": 0.5319,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4787,
      "is_result": false
    },
    "draw": {
      "pred": 0.273,
      "is_result": true
    },
    "away": {
      "pred": 0.2483,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.224,
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
      "pred": 0.6651,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5303,
      "is_result": true
    },
    "draw": {
      "pred": 0.2158,
      "is_result": false
    },
    "away": {
      "pred": 0.2539,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.486,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Wigan",
    "away_team": "Wycombe",
    "match_date": "2026-09-19",
    "score": "0-1",
    "over15": {
      "pred": 0.8013,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5391,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.407,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3781,
      "is_result": false
    },
    "draw": {
      "pred": 0.2877,
      "is_result": false
    },
    "away": {
      "pred": 0.3342,
      "is_result": true
    },
    "btts": {
      "pred": 0.5837,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2001,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2043,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1793,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3498,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7114,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Accrington",
    "away_team": "Newport County",
    "match_date": "2026-09-19",
    "score": "0-0",
    "over15": {
      "pred": 0.7976,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5461,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3764,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5479,
      "is_result": false
    },
    "draw": {
      "pred": 0.248,
      "is_result": true
    },
    "away": {
      "pred": 0.2042,
      "is_result": false
    },
    "btts": {
      "pred": 0.5657,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2761,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1664,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1232,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3735,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7297,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Barnet",
    "away_team": "Cheltenham",
    "match_date": NaN,
    "score": "2-2",
    "over25": {
      "pred": 0.6853,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5848,
      "is_result": false
    },
    "draw": {
      "pred": 0.1981,
      "is_result": true
    },
    "away": {
      "pred": 0.2171,
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
    "home_team": "Barnet",
    "away_team": "Fleetwood Town",
    "match_date": "2026-09-19",
    "score": "3-1",
    "over15": {
      "pred": 0.7807,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.609,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3376,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5238,
      "is_result": true
    },
    "draw": {
      "pred": 0.2417,
      "is_result": false
    },
    "away": {
      "pred": 0.2345,
      "is_result": false
    },
    "btts": {
      "pred": 0.5694,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4772,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2955,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1428,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1312,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.387,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7468,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Chesterfield",
    "away_team": "York",
    "match_date": "2026-09-19",
    "score": "2-0",
    "over15": {
      "pred": 0.8479,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7076,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4183,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4121,
      "is_result": true
    },
    "draw": {
      "pred": 0.2243,
      "is_result": false
    },
    "away": {
      "pred": 0.3636,
      "is_result": false
    },
    "btts": {
      "pred": 0.8197,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6421,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3904,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2266,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2028,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5382,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8817,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Colchester",
    "away_team": "Cheltenham",
    "match_date": "2026-09-19",
    "score": "1-1",
    "over15": {
      "pred": 0.7803,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6111,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3374,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4468,
      "is_result": false
    },
    "draw": {
      "pred": 0.2546,
      "is_result": true
    },
    "away": {
      "pred": 0.2986,
      "is_result": false
    },
    "btts": {
      "pred": 0.5511,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4859,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2302,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1673,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1536,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3745,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7301,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Colchester",
    "away_team": "Rochdale",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.5382,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.6135,
      "is_result": true
    },
    "draw": {
      "pred": 0.2304,
      "is_result": false
    },
    "away": {
      "pred": 0.1561,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3684,
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
      "pred": 0.6469,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2402,
      "is_result": false
    },
    "draw": {
      "pred": 0.2145,
      "is_result": false
    },
    "away": {
      "pred": 0.5453,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3837,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Crewe",
    "away_team": "Shrewsbury",
    "match_date": "2026-09-19",
    "score": "1-1",
    "over15": {
      "pred": 0.7983,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5448,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3824,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6237,
      "is_result": false
    },
    "draw": {
      "pred": 0.2155,
      "is_result": true
    },
    "away": {
      "pred": 0.1608,
      "is_result": false
    },
    "btts": {
      "pred": 0.5146,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2904,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1489,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0753,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3509,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6788,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Exeter",
    "away_team": "Tranmere",
    "match_date": "2026-09-19",
    "score": "0-0",
    "over15": {
      "pred": 0.8109,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5073,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3733,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4291,
      "is_result": false
    },
    "draw": {
      "pred": 0.3005,
      "is_result": true
    },
    "away": {
      "pred": 0.2704,
      "is_result": false
    },
    "btts": {
      "pred": 0.5092,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4255,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1968,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1756,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1368,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3545,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.645,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Gillingham",
    "away_team": "Bristol Rvs",
    "match_date": "2026-09-19",
    "score": "3-0",
    "over15": {
      "pred": 0.7779,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6219,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3366,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2959,
      "is_result": true
    },
    "draw": {
      "pred": 0.2394,
      "is_result": false
    },
    "away": {
      "pred": 0.4647,
      "is_result": false
    },
    "btts": {
      "pred": 0.5423,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4916,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1918,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1945,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.156,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4213,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7855,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Gillingham",
    "away_team": "Northampton",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.4565,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.548,
      "is_result": false
    },
    "draw": {
      "pred": 0.2826,
      "is_result": true
    },
    "away": {
      "pred": 0.1694,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3796,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Grimsby",
    "away_team": "Crawley Town",
    "match_date": "2026-09-19",
    "score": "2-0",
    "over15": {
      "pred": 0.7693,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6559,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3362,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7048,
      "is_result": true
    },
    "draw": {
      "pred": 0.161,
      "is_result": false
    },
    "away": {
      "pred": 0.1342,
      "is_result": false
    },
    "btts": {
      "pred": 0.5992,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.471,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4133,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1084,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0775,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4208,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7868,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Grimsby",
    "away_team": "Fleetwood Town",
    "match_date": NaN,
    "score": "2-2",
    "over25": {
      "pred": 0.5918,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5336,
      "is_result": false
    },
    "draw": {
      "pred": 0.2283,
      "is_result": true
    },
    "away": {
      "pred": 0.2381,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4152,
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
      "pred": 0.5693,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3777,
      "is_result": false
    },
    "draw": {
      "pred": 0.2482,
      "is_result": true
    },
    "away": {
      "pred": 0.3742,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3914,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Northampton",
    "away_team": "Rotherham",
    "match_date": "2026-09-19",
    "score": "0-1",
    "over15": {
      "pred": 0.8064,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5008,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3672,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2504,
      "is_result": false
    },
    "draw": {
      "pred": 0.267,
      "is_result": false
    },
    "away": {
      "pred": 0.4825,
      "is_result": true
    },
    "btts": {
      "pred": 0.5147,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4069,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0672,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.21,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2375,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.479,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8365,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Oldham",
    "away_team": "Swindon",
    "match_date": NaN,
    "score": "3-0",
    "over25": {
      "pred": 0.5642,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5348,
      "is_result": true
    },
    "draw": {
      "pred": 0.2334,
      "is_result": false
    },
    "away": {
      "pred": 0.2318,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3698,
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
      "pred": 0.5343,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3702,
      "is_result": false
    },
    "draw": {
      "pred": 0.2749,
      "is_result": true
    },
    "away": {
      "pred": 0.3549,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3113,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Rochdale",
    "away_team": "Oldham",
    "match_date": "2026-09-19",
    "score": "2-0",
    "over15": {
      "pred": 0.8094,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5147,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3804,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2456,
      "is_result": true
    },
    "draw": {
      "pred": 0.2418,
      "is_result": false
    },
    "away": {
      "pred": 0.5126,
      "is_result": false
    },
    "btts": {
      "pred": 0.5134,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4174,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0459,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2095,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.258,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3896,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7513,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Rotherham",
    "away_team": "Chesterfield",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.6053,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3847,
      "is_result": true
    },
    "draw": {
      "pred": 0.2403,
      "is_result": false
    },
    "away": {
      "pred": 0.3751,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5657,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Salford",
    "away_team": "Swindon",
    "match_date": "2026-09-19",
    "score": "1-0",
    "over15": {
      "pred": 0.8024,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5377,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4133,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4396,
      "is_result": true
    },
    "draw": {
      "pred": 0.2874,
      "is_result": false
    },
    "away": {
      "pred": 0.273,
      "is_result": false
    },
    "btts": {
      "pred": 0.5617,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2177,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1865,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1574,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.349,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.694,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Shrewsbury",
    "away_team": "Salford",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.5387,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2877,
      "is_result": true
    },
    "draw": {
      "pred": 0.2639,
      "is_result": false
    },
    "away": {
      "pred": 0.4484,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3355,
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
      "pred": 0.5541,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4812,
      "is_result": true
    },
    "draw": {
      "pred": 0.2442,
      "is_result": false
    },
    "away": {
      "pred": 0.2746,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3805,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Walsall",
    "away_team": "Port Vale",
    "match_date": "2026-09-19",
    "score": "2-0",
    "over15": {
      "pred": 0.8086,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5189,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3845,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4795,
      "is_result": true
    },
    "draw": {
      "pred": 0.2909,
      "is_result": false
    },
    "away": {
      "pred": 0.2296,
      "is_result": false
    },
    "btts": {
      "pred": 0.5088,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4327,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2146,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.172,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1221,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3561,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6294,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "York",
    "away_team": "Exeter",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.5426,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5752,
      "is_result": true
    },
    "draw": {
      "pred": 0.236,
      "is_result": false
    },
    "away": {
      "pred": 0.1888,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4521,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Alverca",
    "away_team": "Rio Ave",
    "match_date": "2026-09-19",
    "score": "1-0",
    "over15": {
      "pred": 0.8099,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5141,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3799,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5272,
      "is_result": true
    },
    "draw": {
      "pred": 0.2755,
      "is_result": false
    },
    "away": {
      "pred": 0.1973,
      "is_result": false
    },
    "btts": {
      "pred": 0.5173,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4084,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2496,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1777,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.09,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3531,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6399,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Estoril",
    "away_team": "Casa Pia",
    "match_date": "2026-09-20",
    "score": "1-2",
    "over15": {
      "pred": 0.8094,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5219,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3829,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5179,
      "is_result": false
    },
    "draw": {
      "pred": 0.2857,
      "is_result": false
    },
    "away": {
      "pred": 0.1965,
      "is_result": true
    },
    "btts": {
      "pred": 0.5156,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4171,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1931,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.254,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0685,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3994,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7358,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Estrela",
    "away_team": "Academico Viseu",
    "match_date": "2026-09-20",
    "score": "0-2",
    "over15": {
      "pred": 0.8015,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5377,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4011,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3655,
      "is_result": false
    },
    "draw": {
      "pred": 0.2783,
      "is_result": false
    },
    "away": {
      "pred": 0.3562,
      "is_result": true
    },
    "btts": {
      "pred": 0.583,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4444,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1982,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2097,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.175,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3364,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7133,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Gil Vicente",
    "away_team": "Maritimo",
    "match_date": "2026-09-19",
    "score": "1-1",
    "over15": {
      "pred": 0.7712,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6514,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3336,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4842,
      "is_result": false
    },
    "draw": {
      "pred": 0.2325,
      "is_result": true
    },
    "away": {
      "pred": 0.2833,
      "is_result": false
    },
    "btts": {
      "pred": 0.5684,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5237,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2841,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1429,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1414,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.457,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8027,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Guimaraes",
    "away_team": "Moreirense",
    "match_date": "2026-09-20",
    "score": "1-1",
    "over15": {
      "pred": 0.8006,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5001,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3644,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4619,
      "is_result": false
    },
    "draw": {
      "pred": 0.2959,
      "is_result": true
    },
    "away": {
      "pred": 0.2423,
      "is_result": false
    },
    "btts": {
      "pred": 0.516,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4063,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1906,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2311,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0942,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3696,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7352,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Moreirense",
    "away_team": "Maritimo",
    "match_date": "2026-09-14",
    "score": "3-1",
    "over15": {
      "pred": 0.68,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3638,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1168,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3532,
      "is_result": true
    },
    "draw": {
      "pred": 0.3054,
      "is_result": false
    },
    "away": {
      "pred": 0.3414,
      "is_result": false
    },
    "btts": {
      "pred": 0.4901,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3263,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1326,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2215,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1361,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3592,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Nacional",
    "away_team": "Famalicao",
    "match_date": "2026-09-19",
    "score": "0-4",
    "over15": {
      "pred": 0.8047,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5016,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3679,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3545,
      "is_result": false
    },
    "draw": {
      "pred": 0.2947,
      "is_result": false
    },
    "away": {
      "pred": 0.3508,
      "is_result": true
    },
    "btts": {
      "pred": 0.5101,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4226,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1529,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1838,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1734,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.356,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6093,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Rio Ave",
    "away_team": "Estrela",
    "match_date": "2026-09-14",
    "score": "3-3",
    "over15": {
      "pred": 0.7071,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3928,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3397,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.334,
      "is_result": false
    },
    "draw": {
      "pred": 0.2909,
      "is_result": true
    },
    "away": {
      "pred": 0.3751,
      "is_result": false
    },
    "btts": {
      "pred": 0.5119,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3607,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.132,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2187,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1612,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3592,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Santa Clara",
    "away_team": "Sp Braga",
    "match_date": "2026-09-20",
    "score": "0-0",
    "over15": {
      "pred": 0.7771,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6423,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.296,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3748,
      "is_result": false
    },
    "draw": {
      "pred": 0.2425,
      "is_result": true
    },
    "away": {
      "pred": 0.3826,
      "is_result": false
    },
    "btts": {
      "pred": 0.5901,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5219,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.206,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2091,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.175,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.418,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7311,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Sp Braga",
    "away_team": "Estoril",
    "match_date": "2026-09-14",
    "score": "1-0",
    "over15": {
      "pred": 0.7851,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6033,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3625,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4336,
      "is_result": true
    },
    "draw": {
      "pred": 0.2601,
      "is_result": false
    },
    "away": {
      "pred": 0.3063,
      "is_result": false
    },
    "btts": {
      "pred": 0.5834,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4889,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2345,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1823,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1665,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5051,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Sp Lisbon",
    "away_team": "Arouca",
    "match_date": "2026-09-19",
    "score": "2-2",
    "over15": {
      "pred": 0.8606,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.741,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4016,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.8413,
      "is_result": false
    },
    "draw": {
      "pred": 0.073,
      "is_result": true
    },
    "away": {
      "pred": 0.0857,
      "is_result": false
    },
    "btts": {
      "pred": 0.5728,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4646,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4751,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.0605,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0372,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5096,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8518,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Amedspor",
    "away_team": "Besiktas",
    "match_date": "2026-09-20",
    "score": "3-2",
    "over15": {
      "pred": 0.9545,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.9545,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.6922,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6256,
      "is_result": true
    },
    "draw": {
      "pred": 0.192,
      "is_result": false
    },
    "away": {
      "pred": 0.1824,
      "is_result": false
    },
    "btts": {
      "pred": 0.8022,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.8022,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4474,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1855,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1693,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4305,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7129,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Buyuksehyr",
    "away_team": "Genclerbirligi",
    "match_date": "2026-09-19",
    "score": "4-0",
    "over15": {
      "pred": 0.7871,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5677,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.341,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5554,
      "is_result": true
    },
    "draw": {
      "pred": 0.2489,
      "is_result": false
    },
    "away": {
      "pred": 0.1957,
      "is_result": false
    },
    "btts": {
      "pred": 0.606,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4521,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3218,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1631,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1211,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3765,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7485,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Corum",
    "away_team": "Alanyaspor",
    "match_date": "2026-09-19",
    "score": "1-2",
    "over15": {
      "pred": 0.9134,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8325,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3554,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6055,
      "is_result": false
    },
    "draw": {
      "pred": 0.1885,
      "is_result": false
    },
    "away": {
      "pred": 0.2061,
      "is_result": true
    },
    "btts": {
      "pred": 0.8252,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6844,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.5251,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1468,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1533,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5235,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8871,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Erzurumspor",
    "away_team": "Samsunspor",
    "match_date": "2026-09-20",
    "score": "1-0",
    "over15": {
      "pred": 0.7471,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3844,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3202,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2867,
      "is_result": true
    },
    "draw": {
      "pred": 0.2607,
      "is_result": false
    },
    "away": {
      "pred": 0.4525,
      "is_result": false
    },
    "btts": {
      "pred": 0.5204,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2844,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0579,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2831,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1794,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3433,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7128,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Fenerbahce",
    "away_team": "Eyupspor",
    "match_date": "2026-09-20",
    "score": "8-0",
    "over15": {
      "pred": 0.7842,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5963,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3296,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7408,
      "is_result": true
    },
    "draw": {
      "pred": 0.1875,
      "is_result": false
    },
    "away": {
      "pred": 0.0717,
      "is_result": false
    },
    "btts": {
      "pred": 0.5107,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4511,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.29,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1792,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0415,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3588,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7327,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Goztep",
    "away_team": "Rizespor",
    "match_date": "2026-09-20",
    "score": "2-2",
    "over15": {
      "pred": 0.8554,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6786,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3991,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5406,
      "is_result": false
    },
    "draw": {
      "pred": 0.238,
      "is_result": true
    },
    "away": {
      "pred": 0.2214,
      "is_result": false
    },
    "btts": {
      "pred": 0.6441,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5447,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3188,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1761,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1491,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3942,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7227,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Kasimpasa",
    "away_team": "Konyaspor",
    "match_date": "2026-09-18",
    "score": "0-0",
    "over15": {
      "pred": 0.79,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5816,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3513,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4136,
      "is_result": false
    },
    "draw": {
      "pred": 0.2805,
      "is_result": true
    },
    "away": {
      "pred": 0.3059,
      "is_result": false
    },
    "btts": {
      "pred": 0.5896,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4761,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.229,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2045,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1562,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3539,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6942,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Trabzonspor",
    "away_team": "Galatasaray",
    "match_date": "2026-09-19",
    "score": "4-0",
    "over15": {
      "pred": 0.8759,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.74,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4016,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3745,
      "is_result": true
    },
    "draw": {
      "pred": 0.2316,
      "is_result": false
    },
    "away": {
      "pred": 0.394,
      "is_result": false
    },
    "btts": {
      "pred": 0.8648,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6894,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4163,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2921,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1564,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4423,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8219,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Angers",
    "away_team": "Troyes",
    "match_date": "2026-09-19",
    "score": "2-0",
    "over15": {
      "pred": 0.8056,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5287,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3942,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3703,
      "is_result": true
    },
    "draw": {
      "pred": 0.3012,
      "is_result": false
    },
    "away": {
      "pred": 0.3285,
      "is_result": false
    },
    "btts": {
      "pred": 0.5442,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1802,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1998,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1642,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3584,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7185,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Auxerre",
    "away_team": "Brest",
    "match_date": "2026-09-20",
    "score": "2-1",
    "over15": {
      "pred": 0.7786,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6289,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3077,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4069,
      "is_result": true
    },
    "draw": {
      "pred": 0.2687,
      "is_result": false
    },
    "away": {
      "pred": 0.3244,
      "is_result": false
    },
    "btts": {
      "pred": 0.5647,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5045,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2017,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2034,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1597,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4595,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7017,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Le Mans",
    "away_team": "Lorient",
    "match_date": "2026-09-19",
    "score": "2-1",
    "over15": {
      "pred": 0.8021,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5366,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4136,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4094,
      "is_result": true
    },
    "draw": {
      "pred": 0.2969,
      "is_result": false
    },
    "away": {
      "pred": 0.2937,
      "is_result": false
    },
    "btts": {
      "pred": 0.5717,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2025,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2062,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.163,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4324,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8072,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Lyon",
    "away_team": "Rennes",
    "match_date": "2026-09-19",
    "score": "4-0",
    "over15": {
      "pred": 0.81,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6778,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3797,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4105,
      "is_result": true
    },
    "draw": {
      "pred": 0.247,
      "is_result": false
    },
    "away": {
      "pred": 0.3424,
      "is_result": false
    },
    "btts": {
      "pred": 0.7293,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5737,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3097,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2153,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2044,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4262,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8013,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Marseille",
    "away_team": "Paris SG",
    "match_date": "2026-09-20",
    "score": "1-2",
    "over15": {
      "pred": 0.8513,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6773,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3952,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3471,
      "is_result": false
    },
    "draw": {
      "pred": 0.2422,
      "is_result": false
    },
    "away": {
      "pred": 0.4107,
      "is_result": true
    },
    "btts": {
      "pred": 0.719,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5646,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2528,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2625,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2037,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3935,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7248,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Monaco",
    "away_team": "Lens",
    "match_date": "2026-09-18",
    "score": "2-1",
    "over15": {
      "pred": 0.8672,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7034,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3572,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3179,
      "is_result": true
    },
    "draw": {
      "pred": 0.2318,
      "is_result": false
    },
    "away": {
      "pred": 0.4504,
      "is_result": false
    },
    "btts": {
      "pred": 0.6433,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.627,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2139,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1974,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.232,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4031,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7894,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Nice",
    "away_team": "Lille",
    "match_date": "2026-09-20",
    "score": "2-1",
    "over15": {
      "pred": 0.8112,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5038,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3676,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2878,
      "is_result": true
    },
    "draw": {
      "pred": 0.259,
      "is_result": false
    },
    "away": {
      "pred": 0.4532,
      "is_result": false
    },
    "btts": {
      "pred": 0.5153,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4016,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1527,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2029,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1597,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3408,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7396,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Paris FC",
    "away_team": "Strasbourg",
    "match_date": "2026-09-19",
    "score": "2-1",
    "over15": {
      "pred": 0.7883,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.665,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3543,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.36,
      "is_result": true
    },
    "draw": {
      "pred": 0.2465,
      "is_result": false
    },
    "away": {
      "pred": 0.3934,
      "is_result": false
    },
    "btts": {
      "pred": 0.6889,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5558,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.252,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2436,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1934,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3839,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7536,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Toulouse",
    "away_team": "Le Havre",
    "match_date": "2026-09-19",
    "score": "3-2",
    "over15": {
      "pred": 0.7971,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5455,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3792,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5488,
      "is_result": true
    },
    "draw": {
      "pred": 0.2583,
      "is_result": false
    },
    "away": {
      "pred": 0.1929,
      "is_result": false
    },
    "btts": {
      "pred": 0.5641,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2767,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.17,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1175,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3636,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7261,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Annecy",
    "away_team": "Dijon",
    "match_date": "2026-09-18",
    "score": "1-2",
    "over15": {
      "pred": 0.7807,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6468,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3554,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5026,
      "is_result": false
    },
    "draw": {
      "pred": 0.2331,
      "is_result": false
    },
    "away": {
      "pred": 0.2643,
      "is_result": true
    },
    "btts": {
      "pred": 0.5886,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5682,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2583,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1749,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1555,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3626,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7118,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Boulogne",
    "away_team": "Nantes",
    "match_date": "2026-09-19",
    "score": "1-2",
    "over15": {
      "pred": 0.7969,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.547,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3727,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3968,
      "is_result": false
    },
    "draw": {
      "pred": 0.2812,
      "is_result": false
    },
    "away": {
      "pred": 0.322,
      "is_result": true
    },
    "btts": {
      "pred": 0.5981,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4527,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2126,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.205,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1804,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3895,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7494,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Grenoble",
    "away_team": "Clermont",
    "match_date": "2026-09-18",
    "score": "1-1",
    "over15": {
      "pred": 0.7071,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4047,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1254,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.384,
      "is_result": false
    },
    "draw": {
      "pred": 0.3231,
      "is_result": true
    },
    "away": {
      "pred": 0.293,
      "is_result": false
    },
    "btts": {
      "pred": 0.5021,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.332,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1561,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2218,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1243,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3535,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.5731,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Guingamp",
    "away_team": "Red Star",
    "match_date": "2026-09-19",
    "score": "1-3",
    "over15": {
      "pred": 0.7801,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6097,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3375,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4302,
      "is_result": false
    },
    "draw": {
      "pred": 0.2594,
      "is_result": false
    },
    "away": {
      "pred": 0.3105,
      "is_result": true
    },
    "btts": {
      "pred": 0.5488,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4862,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2157,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1749,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1582,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4107,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7746,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Laval",
    "away_team": "Sochaux",
    "match_date": "2026-09-18",
    "score": "1-1",
    "over15": {
      "pred": 0.3403,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.2657,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0417,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3625,
      "is_result": false
    },
    "draw": {
      "pred": 0.3634,
      "is_result": true
    },
    "away": {
      "pred": 0.2742,
      "is_result": false
    },
    "btts": {
      "pred": 0.209,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.1057,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0514,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1156,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0419,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3534,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.5526,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Metz",
    "away_team": "St Etienne",
    "match_date": "2026-09-19",
    "score": "2-2",
    "over15": {
      "pred": 0.7877,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6701,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3641,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4024,
      "is_result": false
    },
    "draw": {
      "pred": 0.2391,
      "is_result": true
    },
    "away": {
      "pred": 0.3585,
      "is_result": false
    },
    "btts": {
      "pred": 0.6895,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5628,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2808,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2047,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.204,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4792,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8365,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Red Star",
    "away_team": "Metz",
    "match_date": "2026-09-14",
    "score": "1-0",
    "over15": {
      "pred": 0.7953,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5549,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3549,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3294,
      "is_result": true
    },
    "draw": {
      "pred": 0.2747,
      "is_result": false
    },
    "away": {
      "pred": 0.3959,
      "is_result": false
    },
    "btts": {
      "pred": 0.5917,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.454,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1543,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2363,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2011,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.445,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Reims",
    "away_team": "Montpellier",
    "match_date": "2026-09-18",
    "score": "1-1",
    "over15": {
      "pred": 0.7913,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5411,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3423,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5284,
      "is_result": false
    },
    "draw": {
      "pred": 0.2572,
      "is_result": true
    },
    "away": {
      "pred": 0.2145,
      "is_result": false
    },
    "btts": {
      "pred": 0.5752,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.444,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2856,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1794,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1102,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3926,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7678,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Rodez",
    "away_team": "Nancy",
    "match_date": "2026-09-18",
    "score": "3-4",
    "over15": {
      "pred": 0.7881,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5971,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3525,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6305,
      "is_result": false
    },
    "draw": {
      "pred": 0.1995,
      "is_result": false
    },
    "away": {
      "pred": 0.17,
      "is_result": true
    },
    "btts": {
      "pred": 0.5908,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4564,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3244,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1687,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0977,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3539,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6627,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Mexico Liga MX",
    "home_team": "Atl. San Luis",
    "away_team": "Necaxa",
    "match_date": "2026-09-20",
    "score": "3-1",
    "over15": {
      "pred": 0.7765,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6355,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2995,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4044,
      "is_result": true
    },
    "draw": {
      "pred": 0.2675,
      "is_result": false
    },
    "away": {
      "pred": 0.3282,
      "is_result": false
    },
    "btts": {
      "pred": 0.5878,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5127,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.212,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2106,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1652,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Mexico Liga MX",
    "home_team": "Atlas",
    "away_team": "UNAM Pumas",
    "match_date": "2026-09-20",
    "score": "1-1",
    "over15": {
      "pred": 0.7982,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5374,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3877,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3719,
      "is_result": false
    },
    "draw": {
      "pred": 0.2876,
      "is_result": true
    },
    "away": {
      "pred": 0.3405,
      "is_result": false
    },
    "btts": {
      "pred": 0.5985,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.442,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1999,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2244,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1743,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Mexico Liga MX",
    "home_team": "Club America",
    "away_team": "Guadalajara Chivas",
    "match_date": "2026-09-20",
    "score": "2-2",
    "over15": {
      "pred": 0.7788,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6277,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3092,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4888,
      "is_result": false
    },
    "draw": {
      "pred": 0.2657,
      "is_result": true
    },
    "away": {
      "pred": 0.2455,
      "is_result": false
    },
    "btts": {
      "pred": 0.5621,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4936,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2381,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1798,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1442,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Mexico Liga MX",
    "home_team": "Club Leon",
    "away_team": "Atl. San Luis",
    "match_date": "2026-09-15",
    "score": "2-0",
    "over15": {
      "pred": 0.7851,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5982,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3636,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4308,
      "is_result": true
    },
    "draw": {
      "pred": 0.2869,
      "is_result": false
    },
    "away": {
      "pred": 0.2822,
      "is_result": false
    },
    "btts": {
      "pred": 0.5843,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4907,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2332,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1818,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1693,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Mexico Liga MX",
    "home_team": "Guadalajara Chivas",
    "away_team": "UNAM Pumas",
    "match_date": "2026-09-14",
    "score": "3-0",
    "over15": {
      "pred": 0.7977,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5704,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3565,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4722,
      "is_result": true
    },
    "draw": {
      "pred": 0.285,
      "is_result": false
    },
    "away": {
      "pred": 0.2427,
      "is_result": false
    },
    "btts": {
      "pred": 0.5921,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4531,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2684,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2148,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1089,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Mexico Liga MX",
    "home_team": "Juarez",
    "away_team": "Tigres UANL",
    "match_date": "2026-09-19",
    "score": "2-0",
    "over15": {
      "pred": 0.7951,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5473,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.371,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.243,
      "is_result": true
    },
    "draw": {
      "pred": 0.239,
      "is_result": false
    },
    "away": {
      "pred": 0.518,
      "is_result": false
    },
    "btts": {
      "pred": 0.5998,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4495,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1266,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2331,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2401,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Mexico Liga MX",
    "home_team": "Monterrey",
    "away_team": "Cruz Azul",
    "match_date": "2026-09-20",
    "score": "1-0",
    "over15": {
      "pred": 0.8788,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6918,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.443,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4321,
      "is_result": true
    },
    "draw": {
      "pred": 0.2449,
      "is_result": false
    },
    "away": {
      "pred": 0.323,
      "is_result": false
    },
    "btts": {
      "pred": 0.7587,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5824,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3273,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2379,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1935,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Mexico Liga MX",
    "home_team": "Puebla",
    "away_team": "Atlante",
    "match_date": "2026-09-19",
    "score": "1-1",
    "over15": {
      "pred": 0.8072,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5201,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3857,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3477,
      "is_result": false
    },
    "draw": {
      "pred": 0.3038,
      "is_result": true
    },
    "away": {
      "pred": 0.3485,
      "is_result": false
    },
    "btts": {
      "pred": 0.531,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1592,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.203,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1688,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Mexico Liga MX",
    "home_team": "Puebla",
    "away_team": "Toluca",
    "match_date": "2026-09-16",
    "score": "0-1",
    "over15": {
      "pred": 0.7794,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5967,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3529,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2781,
      "is_result": false
    },
    "draw": {
      "pred": 0.2267,
      "is_result": false
    },
    "away": {
      "pred": 0.4952,
      "is_result": true
    },
    "btts": {
      "pred": 0.5849,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.477,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1233,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1821,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2795,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Mexico Liga MX",
    "home_team": "Santos Laguna",
    "away_team": "Juarez",
    "match_date": "2026-09-14",
    "score": "2-1",
    "over15": {
      "pred": 0.7189,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3968,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3402,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.406,
      "is_result": true
    },
    "draw": {
      "pred": 0.316,
      "is_result": false
    },
    "away": {
      "pred": 0.278,
      "is_result": false
    },
    "btts": {
      "pred": 0.5212,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3635,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1551,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2547,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1113,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "National League",
    "home_team": "Aldershot",
    "away_team": "Harrogate",
    "match_date": NaN,
    "score": "3-1",
    "over25": {
      "pred": 0.7933,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3092,
      "is_result": true
    },
    "draw": {
      "pred": 0.2017,
      "is_result": false
    },
    "away": {
      "pred": 0.4891,
      "is_result": false
    }
  },
  {
    "league": "National League",
    "home_team": "Aldershot",
    "away_team": "Yeovil",
    "match_date": "2026-09-15",
    "score": "1-1",
    "over15": {
      "pred": 0.7686,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6371,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3592,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4366,
      "is_result": false
    },
    "draw": {
      "pred": 0.2519,
      "is_result": true
    },
    "away": {
      "pred": 0.3115,
      "is_result": false
    },
    "btts": {
      "pred": 0.5748,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5569,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2255,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.188,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1613,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3762,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Altrincham",
    "away_team": "Halifax",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.5809,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3725,
      "is_result": true
    },
    "draw": {
      "pred": 0.2439,
      "is_result": false
    },
    "away": {
      "pred": 0.3836,
      "is_result": false
    }
  },
  {
    "league": "National League",
    "home_team": "Altrincham",
    "away_team": "Hartlepool",
    "match_date": "2026-09-16",
    "score": "2-1",
    "over15": {
      "pred": 0.7987,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5603,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3444,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4176,
      "is_result": true
    },
    "draw": {
      "pred": 0.2792,
      "is_result": false
    },
    "away": {
      "pred": 0.3032,
      "is_result": false
    },
    "btts": {
      "pred": 0.5925,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.456,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2333,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1931,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1661,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3589,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Barrow",
    "away_team": "Aldershot",
    "match_date": "2026-09-19",
    "score": "1-0",
    "over15": {
      "pred": 0.7752,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6331,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3355,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4667,
      "is_result": true
    },
    "draw": {
      "pred": 0.2443,
      "is_result": false
    },
    "away": {
      "pred": 0.2891,
      "is_result": false
    },
    "btts": {
      "pred": 0.537,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4991,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2484,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1484,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1402,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3863,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7546,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Barrow",
    "away_team": "Yeovil",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.5702,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4887,
      "is_result": false
    },
    "draw": {
      "pred": 0.2383,
      "is_result": false
    },
    "away": {
      "pred": 0.273,
      "is_result": true
    }
  },
  {
    "league": "National League",
    "home_team": "Boreham Wood",
    "away_team": "Harrogate",
    "match_date": "2026-09-19",
    "score": "4-1",
    "over15": {
      "pred": 0.9119,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8571,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3427,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5393,
      "is_result": true
    },
    "draw": {
      "pred": 0.1998,
      "is_result": false
    },
    "away": {
      "pred": 0.2608,
      "is_result": false
    },
    "btts": {
      "pred": 0.8749,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7833,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.5174,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1675,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.19,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4548,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8252,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Boston Utd",
    "away_team": "Woking",
    "match_date": "2026-09-15",
    "score": "1-1",
    "over15": {
      "pred": 0.7946,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.588,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3616,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3887,
      "is_result": false
    },
    "draw": {
      "pred": 0.2779,
      "is_result": true
    },
    "away": {
      "pred": 0.3334,
      "is_result": false
    },
    "btts": {
      "pred": 0.5879,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4777,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2164,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1943,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1772,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3518,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Carlisle",
    "away_team": "Forest Green",
    "match_date": "2026-09-15",
    "score": "1-1",
    "over15": {
      "pred": 0.7685,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6378,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3592,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4727,
      "is_result": false
    },
    "draw": {
      "pred": 0.2478,
      "is_result": true
    },
    "away": {
      "pred": 0.2795,
      "is_result": false
    },
    "btts": {
      "pred": 0.5759,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5522,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2317,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.177,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1671,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3998,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Eastleigh",
    "away_team": "Carlisle",
    "match_date": "2026-09-19",
    "score": "1-0",
    "over15": {
      "pred": 0.7773,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6665,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.357,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2635,
      "is_result": true
    },
    "draw": {
      "pred": 0.2005,
      "is_result": false
    },
    "away": {
      "pred": 0.536,
      "is_result": false
    },
    "btts": {
      "pred": 0.554,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.525,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1329,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1452,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2759,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3647,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7247,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Forest Green",
    "away_team": "Boston Utd",
    "match_date": "2026-09-19",
    "score": "1-3",
    "over15": {
      "pred": 0.7809,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6091,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3375,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5854,
      "is_result": false
    },
    "draw": {
      "pred": 0.2153,
      "is_result": false
    },
    "away": {
      "pred": 0.1993,
      "is_result": true
    },
    "btts": {
      "pred": 0.5878,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4692,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3381,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1369,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1128,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3495,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6976,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Fylde",
    "away_team": "Altrincham",
    "match_date": "2026-09-19",
    "score": "1-2",
    "over15": {
      "pred": 0.788,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6727,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3692,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5316,
      "is_result": false
    },
    "draw": {
      "pred": 0.2227,
      "is_result": false
    },
    "away": {
      "pred": 0.2458,
      "is_result": true
    },
    "btts": {
      "pred": 0.6106,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5438,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3473,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1304,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1328,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4034,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7753,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Fylde",
    "away_team": "Forest Green",
    "match_date": NaN,
    "score": "2-0",
    "over25": {
      "pred": 0.6795,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3699,
      "is_result": true
    },
    "draw": {
      "pred": 0.2196,
      "is_result": false
    },
    "away": {
      "pred": 0.4104,
      "is_result": false
    }
  },
  {
    "league": "National League",
    "home_team": "Gateshead",
    "away_team": "Southend",
    "match_date": "2026-09-19",
    "score": "1-6",
    "over15": {
      "pred": 0.7742,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6371,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3351,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2683,
      "is_result": false
    },
    "draw": {
      "pred": 0.1845,
      "is_result": false
    },
    "away": {
      "pred": 0.5472,
      "is_result": true
    },
    "btts": {
      "pred": 0.5733,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4804,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0895,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1613,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.3226,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3575,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7145,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Gateshead",
    "away_team": "Sutton",
    "match_date": NaN,
    "score": "0-1",
    "over25": {
      "pred": 0.6103,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4049,
      "is_result": false
    },
    "draw": {
      "pred": 0.2373,
      "is_result": false
    },
    "away": {
      "pred": 0.3578,
      "is_result": true
    }
  },
  {
    "league": "National League",
    "home_team": "Halifax",
    "away_team": "Sutton",
    "match_date": "2026-09-19",
    "score": "1-1",
    "over15": {
      "pred": 0.7877,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5769,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3398,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.544,
      "is_result": false
    },
    "draw": {
      "pred": 0.2385,
      "is_result": true
    },
    "away": {
      "pred": 0.2175,
      "is_result": false
    },
    "btts": {
      "pred": 0.5985,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4599,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3117,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1564,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1305,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3552,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6462,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Harrogate",
    "away_team": "Fylde",
    "match_date": "2026-09-15",
    "score": "1-2",
    "over15": {
      "pred": 0.9221,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8643,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.388,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6282,
      "is_result": false
    },
    "draw": {
      "pred": 0.1673,
      "is_result": false
    },
    "away": {
      "pred": 0.2045,
      "is_result": true
    },
    "btts": {
      "pred": 0.6874,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6353,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4072,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1501,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1302,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4585,
      "hit": true,
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
      "pred": 0.5576,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4581,
      "is_result": false
    },
    "draw": {
      "pred": 0.2446,
      "is_result": false
    },
    "away": {
      "pred": 0.2972,
      "is_result": true
    }
  },
  {
    "league": "National League",
    "home_team": "Hartlepool",
    "away_team": "Worthing",
    "match_date": "2026-09-19",
    "score": "1-3",
    "over15": {
      "pred": 0.7784,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6209,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3367,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.343,
      "is_result": false
    },
    "draw": {
      "pred": 0.2438,
      "is_result": false
    },
    "away": {
      "pred": 0.4132,
      "is_result": true
    },
    "btts": {
      "pred": 0.5401,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4928,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1815,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1761,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1824,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3611,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.5845,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Hornchurch",
    "away_team": "Scunthorpe",
    "match_date": "2026-09-19",
    "score": "1-0",
    "over15": {
      "pred": 0.7741,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6376,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.335,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.416,
      "is_result": true
    },
    "draw": {
      "pred": 0.2462,
      "is_result": false
    },
    "away": {
      "pred": 0.3378,
      "is_result": false
    },
    "btts": {
      "pred": 0.5613,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5132,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2221,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1724,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1668,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.388,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.756,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Hornchurch",
    "away_team": "Woking",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.5715,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4002,
      "is_result": true
    },
    "draw": {
      "pred": 0.2456,
      "is_result": false
    },
    "away": {
      "pred": 0.3542,
      "is_result": false
    }
  },
  {
    "league": "National League",
    "home_team": "Kidderminster",
    "away_team": "Gateshead",
    "match_date": "2026-09-16",
    "score": "1-0",
    "over15": {
      "pred": 0.7752,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6092,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.354,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6814,
      "is_result": true
    },
    "draw": {
      "pred": 0.1862,
      "is_result": false
    },
    "away": {
      "pred": 0.1324,
      "is_result": false
    },
    "btts": {
      "pred": 0.5917,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4613,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3493,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.157,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0855,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3841,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Scunthorpe",
    "away_team": "Boreham Wood",
    "match_date": "2026-09-16",
    "score": "1-2",
    "over15": {
      "pred": 0.8998,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8078,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3756,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.317,
      "is_result": false
    },
    "draw": {
      "pred": 0.2066,
      "is_result": false
    },
    "away": {
      "pred": 0.4764,
      "is_result": true
    },
    "btts": {
      "pred": 0.7283,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6811,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2441,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1887,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2955,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.444,
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
      "pred": 0.7012,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5529,
      "is_result": true
    },
    "draw": {
      "pred": 0.1998,
      "is_result": false
    },
    "away": {
      "pred": 0.2473,
      "is_result": false
    }
  },
  {
    "league": "National League",
    "home_team": "Solihull",
    "away_team": "Barrow",
    "match_date": "2026-09-15",
    "score": "1-0",
    "over15": {
      "pred": 0.7628,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6811,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3576,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3753,
      "is_result": true
    },
    "draw": {
      "pred": 0.2392,
      "is_result": false
    },
    "away": {
      "pred": 0.3855,
      "is_result": false
    },
    "btts": {
      "pred": 0.6213,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5834,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2424,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1835,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1954,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4022,
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
      "pred": 0.5449,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4613,
      "is_result": false
    },
    "draw": {
      "pred": 0.2528,
      "is_result": false
    },
    "away": {
      "pred": 0.2859,
      "is_result": true
    }
  },
  {
    "league": "National League",
    "home_team": "Southend",
    "away_team": "Tamworth",
    "match_date": "2026-09-15",
    "score": "3-1",
    "over15": {
      "pred": 0.8746,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7248,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3625,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6212,
      "is_result": true
    },
    "draw": {
      "pred": 0.1825,
      "is_result": false
    },
    "away": {
      "pred": 0.1964,
      "is_result": false
    },
    "btts": {
      "pred": 0.5784,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5551,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3343,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1425,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1016,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3946,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Sutton",
    "away_team": "Eastleigh",
    "match_date": "2026-09-15",
    "score": "2-1",
    "over15": {
      "pred": 0.7707,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.623,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3597,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4274,
      "is_result": true
    },
    "draw": {
      "pred": 0.2539,
      "is_result": false
    },
    "away": {
      "pred": 0.3187,
      "is_result": false
    },
    "btts": {
      "pred": 0.5758,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5501,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2215,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1917,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1626,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3633,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Tamworth",
    "away_team": "Wealdstone",
    "match_date": "2026-09-19",
    "score": "2-1",
    "over15": {
      "pred": 0.8432,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7055,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4218,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4551,
      "is_result": true
    },
    "draw": {
      "pred": 0.2233,
      "is_result": false
    },
    "away": {
      "pred": 0.3216,
      "is_result": false
    },
    "btts": {
      "pred": 0.7951,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6199,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4024,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1918,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2008,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4013,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7728,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Tamworth",
    "away_team": "Worthing",
    "match_date": NaN,
    "score": "3-2",
    "over25": {
      "pred": 0.8646,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3846,
      "is_result": true
    },
    "draw": {
      "pred": 0.2014,
      "is_result": false
    },
    "away": {
      "pred": 0.414,
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
      "pred": 0.7004,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2573,
      "is_result": false
    },
    "draw": {
      "pred": 0.2021,
      "is_result": true
    },
    "away": {
      "pred": 0.5406,
      "is_result": false
    }
  },
  {
    "league": "National League",
    "home_team": "Wealdstone",
    "away_team": "Halifax",
    "match_date": "2026-09-15",
    "score": "0-1",
    "over15": {
      "pred": 0.7734,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6188,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3604,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3587,
      "is_result": false
    },
    "draw": {
      "pred": 0.2488,
      "is_result": false
    },
    "away": {
      "pred": 0.3925,
      "is_result": true
    },
    "btts": {
      "pred": 0.5766,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5432,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2321,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2001,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1444,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3662,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Woking",
    "away_team": "Kidderminster",
    "match_date": "2026-09-19",
    "score": "0-0",
    "over15": {
      "pred": 0.8068,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5286,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3941,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3372,
      "is_result": false
    },
    "draw": {
      "pred": 0.2873,
      "is_result": true
    },
    "away": {
      "pred": 0.3754,
      "is_result": false
    },
    "btts": {
      "pred": 0.5332,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1643,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1878,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1811,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3538,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6596,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Worthing",
    "away_team": "Hornchurch",
    "match_date": "2026-09-15",
    "score": "1-0",
    "over15": {
      "pred": 0.9354,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.9072,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3968,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3422,
      "is_result": true
    },
    "draw": {
      "pred": 0.1982,
      "is_result": false
    },
    "away": {
      "pred": 0.4597,
      "is_result": false
    },
    "btts": {
      "pred": 0.8677,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7259,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2831,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2155,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.3691,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.363,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Yeovil",
    "away_team": "Solihull",
    "match_date": "2026-09-18",
    "score": "4-1",
    "over15": {
      "pred": 0.7871,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6036,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.353,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4185,
      "is_result": true
    },
    "draw": {
      "pred": 0.249,
      "is_result": false
    },
    "away": {
      "pred": 0.3326,
      "is_result": false
    },
    "btts": {
      "pred": 0.5892,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5207,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2411,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1838,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1643,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3539,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6743,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Billericay Town",
    "away_team": "Braintree Town",
    "match_date": "2026-09-15",
    "score": "3-2",
    "over15": {
      "pred": 0.9629,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8895,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.7434,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7772,
      "is_result": true
    },
    "draw": {
      "pred": 0.1143,
      "is_result": false
    },
    "away": {
      "pred": 0.1085,
      "is_result": false
    },
    "btts": {
      "pred": 0.7267,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6925,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.5273,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1104,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0889,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.8092,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Truro City",
    "away_team": "Salisbury",
    "match_date": "2026-09-15",
    "score": "0-1",
    "over15": {
      "pred": 0.7203,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.443,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3394,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6774,
      "is_result": false
    },
    "draw": {
      "pred": 0.2374,
      "is_result": false
    },
    "away": {
      "pred": 0.0852,
      "is_result": true
    },
    "btts": {
      "pred": 0.2645,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2645,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1513,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.0909,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0223,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3232,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Northern Premier League",
    "home_team": "Stockton Town",
    "away_team": "Bamber Bridge",
    "match_date": "2026-09-19",
    "score": "5-2",
    "over15": {
      "pred": 0.7702,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.65,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3338,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4807,
      "is_result": true
    },
    "draw": {
      "pred": 0.2431,
      "is_result": false
    },
    "away": {
      "pred": 0.2762,
      "is_result": false
    },
    "btts": {
      "pred": 0.5778,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5212,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2849,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1519,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1411,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3519,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6799,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5614,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Norway Eliteserien",
    "home_team": "Kristiansund",
    "away_team": "Rosenborg",
    "match_date": "2026-09-19",
    "score": "1-3",
    "over15": {
      "pred": 0.7913,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5574,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3499,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2456,
      "is_result": false
    },
    "draw": {
      "pred": 0.2504,
      "is_result": false
    },
    "away": {
      "pred": 0.5039,
      "is_result": true
    },
    "btts": {
      "pred": 0.5902,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4602,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1688,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2068,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2146,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Norway Eliteserien",
    "home_team": "Molde",
    "away_team": "Aalesund",
    "match_date": "2026-09-19",
    "score": "1-2",
    "over15": {
      "pred": 0.8937,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8069,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3686,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6646,
      "is_result": false
    },
    "draw": {
      "pred": 0.1588,
      "is_result": false
    },
    "away": {
      "pred": 0.1765,
      "is_result": true
    },
    "btts": {
      "pred": 0.6946,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5965,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4685,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.115,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1111,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Norway Eliteserien",
    "home_team": "Sandefjord",
    "away_team": "Start",
    "match_date": "2026-09-20",
    "score": "3-0",
    "over15": {
      "pred": 0.8003,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5376,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3972,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.516,
      "is_result": true
    },
    "draw": {
      "pred": 0.2751,
      "is_result": false
    },
    "away": {
      "pred": 0.2089,
      "is_result": false
    },
    "btts": {
      "pred": 0.5496,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4475,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2178,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2252,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1066,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Norway Eliteserien",
    "home_team": "Sarpsborg 08",
    "away_team": "KFUM Oslo",
    "match_date": "2026-09-18",
    "score": "1-3",
    "over15": {
      "pred": 0.7949,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5472,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3439,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5232,
      "is_result": false
    },
    "draw": {
      "pred": 0.2559,
      "is_result": false
    },
    "away": {
      "pred": 0.2209,
      "is_result": true
    },
    "btts": {
      "pred": 0.5811,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4471,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2868,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1793,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1149,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Norway Eliteserien",
    "home_team": "Tromso",
    "away_team": "HamKam",
    "match_date": "2026-09-20",
    "score": "3-2",
    "over15": {
      "pred": 0.7911,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6511,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3201,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6016,
      "is_result": true
    },
    "draw": {
      "pred": 0.2184,
      "is_result": false
    },
    "away": {
      "pred": 0.18,
      "is_result": false
    },
    "btts": {
      "pred": 0.574,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4928,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3026,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1763,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0952,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Norway Eliteserien",
    "home_team": "Valerenga",
    "away_team": "Fredrikstad",
    "match_date": "2026-09-20",
    "score": "1-1",
    "over15": {
      "pred": 0.787,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5857,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3359,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4496,
      "is_result": false
    },
    "draw": {
      "pred": 0.2664,
      "is_result": true
    },
    "away": {
      "pred": 0.284,
      "is_result": false
    },
    "btts": {
      "pred": 0.5754,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4762,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2149,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1992,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1614,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Norway Eliteserien",
    "home_team": "Viking",
    "away_team": "Lillestrom",
    "match_date": "2026-09-20",
    "score": "3-0",
    "over15": {
      "pred": 0.8771,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7101,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4602,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6954,
      "is_result": true
    },
    "draw": {
      "pred": 0.1866,
      "is_result": false
    },
    "away": {
      "pred": 0.118,
      "is_result": false
    },
    "btts": {
      "pred": 0.5683,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5137,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3322,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.163,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0731,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Poland Ekstraklasa",
    "home_team": "GKS Katowice",
    "away_team": "Cracovia",
    "match_date": "2026-09-19",
    "score": "3-2",
    "over15": {
      "pred": 0.7695,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6414,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3346,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6052,
      "is_result": true
    },
    "draw": {
      "pred": 0.2185,
      "is_result": false
    },
    "away": {
      "pred": 0.1762,
      "is_result": false
    },
    "btts": {
      "pred": 0.5633,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4811,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3478,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1219,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0935,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Poland Ekstraklasa",
    "home_team": "Jagiellonia",
    "away_team": "Legia",
    "match_date": "2026-09-20",
    "score": "1-3",
    "over15": {
      "pred": 0.778,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6241,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3127,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4411,
      "is_result": false
    },
    "draw": {
      "pred": 0.2823,
      "is_result": false
    },
    "away": {
      "pred": 0.2766,
      "is_result": true
    },
    "btts": {
      "pred": 0.5544,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4967,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2125,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1944,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1475,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Poland Ekstraklasa",
    "home_team": "Korona Kielce",
    "away_team": "Gornik Zabrze",
    "match_date": "2026-09-15",
    "score": "0-2",
    "over15": {
      "pred": 0.8004,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5693,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3566,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3332,
      "is_result": false
    },
    "draw": {
      "pred": 0.2848,
      "is_result": false
    },
    "away": {
      "pred": 0.382,
      "is_result": true
    },
    "btts": {
      "pred": 0.5909,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4644,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1809,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2261,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.184,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Poland Ekstraklasa",
    "home_team": "Korona Kielce",
    "away_team": "Rakow",
    "match_date": "2026-09-19",
    "score": "3-2",
    "over15": {
      "pred": 0.8062,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5201,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3858,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3008,
      "is_result": true
    },
    "draw": {
      "pred": 0.311,
      "is_result": false
    },
    "away": {
      "pred": 0.3882,
      "is_result": false
    },
    "btts": {
      "pred": 0.5383,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1355,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2243,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1785,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Poland Ekstraklasa",
    "home_team": "Lech Poznan",
    "away_team": "Radomiak Radom",
    "match_date": "2026-09-20",
    "score": "5-1",
    "over15": {
      "pred": 0.8706,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6831,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4126,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6062,
      "is_result": true
    },
    "draw": {
      "pred": 0.2224,
      "is_result": false
    },
    "away": {
      "pred": 0.1714,
      "is_result": false
    },
    "btts": {
      "pred": 0.585,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5285,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3034,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1785,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1031,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Poland Ekstraklasa",
    "home_team": "Motor Lublin",
    "away_team": "Gornik Zabrze",
    "match_date": "2026-09-19",
    "score": "0-0",
    "over15": {
      "pred": 0.7743,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6205,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3367,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3418,
      "is_result": false
    },
    "draw": {
      "pred": 0.2759,
      "is_result": true
    },
    "away": {
      "pred": 0.3824,
      "is_result": false
    },
    "btts": {
      "pred": 0.5554,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4928,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.179,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2021,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1744,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Poland Ekstraklasa",
    "home_team": "Widzew Lodz",
    "away_team": "Wieczysta Krakow",
    "match_date": "2026-09-18",
    "score": "2-2",
    "over15": {
      "pred": 0.7829,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6124,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3536,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5154,
      "is_result": false
    },
    "draw": {
      "pred": 0.257,
      "is_result": true
    },
    "away": {
      "pred": 0.2276,
      "is_result": false
    },
    "btts": {
      "pred": 0.5892,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.513,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2562,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1913,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1417,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Poland Ekstraklasa",
    "home_team": "Wisla",
    "away_team": "Slask Wroclaw",
    "match_date": "2026-09-18",
    "score": "2-1",
    "over15": {
      "pred": 0.9072,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8111,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.375,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6447,
      "is_result": true
    },
    "draw": {
      "pred": 0.181,
      "is_result": false
    },
    "away": {
      "pred": 0.1742,
      "is_result": false
    },
    "btts": {
      "pred": 0.6212,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6212,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.359,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1498,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1124,
      "hit": true,
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
      "pred": 0.5371,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2679,
      "is_result": false
    },
    "draw": {
      "pred": 0.2761,
      "is_result": false
    },
    "away": {
      "pred": 0.4561,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3039,
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
      "pred": 0.5374,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4365,
      "is_result": false
    },
    "draw": {
      "pred": 0.284,
      "is_result": true
    },
    "away": {
      "pred": 0.2795,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3047,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Bournemouth",
    "away_team": "Liverpool",
    "match_date": "2026-09-20",
    "score": "0-1",
    "over15": {
      "pred": 0.8066,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6478,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3115,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3944,
      "is_result": false
    },
    "draw": {
      "pred": 0.2738,
      "is_result": false
    },
    "away": {
      "pred": 0.3318,
      "is_result": true
    },
    "btts": {
      "pred": 0.6421,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.528,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2327,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2319,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1774,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.333,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7386,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Brentford",
    "away_team": "Chelsea",
    "match_date": "2026-09-18",
    "score": "3-0",
    "over15": {
      "pred": 0.8921,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.76,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3663,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4374,
      "is_result": true
    },
    "draw": {
      "pred": 0.2461,
      "is_result": false
    },
    "away": {
      "pred": 0.3165,
      "is_result": false
    },
    "btts": {
      "pred": 0.7093,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6695,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2819,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2298,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1977,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4634,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8534,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Brighton",
    "away_team": "Arsenal",
    "match_date": "2026-09-19",
    "score": "3-0",
    "over15": {
      "pred": 0.8284,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6815,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3874,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4944,
      "is_result": true
    },
    "draw": {
      "pred": 0.2514,
      "is_result": false
    },
    "away": {
      "pred": 0.2543,
      "is_result": false
    },
    "btts": {
      "pred": 0.7093,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5644,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3754,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1791,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1547,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3833,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7656,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Chelsea",
    "away_team": "Brighton",
    "match_date": NaN,
    "score": "4-3",
    "over25": {
      "pred": 0.6618,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.397,
      "is_result": true
    },
    "draw": {
      "pred": 0.2458,
      "is_result": false
    },
    "away": {
      "pred": 0.3572,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5284,
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
      "pred": 0.1083,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.1213,
      "is_result": false
    },
    "draw": {
      "pred": 0.4538,
      "is_result": false
    },
    "away": {
      "pred": 0.4249,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.2154,
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
      "pred": 0.5941,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2339,
      "is_result": false
    },
    "draw": {
      "pred": 0.2535,
      "is_result": false
    },
    "away": {
      "pred": 0.5126,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.413,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Everton",
    "away_team": "Ipswich",
    "match_date": "2026-09-19",
    "score": "1-0",
    "over15": {
      "pred": 0.7932,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5471,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3718,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4336,
      "is_result": true
    },
    "draw": {
      "pred": 0.2966,
      "is_result": false
    },
    "away": {
      "pred": 0.2699,
      "is_result": false
    },
    "btts": {
      "pred": 0.5921,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4506,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2132,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2183,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1607,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3926,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7767,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Fulham",
    "away_team": "Man United",
    "match_date": "2026-09-20",
    "score": "1-1",
    "over15": {
      "pred": 0.7785,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6201,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3151,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4114,
      "is_result": false
    },
    "draw": {
      "pred": 0.2832,
      "is_result": true
    },
    "away": {
      "pred": 0.3054,
      "is_result": false
    },
    "btts": {
      "pred": 0.5596,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4974,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.199,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2056,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.155,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3408,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7226,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Leeds",
    "away_team": "Brentford",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.602,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4069,
      "is_result": false
    },
    "draw": {
      "pred": 0.265,
      "is_result": true
    },
    "away": {
      "pred": 0.3281,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3397,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Leeds",
    "away_team": "Crystal Palace",
    "match_date": "2026-09-20",
    "score": "0-0",
    "over15": {
      "pred": 0.7943,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5372,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3758,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4356,
      "is_result": false
    },
    "draw": {
      "pred": 0.2935,
      "is_result": true
    },
    "away": {
      "pred": 0.2709,
      "is_result": false
    },
    "btts": {
      "pred": 0.5919,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4423,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.204,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2217,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1662,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3505,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6949,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Leeds",
    "away_team": "Newcastle",
    "match_date": "2026-09-14",
    "score": "4-1",
    "over15": {
      "pred": 0.7762,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4978,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3494,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4153,
      "is_result": true
    },
    "draw": {
      "pred": 0.3075,
      "is_result": false
    },
    "away": {
      "pred": 0.2773,
      "is_result": false
    },
    "btts": {
      "pred": 0.5733,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4347,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2111,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.238,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1242,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3413,
      "hit": false,
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
      "pred": 0.6117,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5151,
      "is_result": false
    },
    "draw": {
      "pred": 0.2498,
      "is_result": true
    },
    "away": {
      "pred": 0.2351,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3576,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Man City",
    "away_team": "Sunderland",
    "match_date": "2026-09-20",
    "score": "5-3",
    "over15": {
      "pred": 0.7811,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6063,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3235,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6148,
      "is_result": true
    },
    "draw": {
      "pred": 0.2423,
      "is_result": false
    },
    "away": {
      "pred": 0.1429,
      "is_result": false
    },
    "btts": {
      "pred": 0.6004,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4454,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3018,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2233,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0752,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.342,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7366,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Man United",
    "away_team": "Ipswich",
    "match_date": NaN,
    "score": "5-2",
    "over25": {
      "pred": 0.7386,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.6567,
      "is_result": true
    },
    "draw": {
      "pred": 0.1875,
      "is_result": false
    },
    "away": {
      "pred": 0.1558,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5191,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Newcastle",
    "away_team": "Hull",
    "match_date": "2026-09-19",
    "score": "2-1",
    "over15": {
      "pred": 0.7203,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3245,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3052,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4226,
      "is_result": true
    },
    "draw": {
      "pred": 0.3403,
      "is_result": false
    },
    "away": {
      "pred": 0.2371,
      "is_result": false
    },
    "btts": {
      "pred": 0.5376,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2702,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1553,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2687,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1136,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3545,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6646,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Nott'm Forest",
    "away_team": "Coventry",
    "match_date": "2026-09-19",
    "score": "0-1",
    "over15": {
      "pred": 0.6675,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3021,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2967,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5793,
      "is_result": false
    },
    "draw": {
      "pred": 0.3149,
      "is_result": false
    },
    "away": {
      "pred": 0.1058,
      "is_result": true
    },
    "btts": {
      "pred": 0.2528,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.1521,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0976,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1276,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0275,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3572,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6357,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Sunderland",
    "away_team": "Fulham",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.5383,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.358,
      "is_result": true
    },
    "draw": {
      "pred": 0.3048,
      "is_result": false
    },
    "away": {
      "pred": 0.3372,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.2298,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Tottenham",
    "away_team": "Aston Villa",
    "match_date": "2026-09-19",
    "score": "2-3",
    "over15": {
      "pred": 0.7996,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5391,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4071,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2801,
      "is_result": false
    },
    "draw": {
      "pred": 0.2959,
      "is_result": false
    },
    "away": {
      "pred": 0.424,
      "is_result": true
    },
    "btts": {
      "pred": 0.5949,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1581,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2372,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1997,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3627,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7371,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Tottenham",
    "away_team": "Newcastle",
    "match_date": NaN,
    "score": "0-2",
    "over25": {
      "pred": 0.537,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3342,
      "is_result": false
    },
    "draw": {
      "pred": 0.2803,
      "is_result": false
    },
    "away": {
      "pred": 0.3855,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4915,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Romania Superliga",
    "home_team": "UTA Arad",
    "away_team": "Sepsi Sf. Gheorghe",
    "match_date": "2026-09-18",
    "score": "1-0",
    "over15": {
      "pred": 0.7962,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5577,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3463,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4818,
      "is_result": true
    },
    "draw": {
      "pred": 0.2687,
      "is_result": false
    },
    "away": {
      "pred": 0.2494,
      "is_result": false
    },
    "btts": {
      "pred": 0.5906,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4534,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2707,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1883,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1316,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Scottish Championship",
    "home_team": "Livingston",
    "away_team": "Inverness C",
    "match_date": "2026-09-19",
    "score": "2-2",
    "over15": {
      "pred": 0.7994,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5385,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4095,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6008,
      "is_result": false
    },
    "draw": {
      "pred": 0.2663,
      "is_result": true
    },
    "away": {
      "pred": 0.1329,
      "is_result": false
    },
    "btts": {
      "pred": 0.5068,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4404,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2595,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1756,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0716,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3519,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7061,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Scottish Championship",
    "home_team": "Queens Park",
    "away_team": "Ayr",
    "match_date": "2026-09-18",
    "score": "0-2",
    "over15": {
      "pred": 0.7969,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5355,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3409,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3657,
      "is_result": false
    },
    "draw": {
      "pred": 0.3064,
      "is_result": false
    },
    "away": {
      "pred": 0.3279,
      "is_result": true
    },
    "btts": {
      "pred": 0.5905,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4481,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.187,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2466,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1569,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3638,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7535,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Scottish Championship",
    "home_team": "Stenhousemuir",
    "away_team": "Arbroath",
    "match_date": "2026-09-19",
    "score": "1-0",
    "over15": {
      "pred": 0.809,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5071,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3732,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.706,
      "is_result": true
    },
    "draw": {
      "pred": 0.235,
      "is_result": false
    },
    "away": {
      "pred": 0.059,
      "is_result": false
    },
    "btts": {
      "pred": 0.3732,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2768,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2229,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1237,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0266,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3682,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.5095,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Scottish League One",
    "home_team": "Alloa",
    "away_team": "East Kilbride",
    "match_date": "2026-09-19",
    "score": "1-2",
    "over15": {
      "pred": 0.7782,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6031,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.338,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3973,
      "is_result": false
    },
    "draw": {
      "pred": 0.2834,
      "is_result": false
    },
    "away": {
      "pred": 0.3193,
      "is_result": true
    },
    "btts": {
      "pred": 0.5415,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4844,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1885,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1958,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1572,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3495,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.723,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Scottish League One",
    "home_team": "Cove Rangers",
    "away_team": "Ross County",
    "match_date": "2026-09-19",
    "score": "0-2",
    "over15": {
      "pred": 0.7752,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6197,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3368,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2674,
      "is_result": false
    },
    "draw": {
      "pred": 0.2111,
      "is_result": false
    },
    "away": {
      "pred": 0.5215,
      "is_result": true
    },
    "btts": {
      "pred": 0.5776,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4708,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1691,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.3556,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0529,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3521,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6989,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Scottish League One",
    "home_team": "East Fife",
    "away_team": "Montrose",
    "match_date": "2026-09-19",
    "score": "1-2",
    "over15": {
      "pred": 0.7783,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6024,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.338,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3556,
      "is_result": false
    },
    "draw": {
      "pred": 0.2793,
      "is_result": false
    },
    "away": {
      "pred": 0.3651,
      "is_result": true
    },
    "btts": {
      "pred": 0.5404,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4847,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1768,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1975,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.166,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3548,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6715,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Scottish League One",
    "home_team": "Peterhead",
    "away_team": "Airdrie Utd",
    "match_date": "2026-09-19",
    "score": "1-2",
    "over15": {
      "pred": 0.8016,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5359,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4112,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4359,
      "is_result": false
    },
    "draw": {
      "pred": 0.3055,
      "is_result": false
    },
    "away": {
      "pred": 0.2586,
      "is_result": true
    },
    "btts": {
      "pred": 0.5689,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2076,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2141,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1472,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3552,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6697,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Scottish League One",
    "home_team": "Ross County",
    "away_team": "Queen of Sth",
    "match_date": "2026-09-15",
    "score": "8-0",
    "over15": {
      "pred": 0.7695,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6207,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3601,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5227,
      "is_result": true
    },
    "draw": {
      "pred": 0.247,
      "is_result": false
    },
    "away": {
      "pred": 0.2303,
      "is_result": false
    },
    "btts": {
      "pred": 0.58,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5241,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2695,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1906,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.12,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3696,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish League Two",
    "home_team": "Dumbarton",
    "away_team": "Spartans",
    "match_date": "2026-09-19",
    "score": "3-0",
    "over15": {
      "pred": 0.7704,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6469,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3341,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2629,
      "is_result": true
    },
    "draw": {
      "pred": 0.2157,
      "is_result": false
    },
    "away": {
      "pred": 0.5214,
      "is_result": false
    },
    "btts": {
      "pred": 0.5408,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4967,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2373,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2844,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0191,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3533,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.685,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Scottish League Two",
    "home_team": "Elgin",
    "away_team": "Stranraer",
    "match_date": "2026-09-19",
    "score": "1-5",
    "over15": {
      "pred": 0.792,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5505,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3564,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4506,
      "is_result": false
    },
    "draw": {
      "pred": 0.28,
      "is_result": false
    },
    "away": {
      "pred": 0.2694,
      "is_result": true
    },
    "btts": {
      "pred": 0.5901,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4578,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2268,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1977,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1656,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3521,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6962,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Scottish League Two",
    "home_team": "Forfar",
    "away_team": "Annan Athletic",
    "match_date": "2026-09-19",
    "score": "1-0",
    "over15": {
      "pred": 0.7989,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5427,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3918,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4483,
      "is_result": true
    },
    "draw": {
      "pred": 0.2883,
      "is_result": false
    },
    "away": {
      "pred": 0.2634,
      "is_result": false
    },
    "btts": {
      "pred": 0.5928,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.228,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2027,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1622,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3538,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6802,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Scottish League Two",
    "home_team": "Kelty Hearts",
    "away_team": "Edinburgh City",
    "match_date": "2026-09-19",
    "score": "1-3",
    "over15": {
      "pred": 0.9288,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.885,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.6126,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4649,
      "is_result": false
    },
    "draw": {
      "pred": 0.2138,
      "is_result": false
    },
    "away": {
      "pred": 0.3213,
      "is_result": true
    },
    "btts": {
      "pred": 0.9073,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.8654,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4876,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2102,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2095,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4511,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8441,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Scottish League Two",
    "home_team": "Stirling",
    "away_team": "Clyde",
    "match_date": "2026-09-19",
    "score": "1-1",
    "over15": {
      "pred": 0.8676,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7348,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4043,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2615,
      "is_result": false
    },
    "draw": {
      "pred": 0.204,
      "is_result": true
    },
    "away": {
      "pred": 0.5345,
      "is_result": false
    },
    "btts": {
      "pred": 0.7756,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6081,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.209,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1919,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.3748,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3957,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7866,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "Aberdeen",
    "away_team": "Rangers",
    "match_date": NaN,
    "score": "0-1",
    "over25": {
      "pred": 0.6153,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2694,
      "is_result": false
    },
    "draw": {
      "pred": 0.2295,
      "is_result": false
    },
    "away": {
      "pred": 0.5011,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3815,
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
      "pred": 0.6862,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.7406,
      "is_result": true
    },
    "draw": {
      "pred": 0.15,
      "is_result": false
    },
    "away": {
      "pred": 0.1093,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.617,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "Celtic",
    "away_team": "Rangers",
    "match_date": "2026-09-20",
    "score": "0-1",
    "over15": {
      "pred": 0.9375,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.9375,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.646,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.547,
      "is_result": false
    },
    "draw": {
      "pred": 0.2064,
      "is_result": false
    },
    "away": {
      "pred": 0.2466,
      "is_result": true
    },
    "btts": {
      "pred": 0.8019,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.8019,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3978,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2155,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1886,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5285,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.9214,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "Dundee",
    "away_team": "Hibernian",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.5908,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3173,
      "is_result": false
    },
    "draw": {
      "pred": 0.2402,
      "is_result": false
    },
    "away": {
      "pred": 0.4425,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4652,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "Dundee",
    "away_team": "Motherwell",
    "match_date": "2026-09-19",
    "score": "2-1",
    "over15": {
      "pred": 0.7974,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5465,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3748,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3015,
      "is_result": true
    },
    "draw": {
      "pred": 0.2689,
      "is_result": false
    },
    "away": {
      "pred": 0.4296,
      "is_result": false
    },
    "btts": {
      "pred": 0.6026,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4509,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1909,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2039,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2078,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3804,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7785,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "Hearts",
    "away_team": "St Johnstone",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.605,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.6246,
      "is_result": true
    },
    "draw": {
      "pred": 0.2047,
      "is_result": false
    },
    "away": {
      "pred": 0.1706,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4433,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "Hibernian",
    "away_team": "Aberdeen",
    "match_date": "2026-09-19",
    "score": "1-1",
    "over15": {
      "pred": 0.803,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5368,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4141,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5418,
      "is_result": false
    },
    "draw": {
      "pred": 0.261,
      "is_result": true
    },
    "away": {
      "pred": 0.1972,
      "is_result": false
    },
    "btts": {
      "pred": 0.5105,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2372,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1634,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1098,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3537,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6893,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "Hibernian",
    "away_team": "Kilmarnock",
    "match_date": "2026-09-15",
    "score": "0-1",
    "over15": {
      "pred": 0.7737,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6182,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3605,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6176,
      "is_result": false
    },
    "draw": {
      "pred": 0.1958,
      "is_result": false
    },
    "away": {
      "pred": 0.1866,
      "is_result": true
    },
    "btts": {
      "pred": 0.5898,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4854,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3355,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.16,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0943,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4004,
      "hit": true,
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
      "pred": 0.538,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.414,
      "is_result": false
    },
    "draw": {
      "pred": 0.2678,
      "is_result": false
    },
    "away": {
      "pred": 0.3182,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3051,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "Motherwell",
    "away_team": "Aberdeen",
    "match_date": "2026-09-15",
    "score": "0-4",
    "over15": {
      "pred": 0.7977,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5835,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3598,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4887,
      "is_result": false
    },
    "draw": {
      "pred": 0.2682,
      "is_result": false
    },
    "away": {
      "pred": 0.243,
      "is_result": true
    },
    "btts": {
      "pred": 0.5935,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4655,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.299,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.176,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1185,
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
    "league": "Scottish Premiership",
    "home_team": "St Johnstone",
    "away_team": "Falkirk",
    "match_date": "2026-09-19",
    "score": "1-1",
    "over15": {
      "pred": 0.8057,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5323,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.399,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4446,
      "is_result": false
    },
    "draw": {
      "pred": 0.292,
      "is_result": true
    },
    "away": {
      "pred": 0.2634,
      "is_result": false
    },
    "btts": {
      "pred": 0.5296,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2092,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1766,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1438,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3595,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.75,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "St Mirren",
    "away_team": "Dundee United",
    "match_date": "2026-09-19",
    "score": "0-3",
    "over15": {
      "pred": 0.8015,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5392,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4067,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4425,
      "is_result": false
    },
    "draw": {
      "pred": 0.2859,
      "is_result": false
    },
    "away": {
      "pred": 0.2716,
      "is_result": true
    },
    "btts": {
      "pred": 0.5696,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2216,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1883,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1597,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3517,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.709,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "St Mirren",
    "away_team": "Motherwell",
    "match_date": NaN,
    "score": "3-3",
    "over25": {
      "pred": 0.5384,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3227,
      "is_result": false
    },
    "draw": {
      "pred": 0.2772,
      "is_result": true
    },
    "away": {
      "pred": 0.4001,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3305,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Bologna",
    "away_team": "Torino",
    "match_date": "2026-09-19",
    "score": "1-1",
    "over15": {
      "pred": 0.7983,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5452,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3807,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4434,
      "is_result": false
    },
    "draw": {
      "pred": 0.2749,
      "is_result": true
    },
    "away": {
      "pred": 0.2816,
      "is_result": false
    },
    "btts": {
      "pred": 0.6014,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4495,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2329,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1936,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1749,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3561,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6437,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Como",
    "away_team": "Parma",
    "match_date": "2026-09-14",
    "score": "2-1",
    "over15": {
      "pred": 0.7121,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3952,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.34,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6157,
      "is_result": true
    },
    "draw": {
      "pred": 0.2715,
      "is_result": false
    },
    "away": {
      "pred": 0.1128,
      "is_result": false
    },
    "btts": {
      "pred": 0.3051,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3013,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1512,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1214,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0325,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3479,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Fiorentina",
    "away_team": "Napoli",
    "match_date": "2026-09-20",
    "score": "1-1",
    "over15": {
      "pred": 0.7971,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5371,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3705,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2862,
      "is_result": false
    },
    "draw": {
      "pred": 0.226,
      "is_result": true
    },
    "away": {
      "pred": 0.4878,
      "is_result": false
    },
    "btts": {
      "pred": 0.5832,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4428,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1791,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2244,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1797,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3573,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7333,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Frosinone",
    "away_team": "Como",
    "match_date": "2026-09-20",
    "score": "2-0",
    "over15": {
      "pred": 0.7995,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5375,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3889,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2979,
      "is_result": true
    },
    "draw": {
      "pred": 0.2551,
      "is_result": false
    },
    "away": {
      "pred": 0.4471,
      "is_result": false
    },
    "btts": {
      "pred": 0.5891,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4432,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1918,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2117,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1856,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4008,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7214,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Inter",
    "away_team": "Udinese",
    "match_date": "2026-09-14",
    "score": "5-3",
    "over15": {
      "pred": 0.781,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6074,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.362,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6918,
      "is_result": true
    },
    "draw": {
      "pred": 0.1933,
      "is_result": false
    },
    "away": {
      "pred": 0.1149,
      "is_result": false
    },
    "btts": {
      "pred": 0.568,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4526,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3437,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1557,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0686,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3648,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Juventus",
    "away_team": "Atalanta",
    "match_date": "2026-09-20",
    "score": "2-0",
    "over15": {
      "pred": 0.7933,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5517,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3562,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2946,
      "is_result": true
    },
    "draw": {
      "pred": 0.2429,
      "is_result": false
    },
    "away": {
      "pred": 0.4625,
      "is_result": false
    },
    "btts": {
      "pred": 0.5925,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4558,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1943,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2129,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1853,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3452,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7074,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Milan",
    "away_team": "Lecce",
    "match_date": "2026-09-20",
    "score": "3-0",
    "over15": {
      "pred": 0.8024,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5379,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4087,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5032,
      "is_result": true
    },
    "draw": {
      "pred": 0.277,
      "is_result": false
    },
    "away": {
      "pred": 0.2198,
      "is_result": false
    },
    "btts": {
      "pred": 0.5376,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4489,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2086,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2219,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1072,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3392,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7234,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Monza",
    "away_team": "Sassuolo",
    "match_date": "2026-09-18",
    "score": "2-1",
    "over15": {
      "pred": 0.8932,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7973,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3725,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2822,
      "is_result": true
    },
    "draw": {
      "pred": 0.167,
      "is_result": false
    },
    "away": {
      "pred": 0.5508,
      "is_result": false
    },
    "btts": {
      "pred": 0.6322,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6322,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.134,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1527,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.3455,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4318,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8193,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Parma",
    "away_team": "Genoa",
    "match_date": "2026-09-20",
    "score": "2-1",
    "over15": {
      "pred": 0.6391,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3026,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2961,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3506,
      "is_result": true
    },
    "draw": {
      "pred": 0.319,
      "is_result": false
    },
    "away": {
      "pred": 0.3303,
      "is_result": false
    },
    "btts": {
      "pred": 0.4329,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2518,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1362,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2278,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.069,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3682,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.4555,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Roma",
    "away_team": "Inter",
    "match_date": "2026-09-19",
    "score": "2-2",
    "over15": {
      "pred": 0.9475,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8514,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.6814,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3496,
      "is_result": false
    },
    "draw": {
      "pred": 0.1856,
      "is_result": true
    },
    "away": {
      "pred": 0.4648,
      "is_result": false
    },
    "btts": {
      "pred": 0.9569,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7596,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3807,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2022,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.3741,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4639,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8394,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Torino",
    "away_team": "Roma",
    "match_date": "2026-09-14",
    "score": "0-2",
    "over15": {
      "pred": 0.7926,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5902,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.36,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2897,
      "is_result": false
    },
    "draw": {
      "pred": 0.2334,
      "is_result": false
    },
    "away": {
      "pred": 0.4769,
      "is_result": true
    },
    "btts": {
      "pred": 0.5908,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4617,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.124,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1943,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2725,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3636,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Udinese",
    "away_team": "Cagliari",
    "match_date": "2026-09-19",
    "score": "0-1",
    "over15": {
      "pred": 0.8011,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5404,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4018,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4637,
      "is_result": false
    },
    "draw": {
      "pred": 0.2799,
      "is_result": false
    },
    "away": {
      "pred": 0.2565,
      "is_result": true
    },
    "btts": {
      "pred": 0.5681,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2312,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1816,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1554,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3606,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7259,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Venezia",
    "away_team": "Lazio",
    "match_date": "2026-09-19",
    "score": "0-2",
    "over15": {
      "pred": 0.8003,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5417,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.396,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2793,
      "is_result": false
    },
    "draw": {
      "pred": 0.2696,
      "is_result": false
    },
    "away": {
      "pred": 0.4511,
      "is_result": true
    },
    "btts": {
      "pred": 0.5853,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1663,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2012,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2177,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3565,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6397,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Serie B",
    "home_team": "Arezzo",
    "away_team": "Sudtirol",
    "match_date": "2026-09-20",
    "score": "1-4",
    "over15": {
      "pred": 0.8044,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5384,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4007,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4563,
      "is_result": false
    },
    "draw": {
      "pred": 0.2994,
      "is_result": false
    },
    "away": {
      "pred": 0.2443,
      "is_result": true
    },
    "btts": {
      "pred": 0.5384,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4515,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2028,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2113,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1243,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.0433,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.277,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Serie B",
    "home_team": "Ascoli",
    "away_team": "Avellino",
    "match_date": "2026-09-19",
    "score": "3-1",
    "over15": {
      "pred": 0.7594,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4099,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3272,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.495,
      "is_result": true
    },
    "draw": {
      "pred": 0.3132,
      "is_result": false
    },
    "away": {
      "pred": 0.1918,
      "is_result": false
    },
    "btts": {
      "pred": 0.5349,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3063,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2315,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2194,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.084,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3656,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.5214,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Serie B",
    "home_team": "Carrarese",
    "away_team": "Benevento",
    "match_date": "2026-09-19",
    "score": "0-1",
    "over15": {
      "pred": 0.7817,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4605,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3421,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4409,
      "is_result": false
    },
    "draw": {
      "pred": 0.3216,
      "is_result": false
    },
    "away": {
      "pred": 0.2374,
      "is_result": true
    },
    "btts": {
      "pred": 0.521,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3674,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1945,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2013,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1252,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3696,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.4643,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Serie B",
    "home_team": "Cremonese",
    "away_team": "Virtus Entella",
    "match_date": "2026-09-19",
    "score": "0-0",
    "over15": {
      "pred": 0.7808,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5963,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3385,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5298,
      "is_result": false
    },
    "draw": {
      "pred": 0.2564,
      "is_result": true
    },
    "away": {
      "pred": 0.2138,
      "is_result": false
    },
    "btts": {
      "pred": 0.5774,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4686,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3018,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1537,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1218,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.355,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7037,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Serie B",
    "home_team": "Juve Stabia",
    "away_team": "Cesena",
    "match_date": "2026-09-18",
    "score": "1-1",
    "over15": {
      "pred": 0.7943,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5408,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3423,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5681,
      "is_result": false
    },
    "draw": {
      "pred": 0.2545,
      "is_result": true
    },
    "away": {
      "pred": 0.1774,
      "is_result": false
    },
    "btts": {
      "pred": 0.5673,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4396,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.177,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0902,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3537,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.624,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Serie B",
    "home_team": "Mantova",
    "away_team": "Pisa",
    "match_date": "2026-09-20",
    "score": "2-2",
    "over15": {
      "pred": 0.899,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7393,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4863,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3331,
      "is_result": false
    },
    "draw": {
      "pred": 0.2324,
      "is_result": true
    },
    "away": {
      "pred": 0.4345,
      "is_result": false
    },
    "btts": {
      "pred": 0.7968,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6468,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2875,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2897,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2196,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5157,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8736,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Serie B",
    "home_team": "Modena",
    "away_team": "Empoli",
    "match_date": "2026-09-20",
    "score": "2-1",
    "over15": {
      "pred": 0.7852,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5848,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3363,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5325,
      "is_result": true
    },
    "draw": {
      "pred": 0.2657,
      "is_result": false
    },
    "away": {
      "pred": 0.2019,
      "is_result": false
    },
    "btts": {
      "pred": 0.5899,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4583,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2736,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1946,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1216,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3355,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7263,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Serie B",
    "home_team": "Palermo",
    "away_team": "Padova",
    "match_date": "2026-09-19",
    "score": "2-1",
    "over15": {
      "pred": 0.8012,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5377,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4131,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5285,
      "is_result": true
    },
    "draw": {
      "pred": 0.2788,
      "is_result": false
    },
    "away": {
      "pred": 0.1927,
      "is_result": false
    },
    "btts": {
      "pred": 0.5275,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2407,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1749,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1119,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3623,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7159,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Serie B",
    "home_team": "Sampdoria",
    "away_team": "Catanzaro",
    "match_date": "2026-09-19",
    "score": "2-1",
    "over15": {
      "pred": 0.7921,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5492,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3626,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3471,
      "is_result": true
    },
    "draw": {
      "pred": 0.2839,
      "is_result": false
    },
    "away": {
      "pred": 0.369,
      "is_result": false
    },
    "btts": {
      "pred": 0.5818,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4585,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1871,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2143,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1804,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3525,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6636,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "Southern League Central",
    "home_team": "Stamford",
    "away_team": "Bishop's Stortford",
    "match_date": "2026-09-19",
    "score": "0-3",
    "over15": {
      "pred": 0.8036,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5351,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4083,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.305,
      "is_result": false
    },
    "draw": {
      "pred": 0.2854,
      "is_result": false
    },
    "away": {
      "pred": 0.4096,
      "is_result": true
    },
    "btts": {
      "pred": 0.5594,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4494,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1605,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2042,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1947,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3623,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.5843,
      "hit": false,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.44,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Southern League South",
    "home_team": "Basingstoke Town",
    "away_team": "Gosport Borough",
    "match_date": "2026-09-19",
    "score": "1-1",
    "over15": {
      "pred": 0.8623,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7412,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4013,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4421,
      "is_result": false
    },
    "draw": {
      "pred": 0.2204,
      "is_result": true
    },
    "away": {
      "pred": 0.3375,
      "is_result": false
    },
    "btts": {
      "pred": 0.8454,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6811,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4226,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2038,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.219,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4531,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8209,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.7151,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Southern League South",
    "home_team": "Berkhamsted",
    "away_team": "Uxbridge",
    "match_date": "2026-09-15",
    "score": "1-0",
    "over15": {
      "pred": 0.774,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6185,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3605,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4247,
      "is_result": true
    },
    "draw": {
      "pred": 0.2544,
      "is_result": false
    },
    "away": {
      "pred": 0.321,
      "is_result": false
    },
    "btts": {
      "pred": 0.5775,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5397,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2496,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1759,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.152,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3579,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Southern League South",
    "home_team": "Bracknell Town",
    "away_team": "Havant & Waterlooville",
    "match_date": "2026-09-19",
    "score": "2-1",
    "over15": {
      "pred": 0.8896,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8041,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.37,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4065,
      "is_result": true
    },
    "draw": {
      "pred": 0.2132,
      "is_result": false
    },
    "away": {
      "pred": 0.3803,
      "is_result": false
    },
    "btts": {
      "pred": 0.8794,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7721,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4709,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2466,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1619,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3984,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7672,
      "hit": false,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6904,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Switzerland Super League",
    "home_team": "Basel",
    "away_team": "St. Gallen",
    "match_date": "2026-09-20",
    "score": "1-3",
    "over15": {
      "pred": 0.7823,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6146,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3186,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3287,
      "is_result": false
    },
    "draw": {
      "pred": 0.2516,
      "is_result": false
    },
    "away": {
      "pred": 0.4197,
      "is_result": true
    },
    "btts": {
      "pred": 0.5604,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4951,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1882,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2051,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1671,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Switzerland Super League",
    "home_team": "Grasshoppers",
    "away_team": "Sion",
    "match_date": "2026-09-15",
    "score": "2-5",
    "over15": {
      "pred": 0.7758,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6135,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3613,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3272,
      "is_result": false
    },
    "draw": {
      "pred": 0.2487,
      "is_result": false
    },
    "away": {
      "pred": 0.4241,
      "is_result": true
    },
    "btts": {
      "pred": 0.5786,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5283,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1863,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1891,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2033,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Switzerland Super League",
    "home_team": "Lausanne",
    "away_team": "Lugano",
    "match_date": "2026-09-20",
    "score": "0-4",
    "over15": {
      "pred": 0.7993,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5375,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3907,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.286,
      "is_result": false
    },
    "draw": {
      "pred": 0.2414,
      "is_result": false
    },
    "away": {
      "pred": 0.4727,
      "is_result": true
    },
    "btts": {
      "pred": 0.5656,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4459,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1762,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.209,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1804,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Switzerland Super League",
    "home_team": "Lugano",
    "away_team": "St. Gallen",
    "match_date": "2026-09-16",
    "score": "4-1",
    "over15": {
      "pred": 0.7808,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5975,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3529,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4386,
      "is_result": true
    },
    "draw": {
      "pred": 0.2638,
      "is_result": false
    },
    "away": {
      "pred": 0.2976,
      "is_result": false
    },
    "btts": {
      "pred": 0.5798,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5052,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2474,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1859,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1465,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Switzerland Super League",
    "home_team": "Luzern",
    "away_team": "Grasshoppers",
    "match_date": "2026-09-19",
    "score": "5-1",
    "over15": {
      "pred": 0.7882,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6697,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3634,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5244,
      "is_result": true
    },
    "draw": {
      "pred": 0.2301,
      "is_result": false
    },
    "away": {
      "pred": 0.2454,
      "is_result": false
    },
    "btts": {
      "pred": 0.6124,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5404,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3412,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1377,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1335,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Switzerland Super League",
    "home_team": "Sion",
    "away_team": "Zurich",
    "match_date": "2026-09-19",
    "score": "1-1",
    "over15": {
      "pred": 0.7788,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6158,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3371,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6077,
      "is_result": false
    },
    "draw": {
      "pred": 0.2085,
      "is_result": true
    },
    "away": {
      "pred": 0.1838,
      "is_result": false
    },
    "btts": {
      "pred": 0.5903,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4678,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3536,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1331,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1037,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Switzerland Super League",
    "home_team": "Thun",
    "away_team": "Servette",
    "match_date": "2026-09-16",
    "score": "2-4",
    "over15": {
      "pred": 0.7738,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6098,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3541,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4591,
      "is_result": false
    },
    "draw": {
      "pred": 0.2566,
      "is_result": false
    },
    "away": {
      "pred": 0.2843,
      "is_result": true
    },
    "btts": {
      "pred": 0.5763,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.531,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2359,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.189,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1513,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Switzerland Super League",
    "home_team": "Vaduz",
    "away_team": "Thun",
    "match_date": "2026-09-20",
    "score": "1-2",
    "over15": {
      "pred": 0.9169,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8186,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.5578,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.418,
      "is_result": false
    },
    "draw": {
      "pred": 0.2274,
      "is_result": false
    },
    "away": {
      "pred": 0.3546,
      "is_result": true
    },
    "btts": {
      "pred": 0.8063,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7462,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3601,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2457,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2005,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Switzerland Super League",
    "home_team": "Young Boys",
    "away_team": "Servette",
    "match_date": "2026-09-19",
    "score": "3-2",
    "over15": {
      "pred": 0.8837,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.78,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3821,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.585,
      "is_result": true
    },
    "draw": {
      "pred": 0.1939,
      "is_result": false
    },
    "away": {
      "pred": 0.2212,
      "is_result": false
    },
    "btts": {
      "pred": 0.7828,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6368,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4857,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1446,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1526,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "CF Montreal",
    "away_team": "Columbus Crew",
    "match_date": "2026-09-20",
    "score": "0-2",
    "over15": {
      "pred": 0.7814,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6151,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3182,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3748,
      "is_result": false
    },
    "draw": {
      "pred": 0.2678,
      "is_result": false
    },
    "away": {
      "pred": 0.3574,
      "is_result": true
    },
    "btts": {
      "pred": 0.5573,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4965,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1906,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2047,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.162,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Colorado Rapids",
    "away_team": "Seattle Sounders",
    "match_date": "2026-09-20",
    "score": "3-3",
    "over15": {
      "pred": 0.7982,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5374,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3861,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.416,
      "is_result": false
    },
    "draw": {
      "pred": 0.2872,
      "is_result": true
    },
    "away": {
      "pred": 0.2968,
      "is_result": false
    },
    "btts": {
      "pred": 0.6011,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4421,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2074,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2205,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1733,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "DC United",
    "away_team": "Charlotte",
    "match_date": "2026-09-20",
    "score": "1-2",
    "over15": {
      "pred": 0.7925,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5446,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3606,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3332,
      "is_result": false
    },
    "draw": {
      "pred": 0.2727,
      "is_result": false
    },
    "away": {
      "pred": 0.3942,
      "is_result": true
    },
    "btts": {
      "pred": 0.5836,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.459,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1928,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2173,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1735,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "FC Dallas",
    "away_team": "Austin FC",
    "match_date": "2026-09-20",
    "score": "0-0",
    "over15": {
      "pred": 0.7841,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5976,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3288,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4975,
      "is_result": false
    },
    "draw": {
      "pred": 0.2665,
      "is_result": true
    },
    "away": {
      "pred": 0.236,
      "is_result": false
    },
    "btts": {
      "pred": 0.5772,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4744,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2443,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1886,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1444,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Houston Dynamo",
    "away_team": "FC Cincinnati",
    "match_date": "2026-09-20",
    "score": "2-2",
    "over15": {
      "pred": 0.7843,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5963,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3296,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3754,
      "is_result": false
    },
    "draw": {
      "pred": 0.2719,
      "is_result": true
    },
    "away": {
      "pred": 0.3527,
      "is_result": false
    },
    "btts": {
      "pred": 0.5642,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4865,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1924,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2078,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.164,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Minnesota United",
    "away_team": "Los Angeles Galaxy",
    "match_date": "2026-09-20",
    "score": "2-3",
    "over15": {
      "pred": 0.7918,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6479,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3115,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4817,
      "is_result": false
    },
    "draw": {
      "pred": 0.2558,
      "is_result": false
    },
    "away": {
      "pred": 0.2625,
      "is_result": true
    },
    "btts": {
      "pred": 0.5878,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5189,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2562,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1832,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1484,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Nashville SC",
    "away_team": "Chicago Fire",
    "match_date": "2026-09-20",
    "score": "3-0",
    "over15": {
      "pred": 0.7998,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.652,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3227,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5157,
      "is_result": true
    },
    "draw": {
      "pred": 0.2493,
      "is_result": false
    },
    "away": {
      "pred": 0.2351,
      "is_result": false
    },
    "btts": {
      "pred": 0.5729,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5168,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2662,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1675,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1392,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "New England Revolution",
    "away_team": "Orlando City",
    "match_date": "2026-09-20",
    "score": "4-2",
    "over15": {
      "pred": 0.7765,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.637,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2977,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4083,
      "is_result": true
    },
    "draw": {
      "pred": 0.2634,
      "is_result": false
    },
    "away": {
      "pred": 0.3283,
      "is_result": false
    },
    "btts": {
      "pred": 0.5876,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5144,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2147,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.208,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1649,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "New York City",
    "away_team": "New York City",
    "match_date": "2026-09-19",
    "score": "0-1",
    "over15": {
      "pred": 0.7978,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5445,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3839,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4347,
      "is_result": false
    },
    "draw": {
      "pred": 0.2885,
      "is_result": false
    },
    "away": {
      "pred": 0.2768,
      "is_result": true
    },
    "btts": {
      "pred": 0.6075,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4495,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2262,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2102,
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
    "home_team": "Portland Timbers",
    "away_team": "Atlanta Utd",
    "match_date": "2026-09-20",
    "score": "0-1",
    "over15": {
      "pred": 0.7791,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6284,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3084,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5093,
      "is_result": false
    },
    "draw": {
      "pred": 0.2583,
      "is_result": false
    },
    "away": {
      "pred": 0.2323,
      "is_result": true
    },
    "btts": {
      "pred": 0.5667,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4904,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2521,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1757,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1389,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Real Salt Lake",
    "away_team": "Vancouver Whitecaps",
    "match_date": "2026-09-20",
    "score": "0-3",
    "over15": {
      "pred": 0.8501,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6777,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3963,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3352,
      "is_result": false
    },
    "draw": {
      "pred": 0.2371,
      "is_result": false
    },
    "away": {
      "pred": 0.4277,
      "is_result": true
    },
    "btts": {
      "pred": 0.7152,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5644,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2498,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.262,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2034,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "San Diego FC",
    "away_team": "Philadelphia Union",
    "match_date": "2026-09-14",
    "score": "0-5",
    "over15": {
      "pred": 0.7939,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5861,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3585,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4191,
      "is_result": false
    },
    "draw": {
      "pred": 0.2931,
      "is_result": false
    },
    "away": {
      "pred": 0.2877,
      "is_result": true
    },
    "btts": {
      "pred": 0.5878,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4646,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2147,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1956,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1774,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "San Jose Earthquakes",
    "away_team": "Los Angeles FC",
    "match_date": "2026-09-20",
    "score": "2-2",
    "over15": {
      "pred": 0.7824,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6431,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2986,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3809,
      "is_result": false
    },
    "draw": {
      "pred": 0.2588,
      "is_result": true
    },
    "away": {
      "pred": 0.3603,
      "is_result": false
    },
    "btts": {
      "pred": 0.6111,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5229,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2122,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2218,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1771,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Sporting Kansas City",
    "away_team": "Philadelphia Union",
    "match_date": "2026-09-20",
    "score": "3-4",
    "over15": {
      "pred": 0.7781,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6317,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3042,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2862,
      "is_result": false
    },
    "draw": {
      "pred": 0.2176,
      "is_result": false
    },
    "away": {
      "pred": 0.4962,
      "is_result": true
    },
    "btts": {
      "pred": 0.5697,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4887,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1887,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2069,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1741,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "St. Louis City",
    "away_team": "Toronto FC",
    "match_date": "2026-09-20",
    "score": "3-1",
    "over15": {
      "pred": 0.7786,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.63,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3063,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4928,
      "is_result": true
    },
    "draw": {
      "pred": 0.2611,
      "is_result": false
    },
    "away": {
      "pred": 0.2461,
      "is_result": false
    },
    "btts": {
      "pred": 0.5618,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4958,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2409,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1771,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1438,
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
  }
];
