require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify);
var inquirer = require("inquirer");

var option1 = "";
var option2 = "";
inquirer.prompt([{
    type: "list",
    message: "Choose: ",
    choices: ["Concert", "Spotify", "Movie", "do this"],
    name: "a"
}, {
    type: "input",
    message: "Search:",
    name: "b"
}
]).then(answers => {
    // switch case statements
    option1 = answers.a;
    option2 = answers.b;
    spotifyThis();
});

function spotifyThis() {
    var songName = option2;
    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(JSON.stringify(data.tracks.items[0].name)); 
      });

}
