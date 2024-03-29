const countries = [
  {
    id: 1,
    name: "Afghanistan",
    subregion: "Southern Asia",
    latitude: "33.00000000",
    longitude: "65.00000000",
    flagEmoji: "🇦🇫",
  },
  {
    id: 2,
    name: "Aland Islands",
    subregion: "Northern Europe",
    latitude: "60.11666700",
    longitude: "19.90000000",
    flagEmoji: "🇦🇽",
  },
  {
    id: 3,
    name: "Albania",
    subregion: "Southern Europe",
    latitude: "41.00000000",
    longitude: "20.00000000",
    flagEmoji: "🇦🇱",
  },
  {
    id: 4,
    name: "Algeria",
    subregion: "Northern Africa",
    latitude: "28.00000000",
    longitude: "3.00000000",
    flagEmoji: "🇩🇿",
  },
  {
    id: 5,
    name: "American Samoa",
    subregion: "Polynesia",
    latitude: "-14.33333333",
    longitude: "-170.00000000",
    flagEmoji: "🇦🇸",
  },
  {
    id: 6,
    name: "Andorra",
    subregion: "Southern Europe",
    latitude: "42.50000000",
    longitude: "1.50000000",
    flagEmoji: "🇦🇩",
  },
  {
    id: 7,
    name: "Angola",
    subregion: "Middle Africa",
    latitude: "-12.50000000",
    longitude: "18.50000000",
    flagEmoji: "🇦🇴",
  },
  {
    id: 8,
    name: "Anguilla",
    subregion: "Caribbean",
    latitude: "18.25000000",
    longitude: "-63.16666666",
    flagEmoji: "🇦🇮",
  },
  {
    id: 9,
    name: "Antarctica",
    subregion: "",
    latitude: "-74.65000000",
    longitude: "4.48000000",
    flagEmoji: "🇦🇶",
  },
  {
    id: 10,
    name: "Antigua And Barbuda",
    subregion: "Caribbean",
    latitude: "17.05000000",
    longitude: "-61.80000000",
    flagEmoji: "🇦🇬",
  },
  {
    id: 11,
    name: "Argentina",
    subregion: "South America",
    latitude: "-34.00000000",
    longitude: "-64.00000000",
    flagEmoji: "🇦🇷",
  },
  {
    id: 12,
    name: "Armenia",
    subregion: "Western Asia",
    latitude: "40.00000000",
    longitude: "45.00000000",
    flagEmoji: "🇦🇲",
  },
  {
    id: 13,
    name: "Aruba",
    subregion: "Caribbean",
    latitude: "12.50000000",
    longitude: "-69.96666666",
    flagEmoji: "🇦🇼",
  },
  {
    id: 14,
    name: "Australia",
    subregion: "Australia and New Zealand",
    latitude: "-27.00000000",
    longitude: "133.00000000",
    flagEmoji: "🇦🇺",
  },
  {
    id: 15,
    name: "Austria",
    subregion: "Western Europe",
    latitude: "47.33333333",
    longitude: "13.33333333",
    flagEmoji: "🇦🇹",
  },
  {
    id: 16,
    name: "Azerbaijan",
    subregion: "Western Asia",
    latitude: "40.50000000",
    longitude: "47.50000000",
    flagEmoji: "🇦🇿",
  },
  {
    id: 17,
    name: "Bahamas The",
    subregion: "Caribbean",
    latitude: "24.25000000",
    longitude: "-76.00000000",
    flagEmoji: "🇧🇸",
  },
  {
    id: 18,
    name: "Bahrain",
    subregion: "Western Asia",
    latitude: "26.00000000",
    longitude: "50.55000000",
    flagEmoji: "🇧🇭",
  },
  {
    id: 19,
    name: "Bangladesh",
    subregion: "Southern Asia",
    latitude: "24.00000000",
    longitude: "90.00000000",
    flagEmoji: "🇧🇩",
  },
  {
    id: 20,
    name: "Barbados",
    subregion: "Caribbean",
    latitude: "13.16666666",
    longitude: "-59.53333333",
    flagEmoji: "🇧🇧",
  },
  {
    id: 21,
    name: "Belarus",
    subregion: "Eastern Europe",
    latitude: "53.00000000",
    longitude: "28.00000000",
    flagEmoji: "🇧🇾",
  },
  {
    id: 22,
    name: "Belgium",
    subregion: "Western Europe",
    latitude: "50.83333333",
    longitude: "4.00000000",
    flagEmoji: "🇧🇪",
  },
  {
    id: 23,
    name: "Belize",
    subregion: "Central America",
    latitude: "17.25000000",
    longitude: "-88.75000000",
    flagEmoji: "🇧🇿",
  },
  {
    id: 24,
    name: "Benin",
    subregion: "Western Africa",
    latitude: "9.50000000",
    longitude: "2.25000000",
    flagEmoji: "🇧🇯",
  },
  {
    id: 25,
    name: "Bermuda",
    subregion: "Northern America",
    latitude: "32.33333333",
    longitude: "-64.75000000",
    flagEmoji: "🇧🇲",
  },
  {
    id: 26,
    name: "Bhutan",
    subregion: "Southern Asia",
    latitude: "27.50000000",
    longitude: "90.50000000",
    flagEmoji: "🇧🇹",
  },
  {
    id: 27,
    name: "Bolivia",
    subregion: "South America",
    latitude: "-17.00000000",
    longitude: "-65.00000000",
    flagEmoji: "🇧🇴",
  },
  {
    id: 155,
    name: "Bonaire, Sint Eustatius and Saba",
    subregion: "Caribbean",
    latitude: "12.15000000",
    longitude: "-68.26666700",
    flagEmoji: "🇧🇶",
  },
  {
    id: 28,
    name: "Bosnia and Herzegovina",
    subregion: "Southern Europe",
    latitude: "44.00000000",
    longitude: "18.00000000",
    flagEmoji: "🇧🇦",
  },
  {
    id: 29,
    name: "Botswana",
    subregion: "Southern Africa",
    latitude: "-22.00000000",
    longitude: "24.00000000",
    flagEmoji: "🇧🇼",
  },
  {
    id: 30,
    name: "Bouvet Island",
    subregion: "",
    latitude: "-54.43333333",
    longitude: "3.40000000",
    flagEmoji: "🇧🇻",
  },
  {
    id: 31,
    name: "Brazil",
    subregion: "South America",
    latitude: "-10.00000000",
    longitude: "-55.00000000",
    flagEmoji: "🇧🇷",
  },
  {
    id: 32,
    name: "British Indian Ocean Territory",
    subregion: "Eastern Africa",
    latitude: "-6.00000000",
    longitude: "71.50000000",
    flagEmoji: "🇮🇴",
  },
  {
    id: 33,
    name: "Brunei",
    subregion: "South-Eastern Asia",
    latitude: "4.50000000",
    longitude: "114.66666666",
    flagEmoji: "🇧🇳",
  },
  {
    id: 34,
    name: "Bulgaria",
    subregion: "Eastern Europe",
    latitude: "43.00000000",
    longitude: "25.00000000",
    flagEmoji: "🇧🇬",
  },
  {
    id: 35,
    name: "Burkina Faso",
    subregion: "Western Africa",
    latitude: "13.00000000",
    longitude: "-2.00000000",
    flagEmoji: "🇧🇫",
  },
  {
    id: 36,
    name: "Burundi",
    subregion: "Eastern Africa",
    latitude: "-3.50000000",
    longitude: "30.00000000",
    flagEmoji: "🇧🇮",
  },
  {
    id: 37,
    name: "Cambodia",
    subregion: "South-Eastern Asia",
    latitude: "13.00000000",
    longitude: "105.00000000",
    flagEmoji: "🇰🇭",
  },
  {
    id: 38,
    name: "Cameroon",
    subregion: "Middle Africa",
    latitude: "6.00000000",
    longitude: "12.00000000",
    flagEmoji: "🇨🇲",
  },
  {
    id: 39,
    name: "Canada",
    subregion: "Northern America",
    latitude: "60.00000000",
    longitude: "-95.00000000",
    flagEmoji: "🇨🇦",
  },
  {
    id: 40,
    name: "Cape Verde",
    subregion: "Western Africa",
    latitude: "16.00000000",
    longitude: "-24.00000000",
    flagEmoji: "🇨🇻",
  },
  {
    id: 41,
    name: "Cayman Islands",
    subregion: "Caribbean",
    latitude: "19.50000000",
    longitude: "-80.50000000",
    flagEmoji: "🇰🇾",
  },
  {
    id: 42,
    name: "Central African Republic",
    subregion: "Middle Africa",
    latitude: "7.00000000",
    longitude: "21.00000000",
    flagEmoji: "🇨🇫",
  },
  {
    id: 43,
    name: "Chad",
    subregion: "Middle Africa",
    latitude: "15.00000000",
    longitude: "19.00000000",
    flagEmoji: "🇹🇩",
  },
  {
    id: 44,
    name: "Chile",
    subregion: "South America",
    latitude: "-30.00000000",
    longitude: "-71.00000000",
    flagEmoji: "🇨🇱",
  },
  {
    id: 45,
    name: "China",
    subregion: "Eastern Asia",
    latitude: "35.00000000",
    longitude: "105.00000000",
    flagEmoji: "🇨🇳",
  },
  {
    id: 46,
    name: "Christmas Island",
    subregion: "Australia and New Zealand",
    latitude: "-10.50000000",
    longitude: "105.66666666",
    flagEmoji: "🇨🇽",
  },
  {
    id: 47,
    name: "Cocos (Keeling) Islands",
    subregion: "Australia and New Zealand",
    latitude: "-12.50000000",
    longitude: "96.83333333",
    flagEmoji: "🇨🇨",
  },
  {
    id: 48,
    name: "Colombia",
    subregion: "South America",
    latitude: "4.00000000",
    longitude: "-72.00000000",
    flagEmoji: "🇨🇴",
  },
  {
    id: 49,
    name: "Comoros",
    subregion: "Eastern Africa",
    latitude: "-12.16666666",
    longitude: "44.25000000",
    flagEmoji: "🇰🇲",
  },
  {
    id: 50,
    name: "Congo",
    subregion: "Middle Africa",
    latitude: "-1.00000000",
    longitude: "15.00000000",
    flagEmoji: "🇨🇬",
  },
  {
    id: 52,
    name: "Cook Islands",
    subregion: "Polynesia",
    latitude: "-21.23333333",
    longitude: "-159.76666666",
    flagEmoji: "🇨🇰",
  },
  {
    id: 53,
    name: "Costa Rica",
    subregion: "Central America",
    latitude: "10.00000000",
    longitude: "-84.00000000",
    flagEmoji: "🇨🇷",
  },
  {
    id: 54,
    name: "Cote D'Ivoire (Ivory Coast)",
    subregion: "Western Africa",
    latitude: "8.00000000",
    longitude: "-5.00000000",
    flagEmoji: "🇨🇮",
  },
  {
    id: 55,
    name: "Croatia",
    subregion: "Southern Europe",
    latitude: "45.16666666",
    longitude: "15.50000000",
    flagEmoji: "🇭🇷",
  },
  {
    id: 56,
    name: "Cuba",
    subregion: "Caribbean",
    latitude: "21.50000000",
    longitude: "-80.00000000",
    flagEmoji: "🇨🇺",
  },
  {
    id: 249,
    name: "Curaçao",
    subregion: "Caribbean",
    latitude: "12.11666700",
    longitude: "-68.93333300",
    flagEmoji: "🇨🇼",
  },
  {
    id: 57,
    name: "Cyprus",
    subregion: "Southern Europe",
    latitude: "35.00000000",
    longitude: "33.00000000",
    flagEmoji: "🇨🇾",
  },
  {
    id: 58,
    name: "Czech Republic",
    subregion: "Eastern Europe",
    latitude: "49.75000000",
    longitude: "15.50000000",
    flagEmoji: "🇨🇿",
  },
  {
    id: 51,
    name: "Democratic Republic of the Congo",
    subregion: "Middle Africa",
    latitude: "0.00000000",
    longitude: "25.00000000",
    flagEmoji: "🇨🇩",
  },
  {
    id: 59,
    name: "Denmark",
    subregion: "Northern Europe",
    latitude: "56.00000000",
    longitude: "10.00000000",
    flagEmoji: "🇩🇰",
  },
  {
    id: 60,
    name: "Djibouti",
    subregion: "Eastern Africa",
    latitude: "11.50000000",
    longitude: "43.00000000",
    flagEmoji: "🇩🇯",
  },
  {
    id: 61,
    name: "Dominica",
    subregion: "Caribbean",
    latitude: "15.41666666",
    longitude: "-61.33333333",
    flagEmoji: "🇩🇲",
  },
  {
    id: 62,
    name: "Dominican Republic",
    subregion: "Caribbean",
    latitude: "19.00000000",
    longitude: "-70.66666666",
    flagEmoji: "🇩🇴",
  },
  {
    id: 63,
    name: "East Timor",
    subregion: "South-Eastern Asia",
    latitude: "-8.83333333",
    longitude: "125.91666666",
    flagEmoji: "🇹🇱",
  },
  {
    id: 64,
    name: "Ecuador",
    subregion: "South America",
    latitude: "-2.00000000",
    longitude: "-77.50000000",
    flagEmoji: "🇪🇨",
  },
  {
    id: 65,
    name: "Egypt",
    subregion: "Northern Africa",
    latitude: "27.00000000",
    longitude: "30.00000000",
    flagEmoji: "🇪🇬",
  },
  {
    id: 66,
    name: "El Salvador",
    subregion: "Central America",
    latitude: "13.83333333",
    longitude: "-88.91666666",
    flagEmoji: "🇸🇻",
  },
  {
    id: 67,
    name: "Equatorial Guinea",
    subregion: "Middle Africa",
    latitude: "2.00000000",
    longitude: "10.00000000",
    flagEmoji: "🇬🇶",
  },
  {
    id: 68,
    name: "Eritrea",
    subregion: "Eastern Africa",
    latitude: "15.00000000",
    longitude: "39.00000000",
    flagEmoji: "🇪🇷",
  },
  {
    id: 69,
    name: "Estonia",
    subregion: "Northern Europe",
    latitude: "59.00000000",
    longitude: "26.00000000",
    flagEmoji: "🇪🇪",
  },
  {
    id: 70,
    name: "Ethiopia",
    subregion: "Eastern Africa",
    latitude: "8.00000000",
    longitude: "38.00000000",
    flagEmoji: "🇪🇹",
  },
  {
    id: 71,
    name: "Falkland Islands",
    subregion: "South America",
    latitude: "-51.75000000",
    longitude: "-59.00000000",
    flagEmoji: "🇫🇰",
  },
  {
    id: 72,
    name: "Faroe Islands",
    subregion: "Northern Europe",
    latitude: "62.00000000",
    longitude: "-7.00000000",
    flagEmoji: "🇫🇴",
  },
  {
    id: 73,
    name: "Fiji Islands",
    subregion: "Melanesia",
    latitude: "-18.00000000",
    longitude: "175.00000000",
    flagEmoji: "🇫🇯",
  },
  {
    id: 74,
    name: "Finland",
    subregion: "Northern Europe",
    latitude: "64.00000000",
    longitude: "26.00000000",
    flagEmoji: "🇫🇮",
  },
  {
    id: 75,
    name: "France",
    subregion: "Western Europe",
    latitude: "46.00000000",
    longitude: "2.00000000",
    flagEmoji: "🇫🇷",
  },
  {
    id: 76,
    name: "French Guiana",
    subregion: "South America",
    latitude: "4.00000000",
    longitude: "-53.00000000",
    flagEmoji: "🇬🇫",
  },
  {
    id: 77,
    name: "French Polynesia",
    subregion: "Polynesia",
    latitude: "-15.00000000",
    longitude: "-140.00000000",
    flagEmoji: "🇵🇫",
  },
  {
    id: 78,
    name: "French Southern Territories",
    subregion: "Southern Africa",
    latitude: "-49.25000000",
    longitude: "69.16700000",
    flagEmoji: "🇹🇫",
  },
  {
    id: 79,
    name: "Gabon",
    subregion: "Middle Africa",
    latitude: "-1.00000000",
    longitude: "11.75000000",
    flagEmoji: "🇬🇦",
  },
  {
    id: 80,
    name: "Gambia The",
    subregion: "Western Africa",
    latitude: "13.46666666",
    longitude: "-16.56666666",
    flagEmoji: "🇬🇲",
  },
  {
    id: 81,
    name: "Georgia",
    subregion: "Western Asia",
    latitude: "42.00000000",
    longitude: "43.50000000",
    flagEmoji: "🇬🇪",
  },
  {
    id: 82,
    name: "Germany",
    subregion: "Western Europe",
    latitude: "51.00000000",
    longitude: "9.00000000",
    flagEmoji: "🇩🇪",
  },
  {
    id: 83,
    name: "Ghana",
    subregion: "Western Africa",
    latitude: "8.00000000",
    longitude: "-2.00000000",
    flagEmoji: "🇬🇭",
  },
  {
    id: 84,
    name: "Gibraltar",
    subregion: "Southern Europe",
    latitude: "36.13333333",
    longitude: "-5.35000000",
    flagEmoji: "🇬🇮",
  },
  {
    id: 85,
    name: "Greece",
    subregion: "Southern Europe",
    latitude: "39.00000000",
    longitude: "22.00000000",
    flagEmoji: "🇬🇷",
  },
  {
    id: 86,
    name: "Greenland",
    subregion: "Northern America",
    latitude: "72.00000000",
    longitude: "-40.00000000",
    flagEmoji: "🇬🇱",
  },
  {
    id: 87,
    name: "Grenada",
    subregion: "Caribbean",
    latitude: "12.11666666",
    longitude: "-61.66666666",
    flagEmoji: "🇬🇩",
  },
  {
    id: 88,
    name: "Guadeloupe",
    subregion: "Caribbean",
    latitude: "16.25000000",
    longitude: "-61.58333300",
    flagEmoji: "🇬🇵",
  },
  {
    id: 89,
    name: "Guam",
    subregion: "Micronesia",
    latitude: "13.46666666",
    longitude: "144.78333333",
    flagEmoji: "🇬🇺",
  },
  {
    id: 90,
    name: "Guatemala",
    subregion: "Central America",
    latitude: "15.50000000",
    longitude: "-90.25000000",
    flagEmoji: "🇬🇹",
  },
  {
    id: 91,
    name: "Guernsey and Alderney",
    subregion: "Northern Europe",
    latitude: "49.46666666",
    longitude: "-2.58333333",
    flagEmoji: "🇬🇬",
  },
  {
    id: 92,
    name: "Guinea",
    subregion: "Western Africa",
    latitude: "11.00000000",
    longitude: "-10.00000000",
    flagEmoji: "🇬🇳",
  },
  {
    id: 93,
    name: "Guinea-Bissau",
    subregion: "Western Africa",
    latitude: "12.00000000",
    longitude: "-15.00000000",
    flagEmoji: "🇬🇼",
  },
  {
    id: 94,
    name: "Guyana",
    subregion: "South America",
    latitude: "5.00000000",
    longitude: "-59.00000000",
    flagEmoji: "🇬🇾",
  },
  {
    id: 95,
    name: "Haiti",
    subregion: "Caribbean",
    latitude: "19.00000000",
    longitude: "-72.41666666",
    flagEmoji: "🇭🇹",
  },
  {
    id: 96,
    name: "Heard Island and McDonald Islands",
    subregion: "",
    latitude: "-53.10000000",
    longitude: "72.51666666",
    flagEmoji: "🇭🇲",
  },
  {
    id: 97,
    name: "Honduras",
    subregion: "Central America",
    latitude: "15.00000000",
    longitude: "-86.50000000",
    flagEmoji: "🇭🇳",
  },
  {
    id: 98,
    name: "Hong Kong S.A.R.",
    subregion: "Eastern Asia",
    latitude: "22.25000000",
    longitude: "114.16666666",
    flagEmoji: "🇭🇰",
  },
  {
    id: 99,
    name: "Hungary",
    subregion: "Eastern Europe",
    latitude: "47.00000000",
    longitude: "20.00000000",
    flagEmoji: "🇭🇺",
  },
  {
    id: 100,
    name: "Iceland",
    subregion: "Northern Europe",
    latitude: "65.00000000",
    longitude: "-18.00000000",
    flagEmoji: "🇮🇸",
  },
  {
    id: 101,
    name: "India",
    subregion: "Southern Asia",
    latitude: "20.00000000",
    longitude: "77.00000000",
    flagEmoji: "🇮🇳",
  },
  {
    id: 102,
    name: "Indonesia",
    subregion: "South-Eastern Asia",
    latitude: "-5.00000000",
    longitude: "120.00000000",
    flagEmoji: "🇮🇩",
  },
  {
    id: 103,
    name: "Iran",
    subregion: "Southern Asia",
    latitude: "32.00000000",
    longitude: "53.00000000",
    flagEmoji: "🇮🇷",
  },
  {
    id: 104,
    name: "Iraq",
    subregion: "Western Asia",
    latitude: "33.00000000",
    longitude: "44.00000000",
    flagEmoji: "🇮🇶",
  },
  {
    id: 105,
    name: "Ireland",
    subregion: "Northern Europe",
    latitude: "53.00000000",
    longitude: "-8.00000000",
    flagEmoji: "🇮🇪",
  },
  {
    id: 106,
    name: "Israel",
    subregion: "Western Asia",
    latitude: "31.50000000",
    longitude: "34.75000000",
    flagEmoji: "🇮🇱",
  },
  {
    id: 107,
    name: "Italy",
    subregion: "Southern Europe",
    latitude: "42.83333333",
    longitude: "12.83333333",
    flagEmoji: "🇮🇹",
  },
  {
    id: 108,
    name: "Jamaica",
    subregion: "Caribbean",
    latitude: "18.25000000",
    longitude: "-77.50000000",
    flagEmoji: "🇯🇲",
  },
  {
    id: 109,
    name: "Japan",
    subregion: "Eastern Asia",
    latitude: "36.00000000",
    longitude: "138.00000000",
    flagEmoji: "🇯🇵",
  },
  {
    id: 110,
    name: "Jersey",
    subregion: "Northern Europe",
    latitude: "49.25000000",
    longitude: "-2.16666666",
    flagEmoji: "🇯🇪",
  },
  {
    id: 111,
    name: "Jordan",
    subregion: "Western Asia",
    latitude: "31.00000000",
    longitude: "36.00000000",
    flagEmoji: "🇯🇴",
  },
  {
    id: 112,
    name: "Kazakhstan",
    subregion: "Central Asia",
    latitude: "48.00000000",
    longitude: "68.00000000",
    flagEmoji: "🇰🇿",
  },
  {
    id: 113,
    name: "Kenya",
    subregion: "Eastern Africa",
    latitude: "1.00000000",
    longitude: "38.00000000",
    flagEmoji: "🇰🇪",
  },
  {
    id: 114,
    name: "Kiribati",
    subregion: "Micronesia",
    latitude: "1.41666666",
    longitude: "173.00000000",
    flagEmoji: "🇰🇮",
  },
  {
    id: 248,
    name: "Kosovo",
    subregion: "Eastern Europe",
    latitude: "42.56129090",
    longitude: "20.34030350",
    flagEmoji: "🇽🇰",
  },
  {
    id: 117,
    name: "Kuwait",
    subregion: "Western Asia",
    latitude: "29.50000000",
    longitude: "45.75000000",
    flagEmoji: "🇰🇼",
  },
  {
    id: 118,
    name: "Kyrgyzstan",
    subregion: "Central Asia",
    latitude: "41.00000000",
    longitude: "75.00000000",
    flagEmoji: "🇰🇬",
  },
  {
    id: 119,
    name: "Laos",
    subregion: "South-Eastern Asia",
    latitude: "18.00000000",
    longitude: "105.00000000",
    flagEmoji: "🇱🇦",
  },
  {
    id: 120,
    name: "Latvia",
    subregion: "Northern Europe",
    latitude: "57.00000000",
    longitude: "25.00000000",
    flagEmoji: "🇱🇻",
  },
  {
    id: 121,
    name: "Lebanon",
    subregion: "Western Asia",
    latitude: "33.83333333",
    longitude: "35.83333333",
    flagEmoji: "🇱🇧",
  },
  {
    id: 122,
    name: "Lesotho",
    subregion: "Southern Africa",
    latitude: "-29.50000000",
    longitude: "28.50000000",
    flagEmoji: "🇱🇸",
  },
  {
    id: 123,
    name: "Liberia",
    subregion: "Western Africa",
    latitude: "6.50000000",
    longitude: "-9.50000000",
    flagEmoji: "🇱🇷",
  },
  {
    id: 124,
    name: "Libya",
    subregion: "Northern Africa",
    latitude: "25.00000000",
    longitude: "17.00000000",
    flagEmoji: "🇱🇾",
  },
  {
    id: 125,
    name: "Liechtenstein",
    subregion: "Western Europe",
    latitude: "47.26666666",
    longitude: "9.53333333",
    flagEmoji: "🇱🇮",
  },
  {
    id: 126,
    name: "Lithuania",
    subregion: "Northern Europe",
    latitude: "56.00000000",
    longitude: "24.00000000",
    flagEmoji: "🇱🇹",
  },
  {
    id: 127,
    name: "Luxembourg",
    subregion: "Western Europe",
    latitude: "49.75000000",
    longitude: "6.16666666",
    flagEmoji: "🇱🇺",
  },
  {
    id: 128,
    name: "Macau S.A.R.",
    subregion: "Eastern Asia",
    latitude: "22.16666666",
    longitude: "113.55000000",
    flagEmoji: "🇲🇴",
  },
  {
    id: 129,
    name: "Macedonia",
    subregion: "Southern Europe",
    latitude: "41.83333333",
    longitude: "22.00000000",
    flagEmoji: "🇲🇰",
  },
  {
    id: 130,
    name: "Madagascar",
    subregion: "Eastern Africa",
    latitude: "-20.00000000",
    longitude: "47.00000000",
    flagEmoji: "🇲🇬",
  },
  {
    id: 131,
    name: "Malawi",
    subregion: "Eastern Africa",
    latitude: "-13.50000000",
    longitude: "34.00000000",
    flagEmoji: "🇲🇼",
  },
  {
    id: 132,
    name: "Malaysia",
    subregion: "South-Eastern Asia",
    latitude: "2.50000000",
    longitude: "112.50000000",
    flagEmoji: "🇲🇾",
  },
  {
    id: 133,
    name: "Maldives",
    subregion: "Southern Asia",
    latitude: "3.25000000",
    longitude: "73.00000000",
    flagEmoji: "🇲🇻",
  },
  {
    id: 134,
    name: "Mali",
    subregion: "Western Africa",
    latitude: "17.00000000",
    longitude: "-4.00000000",
    flagEmoji: "🇲🇱",
  },
  {
    id: 135,
    name: "Malta",
    subregion: "Southern Europe",
    latitude: "35.83333333",
    longitude: "14.58333333",
    flagEmoji: "🇲🇹",
  },
  {
    id: 136,
    name: "Man (Isle of)",
    subregion: "Northern Europe",
    latitude: "54.25000000",
    longitude: "-4.50000000",
    flagEmoji: "🇮🇲",
  },
  {
    id: 137,
    name: "Marshall Islands",
    subregion: "Micronesia",
    latitude: "9.00000000",
    longitude: "168.00000000",
    flagEmoji: "🇲🇭",
  },
  {
    id: 138,
    name: "Martinique",
    subregion: "Caribbean",
    latitude: "14.66666700",
    longitude: "-61.00000000",
    flagEmoji: "🇲🇶",
  },
  {
    id: 139,
    name: "Mauritania",
    subregion: "Western Africa",
    latitude: "20.00000000",
    longitude: "-12.00000000",
    flagEmoji: "🇲🇷",
  },
  {
    id: 140,
    name: "Mauritius",
    subregion: "Eastern Africa",
    latitude: "-20.28333333",
    longitude: "57.55000000",
    flagEmoji: "🇲🇺",
  },
  {
    id: 141,
    name: "Mayotte",
    subregion: "Eastern Africa",
    latitude: "-12.83333333",
    longitude: "45.16666666",
    flagEmoji: "🇾🇹",
  },
  {
    id: 142,
    name: "Mexico",
    subregion: "Central America",
    latitude: "23.00000000",
    longitude: "-102.00000000",
    flagEmoji: "🇲🇽",
  },
  {
    id: 143,
    name: "Micronesia",
    subregion: "Micronesia",
    latitude: "6.91666666",
    longitude: "158.25000000",
    flagEmoji: "🇫🇲",
  },
  {
    id: 144,
    name: "Moldova",
    subregion: "Eastern Europe",
    latitude: "47.00000000",
    longitude: "29.00000000",
    flagEmoji: "🇲🇩",
  },
  {
    id: 145,
    name: "Monaco",
    subregion: "Western Europe",
    latitude: "43.73333333",
    longitude: "7.40000000",
    flagEmoji: "🇲🇨",
  },
  {
    id: 146,
    name: "Mongolia",
    subregion: "Eastern Asia",
    latitude: "46.00000000",
    longitude: "105.00000000",
    flagEmoji: "🇲🇳",
  },
  {
    id: 147,
    name: "Montenegro",
    subregion: "Southern Europe",
    latitude: "42.50000000",
    longitude: "19.30000000",
    flagEmoji: "🇲🇪",
  },
  {
    id: 148,
    name: "Montserrat",
    subregion: "Caribbean",
    latitude: "16.75000000",
    longitude: "-62.20000000",
    flagEmoji: "🇲🇸",
  },
  {
    id: 149,
    name: "Morocco",
    subregion: "Northern Africa",
    latitude: "32.00000000",
    longitude: "-5.00000000",
    flagEmoji: "🇲🇦",
  },
  {
    id: 150,
    name: "Mozambique",
    subregion: "Eastern Africa",
    latitude: "-18.25000000",
    longitude: "35.00000000",
    flagEmoji: "🇲🇿",
  },
  {
    id: 151,
    name: "Myanmar",
    subregion: "South-Eastern Asia",
    latitude: "22.00000000",
    longitude: "98.00000000",
    flagEmoji: "🇲🇲",
  },
  {
    id: 152,
    name: "Namibia",
    subregion: "Southern Africa",
    latitude: "-22.00000000",
    longitude: "17.00000000",
    flagEmoji: "🇳🇦",
  },
  {
    id: 153,
    name: "Nauru",
    subregion: "Micronesia",
    latitude: "-0.53333333",
    longitude: "166.91666666",
    flagEmoji: "🇳🇷",
  },
  {
    id: 154,
    name: "Nepal",
    subregion: "Southern Asia",
    latitude: "28.00000000",
    longitude: "84.00000000",
    flagEmoji: "🇳🇵",
  },
  {
    id: 156,
    name: "Netherlands",
    subregion: "Western Europe",
    latitude: "52.50000000",
    longitude: "5.75000000",
    flagEmoji: "🇳🇱",
  },
  {
    id: 157,
    name: "New Caledonia",
    subregion: "Melanesia",
    latitude: "-21.50000000",
    longitude: "165.50000000",
    flagEmoji: "🇳🇨",
  },
  {
    id: 158,
    name: "New Zealand",
    subregion: "Australia and New Zealand",
    latitude: "-41.00000000",
    longitude: "174.00000000",
    flagEmoji: "🇳🇿",
  },
  {
    id: 159,
    name: "Nicaragua",
    subregion: "Central America",
    latitude: "13.00000000",
    longitude: "-85.00000000",
    flagEmoji: "🇳🇮",
  },
  {
    id: 160,
    name: "Niger",
    subregion: "Western Africa",
    latitude: "16.00000000",
    longitude: "8.00000000",
    flagEmoji: "🇳🇪",
  },
  {
    id: 161,
    name: "Nigeria",
    subregion: "Western Africa",
    latitude: "10.00000000",
    longitude: "8.00000000",
    flagEmoji: "🇳🇬",
  },
  {
    id: 162,
    name: "Niue",
    subregion: "Polynesia",
    latitude: "-19.03333333",
    longitude: "-169.86666666",
    flagEmoji: "🇳🇺",
  },
  {
    id: 163,
    name: "Norfolk Island",
    subregion: "Australia and New Zealand",
    latitude: "-29.03333333",
    longitude: "167.95000000",
    flagEmoji: "🇳🇫",
  },
  {
    id: 115,
    name: "North Korea",
    subregion: "Eastern Asia",
    latitude: "40.00000000",
    longitude: "127.00000000",
    flagEmoji: "🇰🇵",
  },
  {
    id: 164,
    name: "Northern Mariana Islands",
    subregion: "Micronesia",
    latitude: "15.20000000",
    longitude: "145.75000000",
    flagEmoji: "🇲🇵",
  },
  {
    id: 165,
    name: "Norway",
    subregion: "Northern Europe",
    latitude: "62.00000000",
    longitude: "10.00000000",
    flagEmoji: "🇳🇴",
  },
  {
    id: 166,
    name: "Oman",
    subregion: "Western Asia",
    latitude: "21.00000000",
    longitude: "57.00000000",
    flagEmoji: "🇴🇲",
  },
  {
    id: 167,
    name: "Pakistan",
    subregion: "Southern Asia",
    latitude: "30.00000000",
    longitude: "70.00000000",
    flagEmoji: "🇵🇰",
  },
  {
    id: 168,
    name: "Palau",
    subregion: "Micronesia",
    latitude: "7.50000000",
    longitude: "134.50000000",
    flagEmoji: "🇵🇼",
  },
  {
    id: 169,
    name: "Palestinian Territory Occupied",
    subregion: "Western Asia",
    latitude: "31.90000000",
    longitude: "35.20000000",
    flagEmoji: "🇵🇸",
  },
  {
    id: 170,
    name: "Panama",
    subregion: "Central America",
    latitude: "9.00000000",
    longitude: "-80.00000000",
    flagEmoji: "🇵🇦",
  },
  {
    id: 171,
    name: "Papua new Guinea",
    subregion: "Melanesia",
    latitude: "-6.00000000",
    longitude: "147.00000000",
    flagEmoji: "🇵🇬",
  },
  {
    id: 172,
    name: "Paraguay",
    subregion: "South America",
    latitude: "-23.00000000",
    longitude: "-58.00000000",
    flagEmoji: "🇵🇾",
  },
  {
    id: 173,
    name: "Peru",
    subregion: "South America",
    latitude: "-10.00000000",
    longitude: "-76.00000000",
    flagEmoji: "🇵🇪",
  },
  {
    id: 174,
    name: "Philippines",
    subregion: "South-Eastern Asia",
    latitude: "13.00000000",
    longitude: "122.00000000",
    flagEmoji: "🇵🇭",
  },
  {
    id: 175,
    name: "Pitcairn Island",
    subregion: "Polynesia",
    latitude: "-25.06666666",
    longitude: "-130.10000000",
    flagEmoji: "🇵🇳",
  },
  {
    id: 176,
    name: "Poland",
    subregion: "Eastern Europe",
    latitude: "52.00000000",
    longitude: "20.00000000",
    flagEmoji: "🇵🇱",
  },
  {
    id: 177,
    name: "Portugal",
    subregion: "Southern Europe",
    latitude: "39.50000000",
    longitude: "-8.00000000",
    flagEmoji: "🇵🇹",
  },
  {
    id: 178,
    name: "Puerto Rico",
    subregion: "Caribbean",
    latitude: "18.25000000",
    longitude: "-66.50000000",
    flagEmoji: "🇵🇷",
  },
  {
    id: 179,
    name: "Qatar",
    subregion: "Western Asia",
    latitude: "25.50000000",
    longitude: "51.25000000",
    flagEmoji: "🇶🇦",
  },
  {
    id: 180,
    name: "Reunion",
    subregion: "Eastern Africa",
    latitude: "-21.15000000",
    longitude: "55.50000000",
    flagEmoji: "🇷🇪",
  },
  {
    id: 181,
    name: "Romania",
    subregion: "Eastern Europe",
    latitude: "46.00000000",
    longitude: "25.00000000",
    flagEmoji: "🇷🇴",
  },
  {
    id: 182,
    name: "Russia",
    subregion: "Eastern Europe",
    latitude: "60.00000000",
    longitude: "100.00000000",
    flagEmoji: "🇷🇺",
  },
  {
    id: 183,
    name: "Rwanda",
    subregion: "Eastern Africa",
    latitude: "-2.00000000",
    longitude: "30.00000000",
    flagEmoji: "🇷🇼",
  },
  {
    id: 184,
    name: "Saint Helena",
    subregion: "Western Africa",
    latitude: "-15.95000000",
    longitude: "-5.70000000",
    flagEmoji: "🇸🇭",
  },
  {
    id: 185,
    name: "Saint Kitts And Nevis",
    subregion: "Caribbean",
    latitude: "17.33333333",
    longitude: "-62.75000000",
    flagEmoji: "🇰🇳",
  },
  {
    id: 186,
    name: "Saint Lucia",
    subregion: "Caribbean",
    latitude: "13.88333333",
    longitude: "-60.96666666",
    flagEmoji: "🇱🇨",
  },
  {
    id: 187,
    name: "Saint Pierre and Miquelon",
    subregion: "Northern America",
    latitude: "46.83333333",
    longitude: "-56.33333333",
    flagEmoji: "🇵🇲",
  },
  {
    id: 188,
    name: "Saint Vincent And The Grenadines",
    subregion: "Caribbean",
    latitude: "13.25000000",
    longitude: "-61.20000000",
    flagEmoji: "🇻🇨",
  },
  {
    id: 189,
    name: "Saint-Barthelemy",
    subregion: "Caribbean",
    latitude: "18.50000000",
    longitude: "-63.41666666",
    flagEmoji: "🇧🇱",
  },
  {
    id: 190,
    name: "Saint-Martin (French part)",
    subregion: "Caribbean",
    latitude: "18.08333333",
    longitude: "-63.95000000",
    flagEmoji: "🇲🇫",
  },
  {
    id: 191,
    name: "Samoa",
    subregion: "Polynesia",
    latitude: "-13.58333333",
    longitude: "-172.33333333",
    flagEmoji: "🇼🇸",
  },
  {
    id: 192,
    name: "San Marino",
    subregion: "Southern Europe",
    latitude: "43.76666666",
    longitude: "12.41666666",
    flagEmoji: "🇸🇲",
  },
  {
    id: 193,
    name: "Sao Tome and Principe",
    subregion: "Middle Africa",
    latitude: "1.00000000",
    longitude: "7.00000000",
    flagEmoji: "🇸🇹",
  },
  {
    id: 194,
    name: "Saudi Arabia",
    subregion: "Western Asia",
    latitude: "25.00000000",
    longitude: "45.00000000",
    flagEmoji: "🇸🇦",
  },
  {
    id: 195,
    name: "Senegal",
    subregion: "Western Africa",
    latitude: "14.00000000",
    longitude: "-14.00000000",
    flagEmoji: "🇸🇳",
  },
  {
    id: 196,
    name: "Serbia",
    subregion: "Southern Europe",
    latitude: "44.00000000",
    longitude: "21.00000000",
    flagEmoji: "🇷🇸",
  },
  {
    id: 197,
    name: "Seychelles",
    subregion: "Eastern Africa",
    latitude: "-4.58333333",
    longitude: "55.66666666",
    flagEmoji: "🇸🇨",
  },
  {
    id: 198,
    name: "Sierra Leone",
    subregion: "Western Africa",
    latitude: "8.50000000",
    longitude: "-11.50000000",
    flagEmoji: "🇸🇱",
  },
  {
    id: 199,
    name: "Singapore",
    subregion: "South-Eastern Asia",
    latitude: "1.36666666",
    longitude: "103.80000000",
    flagEmoji: "🇸🇬",
  },
  {
    id: 250,
    name: "Sint Maarten (Dutch part)",
    subregion: "Caribbean",
    latitude: "18.03333300",
    longitude: "-63.05000000",
    flagEmoji: "🇸🇽",
  },
  {
    id: 200,
    name: "Slovakia",
    subregion: "Eastern Europe",
    latitude: "48.66666666",
    longitude: "19.50000000",
    flagEmoji: "🇸🇰",
  },
  {
    id: 201,
    name: "Slovenia",
    subregion: "Southern Europe",
    latitude: "46.11666666",
    longitude: "14.81666666",
    flagEmoji: "🇸🇮",
  },
  {
    id: 202,
    name: "Solomon Islands",
    subregion: "Melanesia",
    latitude: "-8.00000000",
    longitude: "159.00000000",
    flagEmoji: "🇸🇧",
  },
  {
    id: 203,
    name: "Somalia",
    subregion: "Eastern Africa",
    latitude: "10.00000000",
    longitude: "49.00000000",
    flagEmoji: "🇸🇴",
  },
  {
    id: 204,
    name: "South Africa",
    subregion: "Southern Africa",
    latitude: "-29.00000000",
    longitude: "24.00000000",
    flagEmoji: "🇿🇦",
  },
  {
    id: 205,
    name: "South Georgia",
    subregion: "South America",
    latitude: "-54.50000000",
    longitude: "-37.00000000",
    flagEmoji: "🇬🇸",
  },
  {
    id: 116,
    name: "South Korea",
    subregion: "Eastern Asia",
    latitude: "37.00000000",
    longitude: "127.50000000",
    flagEmoji: "🇰🇷",
  },
  {
    id: 206,
    name: "South Sudan",
    subregion: "Middle Africa",
    latitude: "7.00000000",
    longitude: "30.00000000",
    flagEmoji: "🇸🇸",
  },
  {
    id: 207,
    name: "Spain",
    subregion: "Southern Europe",
    latitude: "40.00000000",
    longitude: "-4.00000000",
    flagEmoji: "🇪🇸",
  },
  {
    id: 208,
    name: "Sri Lanka",
    subregion: "Southern Asia",
    latitude: "7.00000000",
    longitude: "81.00000000",
    flagEmoji: "🇱🇰",
  },
  {
    id: 209,
    name: "Sudan",
    subregion: "Northern Africa",
    latitude: "15.00000000",
    longitude: "30.00000000",
    flagEmoji: "🇸🇩",
  },
  {
    id: 210,
    name: "Suriname",
    subregion: "South America",
    latitude: "4.00000000",
    longitude: "-56.00000000",
    flagEmoji: "🇸🇷",
  },
  {
    id: 211,
    name: "Svalbard And Jan Mayen Islands",
    subregion: "Northern Europe",
    latitude: "78.00000000",
    longitude: "20.00000000",
    flagEmoji: "🇸🇯",
  },
  {
    id: 212,
    name: "Swaziland",
    subregion: "Southern Africa",
    latitude: "-26.50000000",
    longitude: "31.50000000",
    flagEmoji: "🇸🇿",
  },
  {
    id: 213,
    name: "Sweden",
    subregion: "Northern Europe",
    latitude: "62.00000000",
    longitude: "15.00000000",
    flagEmoji: "🇸🇪",
  },
  {
    id: 214,
    name: "Switzerland",
    subregion: "Western Europe",
    latitude: "47.00000000",
    longitude: "8.00000000",
    flagEmoji: "🇨🇭",
  },
  {
    id: 215,
    name: "Syria",
    subregion: "Western Asia",
    latitude: "35.00000000",
    longitude: "38.00000000",
    flagEmoji: "🇸🇾",
  },
  {
    id: 216,
    name: "Taiwan",
    subregion: "Eastern Asia",
    latitude: "23.50000000",
    longitude: "121.00000000",
    flagEmoji: "🇹🇼",
  },
  {
    id: 217,
    name: "Tajikistan",
    subregion: "Central Asia",
    latitude: "39.00000000",
    longitude: "71.00000000",
    flagEmoji: "🇹🇯",
  },
  {
    id: 218,
    name: "Tanzania",
    subregion: "Eastern Africa",
    latitude: "-6.00000000",
    longitude: "35.00000000",
    flagEmoji: "🇹🇿",
  },
  {
    id: 219,
    name: "Thailand",
    subregion: "South-Eastern Asia",
    latitude: "15.00000000",
    longitude: "100.00000000",
    flagEmoji: "🇹🇭",
  },
  {
    id: 220,
    name: "Togo",
    subregion: "Western Africa",
    latitude: "8.00000000",
    longitude: "1.16666666",
    flagEmoji: "🇹🇬",
  },
  {
    id: 221,
    name: "Tokelau",
    subregion: "Polynesia",
    latitude: "-9.00000000",
    longitude: "-172.00000000",
    flagEmoji: "🇹🇰",
  },
  {
    id: 222,
    name: "Tonga",
    subregion: "Polynesia",
    latitude: "-20.00000000",
    longitude: "-175.00000000",
    flagEmoji: "🇹🇴",
  },
  {
    id: 223,
    name: "Trinidad And Tobago",
    subregion: "Caribbean",
    latitude: "11.00000000",
    longitude: "-61.00000000",
    flagEmoji: "🇹🇹",
  },
  {
    id: 224,
    name: "Tunisia",
    subregion: "Northern Africa",
    latitude: "34.00000000",
    longitude: "9.00000000",
    flagEmoji: "🇹🇳",
  },
  {
    id: 225,
    name: "Turkey",
    subregion: "Western Asia",
    latitude: "39.00000000",
    longitude: "35.00000000",
    flagEmoji: "🇹🇷",
  },
  {
    id: 226,
    name: "Turkmenistan",
    subregion: "Central Asia",
    latitude: "40.00000000",
    longitude: "60.00000000",
    flagEmoji: "🇹🇲",
  },
  {
    id: 227,
    name: "Turks And Caicos Islands",
    subregion: "Caribbean",
    latitude: "21.75000000",
    longitude: "-71.58333333",
    flagEmoji: "🇹🇨",
  },
  {
    id: 228,
    name: "Tuvalu",
    subregion: "Polynesia",
    latitude: "-8.00000000",
    longitude: "178.00000000",
    flagEmoji: "🇹🇻",
  },
  {
    id: 229,
    name: "Uganda",
    subregion: "Eastern Africa",
    latitude: "1.00000000",
    longitude: "32.00000000",
    flagEmoji: "🇺🇬",
  },
  {
    id: 230,
    name: "Ukraine",
    subregion: "Eastern Europe",
    latitude: "49.00000000",
    longitude: "32.00000000",
    flagEmoji: "🇺🇦",
  },
  {
    id: 231,
    name: "United Arab Emirates",
    subregion: "Western Asia",
    latitude: "24.00000000",
    longitude: "54.00000000",
    flagEmoji: "🇦🇪",
  },
  {
    id: 232,
    name: "United Kingdom",
    subregion: "Northern Europe",
    latitude: "54.00000000",
    longitude: "-2.00000000",
    flagEmoji: "🇬🇧",
  },
  {
    id: 233,
    name: "United States",
    subregion: "Northern America",
    latitude: "38.00000000",
    longitude: "-97.00000000",
    flagEmoji: "🇺🇸",
  },
  {
    id: 234,
    name: "United States Minor Outlying Islands",
    subregion: "Northern America",
    latitude: "0.00000000",
    longitude: "0.00000000",
    flagEmoji: "🇺🇲",
  },
  {
    id: 235,
    name: "Uruguay",
    subregion: "South America",
    latitude: "-33.00000000",
    longitude: "-56.00000000",
    flagEmoji: "🇺🇾",
  },
  {
    id: 236,
    name: "Uzbekistan",
    subregion: "Central Asia",
    latitude: "41.00000000",
    longitude: "64.00000000",
    flagEmoji: "🇺🇿",
  },
  {
    id: 237,
    name: "Vanuatu",
    subregion: "Melanesia",
    latitude: "-16.00000000",
    longitude: "167.00000000",
    flagEmoji: "🇻🇺",
  },
  {
    id: 238,
    name: "Vatican City State (Holy See)",
    subregion: "Southern Europe",
    latitude: "41.90000000",
    longitude: "12.45000000",
    flagEmoji: "🇻🇦",
  },
  {
    id: 239,
    name: "Venezuela",
    subregion: "South America",
    latitude: "8.00000000",
    longitude: "-66.00000000",
    flagEmoji: "🇻🇪",
  },
  {
    id: 240,
    name: "Vietnam",
    subregion: "South-Eastern Asia",
    latitude: "16.16666666",
    longitude: "107.83333333",
    flagEmoji: "🇻🇳",
  },
  {
    id: 241,
    name: "Virgin Islands (British)",
    subregion: "Caribbean",
    latitude: "18.43138300",
    longitude: "-64.62305000",
    flagEmoji: "🇻🇬",
  },
  {
    id: 242,
    name: "Virgin Islands (US)",
    subregion: "Caribbean",
    latitude: "18.34000000",
    longitude: "-64.93000000",
    flagEmoji: "🇻🇮",
  },
  {
    id: 243,
    name: "Wallis And Futuna Islands",
    subregion: "Polynesia",
    latitude: "-13.30000000",
    longitude: "-176.20000000",
    flagEmoji: "🇼🇫",
  },
  {
    id: 244,
    name: "Western Sahara",
    subregion: "Northern Africa",
    latitude: "24.50000000",
    longitude: "-13.00000000",
    flagEmoji: "🇪🇭",
  },
  {
    id: 245,
    name: "Yemen",
    subregion: "Western Asia",
    latitude: "15.00000000",
    longitude: "48.00000000",
    flagEmoji: "🇾🇪",
  },
  {
    id: 246,
    name: "Zambia",
    subregion: "Eastern Africa",
    latitude: "-15.00000000",
    longitude: "30.00000000",
    flagEmoji: "🇿🇲",
  },
  {
    id: 247,
    name: "Zimbabwe",
    subregion: "Eastern Africa",
    latitude: "-20.00000000",
    longitude: "30.00000000",
    flagEmoji: "🇿🇼",
  },
];

module.exports = countries;
