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
    "league": "Championship",
    "home_team": "Blackburn",
    "away_team": "QPR",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.5438,
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
      "pred": 0.4216,
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
      "pred": 0.5218,
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
      "pred": 0.5653,
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
      "pred": 0.4976,
      "hit": true,
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
      "pred": 0.5546,
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
      "pred": 0.5887,
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
    "away_team": "Burnley",
    "match_date": NaN,
    "score": "4-1",
    "over25": {
      "pred": 0.6099,
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
      "pred": 0.7576,
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
      "pred": 0.681,
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
      "pred": 0.7092,
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
    "home_team": "Wrexham",
    "away_team": "Birmingham",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.6111,
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
    }
  },
  {
    "league": "League One",
    "home_team": "AFC Wimbledon",
    "away_team": "Wigan",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.4884,
      "hit": true,
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
    "home_team": "Blackpool",
    "away_team": "Peterboro",
    "match_date": NaN,
    "score": "4-0",
    "over25": {
      "pred": 0.6775,
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
    "home_team": "Cambridge",
    "away_team": "Huddersfield",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.7043,
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
      "pred": 0.6044,
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
    "home_team": "Mansfield",
    "away_team": "Luton",
    "match_date": NaN,
    "score": "5-2",
    "over25": {
      "pred": 0.6231,
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
      "pred": 0.5687,
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
      "pred": 0.5416,
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
    "home_team": "Plymouth",
    "away_team": "Bradford",
    "match_date": NaN,
    "score": "2-0",
    "over25": {
      "pred": 0.5302,
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
    "home_team": "Sheffield Wed",
    "away_team": "Bromley",
    "match_date": NaN,
    "score": "7-2",
    "over25": {
      "pred": 0.6765,
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
    "home_team": "Stevenage",
    "away_team": "Doncaster",
    "match_date": NaN,
    "score": "2-2",
    "over25": {
      "pred": 0.5128,
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
      "pred": 0.7026,
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
    "league": "League Two",
    "home_team": "Barnet",
    "away_team": "Cheltenham",
    "match_date": NaN,
    "score": "2-2",
    "over25": {
      "pred": 0.7478,
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
    "home_team": "Colchester",
    "away_team": "Rochdale",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.5311,
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
      "pred": 0.6621,
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
    "home_team": "Gillingham",
    "away_team": "Northampton",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.4579,
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
    "away_team": "Fleetwood Town",
    "match_date": NaN,
    "score": "2-2",
    "over25": {
      "pred": 0.5996,
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
      "pred": 0.585,
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
    "home_team": "Oldham",
    "away_team": "Swindon",
    "match_date": NaN,
    "score": "3-0",
    "over25": {
      "pred": 0.5817,
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
      "pred": 0.5198,
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
    "home_team": "Rotherham",
    "away_team": "Chesterfield",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.6084,
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
    "home_team": "Shrewsbury",
    "away_team": "Salford",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.5326,
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
      "pred": 0.5751,
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
    "home_team": "York",
    "away_team": "Exeter",
    "match_date": NaN,
    "score": "2-1",
    "over25": {
      "pred": 0.544,
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
      "pred": 0.852,
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
      "pred": 0.5925,
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
    "away_team": "Yeovil",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.5856,
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
    "home_team": "Fylde",
    "away_team": "Forest Green",
    "match_date": NaN,
    "score": "2-0",
    "over25": {
      "pred": 0.7349,
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
    "away_team": "Sutton",
    "match_date": NaN,
    "score": "0-1",
    "over25": {
      "pred": 0.6116,
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
      "pred": 0.5774,
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
    "home_team": "Hornchurch",
    "away_team": "Woking",
    "match_date": NaN,
    "score": "1-0",
    "over25": {
      "pred": 0.5864,
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
      "pred": 0.7831,
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
      "pred": 0.5518,
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
    "away_team": "Worthing",
    "match_date": NaN,
    "score": "3-2",
    "over25": {
      "pred": 0.8964,
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
      "pred": 0.7814,
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
    "league": "Premier League",
    "home_team": "Aston Villa",
    "away_team": "Arsenal",
    "match_date": NaN,
    "score": "0-1",
    "over25": {
      "pred": 0.5649,
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
      "pred": 0.5506,
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
    "home_team": "Chelsea",
    "away_team": "Brighton",
    "match_date": NaN,
    "score": "4-3",
    "over25": {
      "pred": 0.7084,
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
      "pred": 0.6023,
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
    "home_team": "Leeds",
    "away_team": "Brentford",
    "match_date": NaN,
    "score": "1-1",
    "over25": {
      "pred": 0.6066,
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
      "pred": 0.612,
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
    "home_team": "Man United",
    "away_team": "Ipswich",
    "match_date": NaN,
    "score": "5-2",
    "over25": {
      "pred": 0.8208,
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
      "pred": 0.5194,
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
      "pred": 0.5699,
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
    "league": "Scottish Premiership",
    "home_team": "Aberdeen",
    "away_team": "Rangers",
    "match_date": NaN,
    "score": "0-1",
    "over25": {
      "pred": 0.614,
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
      "pred": 0.7775,
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
    "home_team": "Dundee",
    "away_team": "Hibernian",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.6005,
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
      "pred": 0.6083,
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
      "pred": 0.5306,
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
    "home_team": "St Mirren",
    "away_team": "Motherwell",
    "match_date": NaN,
    "score": "3-3",
    "over25": {
      "pred": 0.5134,
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
