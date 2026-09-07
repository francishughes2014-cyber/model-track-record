const RECENT_RESULTS = [
  {
    "league": "Argentina Primera Division",
    "home_team": "Aldosivi",
    "away_team": "Banfield",
    "match_date": NaN,
    "score": "3-1",
    "over15": {
      "pred": 0.5638,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3887,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1163,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3676,
      "is_result": true
    },
    "draw": {
      "pred": 0.3233,
      "is_result": false
    },
    "away": {
      "pred": 0.309,
      "is_result": false
    },
    "btts": {
      "pred": 0.5405,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3492,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Argentina Primera Division",
    "home_team": "Belgrano",
    "away_team": "Huracan",
    "match_date": NaN,
    "score": "1-1",
    "over15": {
      "pred": 0.5273,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3764,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0971,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4035,
      "is_result": false
    },
    "draw": {
      "pred": 0.3528,
      "is_result": true
    },
    "away": {
      "pred": 0.2438,
      "is_result": false
    },
    "btts": {
      "pred": 0.3414,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3761,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Argentina Primera Division",
    "home_team": "Defensa y Justicia",
    "away_team": "Platense",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.32,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4384,
      "is_result": true
    },
    "draw": {
      "pred": 0.3264,
      "is_result": false
    },
    "away": {
      "pred": 0.2352,
      "is_result": false
    },
    "btts": {
      "pred": 0.3951,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2525,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Argentina Primera Division",
    "home_team": "Estudiantes L.P.",
    "away_team": "Newells Old Boys",
    "match_date": NaN,
    "score": "0-0",
    "over25": {
      "pred": 0.352,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5577,
      "is_result": false
    },
    "draw": {
      "pred": 0.2886,
      "is_result": true
    },
    "away": {
      "pred": 0.1536,
      "is_result": false
    },
    "btts": {
      "pred": 0.3764,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2506,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Argentina Primera Division",
    "home_team": "Gimnasia L.P.",
    "away_team": "Tigre",
    "match_date": NaN,
    "score": "2-1",
    "over15": {
      "pred": 0.6172,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4261,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.384,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4266,
      "is_result": true
    },
    "draw": {
      "pred": 0.3241,
      "is_result": false
    },
    "away": {
      "pred": 0.2493,
      "is_result": false
    },
    "btts": {
      "pred": 0.5122,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3128,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Argentina Primera Division",
    "home_team": "Gimnasia Mendoza",
    "away_team": "Boca Juniors",
    "match_date": NaN,
    "score": "2-2",
    "over15": {
      "pred": 0.6975,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5303,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2479,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3559,
      "is_result": false
    },
    "draw": {
      "pred": 0.2909,
      "is_result": true
    },
    "away": {
      "pred": 0.3532,
      "is_result": false
    },
    "btts": {
      "pred": 0.4543,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3348,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Argentina Primera Division",
    "home_team": "Independiente",
    "away_team": "Gimnasia Mendoza",
    "match_date": NaN,
    "score": "0-3",
    "over25": {
      "pred": 0.4204,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5402,
      "is_result": false
    },
    "draw": {
      "pred": 0.2761,
      "is_result": false
    },
    "away": {
      "pred": 0.1837,
      "is_result": true
    }
  },
  {
    "league": "Argentina Primera Division",
    "home_team": "Instituto",
    "away_team": "San Lorenzo",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.1946,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3563,
      "is_result": true
    },
    "draw": {
      "pred": 0.3871,
      "is_result": false
    },
    "away": {
      "pred": 0.2565,
      "is_result": false
    },
    "btts": {
      "pred": 0.2903,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.1539,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Argentina Primera Division",
    "home_team": "Lanus",
    "away_team": "Defensa y Justicia",
    "match_date": NaN,
    "score": "1-0",
    "over15": {
      "pred": 0.7315,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5519,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1751,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4636,
      "is_result": true
    },
    "draw": {
      "pred": 0.2867,
      "is_result": false
    },
    "away": {
      "pred": 0.2497,
      "is_result": false
    },
    "btts": {
      "pred": 0.4597,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3691,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Argentina Primera Division",
    "home_team": "Platense",
    "away_team": "Dep. Riestra",
    "match_date": NaN,
    "score": "1-1",
    "over15": {
      "pred": 0.46,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3559,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0678,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3767,
      "is_result": false
    },
    "draw": {
      "pred": 0.3771,
      "is_result": true
    },
    "away": {
      "pred": 0.2462,
      "is_result": false
    },
    "btts": {
      "pred": 0.2926,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.1554,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Argentina Primera Division",
    "home_team": "Rosario Central",
    "away_team": "Newells Old Boys",
    "match_date": NaN,
    "score": "1-1",
    "over15": {
      "pred": 0.6711,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4784,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2945,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5624,
      "is_result": false
    },
    "draw": {
      "pred": 0.2579,
      "is_result": true
    },
    "away": {
      "pred": 0.1797,
      "is_result": false
    },
    "btts": {
      "pred": 0.5117,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2955,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Argentina Primera Division",
    "home_team": "San Lorenzo",
    "away_team": "Talleres Cordoba",
    "match_date": NaN,
    "score": "1-0",
    "over15": {
      "pred": 0.5065,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3687,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0872,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.389,
      "is_result": true
    },
    "draw": {
      "pred": 0.3612,
      "is_result": false
    },
    "away": {
      "pred": 0.2497,
      "is_result": false
    },
    "btts": {
      "pred": 0.3276,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.388,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Argentina Primera Division",
    "home_team": "Tigre",
    "away_team": "Barracas Central",
    "match_date": NaN,
    "score": "0-0",
    "over25": {
      "pred": 0.2507,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4574,
      "is_result": false
    },
    "draw": {
      "pred": 0.3463,
      "is_result": true
    },
    "away": {
      "pred": 0.1963,
      "is_result": false
    },
    "btts": {
      "pred": 0.323,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.1886,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Argentina Primera Division",
    "home_team": "Velez Sarsfield",
    "away_team": "Estudiantes L.P.",
    "match_date": NaN,
    "score": "1-0",
    "over15": {
      "pred": 0.6391,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4405,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3508,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4327,
      "is_result": true
    },
    "draw": {
      "pred": 0.3172,
      "is_result": false
    },
    "away": {
      "pred": 0.2501,
      "is_result": false
    },
    "btts": {
      "pred": 0.4987,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2955,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Austria Bundesliga",
    "home_team": "Austria Vienna",
    "away_team": "Tirol",
    "match_date": NaN,
    "score": "0-1",
    "over25": {
      "pred": 0.68,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3199,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5512,
      "is_result": false
    },
    "draw": {
      "pred": 0.2532,
      "is_result": false
    },
    "away": {
      "pred": 0.1956,
      "is_result": true
    },
    "btts": {
      "pred": 0.55,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4294,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Austria Bundesliga",
    "home_team": "Salzburg",
    "away_team": "SK Rapid",
    "match_date": NaN,
    "score": "5-1",
    "over25": {
      "pred": 0.6669,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2926,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.51,
      "is_result": true
    },
    "draw": {
      "pred": 0.2687,
      "is_result": false
    },
    "away": {
      "pred": 0.2213,
      "is_result": false
    },
    "btts": {
      "pred": 0.5417,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4134,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Austria Bundesliga",
    "home_team": "Wolfsberger AC",
    "away_team": "LASK",
    "match_date": NaN,
    "score": "1-3",
    "over25": {
      "pred": 0.4858,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3,
      "is_result": false
    },
    "draw": {
      "pred": 0.29,
      "is_result": false
    },
    "away": {
      "pred": 0.4101,
      "is_result": true
    },
    "btts": {
      "pred": 0.5434,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4048,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Bahia",
    "away_team": "Internacional",
    "match_date": NaN,
    "score": "3-2",
    "over25": {
      "pred": 0.4512,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4995,
      "is_result": true
    },
    "draw": {
      "pred": 0.2681,
      "is_result": false
    },
    "away": {
      "pred": 0.2324,
      "is_result": false
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Botafogo RJ",
    "away_team": "Palmeiras",
    "match_date": NaN,
    "score": "0-0",
    "over15": {
      "pred": 0.7319,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.562,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1576,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4581,
      "is_result": false
    },
    "draw": {
      "pred": 0.2744,
      "is_result": true
    },
    "away": {
      "pred": 0.2674,
      "is_result": false
    },
    "btts": {
      "pred": 0.4697,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3834,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Bragantino",
    "away_team": "Bahia",
    "match_date": NaN,
    "score": "2-3",
    "over15": {
      "pred": 0.7575,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6211,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0953,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4318,
      "is_result": false
    },
    "draw": {
      "pred": 0.2526,
      "is_result": false
    },
    "away": {
      "pred": 0.3156,
      "is_result": true
    },
    "btts": {
      "pred": 0.5308,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4244,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Coritiba",
    "away_team": "Mirassol",
    "match_date": NaN,
    "score": "1-2",
    "over15": {
      "pred": 0.6817,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4982,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2636,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4292,
      "is_result": false
    },
    "draw": {
      "pred": 0.2905,
      "is_result": false
    },
    "away": {
      "pred": 0.2803,
      "is_result": true
    },
    "btts": {
      "pred": 0.4672,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3232,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Cruzeiro",
    "away_team": "Athletico-PR",
    "match_date": NaN,
    "score": "3-1",
    "over15": {
      "pred": 0.6966,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5166,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2342,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4577,
      "is_result": true
    },
    "draw": {
      "pred": 0.2835,
      "is_result": false
    },
    "away": {
      "pred": 0.2589,
      "is_result": false
    },
    "btts": {
      "pred": 0.4615,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3363,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Flamengo RJ",
    "away_team": "Mirassol",
    "match_date": NaN,
    "score": "2-0",
    "over25": {
      "pred": 0.6846,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3238,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.618,
      "is_result": true
    },
    "draw": {
      "pred": 0.2195,
      "is_result": false
    },
    "away": {
      "pred": 0.1625,
      "is_result": false
    },
    "btts": {
      "pred": 0.5156,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4111,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Fluminense",
    "away_team": "Vasco",
    "match_date": NaN,
    "score": "1-0",
    "over15": {
      "pred": 0.7939,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6181,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3369,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6262,
      "is_result": true
    },
    "draw": {
      "pred": 0.1767,
      "is_result": false
    },
    "away": {
      "pred": 0.1971,
      "is_result": false
    },
    "btts": {
      "pred": 0.5137,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4361,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Internacional",
    "away_team": "Santos",
    "match_date": NaN,
    "score": "2-3",
    "over15": {
      "pred": 0.7424,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5761,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1327,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4731,
      "is_result": false
    },
    "draw": {
      "pred": 0.2573,
      "is_result": false
    },
    "away": {
      "pred": 0.2695,
      "is_result": true
    },
    "btts": {
      "pred": 0.4869,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3964,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Remo",
    "away_team": "Coritiba",
    "match_date": NaN,
    "score": "2-3",
    "over25": {
      "pred": 0.5738,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4274,
      "is_result": false
    },
    "draw": {
      "pred": 0.2499,
      "is_result": false
    },
    "away": {
      "pred": 0.3227,
      "is_result": true
    },
    "btts": {
      "pred": 0.6021,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4862,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Remo",
    "away_team": "Flamengo RJ",
    "match_date": NaN,
    "score": "0-1",
    "over15": {
      "pred": 0.7625,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5952,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2944,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4052,
      "is_result": false
    },
    "draw": {
      "pred": 0.1798,
      "is_result": false
    },
    "away": {
      "pred": 0.415,
      "is_result": true
    },
    "btts": {
      "pred": 0.4966,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4113,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Brazil Serie A",
    "home_team": "Sao Paulo",
    "away_team": "Atletico-MG",
    "match_date": NaN,
    "score": "2-0",
    "over15": {
      "pred": 0.6953,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5383,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2367,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4605,
      "is_result": true
    },
    "draw": {
      "pred": 0.2832,
      "is_result": false
    },
    "away": {
      "pred": 0.2563,
      "is_result": false
    },
    "btts": {
      "pred": 0.4632,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3338,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "Ein Frankfurt",
    "away_team": "Augsburg",
    "match_date": "2026-09-06",
    "score": "1-4",
    "over15": {
      "pred": 0.7805,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6013,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2995,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.524,
      "is_result": false
    },
    "draw": {
      "pred": 0.2359,
      "is_result": false
    },
    "away": {
      "pred": 0.24,
      "is_result": true
    },
    "btts": {
      "pred": 0.5681,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4999,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.446,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "Hamburg",
    "away_team": "Mainz",
    "match_date": "2026-09-06",
    "score": "0-5",
    "over15": {
      "pred": 0.7853,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4885,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3511,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3877,
      "is_result": false
    },
    "draw": {
      "pred": 0.3155,
      "is_result": false
    },
    "away": {
      "pred": 0.2968,
      "is_result": true
    },
    "btts": {
      "pred": 0.5314,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4069,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3604,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "Hoffenheim",
    "away_team": "Dortmund",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.6239,
      "hit": true,
      "label": "O 2.5"
    },
    "ht_over15": {
      "pred": 0.4144,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "Leverkusen",
    "away_team": "Union Berlin",
    "match_date": NaN,
    "score": "2-0",
    "over25": {
      "pred": 0.612,
      "hit": false,
      "label": "O 2.5"
    },
    "ht_over15": {
      "pred": 0.4274,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "M'gladbach",
    "away_team": "Elversberg",
    "match_date": NaN,
    "score": "3-4",
    "over15": {
      "pred": 0.6185,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4317,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3772,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4393,
      "is_result": false
    },
    "draw": {
      "pred": 0.3153,
      "is_result": false
    },
    "away": {
      "pred": 0.2454,
      "is_result": true
    },
    "btts": {
      "pred": 0.5138,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3108,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3385,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "Paderborn",
    "away_team": "Freiburg",
    "match_date": NaN,
    "score": "0-1",
    "over15": {
      "pred": 0.484,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3639,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0788,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4035,
      "is_result": false
    },
    "draw": {
      "pred": 0.2814,
      "is_result": false
    },
    "away": {
      "pred": 0.3151,
      "is_result": true
    },
    "btts": {
      "pred": 0.2994,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.1671,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3475,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "Schalke 04",
    "away_team": "Bayern Munich",
    "match_date": NaN,
    "score": "0-0",
    "over15": {
      "pred": 0.7486,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.615,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1223,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.0992,
      "is_result": false
    },
    "draw": {
      "pred": 0.1587,
      "is_result": true
    },
    "away": {
      "pred": 0.7421,
      "is_result": false
    },
    "btts": {
      "pred": 0.5192,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2888,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.43,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga",
    "home_team": "Werder Bremen",
    "away_team": "RB Leipzig",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.6668,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2315,
      "is_result": false
    },
    "draw": {
      "pred": 0.2222,
      "is_result": false
    },
    "away": {
      "pred": 0.5464,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3535,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga 2",
    "home_team": "Bielefeld",
    "away_team": "St Pauli",
    "match_date": NaN,
    "score": "2-2",
    "over15": {
      "pred": 0.7979,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.632,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3411,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3201,
      "is_result": false
    },
    "draw": {
      "pred": 0.2534,
      "is_result": true
    },
    "away": {
      "pred": 0.4264,
      "is_result": false
    },
    "btts": {
      "pred": 0.5961,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4779,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.5055,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga 2",
    "home_team": "Dresden",
    "away_team": "Bochum",
    "match_date": NaN,
    "score": "1-2",
    "over15": {
      "pred": 0.7573,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6209,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0976,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4812,
      "is_result": false
    },
    "draw": {
      "pred": 0.2519,
      "is_result": false
    },
    "away": {
      "pred": 0.2669,
      "is_result": true
    },
    "btts": {
      "pred": 0.5125,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4148,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3986,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga 2",
    "home_team": "Greuther Furth",
    "away_team": "Heidenheim",
    "match_date": "2026-09-06",
    "score": "0-1",
    "over15": {
      "pred": 0.883,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7027,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2732,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3889,
      "is_result": false
    },
    "draw": {
      "pred": 0.2398,
      "is_result": false
    },
    "away": {
      "pred": 0.3712,
      "is_result": true
    },
    "btts": {
      "pred": 0.707,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6676,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.7067,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga 2",
    "home_team": "Hannover",
    "away_team": "Karlsruhe",
    "match_date": NaN,
    "score": "2-2",
    "over15": {
      "pred": 0.8173,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6406,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3711,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5264,
      "is_result": false
    },
    "draw": {
      "pred": 0.2344,
      "is_result": true
    },
    "away": {
      "pred": 0.2392,
      "is_result": false
    },
    "btts": {
      "pred": 0.5976,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4893,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4365,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga 2",
    "home_team": "Hertha",
    "away_team": "Magdeburg",
    "match_date": "2026-09-06",
    "score": "2-1",
    "over15": {
      "pred": 0.7827,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6008,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3093,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4489,
      "is_result": true
    },
    "draw": {
      "pred": 0.272,
      "is_result": false
    },
    "away": {
      "pred": 0.2791,
      "is_result": false
    },
    "btts": {
      "pred": 0.5686,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4933,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.6815,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga 2",
    "home_team": "Holstein Kiel",
    "away_team": "Nurnberg",
    "match_date": NaN,
    "score": "2-2",
    "over15": {
      "pred": 0.724,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5787,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1778,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.443,
      "is_result": false
    },
    "draw": {
      "pred": 0.2799,
      "is_result": true
    },
    "away": {
      "pred": 0.2771,
      "is_result": false
    },
    "btts": {
      "pred": 0.4606,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3742,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3721,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga 2",
    "home_team": "Kaiserslautern",
    "away_team": "Darmstadt",
    "match_date": NaN,
    "score": "3-0",
    "over15": {
      "pred": 0.7407,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6044,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1387,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5176,
      "is_result": true
    },
    "draw": {
      "pred": 0.2438,
      "is_result": false
    },
    "away": {
      "pred": 0.2387,
      "is_result": false
    },
    "btts": {
      "pred": 0.4577,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3813,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.352,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga 2",
    "home_team": "Osnabruck",
    "away_team": "Braunschweig",
    "match_date": "2026-09-06",
    "score": "3-1",
    "over15": {
      "pred": 0.7909,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5986,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3439,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3072,
      "is_result": true
    },
    "draw": {
      "pred": 0.2307,
      "is_result": false
    },
    "away": {
      "pred": 0.4622,
      "is_result": false
    },
    "btts": {
      "pred": 0.5464,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4058,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4461,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Bundesliga 2",
    "home_team": "Wolfsburg",
    "away_team": "Cottbus",
    "match_date": NaN,
    "score": "4-4",
    "over15": {
      "pred": 0.8758,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6936,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4803,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6908,
      "is_result": false
    },
    "draw": {
      "pred": 0.1241,
      "is_result": true
    },
    "away": {
      "pred": 0.185,
      "is_result": false
    },
    "btts": {
      "pred": 0.6366,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5536,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.7994,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Birmingham",
    "away_team": "Southampton",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.5904,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.356,
      "is_result": false
    },
    "draw": {
      "pred": 0.2511,
      "is_result": true
    },
    "away": {
      "pred": 0.3928,
      "is_result": false
    },
    "btts": {
      "pred": 0.6192,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.504,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4437,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Birmingham",
    "away_team": "Wolves",
    "match_date": "2026-09-06",
    "score": "2-2",
    "over15": {
      "pred": 0.8794,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6872,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.275,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4502,
      "is_result": false
    },
    "draw": {
      "pred": 0.2533,
      "is_result": true
    },
    "away": {
      "pred": 0.2965,
      "is_result": false
    },
    "btts": {
      "pred": 0.6938,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6411,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.7428,
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
      "pred": 0.4613,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3588,
      "is_result": false
    },
    "draw": {
      "pred": 0.3065,
      "is_result": false
    },
    "away": {
      "pred": 0.3347,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3444,
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
      "pred": 0.3483,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3919,
      "is_result": false
    },
    "draw": {
      "pred": 0.3505,
      "is_result": false
    },
    "away": {
      "pred": 0.2577,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4493,
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
      "pred": 0.4198,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4191,
      "is_result": true
    },
    "draw": {
      "pred": 0.3145,
      "is_result": false
    },
    "away": {
      "pred": 0.2664,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3168,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Burnley",
    "away_team": "Bristol City",
    "match_date": NaN,
    "score": "1-2",
    "over15": {
      "pred": 0.6167,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4324,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3763,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5273,
      "is_result": false
    },
    "draw": {
      "pred": 0.2793,
      "is_result": false
    },
    "away": {
      "pred": 0.1934,
      "is_result": true
    },
    "btts": {
      "pred": 0.5393,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3296,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3736,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Burnley",
    "away_team": "Middlesbrough",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.6164,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2572,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5617,
      "is_result": false
    },
    "draw": {
      "pred": 0.2514,
      "is_result": true
    },
    "away": {
      "pred": 0.1869,
      "is_result": false
    },
    "btts": {
      "pred": 0.4817,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3624,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4206,
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
      "pred": 0.567,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.36,
      "is_result": false
    },
    "draw": {
      "pred": 0.2799,
      "is_result": true
    },
    "away": {
      "pred": 0.3601,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3621,
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
      "pred": 0.4142,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4181,
      "is_result": true
    },
    "draw": {
      "pred": 0.3169,
      "is_result": false
    },
    "away": {
      "pred": 0.2651,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.2325,
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
      "pred": 0.5248,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4724,
      "is_result": false
    },
    "draw": {
      "pred": 0.2801,
      "is_result": false
    },
    "away": {
      "pred": 0.2475,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4091,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Lincoln",
    "away_team": "Blackburn",
    "match_date": NaN,
    "score": "0-0",
    "over25": {
      "pred": 0.2903,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4232,
      "is_result": false
    },
    "draw": {
      "pred": 0.3277,
      "is_result": true
    },
    "away": {
      "pred": 0.2491,
      "is_result": false
    },
    "btts": {
      "pred": 0.3671,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2297,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4004,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Lincoln",
    "away_team": "Southampton",
    "match_date": NaN,
    "score": "1-1",
    "over15": {
      "pred": 0.7679,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6225,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2978,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3595,
      "is_result": false
    },
    "draw": {
      "pred": 0.2437,
      "is_result": true
    },
    "away": {
      "pred": 0.3968,
      "is_result": false
    },
    "btts": {
      "pred": 0.5486,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4348,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4294,
      "hit": true,
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
      "pred": 0.558,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.416,
      "is_result": true
    },
    "draw": {
      "pred": 0.2796,
      "is_result": false
    },
    "away": {
      "pred": 0.3043,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3085,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Millwall",
    "away_team": "Bolton",
    "match_date": NaN,
    "score": "4-0",
    "over15": {
      "pred": 0.5651,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3913,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1206,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5159,
      "is_result": true
    },
    "draw": {
      "pred": 0.2956,
      "is_result": false
    },
    "away": {
      "pred": 0.1885,
      "is_result": false
    },
    "btts": {
      "pred": 0.3317,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3681,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3192,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Millwall",
    "away_team": "Wrexham",
    "match_date": NaN,
    "score": "0-3",
    "over25": {
      "pred": 0.6942,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3509,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5502,
      "is_result": false
    },
    "draw": {
      "pred": 0.2346,
      "is_result": false
    },
    "away": {
      "pred": 0.2152,
      "is_result": true
    },
    "btts": {
      "pred": 0.573,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.463,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.468,
      "hit": true,
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
      "pred": 0.4901,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3419,
      "is_result": true
    },
    "draw": {
      "pred": 0.2988,
      "is_result": false
    },
    "away": {
      "pred": 0.3593,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.486,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Portsmouth",
    "away_team": "Cardiff",
    "match_date": NaN,
    "score": "2-0",
    "over15": {
      "pred": 0.7291,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5839,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1699,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4715,
      "is_result": true
    },
    "draw": {
      "pred": 0.2771,
      "is_result": false
    },
    "away": {
      "pred": 0.2515,
      "is_result": false
    },
    "btts": {
      "pred": 0.4534,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3713,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3541,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Portsmouth",
    "away_team": "Derby",
    "match_date": NaN,
    "score": "0-2",
    "over25": {
      "pred": 0.406,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4438,
      "is_result": false
    },
    "draw": {
      "pred": 0.2903,
      "is_result": false
    },
    "away": {
      "pred": 0.2659,
      "is_result": true
    },
    "btts": {
      "pred": 0.4648,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3291,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3232,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Preston",
    "away_team": "Blackburn",
    "match_date": NaN,
    "score": "2-1",
    "over15": {
      "pred": 0.5189,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3753,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0953,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3669,
      "is_result": true
    },
    "draw": {
      "pred": 0.3454,
      "is_result": false
    },
    "away": {
      "pred": 0.2878,
      "is_result": false
    },
    "btts": {
      "pred": 0.339,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3757,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3509,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Preston",
    "away_team": "Bristol City",
    "match_date": NaN,
    "score": "1-3",
    "over25": {
      "pred": 0.2935,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.292,
      "is_result": false
    },
    "draw": {
      "pred": 0.3315,
      "is_result": false
    },
    "away": {
      "pred": 0.3766,
      "is_result": true
    },
    "btts": {
      "pred": 0.378,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2372,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3174,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "QPR",
    "away_team": "Cardiff",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.7116,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3911,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3704,
      "is_result": true
    },
    "draw": {
      "pred": 0.2462,
      "is_result": false
    },
    "away": {
      "pred": 0.3835,
      "is_result": false
    },
    "btts": {
      "pred": 0.6376,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5268,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.5287,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "QPR",
    "away_team": "Middlesbrough",
    "match_date": NaN,
    "score": "0-1",
    "over15": {
      "pred": 0.8553,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6402,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.435,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3815,
      "is_result": false
    },
    "draw": {
      "pred": 0.1798,
      "is_result": false
    },
    "away": {
      "pred": 0.4386,
      "is_result": true
    },
    "btts": {
      "pred": 0.659,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5577,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4074,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Sheffield United",
    "away_team": "Bolton",
    "match_date": NaN,
    "score": "3-2",
    "over25": {
      "pred": 0.1537,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3348,
      "is_result": true
    },
    "draw": {
      "pred": 0.4029,
      "is_result": false
    },
    "away": {
      "pred": 0.2623,
      "is_result": false
    },
    "btts": {
      "pred": 0.2441,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.1212,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.2134,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Sheffield United",
    "away_team": "Norwich",
    "match_date": NaN,
    "score": "1-3",
    "over15": {
      "pred": 0.6655,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4936,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2982,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3839,
      "is_result": false
    },
    "draw": {
      "pred": 0.2483,
      "is_result": false
    },
    "away": {
      "pred": 0.3678,
      "is_result": true
    },
    "btts": {
      "pred": 0.4834,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2956,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3181,
      "hit": false,
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
      "pred": 0.5989,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.477,
      "is_result": true
    },
    "draw": {
      "pred": 0.2416,
      "is_result": false
    },
    "away": {
      "pred": 0.2814,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3736,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Stoke",
    "away_team": "Charlton",
    "match_date": NaN,
    "score": "4-0",
    "over15": {
      "pred": 0.4781,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3626,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0769,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3646,
      "is_result": true
    },
    "draw": {
      "pred": 0.3507,
      "is_result": false
    },
    "away": {
      "pred": 0.2847,
      "is_result": false
    },
    "btts": {
      "pred": 0.3072,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.171,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3485,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Stoke",
    "away_team": "Norwich",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.3649,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2271,
      "is_result": true
    },
    "draw": {
      "pred": 0.2959,
      "is_result": false
    },
    "away": {
      "pred": 0.477,
      "is_result": false
    },
    "btts": {
      "pred": 0.4201,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2862,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.2869,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Swansea",
    "away_team": "Watford",
    "match_date": NaN,
    "score": "2-0",
    "over25": {
      "pred": 0.3015,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4014,
      "is_result": true
    },
    "draw": {
      "pred": 0.3264,
      "is_result": false
    },
    "away": {
      "pred": 0.2721,
      "is_result": false
    },
    "btts": {
      "pred": 0.3818,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2421,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3155,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "Swansea",
    "away_team": "Wrexham",
    "match_date": NaN,
    "score": "0-0",
    "over15": {
      "pred": 0.7336,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5903,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1602,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4053,
      "is_result": false
    },
    "draw": {
      "pred": 0.2774,
      "is_result": true
    },
    "away": {
      "pred": 0.3173,
      "is_result": false
    },
    "btts": {
      "pred": 0.4867,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3882,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.363,
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
      "pred": 0.6078,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3025,
      "is_result": false
    },
    "draw": {
      "pred": 0.2676,
      "is_result": true
    },
    "away": {
      "pred": 0.4299,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.6041,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "West Brom",
    "away_team": "Charlton",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.2513,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1037,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4573,
      "is_result": false
    },
    "draw": {
      "pred": 0.3325,
      "is_result": true
    },
    "away": {
      "pred": 0.2102,
      "is_result": false
    },
    "btts": {
      "pred": 0.3295,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.1986,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.2291,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "West Brom",
    "away_team": "Watford",
    "match_date": NaN,
    "score": "1-0",
    "over15": {
      "pred": 0.6065,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4197,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3917,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4737,
      "is_result": true
    },
    "draw": {
      "pred": 0.3059,
      "is_result": false
    },
    "away": {
      "pred": 0.2204,
      "is_result": false
    },
    "btts": {
      "pred": 0.5329,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3275,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3173,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "West Ham",
    "away_team": "Derby",
    "match_date": NaN,
    "score": "3-0",
    "over15": {
      "pred": 0.8372,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6363,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.402,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5713,
      "is_result": true
    },
    "draw": {
      "pred": 0.1931,
      "is_result": false
    },
    "away": {
      "pred": 0.2356,
      "is_result": false
    },
    "btts": {
      "pred": 0.653,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5154,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4571,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Championship",
    "home_team": "West Ham",
    "away_team": "Wolves",
    "match_date": NaN,
    "score": "4-2",
    "over25": {
      "pred": 0.8477,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5314,
      "is_result": true
    },
    "draw": {
      "pred": 0.1862,
      "is_result": false
    },
    "away": {
      "pred": 0.2824,
      "is_result": false
    },
    "btts": {
      "pred": 0.8088,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7572,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.8999,
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
      "pred": 0.6002,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5334,
      "is_result": true
    },
    "draw": {
      "pred": 0.2351,
      "is_result": false
    },
    "away": {
      "pred": 0.2315,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.6194,
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
      "pred": 0.6048,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4957,
      "is_result": false
    },
    "draw": {
      "pred": 0.2519,
      "is_result": false
    },
    "away": {
      "pred": 0.2523,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.5138,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "China Super League",
    "home_team": "Chongqing Tonglianglong",
    "away_team": "Shanghai Shenhua",
    "match_date": NaN,
    "score": "1-3",
    "over15": {
      "pred": 0.6724,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4873,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2807,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3822,
      "is_result": false
    },
    "draw": {
      "pred": 0.2421,
      "is_result": false
    },
    "away": {
      "pred": 0.3757,
      "is_result": true
    },
    "btts": {
      "pred": 0.4791,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3065,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "China Super League",
    "home_team": "Dalian Yingbo",
    "away_team": "Qingdao Hainiu",
    "match_date": NaN,
    "score": "2-1",
    "over15": {
      "pred": 0.6832,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5215,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2603,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4677,
      "is_result": true
    },
    "draw": {
      "pred": 0.2844,
      "is_result": false
    },
    "away": {
      "pred": 0.2479,
      "is_result": false
    },
    "btts": {
      "pred": 0.4742,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3164,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "China Super League",
    "home_team": "Henan Songshan Longmen",
    "away_team": "Chengdu Rongcheng",
    "match_date": NaN,
    "score": "0-0",
    "over15": {
      "pred": 0.7995,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6222,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3446,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3639,
      "is_result": false
    },
    "draw": {
      "pred": 0.2173,
      "is_result": true
    },
    "away": {
      "pred": 0.4188,
      "is_result": false
    },
    "btts": {
      "pred": 0.6114,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4804,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "China Super League",
    "home_team": "Shanghai Port",
    "away_team": "Beijing Guoan",
    "match_date": NaN,
    "score": "0-0",
    "over15": {
      "pred": 0.8797,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7013,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4896,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5389,
      "is_result": false
    },
    "draw": {
      "pred": 0.1837,
      "is_result": true
    },
    "away": {
      "pred": 0.2774,
      "is_result": false
    },
    "btts": {
      "pred": 0.6902,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6015,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "China Super League",
    "home_team": "Tianjin Jinmen Tiger",
    "away_team": "Zhejiang Professional",
    "match_date": NaN,
    "score": "2-1",
    "over15": {
      "pred": 0.7489,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.585,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1168,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4334,
      "is_result": true
    },
    "draw": {
      "pred": 0.2565,
      "is_result": false
    },
    "away": {
      "pred": 0.3101,
      "is_result": false
    },
    "btts": {
      "pred": 0.5135,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.412,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "China Super League",
    "home_team": "Wuhan Three Towns",
    "away_team": "Qingdao West Coast",
    "match_date": NaN,
    "score": "2-2",
    "over15": {
      "pred": 0.6801,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5171,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2664,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4443,
      "is_result": false
    },
    "draw": {
      "pred": 0.2902,
      "is_result": true
    },
    "away": {
      "pred": 0.2656,
      "is_result": false
    },
    "btts": {
      "pred": 0.4706,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3189,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "China Super League",
    "home_team": "Yunnan Yukun",
    "away_team": "Liaoning Tieren",
    "match_date": NaN,
    "score": "5-0",
    "over15": {
      "pred": 0.8353,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6508,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4025,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5696,
      "is_result": true
    },
    "draw": {
      "pred": 0.1893,
      "is_result": false
    },
    "away": {
      "pred": 0.2411,
      "is_result": false
    },
    "btts": {
      "pred": 0.653,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5172,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Denmark Superliga",
    "home_team": "Aarhus",
    "away_team": "Midtjylland",
    "match_date": NaN,
    "score": "0-2",
    "over25": {
      "pred": 0.6947,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3521,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3534,
      "is_result": false
    },
    "draw": {
      "pred": 0.2591,
      "is_result": false
    },
    "away": {
      "pred": 0.3875,
      "is_result": true
    },
    "btts": {
      "pred": 0.6107,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4906,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Denmark Superliga",
    "home_team": "Aarhus",
    "away_team": "Silkeborg",
    "match_date": NaN,
    "score": "2-2",
    "over15": {
      "pred": 0.7626,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6214,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.091,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5773,
      "is_result": false
    },
    "draw": {
      "pred": 0.2166,
      "is_result": true
    },
    "away": {
      "pred": 0.206,
      "is_result": false
    },
    "btts": {
      "pred": 0.4674,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3926,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Denmark Superliga",
    "home_team": "Brondby",
    "away_team": "Randers FC",
    "match_date": NaN,
    "score": "0-3",
    "over15": {
      "pred": 0.6464,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4526,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3332,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4856,
      "is_result": false
    },
    "draw": {
      "pred": 0.2948,
      "is_result": false
    },
    "away": {
      "pred": 0.2196,
      "is_result": true
    },
    "btts": {
      "pred": 0.5084,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.298,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Denmark Superliga",
    "home_team": "Odense",
    "away_team": "FC Copenhagen",
    "match_date": NaN,
    "score": "0-5",
    "over15": {
      "pred": 0.7744,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6005,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3041,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3561,
      "is_result": false
    },
    "draw": {
      "pred": 0.2583,
      "is_result": false
    },
    "away": {
      "pred": 0.3856,
      "is_result": true
    },
    "btts": {
      "pred": 0.5623,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4425,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Denmark Superliga",
    "home_team": "Sonderjyske",
    "away_team": "Horsens",
    "match_date": NaN,
    "score": "2-5",
    "over15": {
      "pred": 0.6903,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5032,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2558,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3986,
      "is_result": false
    },
    "draw": {
      "pred": 0.2949,
      "is_result": false
    },
    "away": {
      "pred": 0.3065,
      "is_result": true
    },
    "btts": {
      "pred": 0.4589,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3305,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Denmark Superliga",
    "home_team": "Viborg",
    "away_team": "Lyngby",
    "match_date": NaN,
    "score": "0-2",
    "over15": {
      "pred": 0.7618,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6159,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2885,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.498,
      "is_result": false
    },
    "draw": {
      "pred": 0.2623,
      "is_result": false
    },
    "away": {
      "pred": 0.2397,
      "is_result": true
    },
    "btts": {
      "pred": 0.5383,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4132,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "Ajax",
    "away_team": "PSV Eindhoven",
    "match_date": NaN,
    "score": "1-3",
    "over15": {
      "pred": 0.9286,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7897,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.6045,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4277,
      "is_result": false
    },
    "draw": {
      "pred": 0.1742,
      "is_result": false
    },
    "away": {
      "pred": 0.398,
      "is_result": true
    },
    "btts": {
      "pred": 0.7767,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7039,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4955,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "Den Haag",
    "away_team": "For Sittard",
    "match_date": "2026-09-06",
    "score": "2-3",
    "over15": {
      "pred": 0.7629,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4205,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3545,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3501,
      "is_result": false
    },
    "draw": {
      "pred": 0.3147,
      "is_result": false
    },
    "away": {
      "pred": 0.3352,
      "is_result": true
    },
    "btts": {
      "pred": 0.518,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3766,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.2998,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "Groningen",
    "away_team": "Twente",
    "match_date": "2026-09-06",
    "score": "2-2",
    "over15": {
      "pred": 0.7817,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6008,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3083,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4534,
      "is_result": false
    },
    "draw": {
      "pred": 0.2795,
      "is_result": true
    },
    "away": {
      "pred": 0.2671,
      "is_result": false
    },
    "btts": {
      "pred": 0.5696,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.492,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4186,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "Heerenveen",
    "away_team": "AZ Alkmaar",
    "match_date": "2026-09-06",
    "score": "2-3",
    "over15": {
      "pred": 0.7853,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5998,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3257,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3109,
      "is_result": false
    },
    "draw": {
      "pred": 0.2526,
      "is_result": false
    },
    "away": {
      "pred": 0.4365,
      "is_result": true
    },
    "btts": {
      "pred": 0.5628,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4289,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4523,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "Nijmegen",
    "away_team": "Feyenoord",
    "match_date": NaN,
    "score": "1-3",
    "over15": {
      "pred": 0.8898,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7098,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.5,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4404,
      "is_result": false
    },
    "draw": {
      "pred": 0.2048,
      "is_result": false
    },
    "away": {
      "pred": 0.3548,
      "is_result": true
    },
    "btts": {
      "pred": 0.7145,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6204,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4711,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "Telstar",
    "away_team": "Cambuur",
    "match_date": "2026-09-06",
    "score": "2-2",
    "over15": {
      "pred": 0.8772,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6746,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2765,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7395,
      "is_result": false
    },
    "draw": {
      "pred": 0.1572,
      "is_result": true
    },
    "away": {
      "pred": 0.1033,
      "is_result": false
    },
    "btts": {
      "pred": 0.5547,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4492,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.6798,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Eredivisie",
    "home_team": "Willem II",
    "away_team": "Excelsior",
    "match_date": NaN,
    "score": "0-3",
    "over15": {
      "pred": 0.754,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.614,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1236,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3961,
      "is_result": false
    },
    "draw": {
      "pred": 0.2815,
      "is_result": false
    },
    "away": {
      "pred": 0.3225,
      "is_result": true
    },
    "btts": {
      "pred": 0.526,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4097,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3513,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "Anderlecht",
    "away_team": "Genk",
    "match_date": "2026-09-06",
    "score": "0-0",
    "over15": {
      "pred": 0.7805,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6013,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2984,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4123,
      "is_result": false
    },
    "draw": {
      "pred": 0.2676,
      "is_result": true
    },
    "away": {
      "pred": 0.3201,
      "is_result": false
    },
    "btts": {
      "pred": 0.5756,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.546,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4289,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "Anderlecht",
    "away_team": "Kortrijk",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.6678,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2933,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5796,
      "is_result": true
    },
    "draw": {
      "pred": 0.2413,
      "is_result": false
    },
    "away": {
      "pred": 0.1791,
      "is_result": false
    },
    "btts": {
      "pred": 0.5092,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3941,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4477,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "Beveren",
    "away_team": "Oud-Heverlee Leuven",
    "match_date": "2026-09-06",
    "score": "3-0",
    "over15": {
      "pred": 0.4884,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3225,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0818,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3063,
      "is_result": true
    },
    "draw": {
      "pred": 0.2606,
      "is_result": false
    },
    "away": {
      "pred": 0.4331,
      "is_result": false
    },
    "btts": {
      "pred": 0.2742,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.254,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3943,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "Cercle Brugge",
    "away_team": "Gent",
    "match_date": "2026-09-06",
    "score": "0-3",
    "over15": {
      "pred": 0.78,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6015,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2959,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5325,
      "is_result": false
    },
    "draw": {
      "pred": 0.2281,
      "is_result": false
    },
    "away": {
      "pred": 0.2394,
      "is_result": true
    },
    "btts": {
      "pred": 0.5689,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5117,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4429,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "Charleroi",
    "away_team": "St. Gilloise",
    "match_date": NaN,
    "score": "2-3",
    "over15": {
      "pred": 0.6912,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.53,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2485,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4308,
      "is_result": false
    },
    "draw": {
      "pred": 0.1653,
      "is_result": false
    },
    "away": {
      "pred": 0.4039,
      "is_result": true
    },
    "btts": {
      "pred": 0.5025,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2862,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.324,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "Gent",
    "away_team": "Oud-Heverlee Leuven",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.5493,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2263,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3175,
      "is_result": true
    },
    "draw": {
      "pred": 0.2907,
      "is_result": false
    },
    "away": {
      "pred": 0.3919,
      "is_result": false
    },
    "btts": {
      "pred": 0.4999,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.362,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4188,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "Kortrijk",
    "away_team": "Waregem",
    "match_date": "2026-09-06",
    "score": "0-2",
    "over15": {
      "pred": 0.7906,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.507,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3501,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3191,
      "is_result": false
    },
    "draw": {
      "pred": 0.2761,
      "is_result": false
    },
    "away": {
      "pred": 0.4048,
      "is_result": true
    },
    "btts": {
      "pred": 0.5338,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4067,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4218,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "Mechelen",
    "away_team": "Westerlo",
    "match_date": NaN,
    "score": "0-4",
    "over15": {
      "pred": 0.7206,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5713,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1888,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4764,
      "is_result": false
    },
    "draw": {
      "pred": 0.2778,
      "is_result": false
    },
    "away": {
      "pred": 0.2458,
      "is_result": true
    },
    "btts": {
      "pred": 0.4491,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.358,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3652,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "St Truiden",
    "away_team": "RAAL La Louviere",
    "match_date": NaN,
    "score": "4-0",
    "over15": {
      "pred": 0.6751,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5076,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2793,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5601,
      "is_result": true
    },
    "draw": {
      "pred": 0.252,
      "is_result": false
    },
    "away": {
      "pred": 0.1879,
      "is_result": false
    },
    "btts": {
      "pred": 0.5055,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.285,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3293,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "St Truiden",
    "away_team": "St. Gilloise",
    "match_date": NaN,
    "score": "0-3",
    "over25": {
      "pred": 0.3901,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1625,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2245,
      "is_result": false
    },
    "draw": {
      "pred": 0.3036,
      "is_result": false
    },
    "away": {
      "pred": 0.4719,
      "is_result": true
    },
    "btts": {
      "pred": 0.4114,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2754,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3402,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Jupiler League",
    "home_team": "Standard",
    "away_team": "Antwerp",
    "match_date": NaN,
    "score": "1-0",
    "over15": {
      "pred": 0.7022,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5443,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2281,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4627,
      "is_result": true
    },
    "draw": {
      "pred": 0.2857,
      "is_result": false
    },
    "away": {
      "pred": 0.2517,
      "is_result": false
    },
    "btts": {
      "pred": 0.4594,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3379,
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
    "league": "La Liga",
    "home_team": "Alaves",
    "away_team": "Osasuna",
    "match_date": "2026-09-06",
    "score": "5-2",
    "over15": {
      "pred": 0.7792,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6286,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2869,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5158,
      "is_result": true
    },
    "draw": {
      "pred": 0.2254,
      "is_result": false
    },
    "away": {
      "pred": 0.2588,
      "is_result": false
    },
    "btts": {
      "pred": 0.5743,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5616,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3367,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Ath Bilbao",
    "away_team": "Ath Madrid",
    "match_date": NaN,
    "score": "3-0",
    "over15": {
      "pred": 0.7261,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5896,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1614,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3912,
      "is_result": true
    },
    "draw": {
      "pred": 0.1999,
      "is_result": false
    },
    "away": {
      "pred": 0.4088,
      "is_result": false
    },
    "btts": {
      "pred": 0.4445,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3747,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3452,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Barcelona",
    "away_team": "Vallecano",
    "match_date": NaN,
    "score": "5-2",
    "over25": {
      "pred": 0.7268,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.7092,
      "is_result": true
    },
    "draw": {
      "pred": 0.1597,
      "is_result": false
    },
    "away": {
      "pred": 0.1311,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.6309,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Betis",
    "away_team": "Real Madrid",
    "match_date": NaN,
    "score": "1-0",
    "over15": {
      "pred": 0.8178,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6427,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3786,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3017,
      "is_result": true
    },
    "draw": {
      "pred": 0.2341,
      "is_result": false
    },
    "away": {
      "pred": 0.4642,
      "is_result": false
    },
    "btts": {
      "pred": 0.6159,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5095,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.457,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Espanol",
    "away_team": "Sevilla",
    "match_date": "2026-09-06",
    "score": "1-1",
    "over15": {
      "pred": 0.7721,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4626,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3524,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4565,
      "is_result": false
    },
    "draw": {
      "pred": 0.3005,
      "is_result": true
    },
    "away": {
      "pred": 0.243,
      "is_result": false
    },
    "btts": {
      "pred": 0.5147,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3883,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3755,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Malaga",
    "away_team": "Levante",
    "match_date": "2026-09-06",
    "score": "0-0",
    "over15": {
      "pred": 0.7511,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4066,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3552,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3706,
      "is_result": false
    },
    "draw": {
      "pred": 0.3121,
      "is_result": true
    },
    "away": {
      "pred": 0.3173,
      "is_result": false
    },
    "btts": {
      "pred": 0.5101,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.366,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3955,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Osasuna",
    "away_team": "Getafe",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.2211,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4282,
      "is_result": true
    },
    "draw": {
      "pred": 0.3436,
      "is_result": false
    },
    "away": {
      "pred": 0.2283,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.18,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Sociedad",
    "away_team": "Celta",
    "match_date": NaN,
    "score": "0-0",
    "over25": {
      "pred": 0.6138,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2557,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5687,
      "is_result": false
    },
    "draw": {
      "pred": 0.2389,
      "is_result": true
    },
    "away": {
      "pred": 0.1924,
      "is_result": false
    },
    "btts": {
      "pred": 0.4735,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3605,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3903,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Valencia",
    "away_team": "Barcelona",
    "match_date": "2026-09-06",
    "score": "0-5",
    "over15": {
      "pred": 0.9243,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8556,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2541,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2986,
      "is_result": false
    },
    "draw": {
      "pred": 0.1142,
      "is_result": false
    },
    "away": {
      "pred": 0.5872,
      "is_result": true
    },
    "btts": {
      "pred": 0.6706,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6682,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4077,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Vallecano",
    "away_team": "Santander",
    "match_date": NaN,
    "score": "3-2",
    "over15": {
      "pred": 0.6074,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.429,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3804,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4218,
      "is_result": true
    },
    "draw": {
      "pred": 0.3038,
      "is_result": false
    },
    "away": {
      "pred": 0.2744,
      "is_result": false
    },
    "btts": {
      "pred": 0.5167,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3085,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3452,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga",
    "home_team": "Villarreal",
    "away_team": "La Coruna",
    "match_date": NaN,
    "score": "2-3",
    "over15": {
      "pred": 0.7491,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6203,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1061,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5908,
      "is_result": false
    },
    "draw": {
      "pred": 0.1979,
      "is_result": false
    },
    "away": {
      "pred": 0.2114,
      "is_result": true
    },
    "btts": {
      "pred": 0.4453,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3845,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.6576,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Almeria",
    "away_team": "Cadiz",
    "match_date": "2026-09-06",
    "score": "3-2",
    "over15": {
      "pred": 0.7817,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6012,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3011,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5861,
      "is_result": true
    },
    "draw": {
      "pred": 0.1923,
      "is_result": false
    },
    "away": {
      "pred": 0.2216,
      "is_result": false
    },
    "btts": {
      "pred": 0.5599,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.461,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4983,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Burgos",
    "away_team": "Sociedad B",
    "match_date": NaN,
    "score": "2-2",
    "over25": {
      "pred": 0.3552,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5012,
      "is_result": false
    },
    "draw": {
      "pred": 0.2835,
      "is_result": true
    },
    "away": {
      "pred": 0.2153,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3238,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Castellon",
    "away_team": "Albacete",
    "match_date": "2026-09-06",
    "score": "2-0",
    "over15": {
      "pred": 0.7947,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5788,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3461,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4454,
      "is_result": true
    },
    "draw": {
      "pred": 0.2874,
      "is_result": false
    },
    "away": {
      "pred": 0.2671,
      "is_result": false
    },
    "btts": {
      "pred": 0.5427,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.406,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3613,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Celta B",
    "away_team": "Castellon",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.7546,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.7354,
      "is_result": false
    },
    "draw": {
      "pred": 0.1474,
      "is_result": false
    },
    "away": {
      "pred": 0.1172,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.0096,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Ceuta",
    "away_team": "Celta B",
    "match_date": NaN,
    "score": "0-2",
    "over15": {
      "pred": 0.7443,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6189,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.116,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.409,
      "is_result": false
    },
    "draw": {
      "pred": 0.2395,
      "is_result": false
    },
    "away": {
      "pred": 0.3515,
      "is_result": true
    },
    "btts": {
      "pred": 0.5085,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4141,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.0766,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Eibar",
    "away_team": "Granada",
    "match_date": "2026-09-06",
    "score": "3-0",
    "over15": {
      "pred": 0.798,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5414,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3482,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3623,
      "is_result": true
    },
    "draw": {
      "pred": 0.2949,
      "is_result": false
    },
    "away": {
      "pred": 0.3427,
      "is_result": false
    },
    "btts": {
      "pred": 0.5402,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4063,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3639,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Eldense",
    "away_team": "Mallorca",
    "match_date": NaN,
    "score": "0-0",
    "over15": {
      "pred": 0.7208,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5828,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1716,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4464,
      "is_result": false
    },
    "draw": {
      "pred": 0.2529,
      "is_result": true
    },
    "away": {
      "pred": 0.3007,
      "is_result": false
    },
    "btts": {
      "pred": 0.4575,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3791,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3495,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Las Palmas",
    "away_team": "Leganes",
    "match_date": NaN,
    "score": "0-0",
    "over15": {
      "pred": 0.494,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.2325,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0874,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.448,
      "is_result": false
    },
    "draw": {
      "pred": 0.3335,
      "is_result": true
    },
    "away": {
      "pred": 0.2185,
      "is_result": false
    },
    "btts": {
      "pred": 0.2993,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.1768,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.2622,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Oviedo",
    "away_team": "Burgos",
    "match_date": "2026-09-06",
    "score": "0-0",
    "over15": {
      "pred": 0.7492,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4042,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3554,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.336,
      "is_result": false
    },
    "draw": {
      "pred": 0.2966,
      "is_result": true
    },
    "away": {
      "pred": 0.3674,
      "is_result": false
    },
    "btts": {
      "pred": 0.5088,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3633,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3139,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Sociedad B",
    "away_team": "Tenerife",
    "match_date": NaN,
    "score": "1-1",
    "over15": {
      "pred": 0.6387,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4691,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3303,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4914,
      "is_result": false
    },
    "draw": {
      "pred": 0.2786,
      "is_result": true
    },
    "away": {
      "pred": 0.23,
      "is_result": false
    },
    "btts": {
      "pred": 0.5121,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2948,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3426,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Sp Gijon",
    "away_team": "Girona",
    "match_date": NaN,
    "score": "0-2",
    "over15": {
      "pred": 0.7672,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6237,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3064,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4112,
      "is_result": false
    },
    "draw": {
      "pred": 0.2294,
      "is_result": false
    },
    "away": {
      "pred": 0.3593,
      "is_result": true
    },
    "btts": {
      "pred": 0.5537,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4472,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4109,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "La Liga 2",
    "home_team": "Valladolid",
    "away_team": "Andorra",
    "match_date": NaN,
    "score": "1-0",
    "over15": {
      "pred": 0.7094,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.566,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1967,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4076,
      "is_result": true
    },
    "draw": {
      "pred": 0.1815,
      "is_result": false
    },
    "away": {
      "pred": 0.4109,
      "is_result": false
    },
    "btts": {
      "pred": 0.466,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3434,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3175,
      "hit": true,
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
      "pred": 0.4308,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.185,
      "is_result": true
    },
    "draw": {
      "pred": 0.2719,
      "is_result": false
    },
    "away": {
      "pred": 0.5431,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.2145,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Barnsley",
    "away_team": "Blackpool",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.6401,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2682,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2952,
      "is_result": true
    },
    "draw": {
      "pred": 0.2549,
      "is_result": false
    },
    "away": {
      "pred": 0.45,
      "is_result": false
    },
    "btts": {
      "pred": 0.5238,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4026,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3941,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Barnsley",
    "away_team": "Stevenage",
    "match_date": NaN,
    "score": "1-5",
    "over15": {
      "pred": 0.6315,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4608,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3409,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4777,
      "is_result": false
    },
    "draw": {
      "pred": 0.2841,
      "is_result": false
    },
    "away": {
      "pred": 0.2381,
      "is_result": true
    },
    "btts": {
      "pred": 0.5135,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2975,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.342,
      "hit": false,
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
      "pred": 0.6013,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.6016,
      "is_result": true
    },
    "draw": {
      "pred": 0.2067,
      "is_result": false
    },
    "away": {
      "pred": 0.1917,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4219,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Bradford",
    "away_team": "Cambridge",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.3584,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5705,
      "is_result": false
    },
    "draw": {
      "pred": 0.2616,
      "is_result": false
    },
    "away": {
      "pred": 0.1679,
      "is_result": true
    },
    "btts": {
      "pred": 0.3697,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2563,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3535,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Bradford",
    "away_team": "Mansfield",
    "match_date": NaN,
    "score": "1-0",
    "over15": {
      "pred": 0.6379,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.469,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3305,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4508,
      "is_result": true
    },
    "draw": {
      "pred": 0.2888,
      "is_result": false
    },
    "away": {
      "pred": 0.2605,
      "is_result": false
    },
    "btts": {
      "pred": 0.501,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2853,
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
    "league": "League One",
    "home_team": "Bromley",
    "away_team": "Leyton Orient",
    "match_date": NaN,
    "score": "0-5",
    "over25": {
      "pred": 0.3152,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3444,
      "is_result": false
    },
    "draw": {
      "pred": 0.3074,
      "is_result": false
    },
    "away": {
      "pred": 0.3482,
      "is_result": true
    },
    "btts": {
      "pred": 0.3906,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2573,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3463,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Burton",
    "away_team": "AFC Wimbledon",
    "match_date": NaN,
    "score": "4-1",
    "over25": {
      "pred": 0.3096,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1287,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4681,
      "is_result": true
    },
    "draw": {
      "pred": 0.3012,
      "is_result": false
    },
    "away": {
      "pred": 0.2307,
      "is_result": false
    },
    "btts": {
      "pred": 0.3594,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2336,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3006,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Burton",
    "away_team": "Cambridge",
    "match_date": NaN,
    "score": "2-2",
    "over15": {
      "pred": 0.6383,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4695,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3298,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4293,
      "is_result": false
    },
    "draw": {
      "pred": 0.2904,
      "is_result": true
    },
    "away": {
      "pred": 0.2803,
      "is_result": false
    },
    "btts": {
      "pred": 0.497,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2819,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3719,
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
      "pred": 0.6013,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2772,
      "is_result": false
    },
    "draw": {
      "pred": 0.2443,
      "is_result": false
    },
    "away": {
      "pred": 0.4786,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3854,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Doncaster",
    "away_team": "Notts County",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.4518,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2554,
      "is_result": false
    },
    "draw": {
      "pred": 0.2576,
      "is_result": true
    },
    "away": {
      "pred": 0.4869,
      "is_result": false
    },
    "btts": {
      "pred": 0.4864,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3645,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.342,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Doncaster",
    "away_team": "Plymouth",
    "match_date": NaN,
    "score": "2-3",
    "over15": {
      "pred": 0.7412,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6149,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1222,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3888,
      "is_result": false
    },
    "draw": {
      "pred": 0.1943,
      "is_result": false
    },
    "away": {
      "pred": 0.4169,
      "is_result": true
    },
    "btts": {
      "pred": 0.4757,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3982,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3817,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Huddersfield",
    "away_team": "Notts County",
    "match_date": NaN,
    "score": "1-1",
    "over15": {
      "pred": 0.7388,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6112,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.128,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3963,
      "is_result": false
    },
    "draw": {
      "pred": 0.238,
      "is_result": true
    },
    "away": {
      "pred": 0.3657,
      "is_result": false
    },
    "btts": {
      "pred": 0.4978,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4072,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3385,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Huddersfield",
    "away_team": "Oxford",
    "match_date": NaN,
    "score": "3-1",
    "over25": {
      "pred": 0.6317,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.367,
      "is_result": true
    },
    "draw": {
      "pred": 0.2288,
      "is_result": false
    },
    "away": {
      "pred": 0.4043,
      "is_result": false
    },
    "btts": {
      "pred": 0.644,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5435,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4484,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Leicester",
    "away_team": "Oxford",
    "match_date": NaN,
    "score": "0-4",
    "over15": {
      "pred": 0.7975,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6296,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3492,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4913,
      "is_result": false
    },
    "draw": {
      "pred": 0.2168,
      "is_result": false
    },
    "away": {
      "pred": 0.2919,
      "is_result": true
    },
    "btts": {
      "pred": 0.6023,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4821,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.469,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Leicester",
    "away_team": "Plymouth",
    "match_date": NaN,
    "score": "2-0",
    "over25": {
      "pred": 0.503,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3676,
      "is_result": true
    },
    "draw": {
      "pred": 0.2553,
      "is_result": false
    },
    "away": {
      "pred": 0.3771,
      "is_result": false
    },
    "btts": {
      "pred": 0.5442,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4231,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.6851,
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
      "pred": 0.573,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5165,
      "is_result": false
    },
    "draw": {
      "pred": 0.2468,
      "is_result": false
    },
    "away": {
      "pred": 0.2368,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4198,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Luton",
    "away_team": "Leyton Orient",
    "match_date": NaN,
    "score": "1-1",
    "over15": {
      "pred": 0.7549,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6216,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2916,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5081,
      "is_result": false
    },
    "draw": {
      "pred": 0.2279,
      "is_result": true
    },
    "away": {
      "pred": 0.2639,
      "is_result": false
    },
    "btts": {
      "pred": 0.4995,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4161,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4744,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Luton",
    "away_team": "Stockport",
    "match_date": NaN,
    "score": "2-0",
    "over25": {
      "pred": 0.6993,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3624,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3804,
      "is_result": true
    },
    "draw": {
      "pred": 0.2378,
      "is_result": false
    },
    "away": {
      "pred": 0.3818,
      "is_result": false
    },
    "btts": {
      "pred": 0.6094,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5006,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.6909,
      "hit": false,
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
      "pred": 0.6013,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3589,
      "is_result": true
    },
    "draw": {
      "pred": 0.2502,
      "is_result": false
    },
    "away": {
      "pred": 0.3909,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4466,
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
      "pred": 0.4428,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3941,
      "is_result": false
    },
    "draw": {
      "pred": 0.2922,
      "is_result": true
    },
    "away": {
      "pred": 0.3137,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.6118,
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
      "pred": 0.5269,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5755,
      "is_result": true
    },
    "draw": {
      "pred": 0.2425,
      "is_result": false
    },
    "away": {
      "pred": 0.182,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3569,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Peterboro",
    "away_team": "Sheffield Wed",
    "match_date": NaN,
    "score": "1-2",
    "over15": {
      "pred": 0.8623,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6773,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4612,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.381,
      "is_result": false
    },
    "draw": {
      "pred": 0.1593,
      "is_result": false
    },
    "away": {
      "pred": 0.4597,
      "is_result": true
    },
    "btts": {
      "pred": 0.6703,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.58,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4329,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Peterboro",
    "away_team": "Stevenage",
    "match_date": NaN,
    "score": "0-0",
    "over25": {
      "pred": 0.4186,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5022,
      "is_result": false
    },
    "draw": {
      "pred": 0.2627,
      "is_result": true
    },
    "away": {
      "pred": 0.2352,
      "is_result": false
    },
    "btts": {
      "pred": 0.4533,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3308,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.225,
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
      "pred": 0.4866,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4431,
      "is_result": true
    },
    "draw": {
      "pred": 0.2765,
      "is_result": false
    },
    "away": {
      "pred": 0.2805,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3396,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Reading",
    "away_team": "Blackpool",
    "match_date": NaN,
    "score": "3-1",
    "over15": {
      "pred": 0.7037,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5586,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2074,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3932,
      "is_result": true
    },
    "draw": {
      "pred": 0.2652,
      "is_result": false
    },
    "away": {
      "pred": 0.3416,
      "is_result": false
    },
    "btts": {
      "pred": 0.4492,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3607,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3374,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Reading",
    "away_team": "Mansfield",
    "match_date": NaN,
    "score": "5-0",
    "over25": {
      "pred": 0.6464,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2712,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4553,
      "is_result": true
    },
    "draw": {
      "pred": 0.2536,
      "is_result": false
    },
    "away": {
      "pred": 0.2912,
      "is_result": false
    },
    "btts": {
      "pred": 0.5255,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.405,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.381,
      "hit": false,
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
      "pred": 0.6013,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.6211,
      "is_result": true
    },
    "draw": {
      "pred": 0.2097,
      "is_result": false
    },
    "away": {
      "pred": 0.1692,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.541,
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
      "pred": 0.4134,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4511,
      "is_result": false
    },
    "draw": {
      "pred": 0.2958,
      "is_result": true
    },
    "away": {
      "pred": 0.2531,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.1832,
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
      "pred": 0.5995,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4936,
      "is_result": true
    },
    "draw": {
      "pred": 0.2456,
      "is_result": false
    },
    "away": {
      "pred": 0.2609,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4228,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Wigan",
    "away_team": "Milton Keynes Dons",
    "match_date": NaN,
    "score": "3-1",
    "over25": {
      "pred": 0.3147,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.131,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.335,
      "is_result": true
    },
    "draw": {
      "pred": 0.3109,
      "is_result": false
    },
    "away": {
      "pred": 0.3541,
      "is_result": false
    },
    "btts": {
      "pred": 0.3818,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2486,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.449,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Wigan",
    "away_team": "Stockport",
    "match_date": NaN,
    "score": "0-4",
    "over15": {
      "pred": 0.6807,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.526,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.254,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3557,
      "is_result": false
    },
    "draw": {
      "pred": 0.2649,
      "is_result": false
    },
    "away": {
      "pred": 0.3795,
      "is_result": true
    },
    "btts": {
      "pred": 0.4672,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3302,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3588,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Wycombe",
    "away_team": "Milton Keynes Dons",
    "match_date": NaN,
    "score": "3-3",
    "over15": {
      "pred": 0.6975,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5497,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2204,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4729,
      "is_result": false
    },
    "draw": {
      "pred": 0.2582,
      "is_result": true
    },
    "away": {
      "pred": 0.2689,
      "is_result": false
    },
    "btts": {
      "pred": 0.4609,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3447,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4232,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League One",
    "home_team": "Wycombe",
    "away_team": "Sheffield Wed",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.6024,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.368,
      "is_result": false
    },
    "draw": {
      "pred": 0.2345,
      "is_result": false
    },
    "away": {
      "pred": 0.3974,
      "is_result": true
    },
    "btts": {
      "pred": 0.6215,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5155,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4702,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Accrington",
    "away_team": "Crawley Town",
    "match_date": NaN,
    "score": "3-2",
    "over15": {
      "pred": 0.715,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5752,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.183,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5069,
      "is_result": true
    },
    "draw": {
      "pred": 0.2412,
      "is_result": false
    },
    "away": {
      "pred": 0.2519,
      "is_result": false
    },
    "btts": {
      "pred": 0.4552,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3591,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3697,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Accrington",
    "away_team": "Grimsby",
    "match_date": NaN,
    "score": "2-2",
    "over25": {
      "pred": 0.4807,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3698,
      "is_result": false
    },
    "draw": {
      "pred": 0.2594,
      "is_result": true
    },
    "away": {
      "pred": 0.3709,
      "is_result": false
    },
    "btts": {
      "pred": 0.5261,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4029,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.5102,
      "hit": true,
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
      "pred": 0.629,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5757,
      "is_result": false
    },
    "draw": {
      "pred": 0.2188,
      "is_result": true
    },
    "away": {
      "pred": 0.2054,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4986,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Bristol Rvs",
    "away_team": "Colchester",
    "match_date": NaN,
    "score": "2-0",
    "over25": {
      "pred": 0.5432,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4639,
      "is_result": true
    },
    "draw": {
      "pred": 0.2408,
      "is_result": false
    },
    "away": {
      "pred": 0.2953,
      "is_result": false
    },
    "btts": {
      "pred": 0.5667,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4536,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3391,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Bristol Rvs",
    "away_team": "Rotherham",
    "match_date": NaN,
    "score": "1-0",
    "over15": {
      "pred": 0.8623,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6773,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4612,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5502,
      "is_result": true
    },
    "draw": {
      "pred": 0.1757,
      "is_result": false
    },
    "away": {
      "pred": 0.274,
      "is_result": false
    },
    "btts": {
      "pred": 0.6658,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5763,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4685,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Cheltenham",
    "away_team": "Grimsby",
    "match_date": NaN,
    "score": "2-2",
    "over15": {
      "pred": 0.6922,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5422,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2311,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3621,
      "is_result": false
    },
    "draw": {
      "pred": 0.2627,
      "is_result": true
    },
    "away": {
      "pred": 0.3752,
      "is_result": false
    },
    "btts": {
      "pred": 0.4586,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3449,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3616,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Cheltenham",
    "away_team": "York",
    "match_date": NaN,
    "score": "3-2",
    "over25": {
      "pred": 0.5421,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3189,
      "is_result": true
    },
    "draw": {
      "pred": 0.2435,
      "is_result": false
    },
    "away": {
      "pred": 0.4376,
      "is_result": false
    },
    "btts": {
      "pred": 0.5702,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4559,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.5455,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Chesterfield",
    "away_team": "Barnet",
    "match_date": NaN,
    "score": "3-3",
    "over15": {
      "pred": 0.7555,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6217,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2923,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4488,
      "is_result": false
    },
    "draw": {
      "pred": 0.2355,
      "is_result": true
    },
    "away": {
      "pred": 0.3156,
      "is_result": false
    },
    "btts": {
      "pred": 0.5256,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4287,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4089,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Chesterfield",
    "away_team": "Gillingham",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.4764,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5755,
      "is_result": false
    },
    "draw": {
      "pred": 0.2336,
      "is_result": true
    },
    "away": {
      "pred": 0.1909,
      "is_result": false
    },
    "btts": {
      "pred": 0.4734,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3629,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.41,
      "hit": true,
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
      "pred": 0.5046,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5456,
      "is_result": true
    },
    "draw": {
      "pred": 0.259,
      "is_result": false
    },
    "away": {
      "pred": 0.1954,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4719,
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
      "pred": 0.628,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2731,
      "is_result": false
    },
    "draw": {
      "pred": 0.2361,
      "is_result": false
    },
    "away": {
      "pred": 0.4907,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.2904,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Crewe",
    "away_team": "Walsall",
    "match_date": NaN,
    "score": "2-2",
    "over25": {
      "pred": 0.4451,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.259,
      "is_result": false
    },
    "draw": {
      "pred": 0.2589,
      "is_result": true
    },
    "away": {
      "pred": 0.4821,
      "is_result": false
    },
    "btts": {
      "pred": 0.4817,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3594,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.269,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Crewe",
    "away_team": "York",
    "match_date": NaN,
    "score": "1-1",
    "over15": {
      "pred": 0.795,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6291,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3455,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3713,
      "is_result": false
    },
    "draw": {
      "pred": 0.2067,
      "is_result": true
    },
    "away": {
      "pred": 0.422,
      "is_result": false
    },
    "btts": {
      "pred": 0.6056,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4822,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4682,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Exeter",
    "away_team": "Barnet",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.4236,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3742,
      "is_result": false
    },
    "draw": {
      "pred": 0.2733,
      "is_result": true
    },
    "away": {
      "pred": 0.3524,
      "is_result": false
    },
    "btts": {
      "pred": 0.4803,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3517,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.5684,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Exeter",
    "away_team": "Walsall",
    "match_date": NaN,
    "score": "0-0",
    "over15": {
      "pred": 0.6951,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5463,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2252,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3765,
      "is_result": false
    },
    "draw": {
      "pred": 0.2649,
      "is_result": true
    },
    "away": {
      "pred": 0.3586,
      "is_result": false
    },
    "btts": {
      "pred": 0.4556,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3495,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3172,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Fleetwood Town",
    "away_team": "Oldham",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.2817,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3675,
      "is_result": false
    },
    "draw": {
      "pred": 0.3182,
      "is_result": true
    },
    "away": {
      "pred": 0.3143,
      "is_result": false
    },
    "btts": {
      "pred": 0.3597,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2281,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.266,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Fleetwood Town",
    "away_team": "Shrewsbury",
    "match_date": NaN,
    "score": "2-0",
    "over15": {
      "pred": 0.6937,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5442,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2283,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5581,
      "is_result": true
    },
    "draw": {
      "pred": 0.2252,
      "is_result": false
    },
    "away": {
      "pred": 0.2167,
      "is_result": false
    },
    "btts": {
      "pred": 0.4827,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3185,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3248,
      "hit": true,
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
      "pred": 0.3875,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4825,
      "is_result": false
    },
    "draw": {
      "pred": 0.3076,
      "is_result": true
    },
    "away": {
      "pred": 0.2099,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3395,
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
      "pred": 0.6219,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5005,
      "is_result": false
    },
    "draw": {
      "pred": 0.2435,
      "is_result": true
    },
    "away": {
      "pred": 0.256,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3948,
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
      "pred": 0.5897,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4014,
      "is_result": false
    },
    "draw": {
      "pred": 0.263,
      "is_result": true
    },
    "away": {
      "pred": 0.3356,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.39,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Northampton",
    "away_team": "Crawley Town",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.3183,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2955,
      "is_result": false
    },
    "draw": {
      "pred": 0.303,
      "is_result": true
    },
    "away": {
      "pred": 0.4015,
      "is_result": false
    },
    "btts": {
      "pred": 0.3889,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2575,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4115,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Northampton",
    "away_team": "Newport County",
    "match_date": NaN,
    "score": "1-0",
    "over15": {
      "pred": 0.5522,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3895,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1177,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3809,
      "is_result": true
    },
    "draw": {
      "pred": 0.2715,
      "is_result": false
    },
    "away": {
      "pred": 0.3476,
      "is_result": false
    },
    "btts": {
      "pred": 0.5537,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3507,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3586,
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
      "pred": 0.5217,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.548,
      "is_result": true
    },
    "draw": {
      "pred": 0.2551,
      "is_result": false
    },
    "away": {
      "pred": 0.1969,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.339,
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
      "pred": 0.5489,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4256,
      "is_result": false
    },
    "draw": {
      "pred": 0.2696,
      "is_result": true
    },
    "away": {
      "pred": 0.3048,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3141,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Rochdale",
    "away_team": "Gillingham",
    "match_date": NaN,
    "score": "1-4",
    "over15": {
      "pred": 0.5683,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3953,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1273,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4022,
      "is_result": false
    },
    "draw": {
      "pred": 0.3114,
      "is_result": false
    },
    "away": {
      "pred": 0.2864,
      "is_result": true
    },
    "btts": {
      "pred": 0.5398,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.336,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3701,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Rochdale",
    "away_team": "Shrewsbury",
    "match_date": NaN,
    "score": "3-0",
    "over25": {
      "pred": 0.2629,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3138,
      "is_result": true
    },
    "draw": {
      "pred": 0.3261,
      "is_result": false
    },
    "away": {
      "pred": 0.36,
      "is_result": false
    },
    "btts": {
      "pred": 0.343,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2123,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3325,
      "hit": false,
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
      "pred": 0.5645,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3944,
      "is_result": true
    },
    "draw": {
      "pred": 0.2683,
      "is_result": false
    },
    "away": {
      "pred": 0.3373,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5088,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Salford",
    "away_team": "Newport County",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.25,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4038,
      "is_result": true
    },
    "draw": {
      "pred": 0.3285,
      "is_result": false
    },
    "away": {
      "pred": 0.2677,
      "is_result": false
    },
    "btts": {
      "pred": 0.3257,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.1983,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.2631,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Salford",
    "away_team": "Port Vale",
    "match_date": NaN,
    "score": "1-0",
    "over15": {
      "pred": 0.5162,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3773,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0984,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.392,
      "is_result": true
    },
    "draw": {
      "pred": 0.3294,
      "is_result": false
    },
    "away": {
      "pred": 0.2785,
      "is_result": false
    },
    "btts": {
      "pred": 0.334,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3722,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3378,
      "hit": true,
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
      "pred": 0.4568,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2911,
      "is_result": true
    },
    "draw": {
      "pred": 0.2911,
      "is_result": false
    },
    "away": {
      "pred": 0.4179,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.2887,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Swindon",
    "away_team": "Colchester",
    "match_date": NaN,
    "score": "3-1",
    "over15": {
      "pred": 0.6205,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4471,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3583,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3886,
      "is_result": true
    },
    "draw": {
      "pred": 0.2913,
      "is_result": false
    },
    "away": {
      "pred": 0.3202,
      "is_result": false
    },
    "btts": {
      "pred": 0.506,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2947,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3165,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Swindon",
    "away_team": "Port Vale",
    "match_date": NaN,
    "score": "3-1",
    "over25": {
      "pred": 0.3056,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3431,
      "is_result": true
    },
    "draw": {
      "pred": 0.3097,
      "is_result": false
    },
    "away": {
      "pred": 0.3472,
      "is_result": false
    },
    "btts": {
      "pred": 0.3817,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2491,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3321,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Tranmere",
    "away_team": "Oldham",
    "match_date": NaN,
    "score": "2-0",
    "over15": {
      "pred": 0.5376,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3845,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1096,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3569,
      "is_result": true
    },
    "draw": {
      "pred": 0.3138,
      "is_result": false
    },
    "away": {
      "pred": 0.3292,
      "is_result": false
    },
    "btts": {
      "pred": 0.3517,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3575,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.33,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "League Two",
    "home_team": "Tranmere",
    "away_team": "Rotherham",
    "match_date": NaN,
    "score": "2-2",
    "over25": {
      "pred": 0.4078,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3448,
      "is_result": false
    },
    "draw": {
      "pred": 0.2774,
      "is_result": true
    },
    "away": {
      "pred": 0.3777,
      "is_result": false
    },
    "btts": {
      "pred": 0.4673,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3375,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4738,
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
      "pred": 0.5883,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.487,
      "is_result": true
    },
    "draw": {
      "pred": 0.2546,
      "is_result": false
    },
    "away": {
      "pred": 0.2584,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3546,
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
      "pred": 0.5671,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4513,
      "is_result": true
    },
    "draw": {
      "pred": 0.2634,
      "is_result": false
    },
    "away": {
      "pred": 0.2854,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5353,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Alverca",
    "away_team": "Sp Braga",
    "match_date": NaN,
    "score": "1-2",
    "over15": {
      "pred": 0.8236,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6355,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3956,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4698,
      "is_result": false
    },
    "draw": {
      "pred": 0.1943,
      "is_result": false
    },
    "away": {
      "pred": 0.3359,
      "is_result": true
    },
    "btts": {
      "pred": 0.6287,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5288,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3439,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Benfica",
    "away_team": "Estoril",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.7231,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.7824,
      "is_result": true
    },
    "draw": {
      "pred": 0.1283,
      "is_result": false
    },
    "away": {
      "pred": 0.0893,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.7229,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Estrela",
    "away_team": "Famalicao",
    "match_date": NaN,
    "score": "2-2",
    "over15": {
      "pred": 0.5443,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3882,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1156,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3717,
      "is_result": false
    },
    "draw": {
      "pred": 0.3053,
      "is_result": true
    },
    "away": {
      "pred": 0.3231,
      "is_result": false
    },
    "btts": {
      "pred": 0.554,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3497,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3418,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Gil Vicente",
    "away_team": "Academico Viseu",
    "match_date": "2026-09-06",
    "score": "0-1",
    "over15": {
      "pred": 0.7913,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5988,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3424,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3549,
      "is_result": false
    },
    "draw": {
      "pred": 0.2578,
      "is_result": false
    },
    "away": {
      "pred": 0.3873,
      "is_result": true
    },
    "btts": {
      "pred": 0.5532,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4053,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4093,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Maritimo",
    "away_team": "Benfica",
    "match_date": NaN,
    "score": "0-3",
    "over15": {
      "pred": 0.891,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7338,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.5299,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.393,
      "is_result": false
    },
    "draw": {
      "pred": 0.1289,
      "is_result": false
    },
    "away": {
      "pred": 0.4781,
      "is_result": true
    },
    "btts": {
      "pred": 0.7075,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6327,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.6799,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Porto",
    "away_team": "Moreirense",
    "match_date": NaN,
    "score": "2-1",
    "over15": {
      "pred": 0.6887,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5263,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2216,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7322,
      "is_result": true
    },
    "draw": {
      "pred": 0.1856,
      "is_result": false
    },
    "away": {
      "pred": 0.0822,
      "is_result": false
    },
    "btts": {
      "pred": 0.3142,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2361,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3621,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Santa Clara",
    "away_team": "Rio Ave",
    "match_date": "2026-09-06",
    "score": "4-0",
    "over15": {
      "pred": 0.7316,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3806,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3571,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4577,
      "is_result": true
    },
    "draw": {
      "pred": 0.3036,
      "is_result": false
    },
    "away": {
      "pred": 0.2387,
      "is_result": false
    },
    "btts": {
      "pred": 0.4883,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3201,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3859,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Liga I",
    "home_team": "Sp Lisbon",
    "away_team": "Nacional",
    "match_date": NaN,
    "score": "2-0",
    "over15": {
      "pred": 0.819,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6342,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3851,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7907,
      "is_result": true
    },
    "draw": {
      "pred": 0.1365,
      "is_result": false
    },
    "away": {
      "pred": 0.0728,
      "is_result": false
    },
    "btts": {
      "pred": 0.5062,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3439,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4078,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Amedspor",
    "away_team": "Trabzonspor",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.7726,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.0636,
      "is_result": true
    },
    "draw": {
      "pred": 0.1238,
      "is_result": false
    },
    "away": {
      "pred": 0.8126,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5632,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Besiktas",
    "away_team": "Corum",
    "match_date": NaN,
    "score": "6-2",
    "over25": {
      "pred": 0.4258,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2988,
      "is_result": true
    },
    "draw": {
      "pred": 0.3084,
      "is_result": false
    },
    "away": {
      "pred": 0.3928,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.1218,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Buyuksehyr",
    "away_team": "Galatasaray",
    "match_date": NaN,
    "score": "2-3",
    "over15": {
      "pred": 0.8992,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.724,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.5175,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3637,
      "is_result": false
    },
    "draw": {
      "pred": 0.2347,
      "is_result": false
    },
    "away": {
      "pred": 0.4015,
      "is_result": true
    },
    "btts": {
      "pred": 0.7276,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6349,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4413,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Corum",
    "away_team": "Eyupspor",
    "match_date": "2026-09-06",
    "score": "3-0",
    "over15": {
      "pred": 0.7802,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4655,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3523,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4447,
      "is_result": true
    },
    "draw": {
      "pred": 0.3121,
      "is_result": false
    },
    "away": {
      "pred": 0.2432,
      "is_result": false
    },
    "btts": {
      "pred": 0.5202,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3903,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.2359,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Erzurumspor",
    "away_team": "Konyaspor",
    "match_date": NaN,
    "score": "1-0",
    "over15": {
      "pred": 0.5333,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3785,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1002,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.1058,
      "is_result": true
    },
    "draw": {
      "pred": 0.3111,
      "is_result": false
    },
    "away": {
      "pred": 0.5831,
      "is_result": false
    },
    "btts": {
      "pred": 0.2654,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.1555,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3619,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Fenerbahce",
    "away_team": "Besiktas",
    "match_date": NaN,
    "score": "1-2",
    "over15": {
      "pred": 0.9317,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.799,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.6168,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.8406,
      "is_result": false
    },
    "draw": {
      "pred": 0.1075,
      "is_result": false
    },
    "away": {
      "pred": 0.0519,
      "is_result": true
    },
    "btts": {
      "pred": 0.5505,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5178,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.66,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Kasimpasa",
    "away_team": "Amedspor",
    "match_date": "2026-09-06",
    "score": "2-2",
    "over15": {
      "pred": 0.7888,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5988,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3428,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4268,
      "is_result": false
    },
    "draw": {
      "pred": 0.3102,
      "is_result": true
    },
    "away": {
      "pred": 0.263,
      "is_result": false
    },
    "btts": {
      "pred": 0.5546,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4055,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3905,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Kocaelispor",
    "away_team": "Samsunspor",
    "match_date": "2026-09-06",
    "score": "1-0",
    "over15": {
      "pred": 0.7163,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3453,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0999,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3498,
      "is_result": true
    },
    "draw": {
      "pred": 0.3165,
      "is_result": false
    },
    "away": {
      "pred": 0.3337,
      "is_result": false
    },
    "btts": {
      "pred": 0.4907,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2988,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.2723,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligi 1",
    "home_team": "Trabzonspor",
    "away_team": "Genclerbirligi",
    "match_date": "2026-09-06",
    "score": "5-0",
    "over15": {
      "pred": 0.7905,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4965,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3507,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4872,
      "is_result": true
    },
    "draw": {
      "pred": 0.2921,
      "is_result": false
    },
    "away": {
      "pred": 0.2207,
      "is_result": false
    },
    "btts": {
      "pred": 0.5211,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3996,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4047,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Angers",
    "away_team": "Rennes",
    "match_date": "2026-09-06",
    "score": "1-2",
    "over15": {
      "pred": 0.7713,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.451,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.353,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3322,
      "is_result": false
    },
    "draw": {
      "pred": 0.2923,
      "is_result": false
    },
    "away": {
      "pred": 0.3755,
      "is_result": true
    },
    "btts": {
      "pred": 0.5225,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.396,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3578,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Le Havre",
    "away_team": "Brest",
    "match_date": NaN,
    "score": "1-2",
    "over15": {
      "pred": 0.7433,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6058,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1364,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3687,
      "is_result": false
    },
    "draw": {
      "pred": 0.2441,
      "is_result": false
    },
    "away": {
      "pred": 0.3872,
      "is_result": true
    },
    "btts": {
      "pred": 0.4938,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3968,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3567,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Lens",
    "away_team": "Lorient",
    "match_date": NaN,
    "score": "0-1",
    "over15": {
      "pred": 0.8499,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6393,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4269,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7601,
      "is_result": false
    },
    "draw": {
      "pred": 0.1172,
      "is_result": false
    },
    "away": {
      "pred": 0.1227,
      "is_result": true
    },
    "btts": {
      "pred": 0.5138,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.462,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3503,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Lyon",
    "away_team": "Auxerre",
    "match_date": NaN,
    "score": "3-1",
    "over15": {
      "pred": 0.7048,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5348,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2271,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3786,
      "is_result": true
    },
    "draw": {
      "pred": 0.2888,
      "is_result": false
    },
    "away": {
      "pred": 0.3326,
      "is_result": false
    },
    "btts": {
      "pred": 0.5008,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3637,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3109,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Marseille",
    "away_team": "Paris FC",
    "match_date": "2026-09-06",
    "score": "2-3",
    "over15": {
      "pred": 0.9578,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.9782,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.7171,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4334,
      "is_result": false
    },
    "draw": {
      "pred": 0.1972,
      "is_result": false
    },
    "away": {
      "pred": 0.3694,
      "is_result": true
    },
    "btts": {
      "pred": 0.8337,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.786,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3605,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Nice",
    "away_team": "Le Mans",
    "match_date": NaN,
    "score": "1-1",
    "over15": {
      "pred": 0.5309,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3793,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1015,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3863,
      "is_result": false
    },
    "draw": {
      "pred": 0.3435,
      "is_result": true
    },
    "away": {
      "pred": 0.2701,
      "is_result": false
    },
    "btts": {
      "pred": 0.3476,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3681,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4835,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Toulouse",
    "away_team": "Lille",
    "match_date": NaN,
    "score": "0-1",
    "over25": {
      "pred": 0.5386,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2216,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3367,
      "is_result": false
    },
    "draw": {
      "pred": 0.2921,
      "is_result": false
    },
    "away": {
      "pred": 0.3713,
      "is_result": true
    },
    "btts": {
      "pred": 0.4961,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3578,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4131,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 1",
    "home_team": "Troyes",
    "away_team": "Strasbourg",
    "match_date": "2026-09-06",
    "score": "2-6",
    "over15": {
      "pred": 0.3973,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.2747,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0483,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3789,
      "is_result": false
    },
    "draw": {
      "pred": 0.3492,
      "is_result": false
    },
    "away": {
      "pred": 0.2719,
      "is_result": true
    },
    "btts": {
      "pred": 0.244,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.1211,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.2836,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Boulogne",
    "away_team": "Dijon",
    "match_date": NaN,
    "score": "1-1",
    "over15": {
      "pred": 0.6011,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.399,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1466,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3613,
      "is_result": false
    },
    "draw": {
      "pred": 0.3095,
      "is_result": true
    },
    "away": {
      "pred": 0.3292,
      "is_result": false
    },
    "btts": {
      "pred": 0.4056,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2688,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.095,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Dijon",
    "away_team": "St Etienne",
    "match_date": NaN,
    "score": "2-3",
    "over25": {
      "pred": 0.423,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.211,
      "is_result": false
    },
    "draw": {
      "pred": 0.2607,
      "is_result": false
    },
    "away": {
      "pred": 0.5283,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.0155,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Dunkerque",
    "away_team": "Clermont",
    "match_date": NaN,
    "score": "1-1",
    "over15": {
      "pred": 0.6353,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4436,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1715,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4836,
      "is_result": false
    },
    "draw": {
      "pred": 0.2857,
      "is_result": true
    },
    "away": {
      "pred": 0.2307,
      "is_result": false
    },
    "btts": {
      "pred": 0.4143,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2856,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.2459,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Grenoble",
    "away_team": "Annecy",
    "match_date": NaN,
    "score": "1-2",
    "over15": {
      "pred": 0.5825,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3105,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1344,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2648,
      "is_result": false
    },
    "draw": {
      "pred": 0.311,
      "is_result": false
    },
    "away": {
      "pred": 0.4241,
      "is_result": true
    },
    "btts": {
      "pred": 0.3813,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2478,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.276,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Laval",
    "away_team": "Red Star",
    "match_date": NaN,
    "score": "1-2",
    "over15": {
      "pred": 0.674,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4976,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2036,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.341,
      "is_result": false
    },
    "draw": {
      "pred": 0.2855,
      "is_result": false
    },
    "away": {
      "pred": 0.3735,
      "is_result": true
    },
    "btts": {
      "pred": 0.4713,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3375,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3657,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Metz",
    "away_team": "Rodez",
    "match_date": NaN,
    "score": "4-1",
    "over15": {
      "pred": 0.7174,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.575,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1833,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.481,
      "is_result": true
    },
    "draw": {
      "pred": 0.2557,
      "is_result": false
    },
    "away": {
      "pred": 0.2633,
      "is_result": false
    },
    "btts": {
      "pred": 0.4483,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3647,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.339,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "Reims",
    "away_team": "Guingamp",
    "match_date": NaN,
    "score": "2-2",
    "over15": {
      "pred": 0.7642,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6228,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3002,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5502,
      "is_result": false
    },
    "draw": {
      "pred": 0.2137,
      "is_result": true
    },
    "away": {
      "pred": 0.2361,
      "is_result": false
    },
    "btts": {
      "pred": 0.498,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4169,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3813,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Ligue 2",
    "home_team": "St Etienne",
    "away_team": "Montpellier",
    "match_date": NaN,
    "score": "3-1",
    "over15": {
      "pred": 0.7927,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6282,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3389,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.48,
      "is_result": true
    },
    "draw": {
      "pred": 0.227,
      "is_result": false
    },
    "away": {
      "pred": 0.293,
      "is_result": false
    },
    "btts": {
      "pred": 0.5938,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4733,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4179,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Mexico Liga MX",
    "home_team": "Atl. San Luis",
    "away_team": "Guadalajara Chivas",
    "match_date": NaN,
    "score": "0-3",
    "over15": {
      "pred": 0.7983,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6181,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3368,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4281,
      "is_result": false
    },
    "draw": {
      "pred": 0.2472,
      "is_result": false
    },
    "away": {
      "pred": 0.3247,
      "is_result": true
    },
    "btts": {
      "pred": 0.614,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4755,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Mexico Liga MX",
    "home_team": "Atlas",
    "away_team": "Atlante",
    "match_date": NaN,
    "score": "1-1",
    "over15": {
      "pred": 0.5757,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3921,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1251,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3723,
      "is_result": false
    },
    "draw": {
      "pred": 0.3303,
      "is_result": true
    },
    "away": {
      "pred": 0.2974,
      "is_result": false
    },
    "btts": {
      "pred": 0.533,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.338,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Mexico Liga MX",
    "home_team": "Juarez",
    "away_team": "Pachuca",
    "match_date": NaN,
    "score": "0-2",
    "over15": {
      "pred": 0.6574,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.48,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3161,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3584,
      "is_result": false
    },
    "draw": {
      "pred": 0.2989,
      "is_result": false
    },
    "away": {
      "pred": 0.3427,
      "is_result": true
    },
    "btts": {
      "pred": 0.4814,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2917,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Mexico Liga MX",
    "home_team": "Tigres UANL",
    "away_team": "Necaxa",
    "match_date": NaN,
    "score": "1-1",
    "over15": {
      "pred": 0.806,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6244,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3491,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.592,
      "is_result": false
    },
    "draw": {
      "pred": 0.1975,
      "is_result": true
    },
    "away": {
      "pred": 0.2105,
      "is_result": false
    },
    "btts": {
      "pred": 0.5597,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4596,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Mexico Liga MX",
    "home_team": "Toluca",
    "away_team": "Juarez",
    "match_date": NaN,
    "score": "4-0",
    "over25": {
      "pred": 0.6961,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.7757,
      "is_result": true
    },
    "draw": {
      "pred": 0.1438,
      "is_result": false
    },
    "away": {
      "pred": 0.0805,
      "is_result": false
    }
  },
  {
    "league": "National League",
    "home_team": "Aldershot",
    "away_team": "Harrogate",
    "match_date": NaN,
    "score": "3-1",
    "over25": {
      "pred": 0.6966,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3233,
      "is_result": true
    },
    "draw": {
      "pred": 0.2209,
      "is_result": false
    },
    "away": {
      "pred": 0.4558,
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
      "pred": 0.5778,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3979,
      "is_result": true
    },
    "draw": {
      "pred": 0.2736,
      "is_result": false
    },
    "away": {
      "pred": 0.3285,
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
      "pred": 0.5162,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.438,
      "is_result": false
    },
    "draw": {
      "pred": 0.2833,
      "is_result": false
    },
    "away": {
      "pred": 0.2787,
      "is_result": true
    }
  },
  {
    "league": "National League",
    "home_team": "Boston Utd",
    "away_team": "Hornchurch",
    "match_date": NaN,
    "score": "2-3",
    "over25": {
      "pred": 0.5578,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3264,
      "is_result": false
    },
    "draw": {
      "pred": 0.2499,
      "is_result": false
    },
    "away": {
      "pred": 0.4237,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.2341,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Carlisle",
    "away_team": "Scunthorpe",
    "match_date": NaN,
    "score": "4-2",
    "over25": {
      "pred": 0.603,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5572,
      "is_result": true
    },
    "draw": {
      "pred": 0.2224,
      "is_result": false
    },
    "away": {
      "pred": 0.2204,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4929,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Eastleigh",
    "away_team": "Aldershot",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.6096,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4373,
      "is_result": false
    },
    "draw": {
      "pred": 0.2385,
      "is_result": true
    },
    "away": {
      "pred": 0.3242,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4262,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Forest Green",
    "away_team": "Altrincham",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.4716,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.535,
      "is_result": false
    },
    "draw": {
      "pred": 0.252,
      "is_result": false
    },
    "away": {
      "pred": 0.213,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4076,
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
      "pred": 0.6314,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2809,
      "is_result": true
    },
    "draw": {
      "pred": 0.2393,
      "is_result": false
    },
    "away": {
      "pred": 0.4798,
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
      "pred": 0.6278,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4212,
      "is_result": false
    },
    "draw": {
      "pred": 0.2505,
      "is_result": false
    },
    "away": {
      "pred": 0.3282,
      "is_result": true
    }
  },
  {
    "league": "National League",
    "home_team": "Halifax",
    "away_team": "Hartlepool",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.4365,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4629,
      "is_result": true
    },
    "draw": {
      "pred": 0.2743,
      "is_result": false
    },
    "away": {
      "pred": 0.2628,
      "is_result": false
    },
    "btts": {
      "pred": 0.4836,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.354,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.2521,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Harrogate",
    "away_team": "Gateshead",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.6448,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5656,
      "is_result": true
    },
    "draw": {
      "pred": 0.2135,
      "is_result": false
    },
    "away": {
      "pred": 0.221,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.6858,
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
      "pred": 0.6112,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4532,
      "is_result": false
    },
    "draw": {
      "pred": 0.2624,
      "is_result": false
    },
    "away": {
      "pred": 0.2844,
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
      "pred": 0.6386,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5675,
      "is_result": true
    },
    "draw": {
      "pred": 0.2142,
      "is_result": false
    },
    "away": {
      "pred": 0.2182,
      "is_result": false
    }
  },
  {
    "league": "National League",
    "home_team": "Kidderminster",
    "away_team": "Barrow",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.3053,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3825,
      "is_result": false
    },
    "draw": {
      "pred": 0.3189,
      "is_result": true
    },
    "away": {
      "pred": 0.2986,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.1095,
      "hit": false,
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
      "pred": 0.6647,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5394,
      "is_result": true
    },
    "draw": {
      "pred": 0.2158,
      "is_result": false
    },
    "away": {
      "pred": 0.2448,
      "is_result": false
    }
  },
  {
    "league": "National League",
    "home_team": "Solihull",
    "away_team": "Fylde",
    "match_date": NaN,
    "score": "1-3",
    "over25": {
      "pred": 0.6145,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4915,
      "is_result": false
    },
    "draw": {
      "pred": 0.2318,
      "is_result": false
    },
    "away": {
      "pred": 0.2767,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4102,
      "hit": false,
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
      "pred": 0.4594,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5683,
      "is_result": false
    },
    "draw": {
      "pred": 0.2689,
      "is_result": false
    },
    "away": {
      "pred": 0.1628,
      "is_result": true
    }
  },
  {
    "league": "National League",
    "home_team": "Sutton",
    "away_team": "Wealdstone",
    "match_date": NaN,
    "score": "0-2",
    "over25": {
      "pred": 0.5246,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4439,
      "is_result": false
    },
    "draw": {
      "pred": 0.2553,
      "is_result": false
    },
    "away": {
      "pred": 0.3008,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3708,
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
      "pred": 0.7421,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4034,
      "is_result": true
    },
    "draw": {
      "pred": 0.2145,
      "is_result": false
    },
    "away": {
      "pred": 0.3821,
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
      "pred": 0.6346,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2365,
      "is_result": false
    },
    "draw": {
      "pred": 0.2255,
      "is_result": true
    },
    "away": {
      "pred": 0.538,
      "is_result": false
    }
  },
  {
    "league": "National League",
    "home_team": "Woking",
    "away_team": "Southend",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.3874,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2957,
      "is_result": false
    },
    "draw": {
      "pred": 0.2911,
      "is_result": true
    },
    "away": {
      "pred": 0.4132,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.2476,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Worthing",
    "away_team": "Boreham Wood",
    "match_date": NaN,
    "score": "2-3",
    "over25": {
      "pred": 0.7127,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3599,
      "is_result": false
    },
    "draw": {
      "pred": 0.2193,
      "is_result": false
    },
    "away": {
      "pred": 0.4208,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.2722,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League",
    "home_team": "Yeovil",
    "away_team": "Tamworth",
    "match_date": NaN,
    "score": "3-2",
    "over25": {
      "pred": 0.4663,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3878,
      "is_result": true
    },
    "draw": {
      "pred": 0.2722,
      "is_result": false
    },
    "away": {
      "pred": 0.34,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3273,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Bedford Town",
    "away_team": "Radcliffe",
    "match_date": NaN,
    "score": "1-0",
    "over15": {
      "pred": 0.8458,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6399,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4319,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5164,
      "is_result": true
    },
    "draw": {
      "pred": 0.1884,
      "is_result": false
    },
    "away": {
      "pred": 0.2952,
      "is_result": false
    },
    "btts": {
      "pred": 0.6496,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5554,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4074,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Brackley Town",
    "away_team": "Harborough Town",
    "match_date": NaN,
    "score": "1-0",
    "over15": {
      "pred": 0.7692,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6245,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.312,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3741,
      "is_result": true
    },
    "draw": {
      "pred": 0.1963,
      "is_result": false
    },
    "away": {
      "pred": 0.4296,
      "is_result": false
    },
    "btts": {
      "pred": 0.5432,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4466,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.1143,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Darlington",
    "away_team": "King's Lynn Town",
    "match_date": NaN,
    "score": "0-2",
    "over15": {
      "pred": 0.7716,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.625,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3152,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5259,
      "is_result": false
    },
    "draw": {
      "pred": 0.2113,
      "is_result": false
    },
    "away": {
      "pred": 0.2628,
      "is_result": true
    },
    "btts": {
      "pred": 0.5309,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.442,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3426,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Hebburn Town",
    "away_team": "Chester",
    "match_date": NaN,
    "score": "1-1",
    "over15": {
      "pred": 0.7629,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6234,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3038,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5144,
      "is_result": false
    },
    "draw": {
      "pred": 0.2184,
      "is_result": true
    },
    "away": {
      "pred": 0.2671,
      "is_result": false
    },
    "btts": {
      "pred": 0.5163,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4305,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3439,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Hednesford Town",
    "away_team": "South Shields",
    "match_date": NaN,
    "score": "0-1",
    "over15": {
      "pred": 0.8114,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6326,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3725,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.436,
      "is_result": false
    },
    "draw": {
      "pred": 0.1069,
      "is_result": false
    },
    "away": {
      "pred": 0.4571,
      "is_result": true
    },
    "btts": {
      "pred": 0.5306,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.46,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3207,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Hereford",
    "away_team": "Spennymoor Town",
    "match_date": NaN,
    "score": "2-1",
    "over15": {
      "pred": 0.7656,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6239,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3073,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5051,
      "is_result": true
    },
    "draw": {
      "pred": 0.2208,
      "is_result": false
    },
    "away": {
      "pred": 0.2741,
      "is_result": false
    },
    "btts": {
      "pred": 0.5264,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4367,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3708,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Marine",
    "away_team": "Worksop Town",
    "match_date": NaN,
    "score": "0-1",
    "over15": {
      "pred": 0.7594,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6227,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2995,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4633,
      "is_result": false
    },
    "draw": {
      "pred": 0.228,
      "is_result": false
    },
    "away": {
      "pred": 0.3087,
      "is_result": true
    },
    "btts": {
      "pred": 0.531,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4357,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.322,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Merthyr Town",
    "away_team": "Macclesfield",
    "match_date": NaN,
    "score": "2-1",
    "over15": {
      "pred": 0.8864,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7231,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.5164,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4232,
      "is_result": true
    },
    "draw": {
      "pred": 0.1669,
      "is_result": false
    },
    "away": {
      "pred": 0.4099,
      "is_result": false
    },
    "btts": {
      "pred": 0.7149,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6342,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3802,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Morecambe",
    "away_team": "Buxton",
    "match_date": NaN,
    "score": "4-0",
    "over15": {
      "pred": 0.5602,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3931,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1236,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3647,
      "is_result": true
    },
    "draw": {
      "pred": 0.2882,
      "is_result": false
    },
    "away": {
      "pred": 0.3471,
      "is_result": false
    },
    "btts": {
      "pred": 0.5458,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3411,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.1019,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Oxford City",
    "away_team": "Chorley",
    "match_date": NaN,
    "score": "4-0",
    "over15": {
      "pred": 0.7057,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5644,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.199,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4519,
      "is_result": true
    },
    "draw": {
      "pred": 0.2511,
      "is_result": false
    },
    "away": {
      "pred": 0.297,
      "is_result": false
    },
    "btts": {
      "pred": 0.4508,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3623,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3199,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Scarborough Athletic",
    "away_team": "AFC Telford United",
    "match_date": NaN,
    "score": "0-1",
    "over15": {
      "pred": 0.7682,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6243,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3108,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4636,
      "is_result": false
    },
    "draw": {
      "pred": 0.2242,
      "is_result": false
    },
    "away": {
      "pred": 0.3122,
      "is_result": true
    },
    "btts": {
      "pred": 0.5491,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.449,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3264,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League North",
    "home_team": "Spalding United",
    "away_team": "Southport",
    "match_date": NaN,
    "score": "2-0",
    "over15": {
      "pred": 0.5334,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3835,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1081,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5416,
      "is_result": true
    },
    "draw": {
      "pred": 0.276,
      "is_result": false
    },
    "away": {
      "pred": 0.1824,
      "is_result": false
    },
    "btts": {
      "pred": 0.2967,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.387,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.1107,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "AFC Totton",
    "away_team": "Hampton & Richmond Borough",
    "match_date": NaN,
    "score": "4-1",
    "over15": {
      "pred": 0.7878,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6288,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3432,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5003,
      "is_result": true
    },
    "draw": {
      "pred": 0.2014,
      "is_result": false
    },
    "away": {
      "pred": 0.2982,
      "is_result": false
    },
    "btts": {
      "pred": 0.5824,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4761,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3695,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Billericay Town",
    "away_team": "Dorking Wanderers",
    "match_date": NaN,
    "score": "3-3",
    "over15": {
      "pred": 0.776,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6266,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3268,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4584,
      "is_result": false
    },
    "draw": {
      "pred": 0.2068,
      "is_result": true
    },
    "away": {
      "pred": 0.3347,
      "is_result": false
    },
    "btts": {
      "pred": 0.5688,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.465,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3448,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Chelmsford City",
    "away_team": "Salisbury",
    "match_date": NaN,
    "score": "1-1",
    "over15": {
      "pred": 0.7236,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5967,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1505,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5902,
      "is_result": false
    },
    "draw": {
      "pred": 0.1894,
      "is_result": true
    },
    "away": {
      "pred": 0.2204,
      "is_result": false
    },
    "btts": {
      "pred": 0.4622,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3625,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3254,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Dover Athletic",
    "away_team": "Maidenhead United",
    "match_date": NaN,
    "score": "0-3",
    "over15": {
      "pred": 0.6519,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4958,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2953,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3832,
      "is_result": false
    },
    "draw": {
      "pred": 0.2144,
      "is_result": false
    },
    "away": {
      "pred": 0.4025,
      "is_result": true
    },
    "btts": {
      "pred": 0.4943,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2965,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3383,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Farnborough",
    "away_team": "Tonbridge Angels",
    "match_date": NaN,
    "score": "0-4",
    "over15": {
      "pred": 0.8439,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6402,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.435,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4158,
      "is_result": false
    },
    "draw": {
      "pred": 0.1745,
      "is_result": false
    },
    "away": {
      "pred": 0.4097,
      "is_result": true
    },
    "btts": {
      "pred": 0.6574,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5656,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3879,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Hemel Hempstead Town",
    "away_team": "Farnham Town",
    "match_date": NaN,
    "score": "1-1",
    "over15": {
      "pred": 0.6271,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4635,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3375,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4661,
      "is_result": false
    },
    "draw": {
      "pred": 0.2762,
      "is_result": true
    },
    "away": {
      "pred": 0.2577,
      "is_result": false
    },
    "btts": {
      "pred": 0.511,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2909,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3227,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Horsham",
    "away_team": "Dagenham & Redbridge",
    "match_date": NaN,
    "score": "1-1",
    "over15": {
      "pred": 0.5679,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3976,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1312,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4154,
      "is_result": false
    },
    "draw": {
      "pred": 0.2971,
      "is_result": true
    },
    "away": {
      "pred": 0.2876,
      "is_result": false
    },
    "btts": {
      "pred": 0.5414,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3318,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3632,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Maidstone United",
    "away_team": "Weston-super-Mare",
    "match_date": NaN,
    "score": "1-0",
    "over15": {
      "pred": 0.6515,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4952,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2961,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4763,
      "is_result": true
    },
    "draw": {
      "pred": 0.2563,
      "is_result": false
    },
    "away": {
      "pred": 0.2674,
      "is_result": false
    },
    "btts": {
      "pred": 0.494,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2966,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3325,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Slough Town",
    "away_team": "Braintree Town",
    "match_date": NaN,
    "score": "1-2",
    "over15": {
      "pred": 0.9529,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.8646,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.7168,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7063,
      "is_result": false
    },
    "draw": {
      "pred": 0.1378,
      "is_result": false
    },
    "away": {
      "pred": 0.1559,
      "is_result": true
    },
    "btts": {
      "pred": 0.7643,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.7268,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4874,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Torquay United",
    "away_team": "Folkestone Invicta",
    "match_date": NaN,
    "score": "3-2",
    "over15": {
      "pred": 0.6576,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5029,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2858,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4068,
      "is_result": true
    },
    "draw": {
      "pred": 0.1826,
      "is_result": false
    },
    "away": {
      "pred": 0.4107,
      "is_result": false
    },
    "btts": {
      "pred": 0.5027,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2893,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3207,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Truro City",
    "away_team": "Chesham United",
    "match_date": NaN,
    "score": "3-1",
    "over15": {
      "pred": 0.5583,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3922,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.122,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.8203,
      "is_result": true
    },
    "draw": {
      "pred": 0.144,
      "is_result": false
    },
    "away": {
      "pred": 0.0357,
      "is_result": false
    },
    "btts": {
      "pred": 0.1218,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.0813,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3632,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "National League South",
    "home_team": "Walton & Hersham",
    "away_team": "Ebbsfleet United",
    "match_date": NaN,
    "score": "0-2",
    "over15": {
      "pred": 0.8882,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7271,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.5206,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.0395,
      "is_result": false
    },
    "draw": {
      "pred": 0.0833,
      "is_result": false
    },
    "away": {
      "pred": 0.8772,
      "is_result": true
    },
    "btts": {
      "pred": 0.5119,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3641,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.439,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Norway Eliteserien",
    "home_team": "Aalesund",
    "away_team": "Start",
    "match_date": NaN,
    "score": "2-0",
    "over15": {
      "pred": 0.7883,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6308,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3372,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5249,
      "is_result": true
    },
    "draw": {
      "pred": 0.2288,
      "is_result": false
    },
    "away": {
      "pred": 0.2463,
      "is_result": false
    },
    "btts": {
      "pred": 0.5658,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4586,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Norway Eliteserien",
    "home_team": "Brann",
    "away_team": "Lillestrom",
    "match_date": NaN,
    "score": "1-2",
    "over15": {
      "pred": 0.8211,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6345,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3873,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6723,
      "is_result": false
    },
    "draw": {
      "pred": 0.1364,
      "is_result": false
    },
    "away": {
      "pred": 0.1913,
      "is_result": true
    },
    "btts": {
      "pred": 0.559,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4762,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Norway Eliteserien",
    "home_team": "Kristiansund",
    "away_team": "Tromso",
    "match_date": NaN,
    "score": "2-0",
    "over15": {
      "pred": 0.6418,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4602,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.322,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3731,
      "is_result": true
    },
    "draw": {
      "pred": 0.2485,
      "is_result": false
    },
    "away": {
      "pred": 0.3783,
      "is_result": false
    },
    "btts": {
      "pred": 0.4976,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2825,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Norway Eliteserien",
    "home_team": "Molde",
    "away_team": "KFUM Oslo",
    "match_date": NaN,
    "score": "2-0",
    "over15": {
      "pred": 0.7758,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.609,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3197,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6187,
      "is_result": true
    },
    "draw": {
      "pred": 0.1729,
      "is_result": false
    },
    "away": {
      "pred": 0.2085,
      "is_result": false
    },
    "btts": {
      "pred": 0.4885,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4228,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Norway Eliteserien",
    "home_team": "Rosenborg",
    "away_team": "HamKam",
    "match_date": NaN,
    "score": "4-0",
    "over15": {
      "pred": 0.7527,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6214,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2901,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5599,
      "is_result": true
    },
    "draw": {
      "pred": 0.205,
      "is_result": false
    },
    "away": {
      "pred": 0.235,
      "is_result": false
    },
    "btts": {
      "pred": 0.4729,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.404,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Norway Eliteserien",
    "home_team": "Sandefjord",
    "away_team": "Viking",
    "match_date": NaN,
    "score": "1-1",
    "over15": {
      "pred": 0.7639,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6209,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3043,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3013,
      "is_result": false
    },
    "draw": {
      "pred": 0.2453,
      "is_result": true
    },
    "away": {
      "pred": 0.4533,
      "is_result": false
    },
    "btts": {
      "pred": 0.5553,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4394,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Norway Eliteserien",
    "home_team": "Sarpsborg 08",
    "away_team": "Valerenga",
    "match_date": NaN,
    "score": "2-2",
    "over15": {
      "pred": 0.8176,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6409,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3819,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5127,
      "is_result": false
    },
    "draw": {
      "pred": 0.2021,
      "is_result": true
    },
    "away": {
      "pred": 0.2852,
      "is_result": false
    },
    "btts": {
      "pred": 0.6405,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5098,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Poland Ekstraklasa",
    "home_team": "Cracovia",
    "away_team": "Gornik Zabrze",
    "match_date": NaN,
    "score": "0-1",
    "over15": {
      "pred": 0.7076,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5187,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2308,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3872,
      "is_result": false
    },
    "draw": {
      "pred": 0.2985,
      "is_result": false
    },
    "away": {
      "pred": 0.3143,
      "is_result": true
    },
    "btts": {
      "pred": 0.4462,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3464,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Poland Ekstraklasa",
    "home_team": "Jagiellonia",
    "away_team": "Slask Wroclaw",
    "match_date": NaN,
    "score": "2-1",
    "over15": {
      "pred": 0.7721,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5961,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.296,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4851,
      "is_result": true
    },
    "draw": {
      "pred": 0.2734,
      "is_result": false
    },
    "away": {
      "pred": 0.2416,
      "is_result": false
    },
    "btts": {
      "pred": 0.5262,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4187,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Poland Ekstraklasa",
    "home_team": "Korona Kielce",
    "away_team": "Wisla",
    "match_date": NaN,
    "score": "1-1",
    "over15": {
      "pred": 0.8076,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.629,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3449,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3633,
      "is_result": false
    },
    "draw": {
      "pred": 0.2386,
      "is_result": true
    },
    "away": {
      "pred": 0.3981,
      "is_result": false
    },
    "btts": {
      "pred": 0.6279,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4812,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Poland Ekstraklasa",
    "home_team": "Lech Poznan",
    "away_team": "Jagiellonia",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.6862,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3267,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4924,
      "is_result": true
    },
    "draw": {
      "pred": 0.2622,
      "is_result": false
    },
    "away": {
      "pred": 0.2454,
      "is_result": false
    },
    "btts": {
      "pred": 0.5765,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4525,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Poland Ekstraklasa",
    "home_team": "Lech Poznan",
    "away_team": "Rakow",
    "match_date": NaN,
    "score": "1-0",
    "over15": {
      "pred": 0.7829,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6037,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3098,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4569,
      "is_result": true
    },
    "draw": {
      "pred": 0.2771,
      "is_result": false
    },
    "away": {
      "pred": 0.266,
      "is_result": false
    },
    "btts": {
      "pred": 0.5687,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4443,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Poland Ekstraklasa",
    "home_team": "Motor Lublin",
    "away_team": "Legia",
    "match_date": NaN,
    "score": "2-3",
    "over15": {
      "pred": 0.7955,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6266,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.327,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4107,
      "is_result": false
    },
    "draw": {
      "pred": 0.271,
      "is_result": false
    },
    "away": {
      "pred": 0.3183,
      "is_result": true
    },
    "btts": {
      "pred": 0.6079,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4664,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Poland Ekstraklasa",
    "home_team": "Rakow",
    "away_team": "Gornik Zabrze",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.537,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2209,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3905,
      "is_result": false
    },
    "draw": {
      "pred": 0.3036,
      "is_result": false
    },
    "away": {
      "pred": 0.3059,
      "is_result": true
    },
    "btts": {
      "pred": 0.4997,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3557,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Poland Ekstraklasa",
    "home_team": "Widzew Lodz",
    "away_team": "Radomiak Radom",
    "match_date": NaN,
    "score": "0-0",
    "over15": {
      "pred": 0.7369,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5877,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1643,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5524,
      "is_result": false
    },
    "draw": {
      "pred": 0.2447,
      "is_result": true
    },
    "away": {
      "pred": 0.2029,
      "is_result": false
    },
    "btts": {
      "pred": 0.4543,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3526,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Arsenal",
    "away_team": "Chelsea",
    "match_date": "2026-09-06",
    "score": "2-1",
    "over15": {
      "pred": 0.8855,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6977,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2738,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3858,
      "is_result": true
    },
    "draw": {
      "pred": 0.2515,
      "is_result": false
    },
    "away": {
      "pred": 0.3627,
      "is_result": false
    },
    "btts": {
      "pred": 0.7087,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.6625,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.406,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Aston Villa",
    "away_team": "Arsenal",
    "match_date": NaN,
    "score": "0-1",
    "over25": {
      "pred": 0.4323,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3171,
      "is_result": false
    },
    "draw": {
      "pred": 0.3191,
      "is_result": false
    },
    "away": {
      "pred": 0.3638,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.2857,
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
      "pred": 0.4465,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4128,
      "is_result": false
    },
    "draw": {
      "pred": 0.3118,
      "is_result": true
    },
    "away": {
      "pred": 0.2754,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.2961,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Brentford",
    "away_team": "Sunderland",
    "match_date": NaN,
    "score": "1-1",
    "over15": {
      "pred": 0.7699,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6223,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2962,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5407,
      "is_result": false
    },
    "draw": {
      "pred": 0.2365,
      "is_result": true
    },
    "away": {
      "pred": 0.2228,
      "is_result": false
    },
    "btts": {
      "pred": 0.5019,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4093,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3203,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Brighton",
    "away_team": "Leeds",
    "match_date": NaN,
    "score": "1-1",
    "over15": {
      "pred": 0.8905,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7141,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.5052,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6704,
      "is_result": false
    },
    "draw": {
      "pred": 0.1368,
      "is_result": true
    },
    "away": {
      "pred": 0.1928,
      "is_result": false
    },
    "btts": {
      "pred": 0.6653,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5816,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3179,
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
      "pred": 0.9216,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.6181,
      "is_result": true
    },
    "draw": {
      "pred": 0.1775,
      "is_result": false
    },
    "away": {
      "pred": 0.2044,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5502,
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
      "pred": 0.0598,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.1465,
      "is_result": false
    },
    "draw": {
      "pred": 0.5016,
      "is_result": false
    },
    "away": {
      "pred": 0.3519,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.1913,
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
      "pred": 0.5946,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.25,
      "is_result": false
    },
    "draw": {
      "pred": 0.271,
      "is_result": false
    },
    "away": {
      "pred": 0.479,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3771,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Everton",
    "away_team": "Man United",
    "match_date": "2026-09-06",
    "score": "2-2",
    "over15": {
      "pred": 0.798,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5239,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3492,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3881,
      "is_result": false
    },
    "draw": {
      "pred": 0.3141,
      "is_result": true
    },
    "away": {
      "pred": 0.2978,
      "is_result": false
    },
    "btts": {
      "pred": 0.5397,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4065,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.2876,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Fulham",
    "away_team": "Crystal Palace",
    "match_date": NaN,
    "score": "2-3",
    "over15": {
      "pred": 0.6726,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4975,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2931,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4464,
      "is_result": false
    },
    "draw": {
      "pred": 0.3044,
      "is_result": false
    },
    "away": {
      "pred": 0.2492,
      "is_result": true
    },
    "btts": {
      "pred": 0.4782,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2991,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3294,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Hull",
    "away_team": "Aston Villa",
    "match_date": NaN,
    "score": "0-0",
    "over15": {
      "pred": 0.2505,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.0702,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0157,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3629,
      "is_result": false
    },
    "draw": {
      "pred": 0.4551,
      "is_result": true
    },
    "away": {
      "pred": 0.182,
      "is_result": false
    },
    "btts": {
      "pred": 0.1373,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.0505,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3385,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Ipswich",
    "away_team": "Liverpool",
    "match_date": NaN,
    "score": "0-2",
    "over15": {
      "pred": 0.9256,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7873,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.6006,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.0947,
      "is_result": false
    },
    "draw": {
      "pred": 0.1394,
      "is_result": false
    },
    "away": {
      "pred": 0.7659,
      "is_result": true
    },
    "btts": {
      "pred": 0.6378,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5817,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.5294,
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
      "pred": 0.6011,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2217,
      "is_result": false
    },
    "draw": {
      "pred": 0.2324,
      "is_result": true
    },
    "away": {
      "pred": 0.5459,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3022,
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
      "pred": 0.5994,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5562,
      "is_result": false
    },
    "draw": {
      "pred": 0.245,
      "is_result": true
    },
    "away": {
      "pred": 0.1988,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3604,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Man City",
    "away_team": "Coventry",
    "match_date": NaN,
    "score": "1-0",
    "over15": {
      "pred": 0.6066,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4196,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3918,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7404,
      "is_result": true
    },
    "draw": {
      "pred": 0.1928,
      "is_result": false
    },
    "away": {
      "pred": 0.0668,
      "is_result": false
    },
    "btts": {
      "pred": 0.2645,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3987,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3777,
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
      "pred": 0.8066,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.7327,
      "is_result": true
    },
    "draw": {
      "pred": 0.1551,
      "is_result": false
    },
    "away": {
      "pred": 0.1122,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4996,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Newcastle",
    "away_team": "Bournemouth",
    "match_date": NaN,
    "score": "2-2",
    "over15": {
      "pred": 0.6612,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4826,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3128,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4534,
      "is_result": false
    },
    "draw": {
      "pred": 0.3055,
      "is_result": true
    },
    "away": {
      "pred": 0.2411,
      "is_result": false
    },
    "btts": {
      "pred": 0.4883,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2838,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3656,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Premier League",
    "home_team": "Nott'm Forest",
    "away_team": "Tottenham",
    "match_date": NaN,
    "score": "0-0",
    "over15": {
      "pred": 0.6479,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4648,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3358,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3695,
      "is_result": false
    },
    "draw": {
      "pred": 0.31,
      "is_result": true
    },
    "away": {
      "pred": 0.3205,
      "is_result": false
    },
    "btts": {
      "pred": 0.4871,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2829,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3171,
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
      "pred": 0.3382,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2893,
      "is_result": true
    },
    "draw": {
      "pred": 0.3628,
      "is_result": false
    },
    "away": {
      "pred": 0.3479,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.1919,
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
      "pred": 0.5377,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3287,
      "is_result": false
    },
    "draw": {
      "pred": 0.2932,
      "is_result": false
    },
    "away": {
      "pred": 0.378,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.495,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Romania Superliga",
    "home_team": "FC Botosani",
    "away_team": "Sepsi Sf. Gheorghe",
    "match_date": NaN,
    "score": "5-0",
    "over15": {
      "pred": 0.6665,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4963,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2946,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4695,
      "is_result": true
    },
    "draw": {
      "pred": 0.2913,
      "is_result": false
    },
    "away": {
      "pred": 0.2392,
      "is_result": false
    },
    "btts": {
      "pred": 0.4879,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2924,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Romania Superliga",
    "home_team": "Petrolul",
    "away_team": "Corvinul",
    "match_date": NaN,
    "score": "2-0",
    "over15": {
      "pred": 0.4301,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3487,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0591,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3988,
      "is_result": true
    },
    "draw": {
      "pred": 0.3077,
      "is_result": false
    },
    "away": {
      "pred": 0.2935,
      "is_result": false
    },
    "btts": {
      "pred": 0.2642,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.1383,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Romania Superliga",
    "home_team": "UTA Arad",
    "away_team": "Csikszereda M. Ciuc",
    "match_date": NaN,
    "score": "5-1",
    "over15": {
      "pred": 0.6637,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4928,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2993,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4983,
      "is_result": true
    },
    "draw": {
      "pred": 0.2813,
      "is_result": false
    },
    "away": {
      "pred": 0.2204,
      "is_result": false
    },
    "btts": {
      "pred": 0.4975,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2814,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "Aberdeen",
    "away_team": "Rangers",
    "match_date": NaN,
    "score": "0-1",
    "over25": {
      "pred": 0.5977,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2824,
      "is_result": false
    },
    "draw": {
      "pred": 0.258,
      "is_result": false
    },
    "away": {
      "pred": 0.4595,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3605,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "Celtic",
    "away_team": "Aberdeen",
    "match_date": NaN,
    "score": "3-0",
    "over25": {
      "pred": 0.718,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4061,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7103,
      "is_result": true
    },
    "draw": {
      "pred": 0.1744,
      "is_result": false
    },
    "away": {
      "pred": 0.1154,
      "is_result": false
    },
    "btts": {
      "pred": 0.5246,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4427,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4109,
      "hit": false,
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
      "pred": 0.6155,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.7578,
      "is_result": true
    },
    "draw": {
      "pred": 0.1519,
      "is_result": false
    },
    "away": {
      "pred": 0.0904,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.581,
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
      "pred": 0.6056,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2845,
      "is_result": false
    },
    "draw": {
      "pred": 0.2503,
      "is_result": false
    },
    "away": {
      "pred": 0.4652,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.5808,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "Dundee",
    "away_team": "St Johnstone",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.65,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2729,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5046,
      "is_result": false
    },
    "draw": {
      "pred": 0.2544,
      "is_result": true
    },
    "away": {
      "pred": 0.241,
      "is_result": false
    },
    "btts": {
      "pred": 0.5178,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3966,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4108,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "Falkirk",
    "away_team": "Rangers",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.5047,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2082,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2224,
      "is_result": false
    },
    "draw": {
      "pred": 0.2715,
      "is_result": false
    },
    "away": {
      "pred": 0.5061,
      "is_result": true
    },
    "btts": {
      "pred": 0.4507,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3243,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.472,
      "hit": false,
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
      "pred": 0.6047,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.6639,
      "is_result": true
    },
    "draw": {
      "pred": 0.2079,
      "is_result": false
    },
    "away": {
      "pred": 0.1282,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3806,
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
      "pred": 0.4663,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4289,
      "is_result": false
    },
    "draw": {
      "pred": 0.2909,
      "is_result": false
    },
    "away": {
      "pred": 0.2802,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3341,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "Kilmarnock",
    "away_team": "St Mirren",
    "match_date": NaN,
    "score": "0-1",
    "over25": {
      "pred": 0.4504,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.186,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5149,
      "is_result": false
    },
    "draw": {
      "pred": 0.2768,
      "is_result": false
    },
    "away": {
      "pred": 0.2084,
      "is_result": true
    },
    "btts": {
      "pred": 0.4217,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2956,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.2769,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Scottish Premiership",
    "home_team": "Motherwell",
    "away_team": "Dundee United",
    "match_date": NaN,
    "score": "3-0",
    "over25": {
      "pred": 0.638,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2672,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.408,
      "is_result": true
    },
    "draw": {
      "pred": 0.2675,
      "is_result": false
    },
    "away": {
      "pred": 0.3245,
      "is_result": false
    },
    "btts": {
      "pred": 0.5328,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4055,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4134,
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
      "pred": 0.5325,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2966,
      "is_result": false
    },
    "draw": {
      "pred": 0.2752,
      "is_result": true
    },
    "away": {
      "pred": 0.4282,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4761,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Atalanta",
    "away_team": "Bologna",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.4417,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5337,
      "is_result": true
    },
    "draw": {
      "pred": 0.2597,
      "is_result": false
    },
    "away": {
      "pred": 0.2066,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.345,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Bologna",
    "away_team": "Sassuolo",
    "match_date": "2026-09-06",
    "score": "2-2",
    "over15": {
      "pred": 0.7807,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6014,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2964,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3913,
      "is_result": false
    },
    "draw": {
      "pred": 0.2499,
      "is_result": true
    },
    "away": {
      "pred": 0.3587,
      "is_result": false
    },
    "btts": {
      "pred": 0.6545,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5573,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3706,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Fiorentina",
    "away_team": "Torino",
    "match_date": NaN,
    "score": "1-2",
    "over15": {
      "pred": 0.6585,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4924,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2998,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4347,
      "is_result": false
    },
    "draw": {
      "pred": 0.2904,
      "is_result": false
    },
    "away": {
      "pred": 0.2749,
      "is_result": true
    },
    "btts": {
      "pred": 0.4838,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2995,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3378,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Frosinone",
    "away_team": "Venezia",
    "match_date": "2026-09-06",
    "score": "3-2",
    "over15": {
      "pred": 0.4892,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3259,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0844,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3908,
      "is_result": true
    },
    "draw": {
      "pred": 0.3337,
      "is_result": false
    },
    "away": {
      "pred": 0.2755,
      "is_result": false
    },
    "btts": {
      "pred": 0.3105,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2762,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.2652,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Genoa",
    "away_team": "Como",
    "match_date": NaN,
    "score": "1-4",
    "over15": {
      "pred": 0.6642,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.484,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1953,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.141,
      "is_result": false
    },
    "draw": {
      "pred": 0.2441,
      "is_result": false
    },
    "away": {
      "pred": 0.615,
      "is_result": true
    },
    "btts": {
      "pred": 0.3807,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.2721,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.2816,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Inter",
    "away_team": "Napoli",
    "match_date": NaN,
    "score": "3-2",
    "over15": {
      "pred": 0.7401,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6096,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1305,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6089,
      "is_result": true
    },
    "draw": {
      "pred": 0.1934,
      "is_result": false
    },
    "away": {
      "pred": 0.1977,
      "is_result": false
    },
    "btts": {
      "pred": 0.4592,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3629,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.344,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Juventus",
    "away_team": "Milan",
    "match_date": "2026-09-06",
    "score": "1-1",
    "over15": {
      "pred": 0.781,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6014,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.298,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3201,
      "is_result": false
    },
    "draw": {
      "pred": 0.2202,
      "is_result": true
    },
    "away": {
      "pred": 0.4597,
      "is_result": false
    },
    "btts": {
      "pred": 0.5733,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5401,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3784,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Lecce",
    "away_team": "Roma",
    "match_date": NaN,
    "score": "0-4",
    "over25": {
      "pred": 0.5556,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3146,
      "is_result": false
    },
    "draw": {
      "pred": 0.2507,
      "is_result": false
    },
    "away": {
      "pred": 0.4347,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.2516,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Parma",
    "away_team": "Monza",
    "match_date": "2026-09-06",
    "score": "1-1",
    "over15": {
      "pred": 0.7474,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.3999,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3557,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3671,
      "is_result": false
    },
    "draw": {
      "pred": 0.3133,
      "is_result": true
    },
    "away": {
      "pred": 0.3196,
      "is_result": false
    },
    "btts": {
      "pred": 0.5079,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3588,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3049,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie A",
    "home_team": "Roma",
    "away_team": "Atalanta",
    "match_date": NaN,
    "score": "2-1",
    "over15": {
      "pred": 0.7437,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6151,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.122,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3876,
      "is_result": true
    },
    "draw": {
      "pred": 0.2426,
      "is_result": false
    },
    "away": {
      "pred": 0.3698,
      "is_result": false
    },
    "btts": {
      "pred": 0.5067,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4104,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3278,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie B",
    "home_team": "Ascoli",
    "away_team": "Benevento",
    "match_date": NaN,
    "score": "1-0",
    "over15": {
      "pred": 0.6516,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4673,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3327,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6222,
      "is_result": true
    },
    "draw": {
      "pred": 0.2585,
      "is_result": false
    },
    "away": {
      "pred": 0.1193,
      "is_result": false
    },
    "btts": {
      "pred": 0.5421,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3287,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.0653,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie B",
    "home_team": "Carrarese",
    "away_team": "Empoli",
    "match_date": NaN,
    "score": "0-1",
    "over15": {
      "pred": 0.7268,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5677,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1941,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4668,
      "is_result": false
    },
    "draw": {
      "pred": 0.2941,
      "is_result": false
    },
    "away": {
      "pred": 0.2392,
      "is_result": true
    },
    "btts": {
      "pred": 0.4445,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.355,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3341,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie B",
    "home_team": "Cesena",
    "away_team": "Mantova",
    "match_date": "2026-09-06",
    "score": "1-1",
    "over15": {
      "pred": 0.7888,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5988,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.343,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4124,
      "is_result": false
    },
    "draw": {
      "pred": 0.3136,
      "is_result": true
    },
    "away": {
      "pred": 0.274,
      "is_result": false
    },
    "btts": {
      "pred": 0.5562,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4054,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.4093,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie B",
    "home_team": "Cremonese",
    "away_team": "Padova",
    "match_date": "2026-09-06",
    "score": "3-1",
    "over15": {
      "pred": 0.7366,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.373,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1236,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3627,
      "is_result": true
    },
    "draw": {
      "pred": 0.3311,
      "is_result": false
    },
    "away": {
      "pred": 0.3062,
      "is_result": false
    },
    "btts": {
      "pred": 0.5024,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3293,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.342,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie B",
    "home_team": "Juve Stabia",
    "away_team": "Pisa",
    "match_date": "2026-09-06",
    "score": "0-3",
    "over15": {
      "pred": 0.7926,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5001,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3505,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3504,
      "is_result": false
    },
    "draw": {
      "pred": 0.3098,
      "is_result": false
    },
    "away": {
      "pred": 0.3398,
      "is_result": true
    },
    "btts": {
      "pred": 0.5371,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4067,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3478,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie B",
    "home_team": "Modena",
    "away_team": "Avellino",
    "match_date": "2026-09-06",
    "score": "0-1",
    "over15": {
      "pred": 0.789,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.4898,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.351,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4139,
      "is_result": false
    },
    "draw": {
      "pred": 0.3202,
      "is_result": false
    },
    "away": {
      "pred": 0.2659,
      "is_result": true
    },
    "btts": {
      "pred": 0.5315,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4069,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3756,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie B",
    "home_team": "Sudtirol",
    "away_team": "Catanzaro",
    "match_date": NaN,
    "score": "2-0",
    "over15": {
      "pred": 0.7997,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6271,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3308,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.407,
      "is_result": true
    },
    "draw": {
      "pred": 0.1888,
      "is_result": false
    },
    "away": {
      "pred": 0.4041,
      "is_result": false
    },
    "btts": {
      "pred": 0.5694,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4518,
      "hit": true,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.36,
      "hit": true,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Serie B",
    "home_team": "Virtus Entella",
    "away_team": "Vicenza",
    "match_date": "2026-09-06",
    "score": "2-2",
    "over15": {
      "pred": 0.7809,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6009,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3059,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4879,
      "is_result": false
    },
    "draw": {
      "pred": 0.2657,
      "is_result": true
    },
    "away": {
      "pred": 0.2464,
      "is_result": false
    },
    "btts": {
      "pred": 0.5686,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4863,
      "hit": false,
      "label": "BTTS+O2.5"
    },
    "ht_over15": {
      "pred": 0.3797,
      "hit": false,
      "label": "HT O1.5"
    }
  },
  {
    "league": "Switzerland Super League",
    "home_team": "Basel",
    "away_team": "Lugano",
    "match_date": NaN,
    "score": "1-3",
    "over15": {
      "pred": 0.7653,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5962,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2963,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3785,
      "is_result": false
    },
    "draw": {
      "pred": 0.2159,
      "is_result": false
    },
    "away": {
      "pred": 0.4057,
      "is_result": true
    },
    "btts": {
      "pred": 0.5323,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4278,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Switzerland Super League",
    "home_team": "Basel",
    "away_team": "Sion",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.654,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2749,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2885,
      "is_result": false
    },
    "draw": {
      "pred": 0.2655,
      "is_result": false
    },
    "away": {
      "pred": 0.4459,
      "is_result": true
    },
    "btts": {
      "pred": 0.5358,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4093,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Switzerland Super League",
    "home_team": "Grasshoppers",
    "away_team": "St. Gallen",
    "match_date": NaN,
    "score": "2-0",
    "over25": {
      "pred": 0.6584,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2769,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.2501,
      "is_result": true
    },
    "draw": {
      "pred": 0.2588,
      "is_result": false
    },
    "away": {
      "pred": 0.4911,
      "is_result": false
    },
    "btts": {
      "pred": 0.5268,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4035,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Switzerland Super League",
    "home_team": "Grasshoppers",
    "away_team": "Zurich",
    "match_date": NaN,
    "score": "2-2",
    "over15": {
      "pred": 0.6835,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5199,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.2624,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.431,
      "is_result": false
    },
    "draw": {
      "pred": 0.2929,
      "is_result": true
    },
    "away": {
      "pred": 0.2761,
      "is_result": false
    },
    "btts": {
      "pred": 0.4662,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3237,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Switzerland Super League",
    "home_team": "Lugano",
    "away_team": "Servette",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.6963,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3459,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4763,
      "is_result": true
    },
    "draw": {
      "pred": 0.2458,
      "is_result": false
    },
    "away": {
      "pred": 0.2779,
      "is_result": false
    },
    "btts": {
      "pred": 0.5906,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.476,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Switzerland Super League",
    "home_team": "Luzern",
    "away_team": "Vaduz",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.6367,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.8107,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5032,
      "is_result": true
    },
    "draw": {
      "pred": 0.1713,
      "is_result": false
    },
    "away": {
      "pred": 0.3255,
      "is_result": false
    },
    "btts": {
      "pred": 0.8795,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.85,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Switzerland Super League",
    "home_team": "Servette",
    "away_team": "St. Gallen",
    "match_date": NaN,
    "score": "0-2",
    "over15": {
      "pred": 0.7797,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6065,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.315,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3877,
      "is_result": false
    },
    "draw": {
      "pred": 0.2404,
      "is_result": false
    },
    "away": {
      "pred": 0.3719,
      "is_result": true
    },
    "btts": {
      "pred": 0.5774,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4568,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Switzerland Super League",
    "home_team": "Sion",
    "away_team": "Thun",
    "match_date": NaN,
    "score": "3-2",
    "over15": {
      "pred": 0.7801,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6068,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3156,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4814,
      "is_result": true
    },
    "draw": {
      "pred": 0.2443,
      "is_result": false
    },
    "away": {
      "pred": 0.2743,
      "is_result": false
    },
    "btts": {
      "pred": 0.5613,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4495,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Switzerland Super League",
    "home_team": "Thun",
    "away_team": "Lausanne",
    "match_date": NaN,
    "score": "0-0",
    "over25": {
      "pred": 0.7425,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4768,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6085,
      "is_result": false
    },
    "draw": {
      "pred": 0.1986,
      "is_result": true
    },
    "away": {
      "pred": 0.1929,
      "is_result": false
    },
    "btts": {
      "pred": 0.646,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.561,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Switzerland Super League",
    "home_team": "Vaduz",
    "away_team": "Lausanne",
    "match_date": NaN,
    "score": "3-1",
    "over15": {
      "pred": 0.8507,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6396,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4294,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7407,
      "is_result": true
    },
    "draw": {
      "pred": 0.1229,
      "is_result": false
    },
    "away": {
      "pred": 0.1364,
      "is_result": false
    },
    "btts": {
      "pred": 0.5812,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4931,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Switzerland Super League",
    "home_team": "Young Boys",
    "away_team": "Luzern",
    "match_date": NaN,
    "score": "3-3",
    "over15": {
      "pred": 0.8303,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6351,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3921,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.5718,
      "is_result": false
    },
    "draw": {
      "pred": 0.1925,
      "is_result": true
    },
    "away": {
      "pred": 0.2357,
      "is_result": false
    },
    "btts": {
      "pred": 0.6373,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5064,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "Switzerland Super League",
    "home_team": "Zurich",
    "away_team": "Young Boys",
    "match_date": NaN,
    "score": "2-4",
    "over25": {
      "pred": 0.6586,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2556,
      "is_result": false
    },
    "draw": {
      "pred": 0.222,
      "is_result": false
    },
    "away": {
      "pred": 0.5223,
      "is_result": true
    },
    "btts": {
      "pred": 0.6505,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5539,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Austin FC",
    "away_team": "San Jose Earthquakes",
    "match_date": NaN,
    "score": "1-1",
    "over15": {
      "pred": 0.7457,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5785,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1285,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3964,
      "is_result": false
    },
    "draw": {
      "pred": 0.2694,
      "is_result": true
    },
    "away": {
      "pred": 0.3342,
      "is_result": false
    },
    "btts": {
      "pred": 0.5107,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.407,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Charlotte",
    "away_team": "Houston Dynamo",
    "match_date": NaN,
    "score": "0-0",
    "over15": {
      "pred": 0.7289,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5563,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1676,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4989,
      "is_result": false
    },
    "draw": {
      "pred": 0.257,
      "is_result": true
    },
    "away": {
      "pred": 0.2442,
      "is_result": false
    },
    "btts": {
      "pred": 0.4458,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3671,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Columbus Crew",
    "away_team": "Colorado Rapids",
    "match_date": NaN,
    "score": "3-0",
    "over15": {
      "pred": 0.7698,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5993,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3018,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4987,
      "is_result": true
    },
    "draw": {
      "pred": 0.2435,
      "is_result": false
    },
    "away": {
      "pred": 0.2578,
      "is_result": false
    },
    "btts": {
      "pred": 0.5275,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4277,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "FC Dallas",
    "away_team": "Sporting Kansas City",
    "match_date": NaN,
    "score": "4-3",
    "over15": {
      "pred": 0.7853,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6109,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3232,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.629,
      "is_result": true
    },
    "draw": {
      "pred": 0.18,
      "is_result": false
    },
    "away": {
      "pred": 0.191,
      "is_result": false
    },
    "btts": {
      "pred": 0.4876,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4174,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Inter Miami",
    "away_team": "Atlanta Utd",
    "match_date": NaN,
    "score": "2-2",
    "over15": {
      "pred": 0.8765,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6947,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.4815,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7527,
      "is_result": false
    },
    "draw": {
      "pred": 0.1103,
      "is_result": true
    },
    "away": {
      "pred": 0.137,
      "is_result": false
    },
    "btts": {
      "pred": 0.6101,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.5198,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Los Angeles Galaxy",
    "away_team": "New England Revolution",
    "match_date": NaN,
    "score": "2-1",
    "over15": {
      "pred": 0.7833,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.609,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3196,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4759,
      "is_result": true
    },
    "draw": {
      "pred": 0.2452,
      "is_result": false
    },
    "away": {
      "pred": 0.2789,
      "is_result": false
    },
    "btts": {
      "pred": 0.571,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4555,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "New York City",
    "away_team": "Nashville SC",
    "match_date": NaN,
    "score": "0-0",
    "over15": {
      "pred": 0.7027,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5465,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.225,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4429,
      "is_result": false
    },
    "draw": {
      "pred": 0.2875,
      "is_result": true
    },
    "away": {
      "pred": 0.2696,
      "is_result": false
    },
    "btts": {
      "pred": 0.4541,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.3453,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Orlando City",
    "away_team": "San Diego FC",
    "match_date": NaN,
    "score": "1-0",
    "over15": {
      "pred": 0.7992,
      "hit": false,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6208,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3421,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.418,
      "is_result": true
    },
    "draw": {
      "pred": 0.2362,
      "is_result": false
    },
    "away": {
      "pred": 0.3458,
      "is_result": false
    },
    "btts": {
      "pred": 0.6181,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4813,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Philadelphia Union",
    "away_team": "CF Montreal",
    "match_date": NaN,
    "score": "2-0",
    "over15": {
      "pred": 0.7962,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.619,
      "hit": false,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3385,
      "hit": true,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.6228,
      "is_result": true
    },
    "draw": {
      "pred": 0.1802,
      "is_result": false
    },
    "away": {
      "pred": 0.197,
      "is_result": false
    },
    "btts": {
      "pred": 0.5193,
      "hit": false,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4384,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Portland Timbers",
    "away_team": "Minnesota United",
    "match_date": NaN,
    "score": "5-4",
    "over15": {
      "pred": 0.7742,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.6023,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.3074,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.4416,
      "is_result": true
    },
    "draw": {
      "pred": 0.25,
      "is_result": false
    },
    "away": {
      "pred": 0.3084,
      "is_result": false
    },
    "btts": {
      "pred": 0.5622,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4462,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Real Salt Lake",
    "away_team": "Los Angeles FC",
    "match_date": NaN,
    "score": "2-2",
    "over15": {
      "pred": 0.7479,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5815,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.1231,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3922,
      "is_result": false
    },
    "draw": {
      "pred": 0.268,
      "is_result": true
    },
    "away": {
      "pred": 0.3398,
      "is_result": false
    },
    "btts": {
      "pred": 0.5151,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4101,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Toronto FC",
    "away_team": "Chicago Fire",
    "match_date": NaN,
    "score": "4-4",
    "over15": {
      "pred": 0.7577,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.5906,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.0985,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.3724,
      "is_result": false
    },
    "draw": {
      "pred": 0.2612,
      "is_result": true
    },
    "away": {
      "pred": 0.3665,
      "is_result": false
    },
    "btts": {
      "pred": 0.5327,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.4234,
      "hit": false,
      "label": "BTTS+O2.5"
    }
  },
  {
    "league": "USA MLS",
    "home_team": "Vancouver Whitecaps",
    "away_team": "St. Louis City",
    "match_date": NaN,
    "score": "1-3",
    "over15": {
      "pred": 0.8841,
      "hit": true,
      "label": "O 1.5"
    },
    "over25": {
      "pred": 0.7083,
      "hit": true,
      "label": "O 2.5"
    },
    "over35": {
      "pred": 0.498,
      "hit": false,
      "label": "O 3.5"
    },
    "home": {
      "pred": 0.7023,
      "is_result": false
    },
    "draw": {
      "pred": 0.1169,
      "is_result": false
    },
    "away": {
      "pred": 0.1808,
      "is_result": true
    },
    "btts": {
      "pred": 0.6448,
      "hit": true,
      "label": "BTTS"
    },
    "btts_over25": {
      "pred": 0.565,
      "hit": true,
      "label": "BTTS+O2.5"
    }
  }
];
