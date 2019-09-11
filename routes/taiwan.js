var weatherTW = require('weather-taiwan');

// Fetching raw data from Central Weather Bureau
var fetcher = weatherTW.fetch('CWB-2F74471C-2910-4CE8-B0DE-466E53CA3DB9');

// Creating a parser to convert raw data to JavaScript object
var parser = weatherTW.parse();

parser.on('data', function(data) {
    console.log(data);
});

fetcher.pipe(parser);
module.exports = fetcher