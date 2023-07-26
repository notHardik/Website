var dataList = document.getElementById('json-datalist');
var input = document.getElementById('inputCountry');
var guess = document.getElementById('guess');
var submit = document.getElementById('submitInput');
var matchCountry = false;
var targetCountry = "";
var countGuess = 0;

input.onchange = function(){isTextSelected(document.getElementById("inputCountry").value)}
submit.onclick = function(){submitAnswer(input.value)}

// Set up and make the request.
window.onload = function() {
    go(items);
    submit.style.display = "none";
    guess.style.display = "none";
    targetCountry = items[Math.floor(Math.random() * (228 - 1 + 1) + 1)].Country;
}


function isTextSelected(inputValue)
{
  checkCountry(items, inputValue)
  if(matchCountry == true)
  {
    document.getElementById("submitInput").style.removeProperty("display");
    matchCountry = false;
  }else if(matchCountry == false)
  {
    document.getElementById("submitInput").style.display = "none";
  }
  matchCountry = false;
}

function go(items) {
    items.forEach(function(item){
        var option = document.createElement('option');
        option.value = item.Country;
        dataList.appendChild(option);
    });
}
function checkCountry(items, inputValue) {
  items.forEach(function(item){
    if(item.Country === inputValue)
    {
      matchCountry = true;
    }
  });
  return false;
}

function submitAnswer(inputValue)
{
  countGuess++;
  if(countGuess > 0)
  {
    guess.style.removeProperty("display");
  }
  if(inputValue == targetCountry)
  {

  }else
  {
  }
}

var items = [
    {
      Country: "Afghanistan",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 31056997
    },
    {
      Country: "Albania",
      Region: "EASTERN EUROPE",
      Population: 3581655
    },
    {
      Country: "Algeria",
      Region: "NORTHERN AFRICA",
      Population: 32930091
    },
    {
      Country: "American Samoa",
      Region: "OCEANIA",
      Population: 57794
    },
    {
      Country: "Andorra",
      Region: "WESTERN EUROPE",
      Population: 71201
    },
    {
      Country: "Angola",
      Region: "SUB-SAHARAN AFRICA",
      Population: 12127071
    },
    {
      Country: "Anguilla",
      Region: "LATIN AMER. & CARIB",
      Population: 13477
    },
    {
      Country: "Antigua & Barbuda",
      Region: "LATIN AMER. & CARIB",
      Population: 69108
    },
    {
      Country: "Argentina",
      Region: "LATIN AMER. & CARIB",
      Population: 39921833
    },
    {
      Country: "Armenia",
      Region: "C.W. OF IND. STATES",
      Population: 2976372
    },
    {
      Country: "Aruba",
      Region: "LATIN AMER. & CARIB",
      Population: 71891
    },
    {
      Country: "Australia",
      Region: "OCEANIA",
      Population: 20264082
    },
    {
      Country: "Austria",
      Region: "WESTERN EUROPE",
      Population: 8192880
    },
    {
      Country: "Azerbaijan",
      Region: "C.W. OF IND. STATES",
      Population: 7961619
    },
    {
      Country: "Bahamas, The",
      Region: "LATIN AMER. & CARIB",
      Population: 303770
    },
    {
      Country: "Bahrain",
      Region: "NEAR EAST",
      Population: 698585
    },
    {
      Country: "Bangladesh",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 147365352
    },
    {
      Country: "Barbados",
      Region: "LATIN AMER. & CARIB",
      Population: 279912
    },
    {
      Country: "Belarus",
      Region: "C.W. OF IND. STATES",
      Population: 10293011
    },
    {
      Country: "Belgium",
      Region: "WESTERN EUROPE",
      Population: 10379067
    },
    {
      Country: "Belize",
      Region: "LATIN AMER. & CARIB",
      Population: 287730
    },
    {
      Country: "Benin",
      Region: "SUB-SAHARAN AFRICA",
      Population: 7862944
    },
    {
      Country: "Bermuda",
      Region: "NORTHERN AMERICA",
      Population: 65773
    },
    {
      Country: "Bhutan",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 2279723
    },
    {
      Country: "Bolivia",
      Region: "LATIN AMER. & CARIB",
      Population: 8989046
    },
    {
      Country: "Bosnia & Herzegovina",
      Region: "EASTERN EUROPE",
      Population: 4498976
    },
    {
      Country: "Botswana",
      Region: "SUB-SAHARAN AFRICA",
      Population: 1639833
    },
    {
      Country: "Brazil",
      Region: "LATIN AMER. & CARIB",
      Population: 188078227
    },
    {
      Country: "British Virgin Is.",
      Region: "LATIN AMER. & CARIB",
      Population: 23098
    },
    {
      Country: "Brunei",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 379444
    },
    {
      Country: "Bulgaria",
      Region: "EASTERN EUROPE",
      Population: 7385367
    },
    {
      Country: "Burkina Faso",
      Region: "SUB-SAHARAN AFRICA",
      Population: 13902972
    },
    {
      Country: "Burma",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 47382633
    },
    {
      Country: "Burundi",
      Region: "SUB-SAHARAN AFRICA",
      Population: 8090068
    },
    {
      Country: "Cambodia",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 13881427
    },
    {
      Country: "Cameroon",
      Region: "SUB-SAHARAN AFRICA",
      Population: 17340702
    },
    {
      Country: "Canada",
      Region: "NORTHERN AMERICA",
      Population: 33098932
    },
    {
      Country: "Cape Verde",
      Region: "SUB-SAHARAN AFRICA",
      Population: 420979
    },
    {
      Country: "Cayman Islands",
      Region: "LATIN AMER. & CARIB",
      Population: 45436
    },
    {
      Country: "Central African Rep.",
      Region: "SUB-SAHARAN AFRICA",
      Population: 4303356
    },
    {
      Country: "Chad",
      Region: "SUB-SAHARAN AFRICA",
      Population: 9944201
    },
    {
      Country: "Chile",
      Region: "LATIN AMER. & CARIB",
      Population: 16134219
    },
    {
      Country: "China",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 1313973713
    },
    {
      Country: "Colombia",
      Region: "LATIN AMER. & CARIB",
      Population: 43593035
    },
    {
      Country: "Comoros",
      Region: "SUB-SAHARAN AFRICA",
      Population: 690948
    },
    {
      Country: "Congo, Dem. Rep.",
      Region: "SUB-SAHARAN AFRICA",
      Population: 62660551
    },
    {
      Country: "Congo, Repub. of the",
      Region: "SUB-SAHARAN AFRICA",
      Population: 3702314
    },
    {
      Country: "Cook Islands",
      Region: "OCEANIA",
      Population: 21388
    },
    {
      Country: "Costa Rica",
      Region: "LATIN AMER. & CARIB",
      Population: 4075261
    },
    {
      Country: "Cote d'Ivoire",
      Region: "SUB-SAHARAN AFRICA",
      Population: 17654843
    },
    {
      Country: "Croatia",
      Region: "EASTERN EUROPE",
      Population: 4494749
    },
    {
      Country: "Cuba",
      Region: "LATIN AMER. & CARIB",
      Population: 11382820
    },
    {
      Country: "Cyprus",
      Region: "NEAR EAST",
      Population: 784301
    },
    {
      Country: "Czech Republic",
      Region: "EASTERN EUROPE",
      Population: 10235455
    },
    {
      Country: "Denmark",
      Region: "WESTERN EUROPE",
      Population: 5450661
    },
    {
      Country: "Djibouti",
      Region: "SUB-SAHARAN AFRICA",
      Population: 486530
    },
    {
      Country: "Dominica",
      Region: "LATIN AMER. & CARIB",
      Population: 68910
    },
    {
      Country: "Dominican Republic",
      Region: "LATIN AMER. & CARIB",
      Population: 9183984
    },
    {
      Country: "East Timor",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 1062777
    },
    {
      Country: "Ecuador",
      Region: "LATIN AMER. & CARIB",
      Population: 13547510
    },
    {
      Country: "Egypt",
      Region: "NORTHERN AFRICA",
      Population: 78887007
    },
    {
      Country: "El Salvador",
      Region: "LATIN AMER. & CARIB",
      Population: 6822378
    },
    {
      Country: "Equatorial Guinea",
      Region: "SUB-SAHARAN AFRICA",
      Population: 540109
    },
    {
      Country: "Eritrea",
      Region: "SUB-SAHARAN AFRICA",
      Population: 4786994
    },
    {
      Country: "Estonia",
      Region: "BALTICS",
      Population: 1324333
    },
    {
      Country: "Ethiopia",
      Region: "SUB-SAHARAN AFRICA",
      Population: 74777981
    },
    {
      Country: "Faroe Islands",
      Region: "WESTERN EUROPE",
      Population: 47246
    },
    {
      Country: "Fiji",
      Region: "OCEANIA",
      Population: 905949
    },
    {
      Country: "Finland",
      Region: "WESTERN EUROPE",
      Population: 5231372
    },
    {
      Country: "France",
      Region: "WESTERN EUROPE",
      Population: 60876136
    },
    {
      Country: "French Guiana",
      Region: "LATIN AMER. & CARIB",
      Population: 199509
    },
    {
      Country: "French Polynesia",
      Region: "OCEANIA",
      Population: 274578
    },
    {
      Country: "Gabon",
      Region: "SUB-SAHARAN AFRICA",
      Population: 1424906
    },
    {
      Country: "Gambia, The",
      Region: "SUB-SAHARAN AFRICA",
      Population: 1641564
    },
    {
      Country: "Gaza Strip",
      Region: "NEAR EAST",
      Population: 1428757
    },
    {
      Country: "Georgia",
      Region: "C.W. OF IND. STATES",
      Population: 4661473
    },
    {
      Country: "Germany",
      Region: "WESTERN EUROPE",
      Population: 82422299
    },
    {
      Country: "Ghana",
      Region: "SUB-SAHARAN AFRICA",
      Population: 22409572
    },
    {
      Country: "Gibraltar",
      Region: "WESTERN EUROPE",
      Population: 27928
    },
    {
      Country: "Greece",
      Region: "WESTERN EUROPE",
      Population: 10688058
    },
    {
      Country: "Greenland",
      Region: "NORTHERN AMERICA",
      Population: 56361
    },
    {
      Country: "Grenada",
      Region: "LATIN AMER. & CARIB",
      Population: 89703
    },
    {
      Country: "Guadeloupe",
      Region: "LATIN AMER. & CARIB",
      Population: 452776
    },
    {
      Country: "Guam",
      Region: "OCEANIA",
      Population: 171019
    },
    {
      Country: "Guatemala",
      Region: "LATIN AMER. & CARIB",
      Population: 12293545
    },
    {
      Country: "Guernsey",
      Region: "WESTERN EUROPE",
      Population: 65409
    },
    {
      Country: "Guinea",
      Region: "SUB-SAHARAN AFRICA",
      Population: 9690222
    },
    {
      Country: "Guinea-Bissau",
      Region: "SUB-SAHARAN AFRICA",
      Population: 1442029
    },
    {
      Country: "Guyana",
      Region: "LATIN AMER. & CARIB",
      Population: 767245
    },
    {
      Country: "Haiti",
      Region: "LATIN AMER. & CARIB",
      Population: 8308504
    },
    {
      Country: "Honduras",
      Region: "LATIN AMER. & CARIB",
      Population: 7326496
    },
    {
      Country: "Hong Kong",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 6940432
    },
    {
      Country: "Hungary",
      Region: "EASTERN EUROPE",
      Population: 9981334
    },
    {
      Country: "Iceland",
      Region: "WESTERN EUROPE",
      Population: 299388
    },
    {
      Country: "India",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 1095351995
    },
    {
      Country: "Indonesia",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 245452739
    },
    {
      Country: "Iran",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 68688433
    },
    {
      Country: "Iraq",
      Region: "NEAR EAST",
      Population: 26783383
    },
    {
      Country: "Ireland",
      Region: "WESTERN EUROPE",
      Population: 4062235
    },
    {
      Country: "Isle of Man",
      Region: "WESTERN EUROPE",
      Population: 75441
    },
    {
      Country: "Israel",
      Region: "NEAR EAST",
      Population: 6352117
    },
    {
      Country: "Italy",
      Region: "WESTERN EUROPE",
      Population: 58133509
    },
    {
      Country: "Jamaica",
      Region: "LATIN AMER. & CARIB",
      Population: 2758124
    },
    {
      Country: "Japan",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 127463611
    },
    {
      Country: "Jersey",
      Region: "WESTERN EUROPE",
      Population: 91084
    },
    {
      Country: "Jordan",
      Region: "NEAR EAST",
      Population: 5906760
    },
    {
      Country: "Kazakhstan",
      Region: "C.W. OF IND. STATES",
      Population: 15233244
    },
    {
      Country: "Kenya",
      Region: "SUB-SAHARAN AFRICA",
      Population: 34707817
    },
    {
      Country: "Kiribati",
      Region: "OCEANIA",
      Population: 105432
    },
    {
      Country: "Korea, North",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 23113019
    },
    {
      Country: "Korea, South",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 48846823
    },
    {
      Country: "Kuwait",
      Region: "NEAR EAST",
      Population: 2418393
    },
    {
      Country: "Kyrgyzstan",
      Region: "C.W. OF IND. STATES",
      Population: 5213898
    },
    {
      Country: "Laos",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 6368481
    },
    {
      Country: "Latvia",
      Region: "BALTICS",
      Population: 2274735
    },
    {
      Country: "Lebanon",
      Region: "NEAR EAST",
      Population: 3874050
    },
    {
      Country: "Lesotho",
      Region: "SUB-SAHARAN AFRICA",
      Population: 2022331
    },
    {
      Country: "Liberia",
      Region: "SUB-SAHARAN AFRICA",
      Population: 3042004
    },
    {
      Country: "Libya",
      Region: "NORTHERN AFRICA",
      Population: 5900754
    },
    {
      Country: "Liechtenstein",
      Region: "WESTERN EUROPE",
      Population: 33987
    },
    {
      Country: "Lithuania",
      Region: "BALTICS",
      Population: 3585906
    },
    {
      Country: "Luxembourg",
      Region: "WESTERN EUROPE",
      Population: 474413
    },
    {
      Country: "Macau",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 453125
    },
    {
      Country: "Macedonia",
      Region: "EASTERN EUROPE",
      Population: 2050554
    },
    {
      Country: "Madagascar",
      Region: "SUB-SAHARAN AFRICA",
      Population: 18595469
    },
    {
      Country: "Malawi",
      Region: "SUB-SAHARAN AFRICA",
      Population: 13013926
    },
    {
      Country: "Malaysia",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 24385858
    },
    {
      Country: "Maldives",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 359008
    },
    {
      Country: "Mali",
      Region: "SUB-SAHARAN AFRICA",
      Population: 11716829
    },
    {
      Country: "Malta",
      Region: "WESTERN EUROPE",
      Population: 400214
    },
    {
      Country: "Marshall Islands",
      Region: "OCEANIA",
      Population: 60422
    },
    {
      Country: "Martinique",
      Region: "LATIN AMER. & CARIB",
      Population: 436131
    },
    {
      Country: "Mauritania",
      Region: "SUB-SAHARAN AFRICA",
      Population: 3177388
    },
    {
      Country: "Mauritius",
      Region: "SUB-SAHARAN AFRICA",
      Population: 1240827
    },
    {
      Country: "Mayotte",
      Region: "SUB-SAHARAN AFRICA",
      Population: 201234
    },
    {
      Country: "Mexico",
      Region: "LATIN AMER. & CARIB",
      Population: 107449525
    },
    {
      Country: "Micronesia, Fed. St.",
      Region: "OCEANIA",
      Population: 108004
    },
    {
      Country: "Moldova",
      Region: "C.W. OF IND. STATES",
      Population: 4466706
    },
    {
      Country: "Monaco",
      Region: "WESTERN EUROPE",
      Population: 32543
    },
    {
      Country: "Mongolia",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 2832224
    },
    {
      Country: "Montserrat",
      Region: "LATIN AMER. & CARIB",
      Population: 9439
    },
    {
      Country: "Morocco",
      Region: "NORTHERN AFRICA",
      Population: 33241259
    },
    {
      Country: "Mozambique",
      Region: "SUB-SAHARAN AFRICA",
      Population: 19686505
    },
    {
      Country: "Namibia",
      Region: "SUB-SAHARAN AFRICA",
      Population: 2044147
    },
    {
      Country: "Nauru",
      Region: "OCEANIA",
      Population: 13287
    },
    {
      Country: "Nepal",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 28287147
    },
    {
      Country: "Netherlands",
      Region: "WESTERN EUROPE",
      Population: 16491461
    },
    {
      Country: "Netherlands Antilles",
      Region: "LATIN AMER. & CARIB",
      Population: 221736
    },
    {
      Country: "New Caledonia",
      Region: "OCEANIA",
      Population: 219246
    },
    {
      Country: "New Zealand",
      Region: "OCEANIA",
      Population: 4076140
    },
    {
      Country: "Nicaragua",
      Region: "LATIN AMER. & CARIB",
      Population: 5570129
    },
    {
      Country: "Niger",
      Region: "SUB-SAHARAN AFRICA",
      Population: 12525094
    },
    {
      Country: "Nigeria",
      Region: "SUB-SAHARAN AFRICA",
      Population: 131859731
    },
    {
      Country: "N. Mariana Islands",
      Region: "OCEANIA",
      Population: 82459
    },
    {
      Country: "Norway",
      Region: "WESTERN EUROPE",
      Population: 4610820
    },
    {
      Country: "Oman",
      Region: "NEAR EAST",
      Population: 3102229
    },
    {
      Country: "Pakistan",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 165803560
    },
    {
      Country: "Palau",
      Region: "OCEANIA",
      Population: 20579
    },
    {
      Country: "Panama",
      Region: "LATIN AMER. & CARIB",
      Population: 3191319
    },
    {
      Country: "Papua New Guinea",
      Region: "OCEANIA",
      Population: 5670544
    },
    {
      Country: "Paraguay",
      Region: "LATIN AMER. & CARIB",
      Population: 6506464
    },
    {
      Country: "Peru",
      Region: "LATIN AMER. & CARIB",
      Population: 28302603
    },
    {
      Country: "Philippines",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 89468677
    },
    {
      Country: "Poland",
      Region: "EASTERN EUROPE",
      Population: 38536869
    },
    {
      Country: "Portugal",
      Region: "WESTERN EUROPE",
      Population: 10605870
    },
    {
      Country: "Puerto Rico",
      Region: "LATIN AMER. & CARIB",
      Population: 3927188
    },
    {
      Country: "Qatar",
      Region: "NEAR EAST",
      Population: 885359
    },
    {
      Country: "Reunion",
      Region: "SUB-SAHARAN AFRICA",
      Population: 787584
    },
    {
      Country: "Romania",
      Region: "EASTERN EUROPE",
      Population: 22303552
    },
    {
      Country: "Russia",
      Region: "C.W. OF IND. STATES",
      Population: 142893540
    },
    {
      Country: "Rwanda",
      Region: "SUB-SAHARAN AFRICA",
      Population: 8648248
    },
    {
      Country: "Saint Helena",
      Region: "SUB-SAHARAN AFRICA",
      Population: 7502
    },
    {
      Country: "Saint Kitts & Nevis",
      Region: "LATIN AMER. & CARIB",
      Population: 39129
    },
    {
      Country: "Saint Lucia",
      Region: "LATIN AMER. & CARIB",
      Population: 168458
    },
    {
      Country: "St Pierre & Miquelon",
      Region: "NORTHERN AMERICA",
      Population: 7026
    },
    {
      Country: "Saint Vincent and the Grenadines",
      Region: "LATIN AMER. & CARIB",
      Population: 117848
    },
    {
      Country: "Samoa",
      Region: "OCEANIA",
      Population: 176908
    },
    {
      Country: "San Marino",
      Region: "WESTERN EUROPE",
      Population: 29251
    },
    {
      Country: "Sao Tome & Principe",
      Region: "SUB-SAHARAN AFRICA",
      Population: 193413
    },
    {
      Country: "Saudi Arabia",
      Region: "NEAR EAST",
      Population: 27019731
    },
    {
      Country: "Senegal",
      Region: "SUB-SAHARAN AFRICA",
      Population: 11987121
    },
    {
      Country: "Serbia",
      Region: "EASTERN EUROPE",
      Population: 9396411
    },
    {
      Country: "Seychelles",
      Region: "SUB-SAHARAN AFRICA",
      Population: 81541
    },
    {
      Country: "Sierra Leone",
      Region: "SUB-SAHARAN AFRICA",
      Population: 6005250
    },
    {
      Country: "Singapore",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 4492150
    },
    {
      Country: "Slovakia",
      Region: "EASTERN EUROPE",
      Population: 5439448
    },
    {
      Country: "Slovenia",
      Region: "EASTERN EUROPE",
      Population: 2010347
    },
    {
      Country: "Solomon Islands",
      Region: "OCEANIA",
      Population: 552438
    },
    {
      Country: "Somalia",
      Region: "SUB-SAHARAN AFRICA",
      Population: 8863338
    },
    {
      Country: "South Africa",
      Region: "SUB-SAHARAN AFRICA",
      Population: 44187637
    },
    {
      Country: "Spain",
      Region: "WESTERN EUROPE",
      Population: 40397842
    },
    {
      Country: "Sri Lanka",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 20222240
    },
    {
      Country: "Sudan",
      Region: "SUB-SAHARAN AFRICA",
      Population: 41236378
    },
    {
      Country: "Suriname",
      Region: "LATIN AMER. & CARIB",
      Population: 439117
    },
    {
      Country: "Swaziland",
      Region: "SUB-SAHARAN AFRICA",
      Population: 1136334
    },
    {
      Country: "Sweden",
      Region: "WESTERN EUROPE",
      Population: 9016596
    },
    {
      Country: "Switzerland",
      Region: "WESTERN EUROPE",
      Population: 7523934
    },
    {
      Country: "Syria",
      Region: "NEAR EAST",
      Population: 18881361
    },
    {
      Country: "Taiwan",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 23036087
    },
    {
      Country: "Tajikistan",
      Region: "C.W. OF IND. STATES",
      Population: 7320815
    },
    {
      Country: "Tanzania",
      Region: "SUB-SAHARAN AFRICA",
      Population: 37445392
    },
    {
      Country: "Thailand",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 64631595
    },
    {
      Country: "Togo",
      Region: "SUB-SAHARAN AFRICA",
      Population: 5548702
    },
    {
      Country: "Tonga",
      Region: "OCEANIA",
      Population: 114689
    },
    {
      Country: "Trinidad & Tobago",
      Region: "LATIN AMER. & CARIB",
      Population: 1065842
    },
    {
      Country: "Tunisia",
      Region: "NORTHERN AFRICA",
      Population: 10175014
    },
    {
      Country: "Turkey",
      Region: "NEAR EAST",
      Population: 70413958
    },
    {
      Country: "Turkmenistan",
      Region: "C.W. OF IND. STATES",
      Population: 5042920
    },
    {
      Country: "Turks & Caicos Is",
      Region: "LATIN AMER. & CARIB",
      Population: 21152
    },
    {
      Country: "Tuvalu",
      Region: "OCEANIA",
      Population: 11810
    },
    {
      Country: "Uganda",
      Region: "SUB-SAHARAN AFRICA",
      Population: 28195754
    },
    {
      Country: "Ukraine",
      Region: "C.W. OF IND. STATES",
      Population: 46710816
    },
    {
      Country: "United Arab Emirates",
      Region: "NEAR EAST",
      Population: 2602713
    },
    {
      Country: "United Kingdom",
      Region: "WESTERN EUROPE",
      Population: 60609153
    },
    {
      Country: "United States",
      Region: "NORTHERN AMERICA",
      Population: 298444215
    },
    {
      Country: "Uruguay",
      Region: "LATIN AMER. & CARIB",
      Population: 3431932
    },
    {
      Country: "Uzbekistan",
      Region: "C.W. OF IND. STATES",
      Population: 27307134
    },
    {
      Country: "Vanuatu",
      Region: "OCEANIA",
      Population: 208869
    },
    {
      Country: "Venezuela",
      Region: "LATIN AMER. & CARIB",
      Population: 25730435
    },
    {
      Country: "Vietnam",
      Region: "ASIA (EX. NEAR EAST)",
      Population: 84402966
    },
    {
      Country: "Virgin Islands",
      Region: "LATIN AMER. & CARIB",
      Population: 108605
    },
    {
      Country: "Wallis and Futuna",
      Region: "OCEANIA",
      Population: 16025
    },
    {
      Country: "West Bank",
      Region: "NEAR EAST",
      Population: 2460492
    },
    {
      Country: "Western Sahara",
      Region: "NORTHERN AFRICA",
      Population: 273008
    },
    {
      Country: "Yemen",
      Region: "NEAR EAST",
      Population: 21456188
    },
    {
      Country: "Zambia",
      Region: "SUB-SAHARAN AFRICA",
      Population: 11502010
    },
    {
      Country: "Zimbabwe",
      Region: "SUB-SAHARAN AFRICA",
      Population: 12236805
    }
  ];