console.log("The Bot is starting...");

const twit = require('twit');
const config = require('./config.js');


const T = new twit(config);

let args = process.argv.slice(2).toString();
let searchTerms = args.replace(/,/g, " ");


let parameters= {
  q:`${searchTerms} since:2016-07-12`,
  count: 11,
  lang: 'en',
  //geocode: "40.730610,-73.935242,30mi ",
  result_type: "popular"
};

const gotData = function(err, data, response) {
  for (let i = 0; i < data.statuses.length; i ++) {
  console.log(data.statuses[i].text + "\n");
  }
};

T.get('search/tweets', parameters, gotData);
