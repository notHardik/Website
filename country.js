var dataList = document.getElementById('json-datalist');
var input = document.getElementById('inputCountry');
var submit = document.getElementById('submitInput');
var guessList = document.getElementById('guessList');
var matchCountry = false;
var targetCountry = "";
var countGuess = 0;

input.onchange = function(){isTextSelected(document.getElementById("inputCountry").value)}
submit.onclick = function(){submitAnswer(input.value)}

// Set up and make the request to get random country on every Refresh
window.onload = function() {
    go(items);
    submit.style.display = "none";
    targetCountry = items[Math.floor(Math.random() * (228 - 1 + 1) + 1)].Country;
    console.log(targetCountry)
}

//Displays the submit button if there is a country select
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

//Checks if the value in the input box is a country in the list
function checkCountry(items, inputValue) {
  items.forEach(function(item){
    if(item.Country === inputValue)
    {
      matchCountry = true;
    }
  });
  return false;
}

function population(country)
{
  var returnThing; 
  items.forEach(function(item)
  {
    if(item.Country === country)
    {
      returnThing = Number(item.Population);
    }
  })
  return returnThing;
}

function region(country)
{
  var returnThing;
  items.forEach(function(item)
  {
    if(item.Country === country)
    {
      returnThing =  item.Region;
    }
  })
  return returnThing;
}


//When clicking the submit button check if its right
function submitAnswer(inputValue)
{
  countGuess++;
  if(countGuess > 0)
  {
  }
  if(inputValue == targetCountry)
  {
    var li = document.createElement("li");
    var text = "good shit bro. Reload to retart"
    li.appendChild(document.createTextNode(text));
    guessList.appendChild(li);
  }else
  {
    var li = document.createElement("li");
    var text = "";
    if(parseInt(population(targetCountry), 10) < parseInt(population(inputValue), 10))
    {
      text += inputValue + " | Population: ↓ | ";
    }
    if(parseInt(population(targetCountry), 10) > parseInt(population(inputValue), 10))
    {
      text += inputValue + " | Population: ↑ | ";
    }
    if(region(targetCountry) != region(inputValue))
    {
      text += "Continent: Incorrect";
    }else
    {
      text += "Continent: " + region(inputValue);
    }
    li.appendChild(document.createTextNode(text));
    guessList.appendChild(li);
  }
}

var items = [
    {
      Country: "Afghanistan",
      Region: "Asia",
      Population: 31056997
    },
    {
      Country: "Albania",
      Region: "Europe",
      Population: 3581655
    },
    {
      Country: "Algeria",
      Region: "Africa",
      Population: 32930091
    },
    {
      Country: "American Samoa",
      Region: "OCEANIA",
      Population: 57794
    },
    {
      Country: "Andorra",
      Region: "Europe",
      Population: 71201
    },
    {
      Country: "Angola",
      Region: "Africa",
      Population: 12127071
    },
    {
      Country: "Anguilla",
      Region: "South America",
      Population: 13477
    },
    {
      Country: "Antigua & Barbuda",
      Region: "South America",
      Population: 69108
    },
    {
      Country: "Argentina",
      Region: "South America",
      Population: 39921833
    },
    {
      Country: "Armenia",
      Region: "Europe",
      Population: 2976372
    },
    {
      Country: "Aruba",
      Region: "South America",
      Population: 71891
    },
    {
      Country: "Australia",
      Region: "OCEANIA",
      Population: 20264082
    },
    {
      Country: "Austria",
      Region: "Europe",
      Population: 8192880
    },
    {
      Country: "Azerbaijan",
      Region: "Asia",
      Population: 7961619
    },
    {
      Country: "The Bahamas",
      Region: "South America",
      Population: 303770
    },
    {
      Country: "Bahrain",
      Region: "Asia",
      Population: 698585
    },
    {
      Country: "Bangladesh",
      Region: "Asia",
      Population: 147365352
    },
    {
      Country: "Barbados",
      Region: "South America",
      Population: 279912
    },
    {
      Country: "Belarus",
      Region: "Europe",
      Population: 10293011
    },
    {
      Country: "Belgium",
      Region: "Europe",
      Population: 10379067
    },
    {
      Country: "Belize",
      Region: "South America",
      Population: 287730
    },
    {
      Country: "Benin",
      Region: "Africa",
      Population: 7862944
    },
    {
      Country: "Bermuda",
      Region: "North America",
      Population: 65773
    },
    {
      Country: "Bhutan",
      Region: "Asia",
      Population: 2279723
    },
    {
      Country: "Bolivia",
      Region: "South America",
      Population: 8989046
    },
    {
      Country: "Bosnia & Herzegovina",
      Region: "Europe",
      Population: 4498976
    },
    {
      Country: "Botswana",
      Region: "Africa",
      Population: 1639833
    },
    {
      Country: "Brazil",
      Region: "South America",
      Population: 188078227
    },
    {
      Country: "British Virgin Is.",
      Region: "South America",
      Population: 23098
    },
    {
      Country: "Brunei",
      Region: "Asia",
      Population: 379444
    },
    {
      Country: "Bulgaria",
      Region: "Europe",
      Population: 7385367
    },
    {
      Country: "Burkina Faso",
      Region: "Africa",
      Population: 13902972
    },
    {
      Country: "Burma",
      Region: "Asia",
      Population: 47382633
    },
    {
      Country: "Burundi",
      Region: "Africa",
      Population: 8090068
    },
    {
      Country: "Cambodia",
      Region: "Asia",
      Population: 13881427
    },
    {
      Country: "Cameroon",
      Region: "Africa",
      Population: 17340702
    },
    {
      Country: "Canada",
      Region: "North America",
      Population: 33098932
    },
    {
      Country: "Cape Verde",
      Region: "Africa",
      Population: 420979
    },
    {
      Country: "Cayman Islands",
      Region: "South America",
      Population: 45436
    },
    {
      Country: "Central African Rep.",
      Region: "Africa",
      Population: 4303356
    },
    {
      Country: "Chad",
      Region: "Africa",
      Population: 9944201
    },
    {
      Country: "Chile",
      Region: "South America",
      Population: 16134219
    },
    {
      Country: "China",
      Region: "Asia",
      Population: 1313973713
    },
    {
      Country: "Colombia",
      Region: "South America",
      Population: 43593035
    },
    {
      Country: "Comoros",
      Region: "Africa",
      Population: 690948
    },
    {
      Country: "Democratic Republic of Congo",
      Region: "Africa",
      Population: 62660551
    },
    {
      Country: "Republic of the Congo",
      Region: "Africa",
      Population: 3702314
    },
    {
      Country: "Cook Islands",
      Region: "OCEANIA",
      Population: 21388
    },
    {
      Country: "Costa Rica",
      Region: "South America",
      Population: 4075261
    },
    {
      Country: "Cote d'Ivoire",
      Region: "Africa",
      Population: 17654843
    },
    {
      Country: "Croatia",
      Region: "Europe",
      Population: 4494749
    },
    {
      Country: "Cuba",
      Region: "South America",
      Population: 11382820
    },
    {
      Country: "Cyprus",
      Region: "Asia",
      Population: 784301
    },
    {
      Country: "Czech Republic",
      Region: "Europe",
      Population: 10235455
    },
    {
      Country: "Denmark",
      Region: "Europe",
      Population: 5450661
    },
    {
      Country: "Djibouti",
      Region: "Africa",
      Population: 486530
    },
    {
      Country: "Dominica",
      Region: "South America",
      Population: 68910
    },
    {
      Country: "Dominican Republic",
      Region: "South America",
      Population: 9183984
    },
    {
      Country: "East Timor",
      Region: "Asia",
      Population: 1062777
    },
    {
      Country: "Ecuador",
      Region: "South America",
      Population: 13547510
    },
    {
      Country: "Egypt",
      Region: "Africa",
      Population: 78887007
    },
    {
      Country: "El Salvador",
      Region: "South America",
      Population: 6822378
    },
    {
      Country: "Equatorial Guinea",
      Region: "Africa",
      Population: 540109
    },
    {
      Country: "Eritrea",
      Region: "Africa",
      Population: 4786994
    },
    {
      Country: "Estonia",
      Region: "Europe",
      Population: 1324333
    },
    {
      Country: "Ethiopia",
      Region: "Africa",
      Population: 74777981
    },
    {
      Country: "Faroe Islands",
      Region: "Europe",
      Population: 47246
    },
    {
      Country: "Fiji",
      Region: "OCEANIA",
      Population: 905949
    },
    {
      Country: "Finland",
      Region: "Europe",
      Population: 5231372
    },
    {
      Country: "France",
      Region: "Europe",
      Population: 60876136
    },
    {
      Country: "French Guiana",
      Region: "South America",
      Population: 199509
    },
    {
      Country: "French Polynesia",
      Region: "OCEANIA",
      Population: 274578
    },
    {
      Country: "Gabon",
      Region: "Africa",
      Population: 1424906
    },
    {
      Country: "Gambia, The",
      Region: "Africa",
      Population: 1641564
    },
    {
      Country: "Gaza Strip",
      Region: "Asia",
      Population: 1428757
    },
    {
      Country: "Georgia",
      Region: "Europe",
      Population: 4661473
    },
    {
      Country: "Germany",
      Region: "Europe",
      Population: 82422299
    },
    {
      Country: "Ghana",
      Region: "Africa",
      Population: 22409572
    },
    {
      Country: "Gibraltar",
      Region: "Europe",
      Population: 27928
    },
    {
      Country: "Greece",
      Region: "Europe",
      Population: 10688058
    },
    {
      Country: "Greenland",
      Region: "North America",
      Population: 56361
    },
    {
      Country: "Grenada",
      Region: "South America",
      Population: 89703
    },
    {
      Country: "Guadeloupe",
      Region: "South America",
      Population: 452776
    },
    {
      Country: "Guam",
      Region: "OCEANIA",
      Population: 171019
    },
    {
      Country: "Guatemala",
      Region: "South America",
      Population: 12293545
    },
    {
      Country: "Guernsey",
      Region: "Europe",
      Population: 65409
    },
    {
      Country: "Guinea",
      Region: "Africa",
      Population: 9690222
    },
    {
      Country: "Guinea-Bissau",
      Region: "Africa",
      Population: 1442029
    },
    {
      Country: "Guyana",
      Region: "South America",
      Population: 767245
    },
    {
      Country: "Haiti",
      Region: "South America",
      Population: 8308504
    },
    {
      Country: "Honduras",
      Region: "South America",
      Population: 7326496
    },
    {
      Country: "Hong Kong",
      Region: "Asia",
      Population: 6940432
    },
    {
      Country: "Hungary",
      Region: "Europe",
      Population: 9981334
    },
    {
      Country: "Iceland",
      Region: "Europe",
      Population: 299388
    },
    {
      Country: "India",
      Region: "Asia",
      Population: 1095351995
    },
    {
      Country: "Indonesia",
      Region: "Asia",
      Population: 245452739
    },
    {
      Country: "Iran",
      Region: "Asia",
      Population: 68688433
    },
    {
      Country: "Iraq",
      Region: "Asia",
      Population: 26783383
    },
    {
      Country: "Ireland",
      Region: "Europe",
      Population: 4062235
    },
    {
      Country: "Isle of Man",
      Region: "Europe",
      Population: 75441
    },
    {
      Country: "Israel",
      Region: "Asia",
      Population: 6352117
    },
    {
      Country: "Italy",
      Region: "Europe",
      Population: 58133509
    },
    {
      Country: "Jamaica",
      Region: "South America",
      Population: 2758124
    },
    {
      Country: "Japan",
      Region: "Asia",
      Population: 127463611
    },
    {
      Country: "Jersey",
      Region: "Europe",
      Population: 91084
    },
    {
      Country: "Jordan",
      Region: "Asia",
      Population: 5906760
    },
    {
      Country: "Kazakhstan",
      Region: "Asia",
      Population: 15233244
    },
    {
      Country: "Kenya",
      Region: "Africa",
      Population: 34707817
    },
    {
      Country: "Kiribati",
      Region: "OCEANIA",
      Population: 105432
    },
    {
      Country: "North Korea",
      Region: "Asia",
      Population: 23113019
    },
    {
      Country: "South Korea",
      Region: "Asia",
      Population: 48846823
    },
    {
      Country: "Kuwait",
      Region: "Asia",
      Population: 2418393
    },
    {
      Country: "Kyrgyzstan",
      Region: "Asia",
      Population: 5213898
    },
    {
      Country: "Laos",
      Region: "Asia",
      Population: 6368481
    },
    {
      Country: "Latvia",
      Region: "Europe",
      Population: 2274735
    },
    {
      Country: "Lebanon",
      Region: "Asia",
      Population: 3874050
    },
    {
      Country: "Lesotho",
      Region: "Africa",
      Population: 2022331
    },
    {
      Country: "Liberia",
      Region: "Africa",
      Population: 3042004
    },
    {
      Country: "Libya",
      Region: "Africa",
      Population: 5900754
    },
    {
      Country: "Liechtenstein",
      Region: "Europe",
      Population: 33987
    },
    {
      Country: "Lithuania",
      Region: "Europe",
      Population: 3585906
    },
    {
      Country: "Luxembourg",
      Region: "Europe",
      Population: 474413
    },
    {
      Country: "Macau",
      Region: "Asia",
      Population: 453125
    },
    {
      Country: "Macedonia",
      Region: "Europe",
      Population: 2050554
    },
    {
      Country: "Madagascar",
      Region: "Africa",
      Population: 18595469
    },
    {
      Country: "Malawi",
      Region: "Africa",
      Population: 13013926
    },
    {
      Country: "Malaysia",
      Region: "Asia",
      Population: 24385858
    },
    {
      Country: "Maldives",
      Region: "Asia",
      Population: 359008
    },
    {
      Country: "Mali",
      Region: "Africa",
      Population: 11716829
    },
    {
      Country: "Malta",
      Region: "Europe",
      Population: 400214
    },
    {
      Country: "Marshall Islands",
      Region: "OCEANIA",
      Population: 60422
    },
    {
      Country: "Martinique",
      Region: "South America",
      Population: 436131
    },
    {
      Country: "Mauritania",
      Region: "Africa",
      Population: 3177388
    },
    {
      Country: "Mauritius",
      Region: "Africa",
      Population: 1240827
    },
    {
      Country: "Mayotte",
      Region: "Africa",
      Population: 201234
    },
    {
      Country: "Mexico",
      Region: "South America",
      Population: 107449525
    },
    {
      Country: "Fed. St. Micronesia",
      Region: "OCEANIA",
      Population: 108004
    },
    {
      Country: "Moldova",
      Region: "Europe",
      Population: 4466706
    },
    {
      Country: "Monaco",
      Region: "Europe",
      Population: 32543
    },
    {
      Country: "Mongolia",
      Region: "Asia",
      Population: 2832224
    },
    {
      Country: "Montserrat",
      Region: "South America",
      Population: 9439
    },
    {
      Country: "Morocco",
      Region: "Africa",
      Population: 33241259
    },
    {
      Country: "Mozambique",
      Region: "Africa",
      Population: 19686505
    },
    {
      Country: "Namibia",
      Region: "Africa",
      Population: 2044147
    },
    {
      Country: "Nauru",
      Region: "OCEANIA",
      Population: 13287
    },
    {
      Country: "Nepal",
      Region: "Asia",
      Population: 28287147
    },
    {
      Country: "Netherlands",
      Region: "Europe",
      Population: 16491461
    },
    {
      Country: "Netherlands Antilles",
      Region: "South America",
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
      Region: "South America",
      Population: 5570129
    },
    {
      Country: "Niger",
      Region: "Africa",
      Population: 12525094
    },
    {
      Country: "Nigeria",
      Region: "Africa",
      Population: 131859731
    },
    {
      Country: "N. Mariana Islands",
      Region: "OCEANIA",
      Population: 82459
    },
    {
      Country: "Norway",
      Region: "Europe",
      Population: 4610820
    },
    {
      Country: "Oman",
      Region: "Asia",
      Population: 3102229
    },
    {
      Country: "Pakistan",
      Region: "Asia",
      Population: 165803560
    },
    {
      Country: "Palau",
      Region: "OCEANIA",
      Population: 20579
    },
    {
      Country: "Panama",
      Region: "South America",
      Population: 3191319
    },
    {
      Country: "Papua New Guinea",
      Region: "OCEANIA",
      Population: 5670544
    },
    {
      Country: "Paraguay",
      Region: "South America",
      Population: 6506464
    },
    {
      Country: "Peru",
      Region: "South America",
      Population: 28302603
    },
    {
      Country: "Philippines",
      Region: "Asia",
      Population: 89468677
    },
    {
      Country: "Poland",
      Region: "Europe",
      Population: 38536869
    },
    {
      Country: "Portugal",
      Region: "Europe",
      Population: 10605870
    },
    {
      Country: "Puerto Rico",
      Region: "South America",
      Population: 3927188
    },
    {
      Country: "Qatar",
      Region: "Asia",
      Population: 885359
    },
    {
      Country: "Reunion",
      Region: "Africa",
      Population: 787584
    },
    {
      Country: "Romania",
      Region: "Europe",
      Population: 22303552
    },
    {
      Country: "Russia",
      Region: "Asia",
      Population: 142893540
    },
    {
      Country: "Rwanda",
      Region: "Africa",
      Population: 8648248
    },
    {
      Country: "Saint Helena",
      Region: "Africa",
      Population: 7502
    },
    {
      Country: "Saint Kitts & Nevis",
      Region: "South America",
      Population: 39129
    },
    {
      Country: "Saint Lucia",
      Region: "South America",
      Population: 168458
    },
    {
      Country: "St Pierre & Miquelon",
      Region: "North America",
      Population: 7026
    },
    {
      Country: "Saint Vincent and the Grenadines",
      Region: "South America",
      Population: 117848
    },
    {
      Country: "Samoa",
      Region: "OCEANIA",
      Population: 176908
    },
    {
      Country: "San Marino",
      Region: "Europe",
      Population: 29251
    },
    {
      Country: "Sao Tome & Principe",
      Region: "Africa",
      Population: 193413
    },
    {
      Country: "Saudi Arabia",
      Region: "Asia",
      Population: 27019731
    },
    {
      Country: "Senegal",
      Region: "Africa",
      Population: 11987121
    },
    {
      Country: "Serbia",
      Region: "Europe",
      Population: 9396411
    },
    {
      Country: "Seychelles",
      Region: "Africa",
      Population: 81541
    },
    {
      Country: "Sierra Leone",
      Region: "Africa",
      Population: 6005250
    },
    {
      Country: "Singapore",
      Region: "Asia",
      Population: 4492150
    },
    {
      Country: "Slovakia",
      Region: "Europe",
      Population: 5439448
    },
    {
      Country: "Slovenia",
      Region: "Europe",
      Population: 2010347
    },
    {
      Country: "Solomon Islands",
      Region: "OCEANIA",
      Population: 552438
    },
    {
      Country: "Somalia",
      Region: "Africa",
      Population: 8863338
    },
    {
      Country: "South Africa",
      Region: "Africa",
      Population: 44187637
    },
    {
      Country: "Spain",
      Region: "Europe",
      Population: 40397842
    },
    {
      Country: "Sri Lanka",
      Region: "Asia",
      Population: 20222240
    },
    {
      Country: "Sudan",
      Region: "Africa",
      Population: 41236378
    },
    {
      Country: "Suriname",
      Region: "South America",
      Population: 439117
    },
    {
      Country: "Swaziland",
      Region: "Africa",
      Population: 1136334
    },
    {
      Country: "Sweden",
      Region: "Europe",
      Population: 9016596
    },
    {
      Country: "Switzerland",
      Region: "Europe",
      Population: 7523934
    },
    {
      Country: "Syria",
      Region: "Asia",
      Population: 18881361
    },
    {
      Country: "Taiwan",
      Region: "Asia",
      Population: 23036087
    },
    {
      Country: "Tajikistan",
      Region: "Asia",
      Population: 7320815
    },
    {
      Country: "Tanzania",
      Region: "Africa",
      Population: 37445392
    },
    {
      Country: "Thailand",
      Region: "Asia",
      Population: 64631595
    },
    {
      Country: "Togo",
      Region: "Africa",
      Population: 5548702
    },
    {
      Country: "Tonga",
      Region: "OCEANIA",
      Population: 114689
    },
    {
      Country: "Trinidad & Tobago",
      Region: "South America",
      Population: 1065842
    },
    {
      Country: "Tunisia",
      Region: "Africa",
      Population: 10175014
    },
    {
      Country: "Turkey",
      Region: "Asia",
      Population: 70413958
    },
    {
      Country: "Turkmenistan",
      Region: "Asia",
      Population: 5042920
    },
    {
      Country: "Turks & Caicos Is",
      Region: "South America",
      Population: 21152
    },
    {
      Country: "Tuvalu",
      Region: "OCEANIA",
      Population: 11810
    },
    {
      Country: "Uganda",
      Region: "Africa",
      Population: 28195754
    },
    {
      Country: "Ukraine",
      Region: "Europe",
      Population: 46710816
    },
    {
      Country: "United Arab Emirates",
      Region: "Asia",
      Population: 2602713
    },
    {
      Country: "United Kingdom",
      Region: "Europe",
      Population: 60609153
    },
    {
      Country: "United States",
      Region: "North America",
      Population: 298444215
    },
    {
      Country: "Uruguay",
      Region: "South America",
      Population: 3431932
    },
    {
      Country: "Uzbekistan",
      Region: "Asia",
      Population: 27307134
    },
    {
      Country: "Vanuatu",
      Region: "OCEANIA",
      Population: 208869
    },
    {
      Country: "Venezuela",
      Region: "South America",
      Population: 25730435
    },
    {
      Country: "Vietnam",
      Region: "Asia",
      Population: 84402966
    },
    {
      Country: "Virgin Islands",
      Region: "South America",
      Population: 108605
    },
    {
      Country: "Wallis and Futuna",
      Region: "OCEANIA",
      Population: 16025
    },
    {
      Country: "West Bank",
      Region: "Asia",
      Population: 2460492
    },
    {
      Country: "Western Sahara",
      Region: "Africa",
      Population: 273008
    },
    {
      Country: "Yemen",
      Region: "Asia",
      Population: 21456188
    },
    {
      Country: "Zambia",
      Region: "Africa",
      Population: 11502010
    },
    {
      Country: "Zimbabwe",
      Region: "Africa",
      Population: 12236805
    }
  ];