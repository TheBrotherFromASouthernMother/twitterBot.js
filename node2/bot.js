console.log("The Bot is starting");

const twit = require('twit');
const config = require('./config.js');
//console.log(config);
const T = new twit(config);

let parameters= {
  q: 'ACL since:2016-07-12',
  count: 11,
  lang: 'en',
  geocode: "30.2672,-97.7431,5mi ",
  result_type: "popular"
};

const gotData = function(err, data, response) {
  for (let i = 0; i < data.statuses.length; i ++) {
  console.log(data.statuses[i].text + "\n");
  }
};

T.get('search/tweets', parameters, gotData);
console.log(process.argv[2])