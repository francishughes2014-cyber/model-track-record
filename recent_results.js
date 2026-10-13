const RECENT_RESULTS = [
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
    "home_team": "Blackburn",
    "away_team": "QPR",
    "match_date": NaN,
    "score": "1-2",
    "over25": {
      "pred": 0.5338,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3915,
      "is_result": false
    },
    "draw": {
      "pred": 0.2734,
      "is_result": false
    },
    "away": {
      "pred": 0.3351,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.4235,
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
      "pred": 0.5181,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.44,
      "is_result": false
    },
    "draw": {
      "pred": 0.293,
      "is_result": false
    },
    "away": {
      "pred": 0.2671,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3731,
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
      "pred": 0.5262,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.437,
      "is_result": true
    },
    "draw": {
      "pred": 0.2867,
      "is_result": false
    },
    "away": {
      "pred": 0.2763,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3053,
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
      "pred": 0.5682,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.373,
      "is_result": false
    },
    "draw": {
      "pred": 0.2602,
      "is_result": true
    },
    "away": {
      "pred": 0.3668,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3808,
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
      "pred": 0.5196,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.3514,
      "is_result": true
    },
    "draw": {
      "pred": 0.2976,
      "is_result": false
    },
    "away": {
      "pred": 0.351,
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
      "pred": 0.5347,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4163,
      "is_result": false
    },
    "draw": {
      "pred": 0.27,
      "is_result": false
    },
    "away": {
      "pred": 0.3137,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.3918,
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
      "pred": 0.546,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5034,
      "is_result": true
    },
    "draw": {
      "pred": 0.2524,
      "is_result": false
    },
    "away": {
      "pred": 0.2442,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.3558,
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
      "pred": 0.6389,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4359,
      "is_result": true
    },
    "draw": {
      "pred": 0.2443,
      "is_result": false
    },
    "away": {
      "pred": 0.3198,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5227,
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
      "pred": 0.6859,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4858,
      "is_result": true
    },
    "draw": {
      "pred": 0.2264,
      "is_result": false
    },
    "away": {
      "pred": 0.2878,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.4154,
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
      "pred": 0.663,
      "hit": false,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.2172,
      "is_result": false
    },
    "draw": {
      "pred": 0.2191,
      "is_result": true
    },
    "away": {
      "pred": 0.5637,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5527,
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
      "pred": 0.6341,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.5867,
      "is_result": true
    },
    "draw": {
      "pred": 0.2205,
      "is_result": false
    },
    "away": {
      "pred": 0.1928,
      "is_result": false
    },
    "ht_over15": {
      "pred": 0.5279,
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
      "pred": 0.6161,
      "hit": true,
      "label": "O 2.5"
    },
    "home": {
      "pred": 0.4349,
      "is_result": false
    },
    "draw": {
      "pred": 0.2487,
      "is_result": false
    },
    "away": {
      "pred": 0.3165,
      "is_result": true
    },
    "ht_over15": {
      "pred": 0.5097,
      "hit": false,
      "label": "HT O1.5"
    }
  }
];
