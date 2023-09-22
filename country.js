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
    console.log("right")
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

    console.log("wrong");

    li.appendChild(document.createTextNode(text));
    guessList.appendChild(li);
  }
}

var items = [
    {
      Country: "Afghanistan",
      Region: "ASIA",
      Population: 31056997
    },
    {
      Country: "Albania",
      Region: "EUROPE",
      Population: 3581655
    },
    {
      Country: "Algeria",
      Region: "AFRICA",
      Population: 32930091
    },
    {
      Country: "American Samoa",
      Region: "OCEANIA",
      Population: 57794
    },
    {
      Country: "Andorra",
      Region: "EUROPE",
      Population: 71201
    },
    {
      Country: "Angola",
      Region: "AFRICA",
      Population: 12127071
    },
    {
      Country: "Anguilla",
      Region: "SOUTH AMERICA",
      Population: 13477
    },
    {
      Country: "Antigua & Barbuda",
      Region: "SOUTH AMERICA",
      Population: 69108
    },
    {
      Country: "Argentina",
      Region: "SOUTH AMERICA",
      Population: 39921833
    },
    {
      Country: "Armenia",
      Region: "Europe",
      Population: 2976372
    },
    {
      Country: "Aruba",
      Region: "SOUTH AMERICA",
      Population: 71891
    },
    {
      Country: "Australia",
      Region: "OCEANIA",
      Population: 20264082
    },
    {
      Country: "Austria",
      Region: "EUROPE",
      Population: 8192880
    },
    {
      Country: "Azerbaijan",
      Region: "ASIA",
      Population: 7961619
    },
    {
      Country: "The Bahamas",
      Region: "SOUTH AMERICA",
      Population: 303770
    },
    {
      Country: "Bahrain",
      Region: "ASIA",
      Population: 698585
    },
    {
      Country: "Bangladesh",
      Region: "ASIA",
      Population: 147365352
    },
    {
      Country: "Barbados",
      Region: "SOUTH AMERICA",
      Population: 279912
    },
    {
      Country: "Belarus",
      Region: "EUROPE",
      Population: 10293011
    },
    {
      Country: "Belgium",
      Region: "EUROPE",
      Population: 10379067
    },
    {
      Country: "Belize",
      Region: "SOUTH AMERICA",
      Population: 287730
    },
    {
      Country: "Benin",
      Region: "AFRICA",
      Population: 7862944
    },
    {
      Country: "Bermuda",
      Region: "NORTHERN AMERICA",
      Population: 65773
    },
    {
      Country: "Bhutan",
      Region: "ASIA",
      Population: 2279723
    },
    {
      Country: "Bolivia",
      Region: "SOUTH AMERICA",
      Population: 8989046
    },
    {
      Country: "Bosnia & Herzegovina",
      Region: "EUROPE",
      Population: 4498976
    },
    {
      Country: "Botswana",
      Region: "AFRICA",
      Population: 1639833
    },
    {
      Country: "Brazil",
      Region: "SOUTH AMERICA",
      Population: 188078227
    },
    {
      Country: "British Virgin Is.",
      Region: "SOUTH AMERICA",
      Population: 23098
    },
    {
      Country: "Brunei",
      Region: "ASIA",
      Population: 379444
    },
    {
      Country: "Bulgaria",
      Region: "EUROPE",
      Population: 7385367
    },
    {
      Country: "Burkina Faso",
      Region: "AFRICA",
      Population: 13902972
    },
    {
      Country: "Burma",
      Region: "ASIA",
      Population: 47382633
    },
    {
      Country: "Burundi",
      Region: "AFRICA",
      Population: 8090068
    },
    {
      Country: "Cambodia",
      Region: "ASIA",
      Population: 13881427
    },
    {
      Country: "Cameroon",
      Region: "AFRICA",
      Population: 17340702
    },
    {
      Country: "Canada",
      Region: "NORTHERN AMERICA",
      Population: 33098932
    },
    {
      Country: "Cape Verde",
      Region: "AFRICA",
      Population: 420979
    },
    {
      Country: "Cayman Islands",
      Region: "SOUTH AMERICA",
      Population: 45436
    },
    {
      Country: "Central African Rep.",
      Region: "AFRICA",
      Population: 4303356
    },
    {
      Country: "Chad",
      Region: "AFRICA",
      Population: 9944201
    },
    {
      Country: "Chile",
      Region: "SOUTH AMERICA",
      Population: 16134219
    },
    {
      Country: "China",
      Region: "ASIA",
      Population: 1313973713
    },
    {
      Country: "Colombia",
      Region: "SOUTH AMERICA",
      Population: 43593035
    },
    {
      Country: "Comoros",
      Region: "AFRICA",
      Population: 690948
    },
    {
      Country: "Democratic Republic of Congo",
      Region: "AFRICA",
      Population: 62660551
    },
    {
      Country: "Republic of the Congo",
      Region: "AFRICA",
      Population: 3702314
    },
    {
      Country: "Cook Islands",
      Region: "OCEANIA",
      Population: 21388
    },
    {
      Country: "Costa Rica",
      Region: "SOUTH AMERICA",
      Population: 4075261
    },
    {
      Country: "Cote d'Ivoire",
      Region: "AFRICA",
      Population: 17654843
    },
    {
      Country: "Croatia",
      Region: "EUROPE",
      Population: 4494749
    },
    {
      Country: "Cuba",
      Region: "SOUTH AMERICA",
      Population: 11382820
    },
    {
      Country: "Cyprus",
      Region: "ASIA",
      Population: 784301
    },
    {
      Country: "Czech Republic",
      Region: "EUROPE",
      Population: 10235455
    },
    {
      Country: "Denmark",
      Region: "EUROPE",
      Population: 5450661
    },
    {
      Country: "Djibouti",
      Region: "AFRICA",
      Population: 486530
    },
    {
      Country: "Dominica",
      Region: "SOUTH AMERICA",
      Population: 68910
    },
    {
      Country: "Dominican Republic",
      Region: "SOUTH AMERICA",
      Population: 9183984
    },
    {
      Country: "East Timor",
      Region: "ASIA",
      Population: 1062777
    },
    {
      Country: "Ecuador",
      Region: "SOUTH AMERICA",
      Population: 13547510
    },
    {
      Country: "Egypt",
      Region: "AFRICA",
      Population: 78887007
    },
    {
      Country: "El Salvador",
      Region: "SOUTH AMERICA",
      Population: 6822378
    },
    {
      Country: "Equatorial Guinea",
      Region: "AFRICA",
      Population: 540109
    },
    {
      Country: "Eritrea",
      Region: "AFRICA",
      Population: 4786994
    },
    {
      Country: "Estonia",
      Region: "EUROPE",
      Population: 1324333
    },
    {
      Country: "Ethiopia",
      Region: "AFRICA",
      Population: 74777981
    },
    {
      Country: "Faroe Islands",
      Region: "EUROPE",
      Population: 47246
    },
    {
      Country: "Fiji",
      Region: "OCEANIA",
      Population: 905949
    },
    {
      Country: "Finland",
      Region: "EUROPE",
      Population: 5231372
    },
    {
      Country: "France",
      Region: "EUROPE",
      Population: 60876136
    },
    {
      Country: "French Guiana",
      Region: "SOUTH AMERICA",
      Population: 199509
    },
    {
      Country: "French Polynesia",
      Region: "OCEANIA",
      Population: 274578
    },
    {
      Country: "Gabon",
      Region: "AFRICA",
      Population: 1424906
    },
    {
      Country: "Gambia, The",
      Region: "AFRICA",
      Population: 1641564
    },
    {
      Country: "Gaza Strip",
      Region: "ASIA",
      Population: 1428757
    },
    {
      Country: "Georgia",
      Region: "EUROPE",
      Population: 4661473
    },
    {
      Country: "Germany",
      Region: "EUROPE",
      Population: 82422299
    },
    {
      Country: "Ghana",
      Region: "AFRICA",
      Population: 22409572
    },
    {
      Country: "Gibraltar",
      Region: "EUROPE",
      Population: 27928
    },
    {
      Country: "Greece",
      Region: "EUROPE",
      Population: 10688058
    },
    {
      Country: "Greenland",
      Region: "NORTHERN AMERICA",
      Population: 56361
    },
    {
      Country: "Grenada",
      Region: "SOUTH AMERICA",
      Population: 89703
    },
    {
      Country: "Guadeloupe",
      Region: "SOUTH AMERICA",
      Population: 452776
    },
    {
      Country: "Guam",
      Region: "OCEANIA",
      Population: 171019
    },
    {
      Country: "Guatemala",
      Region: "SOUTH AMERICA",
      Population: 12293545
    },
    {
      Country: "Guernsey",
      Region: "EUROPE",
      Population: 65409
    },
    {
      Country: "Guinea",
      Region: "AFRICA",
      Population: 9690222
    },
    {
      Country: "Guinea-Bissau",
      Region: "AFRICA",
      Population: 1442029
    },
    {
      Country: "Guyana",
      Region: "SOUTH AMERICA",
      Population: 767245
    },
    {
      Country: "Haiti",
      Region: "SOUTH AMERICA",
      Population: 8308504
    },
    {
      Country: "Honduras",
      Region: "SOUTH AMERICA",
      Population: 7326496
    },
    {
      Country: "Hong Kong",
      Region: "ASIA",
      Population: 6940432
    },
    {
      Country: "Hungary",
      Region: "EUROPE",
      Population: 9981334
    },
    {
      Country: "Iceland",
      Region: "EUROPE",
      Population: 299388
    },
    {
      Country: "India",
      Region: "ASIA",
      Population: 1095351995
    },
    {
      Country: "Indonesia",
      Region: "ASIA",
      Population: 245452739
    },
    {
      Country: "Iran",
      Region: "ASIA",
      Population: 68688433
    },
    {
      Country: "Iraq",
      Region: "ASIA",
      Population: 26783383
    },
    {
      Country: "Ireland",
      Region: "EUROPE",
      Population: 4062235
    },
    {
      Country: "Isle of Man",
      Region: "EUROPE",
      Population: 75441
    },
    {
      Country: "Israel",
      Region: "ASIA",
      Population: 6352117
    },
    {
      Country: "Italy",
      Region: "EUROPE",
      Population: 58133509
    },
    {
      Country: "Jamaica",
      Region: "SOUTH AMERICA",
      Population: 2758124
    },
    {
      Country: "Japan",
      Region: "ASIA",
      Population: 127463611
    },
    {
      Country: "Jersey",
      Region: "EUROPE",
      Population: 91084
    },
    {
      Country: "Jordan",
      Region: "ASIA",
      Population: 5906760
    },
    {
      Country: "Kazakhstan",
      Region: "ASIA",
      Population: 15233244
    },
    {
      Country: "Kenya",
      Region: "AFRICA",
      Population: 34707817
    },
    {
      Country: "Kiribati",
      Region: "OCEANIA",
      Population: 105432
    },
    {
      Country: "North Korea",
      Region: "ASIA",
      Population: 23113019
    },
    {
      Country: "South Korea",
      Region: "ASIA",
      Population: 48846823
    },
    {
      Country: "Kuwait",
      Region: "ASIA",
      Population: 2418393
    },
    {
      Country: "Kyrgyzstan",
      Region: "ASIA",
      Population: 5213898
    },
    {
      Country: "Laos",
      Region: "ASIA",
      Population: 6368481
    },
    {
      Country: "Latvia",
      Region: "EUROPE",
      Population: 2274735
    },
    {
      Country: "Lebanon",
      Region: "ASIA",
      Population: 3874050
    },
    {
      Country: "Lesotho",
      Region: "AFRICA",
      Population: 2022331
    },
    {
      Country: "Liberia",
      Region: "AFRICA",
      Population: 3042004
    },
    {
      Country: "Libya",
      Region: "AFRICA",
      Population: 5900754
    },
    {
      Country: "Liechtenstein",
      Region: "EUROPE",
      Population: 33987
    },
    {
      Country: "Lithuania",
      Region: "EUROPE",
      Population: 3585906
    },
    {
      Country: "Luxembourg",
      Region: "EUROPE",
      Population: 474413
    },
    {
      Country: "Macau",
      Region: "ASIA",
      Population: 453125
    },
    {
      Country: "Macedonia",
      Region: "EUROPE",
      Population: 2050554
    },
    {
      Country: "Madagascar",
      Region: "AFRICA",
      Population: 18595469
    },
    {
      Country: "Malawi",
      Region: "AFRICA",
      Population: 13013926
    },
    {
      Country: "Malaysia",
      Region: "ASIA",
      Population: 24385858
    },
    {
      Country: "Maldives",
      Region: "ASIA",
      Population: 359008
    },
    {
      Country: "Mali",
      Region: "AFRICA",
      Population: 11716829
    },
    {
      Country: "Malta",
      Region: "EUROPE",
      Population: 400214
    },
    {
      Country: "Marshall Islands",
      Region: "OCEANIA",
      Population: 60422
    },
    {
      Country: "Martinique",
      Region: "SOUTH AMERICA",
      Population: 436131
    },
    {
      Country: "Mauritania",
      Region: "AFRICA",
      Population: 3177388
    },
    {
      Country: "Mauritius",
      Region: "AFRICA",
      Population: 1240827
    },
    {
      Country: "Mayotte",
      Region: "AFRICA",
      Population: 201234
    },
    {
      Country: "Mexico",
      Region: "SOUTH AMERICA",
      Population: 107449525
    },
    {
      Country: "Fed. St. Micronesia",
      Region: "OCEANIA",
      Population: 108004
    },
    {
      Country: "Moldova",
      Region: "EUROPE",
      Population: 4466706
    },
    {
      Country: "Monaco",
      Region: "EUROPE",
      Population: 32543
    },
    {
      Country: "Mongolia",
      Region: "ASIA",
      Population: 2832224
    },
    {
      Country: "Montserrat",
      Region: "SOUTH AMERICA",
      Population: 9439
    },
    {
      Country: "Morocco",
      Region: "AFRICA",
      Population: 33241259
    },
    {
      Country: "Mozambique",
      Region: "AFRICA",
      Population: 19686505
    },
    {
      Country: "Namibia",
      Region: "AFRICA",
      Population: 2044147
    },
    {
      Country: "Nauru",
      Region: "OCEANIA",
      Population: 13287
    },
    {
      Country: "Nepal",
      Region: "ASIA",
      Population: 28287147
    },
    {
      Country: "Netherlands",
      Region: "EUROPE",
      Population: 16491461
    },
    {
      Country: "Netherlands Antilles",
      Region: "SOUTH AMERICA",
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
      Region: "SOUTH AMERICA",
      Population: 5570129
    },
    {
      Country: "Niger",
      Region: "AFRICA",
      Population: 12525094
    },
    {
      Country: "Nigeria",
      Region: "AFRICA",
      Population: 131859731
    },
    {
      Country: "N. Mariana Islands",
      Region: "OCEANIA",
      Population: 82459
    },
    {
      Country: "Norway",
      Region: "EUROPE",
      Population: 4610820
    },
    {
      Country: "Oman",
      Region: "ASIA",
      Population: 3102229
    },
    {
      Country: "Pakistan",
      Region: "ASIA",
      Population: 165803560
    },
    {
      Country: "Palau",
      Region: "OCEANIA",
      Population: 20579
    },
    {
      Country: "Panama",
      Region: "SOUTH AMERICA",
      Population: 3191319
    },
    {
      Country: "Papua New Guinea",
      Region: "OCEANIA",
      Population: 5670544
    },
    {
      Country: "Paraguay",
      Region: "SOUTH AMERICA",
      Population: 6506464
    },
    {
      Country: "Peru",
      Region: "SOUTH AMERICA",
      Population: 28302603
    },
    {
      Country: "Philippines",
      Region: "ASIA",
      Population: 89468677
    },
    {
      Country: "Poland",
      Region: "EUROPE",
      Population: 38536869
    },
    {
      Country: "Portugal",
      Region: "EUROPE",
      Population: 10605870
    },
    {
      Country: "Puerto Rico",
      Region: "SOUTH AMERICA",
      Population: 3927188
    },
    {
      Country: "Qatar",
      Region: "ASIA",
      Population: 885359
    },
    {
      Country: "Reunion",
      Region: "AFRICA",
      Population: 787584
    },
    {
      Country: "Romania",
      Region: "EUROPE",
      Population: 22303552
    },
    {
      Country: "Russia",
      Region: "ASIA",
      Population: 142893540
    },
    {
      Country: "Rwanda",
      Region: "AFRICA",
      Population: 8648248
    },
    {
      Country: "Saint Helena",
      Region: "AFRICA",
      Population: 7502
    },
    {
      Country: "Saint Kitts & Nevis",
      Region: "SOUTH AMERICA",
      Population: 39129
    },
    {
      Country: "Saint Lucia",
      Region: "SOUTH AMERICA",
      Population: 168458
    },
    {
      Country: "St Pierre & Miquelon",
      Region: "NORTHERN AMERICA",
      Population: 7026
    },
    {
      Country: "Saint Vincent and the Grenadines",
      Region: "SOUTH AMERICA",
      Population: 117848
    },
    {
      Country: "Samoa",
      Region: "OCEANIA",
      Population: 176908
    },
    {
      Country: "San Marino",
      Region: "EUROPE",
      Population: 29251
    },
    {
      Country: "Sao Tome & Principe",
      Region: "AFRICA",
      Population: 193413
    },
    {
      Country: "Saudi Arabia",
      Region: "ASIA",
      Population: 27019731
    },
    {
      Country: "Senegal",
      Region: "AFRICA",
      Population: 11987121
    },
    {
      Country: "Serbia",
      Region: "EUROPE",
      Population: 9396411
    },
    {
      Country: "Seychelles",
      Region: "AFRICA",
      Population: 81541
    },
    {
      Country: "Sierra Leone",
      Region: "AFRICA",
      Population: 6005250
    },
    {
      Country: "Singapore",
      Region: "ASIA",
      Population: 4492150
    },
    {
      Country: "Slovakia",
      Region: "EUROPE",
      Population: 5439448
    },
    {
      Country: "Slovenia",
      Region: "EUROPE",
      Population: 2010347
    },
    {
      Country: "Solomon Islands",
      Region: "OCEANIA",
      Population: 552438
    },
    {
      Country: "Somalia",
      Region: "AFRICA",
      Population: 8863338
    },
    {
      Country: "South Africa",
      Region: "AFRICA",
      Population: 44187637
    },
    {
      Country: "Spain",
      Region: "EUROPE",
      Population: 40397842
    },
    {
      Country: "Sri Lanka",
      Region: "ASIA",
      Population: 20222240
    },
    {
      Country: "Sudan",
      Region: "AFRICA",
      Population: 41236378
    },
    {
      Country: "Suriname",
      Region: "SOUTH AMERICA",
      Population: 439117
    },
    {
      Country: "Swaziland",
      Region: "AFRICA",
      Population: 1136334
    },
    {
      Country: "Sweden",
      Region: "EUROPE",
      Population: 9016596
    },
    {
      Country: "Switzerland",
      Region: "EUROPE",
      Population: 7523934
    },
    {
      Country: "Syria",
      Region: "ASIA",
      Population: 18881361
    },
    {
      Country: "Taiwan",
      Region: "ASIA",
      Population: 23036087
    },
    {
      Country: "Tajikistan",
      Region: "ASIA",
      Population: 7320815
    },
    {
      Country: "Tanzania",
      Region: "AFRICA",
      Population: 37445392
    },
    {
      Country: "Thailand",
      Region: "ASIA",
      Population: 64631595
    },
    {
      Country: "Togo",
      Region: "AFRICA",
      Population: 5548702
    },
    {
      Country: "Tonga",
      Region: "OCEANIA",
      Population: 114689
    },
    {
      Country: "Trinidad & Tobago",
      Region: "SOUTH AMERICA",
      Population: 1065842
    },
    {
      Country: "Tunisia",
      Region: "AFRICA",
      Population: 10175014
    },
    {
      Country: "Turkey",
      Region: "ASIA",
      Population: 70413958
    },
    {
      Country: "Turkmenistan",
      Region: "ASIA",
      Population: 5042920
    },
    {
      Country: "Turks & Caicos Is",
      Region: "SOUTH AMERICA",
      Population: 21152
    },
    {
      Country: "Tuvalu",
      Region: "OCEANIA",
      Population: 11810
    },
    {
      Country: "Uganda",
      Region: "AFRICA",
      Population: 28195754
    },
    {
      Country: "Ukraine",
      Region: "EUROPE",
      Population: 46710816
    },
    {
      Country: "United Arab Emirates",
      Region: "ASIA",
      Population: 2602713
    },
    {
      Country: "United Kingdom",
      Region: "EUROPE",
      Population: 60609153
    },
    {
      Country: "United States",
      Region: "NORTHERN AMERICA",
      Population: 298444215
    },
    {
      Country: "Uruguay",
      Region: "SOUTH AMERICA",
      Population: 3431932
    },
    {
      Country: "Uzbekistan",
      Region: "ASIA",
      Population: 27307134
    },
    {
      Country: "Vanuatu",
      Region: "OCEANIA",
      Population: 208869
    },
    {
      Country: "Venezuela",
      Region: "SOUTH AMERICA",
      Population: 25730435
    },
    {
      Country: "Vietnam",
      Region: "ASIA",
      Population: 84402966
    },
    {
      Country: "Virgin Islands",
      Region: "SOUTH AMERICA",
      Population: 108605
    },
    {
      Country: "Wallis and Futuna",
      Region: "OCEANIA",
      Population: 16025
    },
    {
      Country: "West Bank",
      Region: "ASIA",
      Population: 2460492
    },
    {
      Country: "Western Sahara",
      Region: "AFRICA",
      Population: 273008
    },
    {
      Country: "Yemen",
      Region: "ASIA",
      Population: 21456188
    },
    {
      Country: "Zambia",
      Region: "AFRICA",
      Population: 11502010
    },
    {
      Country: "Zimbabwe",
      Region: "AFRICA",
      Population: 12236805
    }
  ];