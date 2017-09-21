console.log("The Bot is starting...");
const twit = require('twit');
const config = require('./config.js');
const util = require('util');
const T = new twit(config);

let tweet = {
  status: "",
};

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What would you like to tweet? \n', (answer) => {
  if (answer.toLowerCase === 'exit') {
    rl.close();
  } else {
    tweet.status = answer;
    console.log(`Your tweet has been posted:`);
     rl.close();
  }
});

rl.on('close', () => {
  console.log(tweet.status);
  T.post('statuses/update', { status: tweet.status }, function(error, data, response) {
    if (error) {
      console.log(`Something went wrong! \n ${error} \n please try again`);
    } else {
      console.log('status posted');
    }
  });
})
