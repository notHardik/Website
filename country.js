const csv = require('csv-parser');
const fs = require('fs');
const results = []


document.getElementById("inputCountry").onchange() = () => { };

function checkCountry() {
    fs.createReadStream('Names.csv').
    pipe(csv()).
    on('data', (data)=> results.push(data)).
    on('end', () => {
        console.log(results);
    });
}
fs.createReadStream('Names.csv').
    pipe('Names', (data)=> results.push(data)).
    on('end', () => {
        console.log(results);
    });