const RECENT_RESULTS = [
  {
    "league": "Argentina Primera Division",
    "home_team": "Barracas Central",
    "away_team": "Independiente",
    "match_date": "2026-09-22",
    "score": "0-1",
    "over15": {
      "pred": 0.7616,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.421,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3282,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3324,
      "is_result": false
    },
    "draw": {
      "pred": 0.2905,
      "is_result": false
    },
    "away": {
      "pred": 0.3771,
      "is_result": true
    },
    "btts": {
      "pred": 0.527,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3535,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1673,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2111,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1486,
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
    "home_team": "Lanus",
    "away_team": "Estudiantes L.P.",
    "match_date": "2026-09-22",
    "score": "2-1",
    "over15": {
      "pred": 0.8042,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5381,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4289,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4132,
      "is_result": true
    },
    "draw": {
      "pred": 0.292,
      "is_result": false
    },
    "away": {
      "pred": 0.2949,
      "is_result": false
    },
    "btts": {
      "pred": 0.58,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4525,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.207,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2104,
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
    "league": "Argentina Primera Division",
    "home_team": "Platense",
    "away_team": "Newells Old Boys",
    "match_date": "2026-09-20",
    "score": "0-1",
    "over15": {
      "pred": 0.7977,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4861,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3531,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.393,
      "is_result": false
    },
    "draw": {
      "pred": 0.3136,
      "is_result": false
    },
    "away": {
      "pred": 0.2934,
      "is_result": true
    },
    "btts": {
      "pred": 0.5126,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3968,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1841,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2075,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1211,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Argentina Primera Division",
    "home_team": "Rosario Central",
    "away_team": "Argentinos Jrs",
    "match_date": "2026-09-20",
    "score": "1-0",
    "over15": {
      "pred": 0.8018,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.538,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4153,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4402,
      "is_result": true
    },
    "draw": {
      "pred": 0.2975,
      "is_result": false
    },
    "away": {
      "pred": 0.2623,
      "is_result": false
    },
    "btts": {
      "pred": 0.5686,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.448,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2041,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.219,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1455,
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
    "home_team": "Velez Sarsfield",
    "away_team": "Tigre",
    "match_date": "2026-09-21",
    "score": "3-2",
    "over15": {
      "pred": 0.8062,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4948,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3731,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4644,
      "is_result": true
    },
    "draw": {
      "pred": 0.3077,
      "is_result": false
    },
    "away": {
      "pred": 0.2279,
      "is_result": false
    },
    "btts": {
      "pred": 0.514,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3975,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2049,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2117,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0974,
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
    "home_team": "Athletico-PR",
    "away_team": "Bahia",
    "match_date": "2026-09-21",
    "score": "2-1",
    "over15": {
      "pred": 0.7931,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6535,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3247,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4692,
      "is_result": true
    },
    "draw": {
      "pred": 0.2554,
      "is_result": false
    },
    "away": {
      "pred": 0.2753,
      "is_result": false
    },
    "btts": {
      "pred": 0.6008,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.524,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2547,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1917,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1545,
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
    "home_team": "Flamengo RJ",
    "away_team": "Bragantino",
    "match_date": "2026-09-20",
    "score": "2-1",
    "over15": {
      "pred": 0.7935,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6493,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3154,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6429,
      "is_result": true
    },
    "draw": {
      "pred": 0.2099,
      "is_result": false
    },
    "away": {
      "pred": 0.1472,
      "is_result": false
    },
    "btts": {
      "pred": 0.5865,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.478,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3252,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1819,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0794,
      "hit": true,
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
    },
    "goal_each_half": {
      "pred": 0.7248,
      "hit": true,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.4638,
      "hit": false,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.5379,
      "hit": false,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.7952,
      "hit": true,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.6903,
      "hit": true,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.5077,
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
    },
    "goal_each_half": {
      "pred": 0.5592,
      "hit": true,
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
    },
    "goal_each_half": {
      "pred": 0.7328,
      "hit": false,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.6154,
      "hit": false,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.7538,
      "hit": true,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.6331,
      "hit": false,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.7731,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "Brentwood Town",
    "away_team": "Maldon & Tiptree",
    "match_date": "2026-09-22",
    "score": "5-1",
    "over15": {
      "pred": 0.9504,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.9124,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.6242,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6309,
      "is_result": true
    },
    "draw": {
      "pred": 0.1861,
      "is_result": false
    },
    "away": {
      "pred": 0.183,
      "is_result": false
    },
    "btts": {
      "pred": 0.7,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3961,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1599,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.144,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5301,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8783,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.7622,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Isthmian League",
    "home_team": "Three Bridges",
    "away_team": "Leatherhead",
    "match_date": "2026-09-22",
    "score": "3-3",
    "over15": {
      "pred": 0.9608,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8811,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.7354,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3029,
      "is_result": false
    },
    "draw": {
      "pred": 0.1686,
      "is_result": true
    },
    "away": {
      "pred": 0.5285,
      "is_result": false
    },
    "btts": {
      "pred": 0.7,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1808,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1417,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.3775,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.522,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8714,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.8193,
      "hit": true,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.542,
      "hit": false,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.7335,
      "hit": true,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.5285,
      "hit": false,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.6062,
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
    },
    "goal_each_half": {
      "pred": 0.6209,
      "hit": false,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.3496,
      "hit": true,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.5501,
      "hit": true,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.6017,
      "hit": true,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.5942,
      "hit": true,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.747,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Celta B",
    "away_team": "Sabadell",
    "match_date": "2026-09-26",
    "score": "1-1",
    "over15": {
      "pred": 0.7974,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6338,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3292,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2984,
      "is_result": false
    },
    "draw": {
      "pred": 0.2149,
      "is_result": true
    },
    "away": {
      "pred": 0.4867,
      "is_result": false
    },
    "btts": {
      "pred": 0.5869,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4923,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1777,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1841,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.225,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4425,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7439,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Ceuta",
    "away_team": "Sociedad B",
    "match_date": "2026-09-26",
    "score": "3-1",
    "over15": {
      "pred": 0.7989,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5409,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3851,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3952,
      "is_result": true
    },
    "draw": {
      "pred": 0.2743,
      "is_result": false
    },
    "away": {
      "pred": 0.3306,
      "is_result": false
    },
    "btts": {
      "pred": 0.6016,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4582,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.218,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2081,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1754,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3651,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7317,
      "hit": false,
      "label": "HT O0.5"
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
    },
    "goal_each_half": {
      "pred": 0.491,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Granada",
    "away_team": "Andorra",
    "match_date": "2026-09-26",
    "score": "2-3",
    "over15": {
      "pred": 0.8203,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6776,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3573,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4381,
      "is_result": false
    },
    "draw": {
      "pred": 0.2395,
      "is_result": false
    },
    "away": {
      "pred": 0.3224,
      "is_result": true
    },
    "btts": {
      "pred": 0.6223,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5446,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2584,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1948,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1691,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4326,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7405,
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
    },
    "goal_each_half": {
      "pred": 0.4359,
      "hit": false,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.4792,
      "hit": false,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.2625,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Tenerife",
    "away_team": "Cadiz",
    "match_date": "2026-09-26",
    "score": "1-1",
    "over15": {
      "pred": 0.811,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5235,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3976,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4073,
      "is_result": false
    },
    "draw": {
      "pred": 0.2874,
      "is_result": true
    },
    "away": {
      "pred": 0.3053,
      "is_result": false
    },
    "btts": {
      "pred": 0.524,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4493,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.194,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1873,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1426,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3305,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6962,
      "hit": true,
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
      "pred": 0.5086,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.266,
      "is_result": true
    },
    "draw": {
      "pred": 0.2931,
      "is_result": false
    },
    "away": {
      "pred": 0.4409,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.2721,
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
      "pred": 0.6776,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5955,
      "is_result": true
    },
    "draw": {
      "pred": 0.2034,
      "is_result": false
    },
    "away": {
      "pred": 0.2011,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4605,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Cambridge",
    "away_team": "AFC Wimbledon",
    "match_date": "2026-09-26",
    "score": "1-1",
    "over15": {
      "pred": 0.798,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5449,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3734,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5334,
      "is_result": false
    },
    "draw": {
      "pred": 0.2602,
      "is_result": true
    },
    "away": {
      "pred": 0.2064,
      "is_result": false
    },
    "btts": {
      "pred": 0.5942,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.454,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2585,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2086,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1271,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3265,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7225,
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
      "pred": 0.661,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.346,
      "is_result": false
    },
    "draw": {
      "pred": 0.2324,
      "is_result": false
    },
    "away": {
      "pred": 0.4216,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4496,
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
      "pred": 0.5966,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5154,
      "is_result": false
    },
    "draw": {
      "pred": 0.2351,
      "is_result": false
    },
    "away": {
      "pred": 0.2496,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4549,
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
      "pred": 0.6391,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3998,
      "is_result": true
    },
    "draw": {
      "pred": 0.2388,
      "is_result": false
    },
    "away": {
      "pred": 0.3615,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5057,
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
      "pred": 0.539,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4418,
      "is_result": false
    },
    "draw": {
      "pred": 0.2605,
      "is_result": true
    },
    "away": {
      "pred": 0.2977,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.487,
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
      "pred": 0.536,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4803,
      "is_result": true
    },
    "draw": {
      "pred": 0.2613,
      "is_result": false
    },
    "away": {
      "pred": 0.2584,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3157,
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
      "pred": 0.5344,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.439,
      "is_result": true
    },
    "draw": {
      "pred": 0.2696,
      "is_result": false
    },
    "away": {
      "pred": 0.2913,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3753,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Plymouth",
    "away_team": "Burton",
    "match_date": "2026-09-26",
    "score": "0-1",
    "over15": {
      "pred": 0.7978,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5753,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.352,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6056,
      "is_result": false
    },
    "draw": {
      "pred": 0.2289,
      "is_result": false
    },
    "away": {
      "pred": 0.1655,
      "is_result": true
    },
    "btts": {
      "pred": 0.5793,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4539,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2735,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2124,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0935,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4393,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.745,
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
      "pred": 0.6554,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.7037,
      "is_result": true
    },
    "draw": {
      "pred": 0.1755,
      "is_result": false
    },
    "away": {
      "pred": 0.1209,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5803,
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
      "pred": 0.5246,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4565,
      "is_result": false
    },
    "draw": {
      "pred": 0.28,
      "is_result": true
    },
    "away": {
      "pred": 0.2635,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.2189,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Stockport",
    "away_team": "Peterboro",
    "match_date": "2026-09-26",
    "score": "1-0",
    "over15": {
      "pred": 0.8756,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7462,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4664,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6504,
      "is_result": true
    },
    "draw": {
      "pred": 0.1858,
      "is_result": false
    },
    "away": {
      "pred": 0.1638,
      "is_result": false
    },
    "btts": {
      "pred": 0.603,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5496,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3362,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1571,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1097,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4759,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7535,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Stockport",
    "away_team": "Wycombe",
    "match_date": NaN,
    "score": "5-1",
    "over25": {
      "pred": 0.663,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5278,
      "is_result": true
    },
    "draw": {
      "pred": 0.2203,
      "is_result": false
    },
    "away": {
      "pred": 0.252,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4747,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Wycombe",
    "away_team": "Reading",
    "match_date": "2026-09-26",
    "score": "2-2",
    "over15": {
      "pred": 0.844,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6986,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3969,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5445,
      "is_result": false
    },
    "draw": {
      "pred": 0.2288,
      "is_result": true
    },
    "away": {
      "pred": 0.2267,
      "is_result": false
    },
    "btts": {
      "pred": 0.6185,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5476,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3056,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1667,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1463,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.436,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7443,
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
      "pred": 0.7103,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5974,
      "is_result": false
    },
    "draw": {
      "pred": 0.1953,
      "is_result": true
    },
    "away": {
      "pred": 0.2073,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5452,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Bristol Rvs",
    "away_team": "Exeter",
    "match_date": "2026-09-26",
    "score": "1-0",
    "over15": {
      "pred": 0.8096,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5268,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4029,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5038,
      "is_result": true
    },
    "draw": {
      "pred": 0.2855,
      "is_result": false
    },
    "away": {
      "pred": 0.2107,
      "is_result": false
    },
    "btts": {
      "pred": 0.512,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4413,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2024,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2103,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0993,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3274,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7197,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Cheltenham",
    "away_team": "Chesterfield",
    "match_date": "2026-09-26",
    "score": "2-1",
    "over15": {
      "pred": 0.7977,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5845,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3485,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3205,
      "is_result": true
    },
    "draw": {
      "pred": 0.2559,
      "is_result": false
    },
    "away": {
      "pred": 0.4236,
      "is_result": false
    },
    "btts": {
      "pred": 0.5895,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.481,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2032,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2058,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1804,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.391,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7349,
      "hit": true,
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
      "pred": 0.5334,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5767,
      "is_result": true
    },
    "draw": {
      "pred": 0.2443,
      "is_result": false
    },
    "away": {
      "pred": 0.1789,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3448,
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
      "pred": 0.6568,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2578,
      "is_result": false
    },
    "draw": {
      "pred": 0.2216,
      "is_result": false
    },
    "away": {
      "pred": 0.5206,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3852,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Fleetwood Town",
    "away_team": "Rochdale",
    "match_date": "2026-09-26",
    "score": "1-2",
    "over15": {
      "pred": 0.809,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5288,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4064,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5592,
      "is_result": false
    },
    "draw": {
      "pred": 0.2702,
      "is_result": false
    },
    "away": {
      "pred": 0.1706,
      "is_result": true
    },
    "btts": {
      "pred": 0.5175,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4262,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2031,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2476,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0668,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3308,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6955,
      "hit": true,
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
      "pred": 0.4396,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5895,
      "is_result": false
    },
    "draw": {
      "pred": 0.2773,
      "is_result": true
    },
    "away": {
      "pred": 0.1333,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3118,
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
      "pred": 0.6112,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5499,
      "is_result": false
    },
    "draw": {
      "pred": 0.225,
      "is_result": true
    },
    "away": {
      "pred": 0.2251,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4272,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Newport County",
    "away_team": "Grimsby",
    "match_date": "2026-09-26",
    "score": "2-1",
    "over15": {
      "pred": 0.7973,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6441,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3233,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2944,
      "is_result": true
    },
    "draw": {
      "pred": 0.2065,
      "is_result": false
    },
    "away": {
      "pred": 0.4991,
      "is_result": false
    },
    "btts": {
      "pred": 0.5874,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4927,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1649,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1879,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2346,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4677,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7482,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Newport County",
    "away_team": "Tranmere",
    "match_date": NaN,
    "score": "2-2",
    "over25": {
      "pred": 0.5536,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3818,
      "is_result": false
    },
    "draw": {
      "pred": 0.2539,
      "is_result": true
    },
    "away": {
      "pred": 0.3643,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3869,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Oldham",
    "away_team": "Salford",
    "match_date": "2026-09-26",
    "score": "1-4",
    "over15": {
      "pred": 0.7978,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5719,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3533,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4787,
      "is_result": false
    },
    "draw": {
      "pred": 0.2655,
      "is_result": false
    },
    "away": {
      "pred": 0.2558,
      "is_result": true
    },
    "btts": {
      "pred": 0.596,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4705,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.238,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1962,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1619,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3254,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7171,
      "hit": true,
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
      "pred": 0.5588,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5255,
      "is_result": true
    },
    "draw": {
      "pred": 0.2383,
      "is_result": false
    },
    "away": {
      "pred": 0.2363,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3671,
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
      "pred": 0.5319,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3546,
      "is_result": false
    },
    "draw": {
      "pred": 0.2771,
      "is_result": true
    },
    "away": {
      "pred": 0.3683,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3212,
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
      "pred": 0.6096,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3802,
      "is_result": true
    },
    "draw": {
      "pred": 0.2433,
      "is_result": false
    },
    "away": {
      "pred": 0.3765,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5339,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Rotherham",
    "away_team": "Crewe",
    "match_date": "2026-09-26",
    "score": "1-1",
    "over15": {
      "pred": 0.7977,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5906,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3462,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4582,
      "is_result": false
    },
    "draw": {
      "pred": 0.263,
      "is_result": true
    },
    "away": {
      "pred": 0.2788,
      "is_result": false
    },
    "btts": {
      "pred": 0.5904,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4806,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2312,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1958,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1634,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4337,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7401,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Shrewsbury",
    "away_team": "Colchester",
    "match_date": "2026-09-26",
    "score": "2-2",
    "over15": {
      "pred": 0.8096,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5268,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4029,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2958,
      "is_result": false
    },
    "draw": {
      "pred": 0.2495,
      "is_result": true
    },
    "away": {
      "pred": 0.4547,
      "is_result": false
    },
    "btts": {
      "pred": 0.5122,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4462,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1499,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1962,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1662,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3275,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7087,
      "hit": true,
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
      "pred": 0.5336,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2947,
      "is_result": true
    },
    "draw": {
      "pred": 0.2698,
      "is_result": false
    },
    "away": {
      "pred": 0.4355,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3432,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Swindon",
    "away_team": "Accrington",
    "match_date": "2026-09-26",
    "score": "1-1",
    "over15": {
      "pred": 0.7974,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.627,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3319,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4673,
      "is_result": false
    },
    "draw": {
      "pred": 0.2555,
      "is_result": true
    },
    "away": {
      "pred": 0.2772,
      "is_result": false
    },
    "btts": {
      "pred": 0.5832,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4955,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2397,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1866,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1568,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4199,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7383,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Tranmere",
    "away_team": "Walsall",
    "match_date": "2026-09-26",
    "score": "1-1",
    "over15": {
      "pred": 0.8001,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5391,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3973,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3208,
      "is_result": false
    },
    "draw": {
      "pred": 0.2689,
      "is_result": true
    },
    "away": {
      "pred": 0.4103,
      "is_result": false
    },
    "btts": {
      "pred": 0.6046,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4541,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2062,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2137,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1847,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3286,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7036,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Walsall",
    "away_team": "Accrington",
    "match_date": NaN,
    "score": "3-2",
    "over25": {
      "pred": 0.5455,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4978,
      "is_result": true
    },
    "draw": {
      "pred": 0.2453,
      "is_result": false
    },
    "away": {
      "pred": 0.2568,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3794,
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
      "pred": 0.5252,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5603,
      "is_result": true
    },
    "draw": {
      "pred": 0.2575,
      "is_result": false
    },
    "away": {
      "pred": 0.1822,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3581,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "York",
    "away_team": "Gillingham",
    "match_date": "2026-09-26",
    "score": "3-0",
    "over15": {
      "pred": 0.8383,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6937,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3874,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6166,
      "is_result": true
    },
    "draw": {
      "pred": 0.2047,
      "is_result": false
    },
    "away": {
      "pred": 0.1787,
      "is_result": false
    },
    "btts": {
      "pred": 0.58,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5186,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3045,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1663,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1093,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4341,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7405,
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
    },
    "goal_each_half": {
      "pred": 0.5405,
      "hit": false,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.5812,
      "hit": false,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.5624,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Porto",
    "away_team": "Benfica",
    "match_date": "2026-09-20",
    "score": "3-1",
    "over15": {
      "pred": 0.9282,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.9162,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.6511,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5831,
      "is_result": true
    },
    "draw": {
      "pred": 0.1973,
      "is_result": false
    },
    "away": {
      "pred": 0.2196,
      "is_result": false
    },
    "btts": {
      "pred": 0.8034,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7505,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.4055,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2096,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1883,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5136,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8466,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6685,
      "hit": true,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.4993,
      "hit": true,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.6544,
      "hit": true,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.4431,
      "hit": true,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.6241,
      "hit": true,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.6089,
      "hit": true,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.5309,
      "hit": true,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.641,
      "hit": false,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.5127,
      "hit": true,
      "label": "Goal Each Half"
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
    "home_team": "Atlante",
    "away_team": "Monterrey",
    "match_date": "2026-09-26",
    "score": "4-2",
    "over15": {
      "pred": 0.8004,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5376,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.407,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3084,
      "is_result": true
    },
    "draw": {
      "pred": 0.2601,
      "is_result": false
    },
    "away": {
      "pred": 0.4315,
      "is_result": false
    },
    "btts": {
      "pred": 0.5989,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4533,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1936,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2181,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1872,
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
    "home_team": "Club Tijuana",
    "away_team": "Atlas",
    "match_date": "2026-09-26",
    "score": "2-3",
    "over15": {
      "pred": 0.8173,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6649,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3342,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5125,
      "is_result": false
    },
    "draw": {
      "pred": 0.2528,
      "is_result": false
    },
    "away": {
      "pred": 0.2348,
      "is_result": true
    },
    "btts": {
      "pred": 0.593,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5177,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2712,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1755,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1463,
      "hit": false,
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
    "home_team": "Pachuca",
    "away_team": "Club Tijuana",
    "match_date": "2026-09-21",
    "score": "2-2",
    "over15": {
      "pred": 0.7948,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5396,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.378,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.537,
      "is_result": false
    },
    "draw": {
      "pred": 0.2698,
      "is_result": true
    },
    "away": {
      "pred": 0.1931,
      "is_result": false
    },
    "btts": {
      "pred": 0.5858,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4484,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2601,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2158,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1099,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Mexico Liga MX",
    "home_team": "Queretaro",
    "away_team": "Club Leon",
    "match_date": "2026-09-21",
    "score": "1-1",
    "over15": {
      "pred": 0.7999,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5392,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4134,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4998,
      "is_result": false
    },
    "draw": {
      "pred": 0.2872,
      "is_result": true
    },
    "away": {
      "pred": 0.213,
      "is_result": false
    },
    "btts": {
      "pred": 0.5739,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4496,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2321,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2154,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1264,
      "hit": true,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Mexico Liga MX",
    "home_team": "Toluca",
    "away_team": "Santos Laguna",
    "match_date": "2026-09-21",
    "score": "2-3",
    "over15": {
      "pred": 0.8381,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6738,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3829,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7166,
      "is_result": false
    },
    "draw": {
      "pred": 0.183,
      "is_result": false
    },
    "away": {
      "pred": 0.1004,
      "is_result": true
    },
    "btts": {
      "pred": 0.5975,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4794,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3549,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1744,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0682,
      "hit": false,
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
      "pred": 0.8468,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.349,
      "is_result": true
    },
    "draw": {
      "pred": 0.1992,
      "is_result": false
    },
    "away": {
      "pred": 0.4518,
      "is_result": false
    }
  },
  {
    "league": "National League",
    "home_team": "Aldershot",
    "away_team": "Tamworth",
    "match_date": "2026-09-26",
    "score": "5-1",
    "over15": {
      "pred": 0.8685,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7357,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4573,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4325,
      "is_result": true
    },
    "draw": {
      "pred": 0.2257,
      "is_result": false
    },
    "away": {
      "pred": 0.3418,
      "is_result": false
    },
    "btts": {
      "pred": 0.6852,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6156,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2967,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2016,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1868,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4321,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.742,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Altrincham",
    "away_team": "Halifax",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.5794,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3848,
      "is_result": true
    },
    "draw": {
      "pred": 0.2435,
      "is_result": false
    },
    "away": {
      "pred": 0.3717,
      "is_result": false
    }
  },
  {
    "league": "National League",
    "home_team": "Altrincham",
    "away_team": "Hornchurch",
    "match_date": "2026-09-26",
    "score": "3-0",
    "over15": {
      "pred": 0.798,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5532,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3673,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3675,
      "is_result": true
    },
    "draw": {
      "pred": 0.2674,
      "is_result": false
    },
    "away": {
      "pred": 0.3651,
      "is_result": false
    },
    "btts": {
      "pred": 0.5962,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.469,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2133,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2063,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1765,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3692,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7344,
      "hit": true,
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
      "pred": 0.5409,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4708,
      "is_result": false
    },
    "draw": {
      "pred": 0.247,
      "is_result": false
    },
    "away": {
      "pred": 0.2822,
      "is_result": true
    }
  },
  {
    "league": "National League",
    "home_team": "Boston Utd",
    "away_team": "Fylde",
    "match_date": "2026-09-26",
    "score": "0-1",
    "over15": {
      "pred": 0.8441,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7027,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4048,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4074,
      "is_result": false
    },
    "draw": {
      "pred": 0.2327,
      "is_result": false
    },
    "away": {
      "pred": 0.3599,
      "is_result": true
    },
    "btts": {
      "pred": 0.6554,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5731,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2655,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2037,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1862,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3642,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7336,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Carlisle",
    "away_team": "Woking",
    "match_date": "2026-09-26",
    "score": "2-5",
    "over15": {
      "pred": 0.7974,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6306,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3305,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5371,
      "is_result": false
    },
    "draw": {
      "pred": 0.24,
      "is_result": false
    },
    "away": {
      "pred": 0.2229,
      "is_result": true
    },
    "btts": {
      "pred": 0.5898,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4881,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2704,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1817,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1376,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3323,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.728,
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
      "pred": 0.699,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3687,
      "is_result": true
    },
    "draw": {
      "pred": 0.2179,
      "is_result": false
    },
    "away": {
      "pred": 0.4135,
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
      "pred": 0.6363,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.382,
      "is_result": false
    },
    "draw": {
      "pred": 0.2332,
      "is_result": false
    },
    "away": {
      "pred": 0.3848,
      "is_result": true
    }
  },
  {
    "league": "National League",
    "home_team": "Harrogate",
    "away_team": "Eastleigh",
    "match_date": "2026-09-26",
    "score": "4-1",
    "over15": {
      "pred": 0.8974,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8162,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.529,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5953,
      "is_result": true
    },
    "draw": {
      "pred": 0.1965,
      "is_result": false
    },
    "away": {
      "pred": 0.2082,
      "is_result": false
    },
    "btts": {
      "pred": 0.6777,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6419,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.352,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1735,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1522,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4141,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7399,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Hartlepool",
    "away_team": "Eastleigh",
    "match_date": NaN,
    "score": "0-1",
    "over25": {
      "pred": 0.5513,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4388,
      "is_result": false
    },
    "draw": {
      "pred": 0.2462,
      "is_result": false
    },
    "away": {
      "pred": 0.315,
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
      "pred": 0.5381,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4171,
      "is_result": true
    },
    "draw": {
      "pred": 0.2571,
      "is_result": false
    },
    "away": {
      "pred": 0.3259,
      "is_result": false
    }
  },
  {
    "league": "National League",
    "home_team": "Kidderminster",
    "away_team": "Yeovil",
    "match_date": "2026-09-26",
    "score": "0-1",
    "over15": {
      "pred": 0.8059,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5332,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4264,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5648,
      "is_result": false
    },
    "draw": {
      "pred": 0.2577,
      "is_result": false
    },
    "away": {
      "pred": 0.1775,
      "is_result": true
    },
    "btts": {
      "pred": 0.5123,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4492,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2024,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2296,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0803,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3325,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6922,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Scunthorpe",
    "away_team": "Hartlepool",
    "match_date": "2026-09-26",
    "score": "4-1",
    "over15": {
      "pred": 0.7976,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6091,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.339,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5109,
      "is_result": true
    },
    "draw": {
      "pred": 0.2501,
      "is_result": false
    },
    "away": {
      "pred": 0.239,
      "is_result": false
    },
    "btts": {
      "pred": 0.5915,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4829,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2581,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1821,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1513,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3287,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7094,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Scunthorpe",
    "away_team": "Solihull",
    "match_date": NaN,
    "score": "3-1",
    "over25": {
      "pred": 0.7168,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.561,
      "is_result": true
    },
    "draw": {
      "pred": 0.1981,
      "is_result": false
    },
    "away": {
      "pred": 0.2409,
      "is_result": false
    }
  },
  {
    "league": "National League",
    "home_team": "Solihull",
    "away_team": "Boreham Wood",
    "match_date": "2026-09-26",
    "score": "0-3",
    "over15": {
      "pred": 0.9009,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8264,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.5385,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.292,
      "is_result": false
    },
    "draw": {
      "pred": 0.1668,
      "is_result": false
    },
    "away": {
      "pred": 0.5412,
      "is_result": true
    },
    "btts": {
      "pred": 0.6743,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6389,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1441,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1249,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.4053,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3875,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7366,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Southend",
    "away_team": "Barrow",
    "match_date": "2026-09-26",
    "score": "2-4",
    "over15": {
      "pred": 0.7975,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6227,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3337,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6085,
      "is_result": false
    },
    "draw": {
      "pred": 0.2166,
      "is_result": false
    },
    "away": {
      "pred": 0.1749,
      "is_result": true
    },
    "btts": {
      "pred": 0.6021,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4701,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2977,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1995,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1049,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3373,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6674,
      "hit": false,
      "label": "HT O0.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Southend",
    "away_team": "Kidderminster",
    "match_date": NaN,
    "score": "1-3",
    "over25": {
      "pred": 0.5347,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4588,
      "is_result": false
    },
    "draw": {
      "pred": 0.2595,
      "is_result": false
    },
    "away": {
      "pred": 0.2816,
      "is_result": true
    }
  },
  {
    "league": "National League",
    "home_team": "Sutton",
    "away_team": "Forest Green",
    "match_date": "2026-09-26",
    "score": "3-3",
    "over15": {
      "pred": 0.7975,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6139,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3371,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3015,
      "is_result": false
    },
    "draw": {
      "pred": 0.2224,
      "is_result": true
    },
    "away": {
      "pred": 0.4761,
      "is_result": false
    },
    "btts": {
      "pred": 0.5894,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4864,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1837,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1897,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.216,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3259,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7212,
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
      "pred": 0.8957,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3402,
      "is_result": true
    },
    "draw": {
      "pred": 0.1938,
      "is_result": false
    },
    "away": {
      "pred": 0.466,
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
      "pred": 0.705,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2588,
      "is_result": false
    },
    "draw": {
      "pred": 0.2047,
      "is_result": true
    },
    "away": {
      "pred": 0.5365,
      "is_result": false
    }
  },
  {
    "league": "National League",
    "home_team": "Wealdstone",
    "away_team": "Gateshead",
    "match_date": "2026-09-26",
    "score": "4-0",
    "over15": {
      "pred": 0.841,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6993,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3983,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5456,
      "is_result": true
    },
    "draw": {
      "pred": 0.2236,
      "is_result": false
    },
    "away": {
      "pred": 0.2308,
      "is_result": false
    },
    "btts": {
      "pred": 0.6169,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.549,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3027,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1688,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1454,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4329,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7421,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Worthing",
    "away_team": "Halifax",
    "match_date": "2026-09-26",
    "score": "2-1",
    "over15": {
      "pred": 0.8622,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.722,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.443,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4958,
      "is_result": true
    },
    "draw": {
      "pred": 0.2254,
      "is_result": false
    },
    "away": {
      "pred": 0.2788,
      "is_result": false
    },
    "btts": {
      "pred": 0.6635,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5845,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3162,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1838,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1635,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3351,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6795,
      "hit": true,
      "label": "HT O0.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "AFC Telford United",
    "away_team": "King's Lynn Town",
    "match_date": "2026-09-26",
    "score": "0-5",
    "over15": {
      "pred": 0.7975,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6197,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3349,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5584,
      "is_result": false
    },
    "draw": {
      "pred": 0.2308,
      "is_result": false
    },
    "away": {
      "pred": 0.2108,
      "is_result": true
    },
    "btts": {
      "pred": 0.5953,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4801,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2703,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1998,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1253,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3307,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7035,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6273,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League North",
    "home_team": "Bedford Town",
    "away_team": "Hereford",
    "match_date": "2026-09-26",
    "score": "1-1",
    "over15": {
      "pred": 0.8271,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6883,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.377,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3608,
      "is_result": false
    },
    "draw": {
      "pred": 0.2306,
      "is_result": true
    },
    "away": {
      "pred": 0.4086,
      "is_result": false
    },
    "btts": {
      "pred": 0.6363,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5585,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2292,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2041,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.2029,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4588,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7495,
      "hit": false,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6154,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League North",
    "home_team": "Brackley Town",
    "away_team": "Scarborough Athletic",
    "match_date": "2026-09-26",
    "score": "1-1",
    "over15": {
      "pred": 0.8011,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.539,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.398,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3637,
      "is_result": false
    },
    "draw": {
      "pred": 0.2704,
      "is_result": true
    },
    "away": {
      "pred": 0.3659,
      "is_result": false
    },
    "btts": {
      "pred": 0.6026,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4542,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.215,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2075,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1801,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3475,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.4677,
      "hit": false,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5845,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League North",
    "home_team": "Chester",
    "away_team": "Worksop Town",
    "match_date": "2026-09-26",
    "score": "4-1",
    "over15": {
      "pred": 0.7979,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5636,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3595,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5226,
      "is_result": true
    },
    "draw": {
      "pred": 0.25,
      "is_result": false
    },
    "away": {
      "pred": 0.2274,
      "is_result": false
    },
    "btts": {
      "pred": 0.6038,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4614,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2557,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.208,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1401,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3284,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7135,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5969,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League North",
    "home_team": "Chorley",
    "away_team": "Spalding United",
    "match_date": "2026-09-26",
    "score": "2-1",
    "over15": {
      "pred": 0.8121,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5218,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3948,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2915,
      "is_result": true
    },
    "draw": {
      "pred": 0.2455,
      "is_result": false
    },
    "away": {
      "pred": 0.463,
      "is_result": false
    },
    "btts": {
      "pred": 0.5152,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4327,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1389,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2171,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1592,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3399,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6552,
      "hit": false,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.587,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League North",
    "home_team": "Darlington",
    "away_team": "Hebburn Town",
    "match_date": "2026-09-26",
    "score": "1-1",
    "over15": {
      "pred": 0.8911,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.805,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.5186,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4499,
      "is_result": false
    },
    "draw": {
      "pred": 0.215,
      "is_result": true
    },
    "away": {
      "pred": 0.3352,
      "is_result": false
    },
    "btts": {
      "pred": 0.7159,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7159,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.327,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1973,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1916,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5142,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.8854,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6922,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League North",
    "home_team": "Hednesford Town",
    "away_team": "Radcliffe",
    "match_date": "2026-09-26",
    "score": "4-1",
    "over15": {
      "pred": 0.8899,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8015,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.5154,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5304,
      "is_result": true
    },
    "draw": {
      "pred": 0.211,
      "is_result": false
    },
    "away": {
      "pred": 0.2586,
      "is_result": false
    },
    "btts": {
      "pred": 0.6942,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6792,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3471,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1831,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.164,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4355,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7439,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6595,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League North",
    "home_team": "Macclesfield",
    "away_team": "Harborough Town",
    "match_date": "2026-09-26",
    "score": "1-0",
    "over15": {
      "pred": 0.798,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5498,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3698,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5636,
      "is_result": true
    },
    "draw": {
      "pred": 0.2391,
      "is_result": false
    },
    "away": {
      "pred": 0.1972,
      "is_result": false
    },
    "btts": {
      "pred": 0.5805,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4538,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2492,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2217,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1095,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3423,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6404,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5981,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League North",
    "home_team": "Merthyr Town",
    "away_team": "Marine",
    "match_date": "2026-09-26",
    "score": "1-2",
    "over15": {
      "pred": 0.856,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.718,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4349,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5728,
      "is_result": false
    },
    "draw": {
      "pred": 0.2085,
      "is_result": false
    },
    "away": {
      "pred": 0.2187,
      "is_result": true
    },
    "btts": {
      "pred": 0.628,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5633,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3119,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1734,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1427,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3695,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7354,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6555,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League North",
    "home_team": "Oxford City",
    "away_team": "Morecambe",
    "match_date": "2026-09-26",
    "score": "1-1",
    "over15": {
      "pred": 0.8061,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5336,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4281,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.318,
      "is_result": false
    },
    "draw": {
      "pred": 0.2666,
      "is_result": true
    },
    "away": {
      "pred": 0.4154,
      "is_result": false
    },
    "btts": {
      "pred": 0.5607,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4517,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.189,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1958,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.176,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3512,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.4033,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5833,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League North",
    "home_team": "South Shields",
    "away_team": "Buxton",
    "match_date": "2026-09-26",
    "score": "4-0",
    "over15": {
      "pred": 0.8434,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7048,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4088,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4923,
      "is_result": true
    },
    "draw": {
      "pred": 0.2255,
      "is_result": false
    },
    "away": {
      "pred": 0.2822,
      "is_result": false
    },
    "btts": {
      "pred": 0.6407,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5667,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2987,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1809,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1612,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3444,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7321,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6526,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League North",
    "home_team": "Southport",
    "away_team": "Spennymoor Town",
    "match_date": "2026-09-26",
    "score": "2-2",
    "over15": {
      "pred": 0.7974,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6384,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3267,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4204,
      "is_result": false
    },
    "draw": {
      "pred": 0.2444,
      "is_result": true
    },
    "away": {
      "pred": 0.3353,
      "is_result": false
    },
    "btts": {
      "pred": 0.5796,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5053,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2227,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1907,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1661,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3255,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7257,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6317,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League South",
    "home_team": "Billericay Town",
    "away_team": "Torquay United",
    "match_date": "2026-09-26",
    "score": "3-0",
    "over15": {
      "pred": 0.9114,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8655,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.5756,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4461,
      "is_result": true
    },
    "draw": {
      "pred": 0.2082,
      "is_result": false
    },
    "away": {
      "pred": 0.3457,
      "is_result": false
    },
    "btts": {
      "pred": 0.7208,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7208,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.331,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1899,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1999,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5211,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.9005,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.7158,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League South",
    "home_team": "Chelmsford City",
    "away_team": "Horsham",
    "match_date": "2026-09-26",
    "score": "0-0",
    "over15": {
      "pred": 0.8004,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5399,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3918,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5189,
      "is_result": false
    },
    "draw": {
      "pred": 0.2569,
      "is_result": true
    },
    "away": {
      "pred": 0.2242,
      "is_result": false
    },
    "btts": {
      "pred": 0.5763,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4533,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2314,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2165,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1284,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3388,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6658,
      "hit": false,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5878,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League South",
    "home_team": "Chesham United",
    "away_team": "Maidenhead United",
    "match_date": "2026-09-26",
    "score": "0-4",
    "over15": {
      "pred": 0.8041,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5358,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4189,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3535,
      "is_result": false
    },
    "draw": {
      "pred": 0.2752,
      "is_result": false
    },
    "away": {
      "pred": 0.3713,
      "is_result": true
    },
    "btts": {
      "pred": 0.5794,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4528,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2053,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1996,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1745,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3355,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6844,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5871,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League South",
    "home_team": "Dagenham & Redbridge",
    "away_team": "Hampton & Richmond Borough",
    "match_date": "2026-09-26",
    "score": "1-0",
    "over15": {
      "pred": 0.7977,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5964,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.344,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5546,
      "is_result": true
    },
    "draw": {
      "pred": 0.2343,
      "is_result": false
    },
    "away": {
      "pred": 0.2112,
      "is_result": false
    },
    "btts": {
      "pred": 0.6003,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4706,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2659,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2093,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1251,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3284,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7177,
      "hit": false,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6127,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League South",
    "home_team": "Dorking Wanderers",
    "away_team": "Braintree Town",
    "match_date": "2026-09-26",
    "score": "4-3",
    "over15": {
      "pred": 0.9336,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.9016,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.6062,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6564,
      "is_result": true
    },
    "draw": {
      "pred": 0.1879,
      "is_result": false
    },
    "away": {
      "pred": 0.1557,
      "is_result": false
    },
    "btts": {
      "pred": 0.6747,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6747,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3895,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1637,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1215,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4675,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7527,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6636,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League South",
    "home_team": "Dover Athletic",
    "away_team": "AFC Totton",
    "match_date": "2026-09-26",
    "score": "2-0",
    "over15": {
      "pred": 0.8232,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.685,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3709,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4865,
      "is_result": true
    },
    "draw": {
      "pred": 0.2293,
      "is_result": false
    },
    "away": {
      "pred": 0.2842,
      "is_result": false
    },
    "btts": {
      "pred": 0.6168,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5463,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2793,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.179,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1585,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.39,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7399,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6293,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League South",
    "home_team": "Farnham Town",
    "away_team": "Weston-super-Mare",
    "match_date": "2026-09-26",
    "score": "3-2",
    "over15": {
      "pred": 0.8053,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5345,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4271,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3849,
      "is_result": true
    },
    "draw": {
      "pred": 0.2787,
      "is_result": false
    },
    "away": {
      "pred": 0.3364,
      "is_result": false
    },
    "btts": {
      "pred": 0.5691,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4523,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.205,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1951,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.169,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3341,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6917,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6256,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League South",
    "home_team": "Maidstone United",
    "away_team": "Truro City",
    "match_date": "2026-09-26",
    "score": "1-2",
    "over15": {
      "pred": 0.8132,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5128,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3803,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3842,
      "is_result": false
    },
    "draw": {
      "pred": 0.2872,
      "is_result": false
    },
    "away": {
      "pred": 0.3286,
      "is_result": true
    },
    "btts": {
      "pred": 0.5135,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4325,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1807,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1945,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1383,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3465,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.489,
      "hit": false,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5855,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League South",
    "home_team": "Salisbury",
    "away_team": "Folkestone Invicta",
    "match_date": "2026-09-26",
    "score": "2-0",
    "over15": {
      "pred": 0.7977,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6007,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3424,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3206,
      "is_result": true
    },
    "draw": {
      "pred": 0.2401,
      "is_result": false
    },
    "away": {
      "pred": 0.4393,
      "is_result": false
    },
    "btts": {
      "pred": 0.5883,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4876,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2036,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1984,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1863,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3279,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7207,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6104,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League South",
    "home_team": "Slough Town",
    "away_team": "Hemel Hempstead Town",
    "match_date": "2026-09-26",
    "score": "0-2",
    "over15": {
      "pred": 0.7973,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6515,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.319,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.324,
      "is_result": false
    },
    "draw": {
      "pred": 0.2324,
      "is_result": false
    },
    "away": {
      "pred": 0.4436,
      "is_result": true
    },
    "btts": {
      "pred": 0.5881,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5186,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2019,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1918,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1943,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3542,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7352,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6065,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League South",
    "home_team": "Tonbridge Angels",
    "away_team": "Ebbsfleet United",
    "match_date": "2026-09-26",
    "score": "1-2",
    "over15": {
      "pred": 0.7978,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.587,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3476,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3654,
      "is_result": false
    },
    "draw": {
      "pred": 0.2527,
      "is_result": false
    },
    "away": {
      "pred": 0.3819,
      "is_result": true
    },
    "btts": {
      "pred": 0.5902,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4832,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2129,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2007,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1766,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3325,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.6997,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.619,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "National League South",
    "home_team": "Walton & Hersham",
    "away_team": "Farnborough",
    "match_date": "2026-09-26",
    "score": "2-2",
    "over15": {
      "pred": 0.8708,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7476,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4673,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2266,
      "is_result": false
    },
    "draw": {
      "pred": 0.1679,
      "is_result": true
    },
    "away": {
      "pred": 0.6056,
      "is_result": false
    },
    "btts": {
      "pred": 0.601,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4907,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0491,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1334,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.4185,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4053,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7409,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6552,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Northern Premier League",
    "home_team": "Cleethorpes Town",
    "away_team": "Redcar Athletic",
    "match_date": "2026-09-22",
    "score": "1-1",
    "over15": {
      "pred": 0.8054,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5352,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4286,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3013,
      "is_result": false
    },
    "draw": {
      "pred": 0.2533,
      "is_result": true
    },
    "away": {
      "pred": 0.4454,
      "is_result": false
    },
    "btts": {
      "pred": 0.5496,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4514,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1751,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2005,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.174,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3401,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.705,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5492,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Northern Premier League",
    "home_team": "Leek Town",
    "away_team": "Hyde United",
    "match_date": "2026-09-22",
    "score": "2-1",
    "over15": {
      "pred": 0.8193,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6765,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3577,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4869,
      "is_result": true
    },
    "draw": {
      "pred": 0.2438,
      "is_result": false
    },
    "away": {
      "pred": 0.2693,
      "is_result": false
    },
    "btts": {
      "pred": 0.603,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5281,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2742,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.182,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1468,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3931,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.723,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5662,
      "hit": true,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.6257,
      "hit": false,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.6115,
      "hit": false,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.5368,
      "hit": false,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.5667,
      "hit": true,
      "label": "Goal Each Half"
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
    "home_team": "Otelul",
    "away_team": "Corvinul",
    "match_date": "2026-09-21",
    "score": "2-3",
    "over15": {
      "pred": 0.7835,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4772,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3555,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3615,
      "is_result": false
    },
    "draw": {
      "pred": 0.3091,
      "is_result": false
    },
    "away": {
      "pred": 0.3294,
      "is_result": true
    },
    "btts": {
      "pred": 0.5169,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3876,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1832,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1999,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1339,
      "hit": false,
      "label": "BTTS+Away"
    }
  },
  {
    "league": "Romania Superliga",
    "home_team": "Petrolul",
    "away_team": "Csikszereda M. Ciuc",
    "match_date": "2026-09-21",
    "score": "2-0",
    "over15": {
      "pred": 0.8101,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5141,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3947,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5417,
      "is_result": true
    },
    "draw": {
      "pred": 0.288,
      "is_result": false
    },
    "away": {
      "pred": 0.1702,
      "is_result": false
    },
    "btts": {
      "pred": 0.5208,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3931,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1935,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2657,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0616,
      "hit": true,
      "label": "BTTS+Away"
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
    },
    "goal_each_half": {
      "pred": 0.7677,
      "hit": false,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.5542,
      "hit": true,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.5508,
      "hit": false,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.5357,
      "hit": true,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.5462,
      "hit": true,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.3243,
      "hit": false,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.2505,
      "hit": false,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.7002,
      "hit": true,
      "label": "Goal Each Half"
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
    },
    "goal_each_half": {
      "pred": 0.5243,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Southern League Central",
    "home_team": "Anstey Nomads",
    "away_team": "Alvechurch",
    "match_date": "2026-09-22",
    "score": "2-2",
    "over15": {
      "pred": 0.8006,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5364,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.396,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4986,
      "is_result": false
    },
    "draw": {
      "pred": 0.2777,
      "is_result": true
    },
    "away": {
      "pred": 0.2237,
      "is_result": false
    },
    "btts": {
      "pred": 0.5801,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4487,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2374,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.208,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1347,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3395,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.707,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5433,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Southern League Central",
    "home_team": "Bury Town",
    "away_team": "Hitchin Town",
    "match_date": "2026-09-22",
    "score": "1-0",
    "over15": {
      "pred": 0.7966,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5693,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3492,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7214,
      "is_result": true
    },
    "draw": {
      "pred": 0.1898,
      "is_result": false
    },
    "away": {
      "pred": 0.0888,
      "is_result": false
    },
    "btts": {
      "pred": 0.5123,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.452,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2792,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1822,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0509,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.433,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7267,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5035,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Southern League Central",
    "home_team": "Leiston",
    "away_team": "Peterborough Sports",
    "match_date": "2026-09-22",
    "score": "0-2",
    "over15": {
      "pred": 0.8663,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7363,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4508,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4341,
      "is_result": false
    },
    "draw": {
      "pred": 0.2351,
      "is_result": false
    },
    "away": {
      "pred": 0.3308,
      "is_result": true
    },
    "btts": {
      "pred": 0.6716,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6155,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2978,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2082,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1656,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.5377,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.9169,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5997,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Southern League Central",
    "home_team": "Redditch United",
    "away_team": "Racing Club Warwick",
    "match_date": "2026-09-21",
    "score": "2-1",
    "over15": {
      "pred": 0.777,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.636,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3134,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6036,
      "is_result": true
    },
    "draw": {
      "pred": 0.2247,
      "is_result": false
    },
    "away": {
      "pred": 0.1717,
      "is_result": false
    },
    "btts": {
      "pred": 0.5958,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4715,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3039,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2006,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0913,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.339,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7364,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5926,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Southern League Central",
    "home_team": "Rushall Olympic",
    "away_team": "Kettering Town",
    "match_date": "2026-09-22",
    "score": "3-2",
    "over15": {
      "pred": 0.8542,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7127,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4336,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3198,
      "is_result": true
    },
    "draw": {
      "pred": 0.2194,
      "is_result": false
    },
    "away": {
      "pred": 0.4608,
      "is_result": false
    },
    "btts": {
      "pred": 0.6505,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5725,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2358,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2317,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1829,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4354,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7279,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6056,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Southern League Central",
    "home_team": "Stourbridge",
    "away_team": "Real Bedford",
    "match_date": "2026-09-22",
    "score": "1-4",
    "over15": {
      "pred": 0.8626,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7266,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4478,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2858,
      "is_result": false
    },
    "draw": {
      "pred": 0.1662,
      "is_result": false
    },
    "away": {
      "pred": 0.548,
      "is_result": true
    },
    "btts": {
      "pred": 0.5928,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5369,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1388,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1312,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.3228,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3762,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7231,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6272,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Southern League Central",
    "home_team": "Stratford Town",
    "away_team": "Bromsgrove Sporting",
    "match_date": "2026-09-22",
    "score": "2-3",
    "over15": {
      "pred": 0.7978,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5455,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3661,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3904,
      "is_result": false
    },
    "draw": {
      "pred": 0.2818,
      "is_result": false
    },
    "away": {
      "pred": 0.3278,
      "is_result": true
    },
    "btts": {
      "pred": 0.5905,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4582,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2121,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2131,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1654,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3346,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.713,
      "hit": false,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5262,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Southern League Central",
    "home_team": "Worcester City",
    "away_team": "Banbury United",
    "match_date": "2026-09-22",
    "score": "0-0",
    "over15": {
      "pred": 0.8079,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5346,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4133,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4993,
      "is_result": false
    },
    "draw": {
      "pred": 0.2885,
      "is_result": true
    },
    "away": {
      "pred": 0.2122,
      "is_result": false
    },
    "btts": {
      "pred": 0.5189,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4535,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2089,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2105,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.0995,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.338,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7089,
      "hit": false,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.5063,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Southern League South",
    "home_team": "Berkhamsted",
    "away_team": "Hanworth Villa",
    "match_date": "2026-09-22",
    "score": "1-2",
    "over15": {
      "pred": 0.8024,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.536,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4077,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3073,
      "is_result": false
    },
    "draw": {
      "pred": 0.2549,
      "is_result": false
    },
    "away": {
      "pred": 0.4378,
      "is_result": true
    },
    "btts": {
      "pred": 0.5816,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4488,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.1928,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2106,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1782,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3321,
      "hit": false,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7139,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.4787,
      "hit": false,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Southern League South",
    "home_team": "Chichester City",
    "away_team": "Chertsey Town",
    "match_date": "2026-09-22",
    "score": "2-2",
    "over15": {
      "pred": 0.8781,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.777,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4632,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3291,
      "is_result": false
    },
    "draw": {
      "pred": 0.2158,
      "is_result": true
    },
    "away": {
      "pred": 0.4551,
      "is_result": false
    },
    "btts": {
      "pred": 0.6866,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6833,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2551,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2405,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1909,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.4512,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7282,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6082,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Southern League South",
    "home_team": "Malvern Town",
    "away_team": "Gloucester City",
    "match_date": "2026-09-22",
    "score": "5-2",
    "over15": {
      "pred": 0.9558,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.902,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.6485,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.0502,
      "is_result": true
    },
    "draw": {
      "pred": 0.2117,
      "is_result": false
    },
    "away": {
      "pred": 0.7381,
      "is_result": false
    },
    "btts": {
      "pred": 0.5808,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5264,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.0427,
      "hit": false,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.0768,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.4613,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3522,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7194,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.6819,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Southern League South",
    "home_team": "Plymouth Parkway",
    "away_team": "Frome Town",
    "match_date": "2026-09-22",
    "score": "2-0",
    "over15": {
      "pred": 0.8391,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6993,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4048,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3136,
      "is_result": true
    },
    "draw": {
      "pred": 0.2113,
      "is_result": false
    },
    "away": {
      "pred": 0.475,
      "is_result": false
    },
    "btts": {
      "pred": 0.6254,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5524,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2256,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2204,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1794,
      "hit": true,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3386,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.7181,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.648,
      "hit": true,
      "label": "Goal Each Half"
    }
  },
  {
    "league": "Southern League South",
    "home_team": "Taunton Town",
    "away_team": "Bath City",
    "match_date": "2026-09-22",
    "score": "1-2",
    "over15": {
      "pred": 0.8028,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5359,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4107,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3283,
      "is_result": false
    },
    "draw": {
      "pred": 0.2732,
      "is_result": false
    },
    "away": {
      "pred": 0.3985,
      "is_result": true
    },
    "btts": {
      "pred": 0.5898,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4484,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2052,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2126,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.172,
      "hit": false,
      "label": "BTTS+Away"
    },
    "ht_over15": {
      "pred": 0.3479,
      "hit": true,
      "label": "HT O1.5"
    },
    "ht_over05": {
      "pred": 0.4681,
      "hit": true,
      "label": "HT O0.5"
    },
    "goal_each_half": {
      "pred": 0.378,
      "hit": true,
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
    "home_team": "Inter Miami",
    "away_team": "San Diego FC",
    "match_date": "2026-09-21",
    "score": "2-2",
    "over15": {
      "pred": 0.9273,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8836,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.6194,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.61,
      "is_result": false
    },
    "draw": {
      "pred": 0.1989,
      "is_result": true
    },
    "away": {
      "pred": 0.1911,
      "is_result": false
    },
    "btts": {
      "pred": 0.7022,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6585,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.3581,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1872,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1569,
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
    "away_team": "St. Louis City",
    "match_date": "2026-09-27",
    "score": "1-1",
    "over15": {
      "pred": 0.7973,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6389,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3262,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4943,
      "is_result": false
    },
    "draw": {
      "pred": 0.2566,
      "is_result": true
    },
    "away": {
      "pred": 0.2491,
      "is_result": false
    },
    "btts": {
      "pred": 0.5813,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4985,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2507,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.1805,
      "hit": false,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1501,
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
    "home_team": "Seattle Sounders",
    "away_team": "Real Salt Lake",
    "match_date": "2026-09-24",
    "score": "2-0",
    "over15": {
      "pred": 0.7992,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5431,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3785,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4519,
      "is_result": true
    },
    "draw": {
      "pred": 0.2836,
      "is_result": false
    },
    "away": {
      "pred": 0.2645,
      "is_result": false
    },
    "btts": {
      "pred": 0.5982,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4526,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "btts_home": {
      "pred": 0.2195,
      "hit": true,
      "label": "BTTS+Home"
    },
    "btts_draw": {
      "pred": 0.2115,
      "hit": true,
      "label": "BTTS+Draw"
    },
    "btts_away": {
      "pred": 0.1672,
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
  }
];
