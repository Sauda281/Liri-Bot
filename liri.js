// DEPENDENCIES
// =====================================

// Read and set environment variables
require("dotenv").config();

// Import the API keys
var keys = require("./keys");

// Import the node-spotify-api NPM package.
var Spotify = require("node-spotify-api");

// Import the axios npm package.
var axios = require("axios");

// Import the moment npm package.
var moment = require("moment");

// Import the FS package for read/write.
var fs = require("fs");

// Initialize the spotify API client using our client id and secret
var spotify = new Spotify(keys.spotify);
var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret,
})

var action = process.argv[2];
var value = process.argv[3];

switch(action){
  case "concert-this":
    getBands(value)
    break;
    case"spotify-this-song":
    // if a song has not been specified, use default song
    if (value=="") {
    value = defaultSong 
     
    };
      getSongs(value)
      break;
      case"movie-this":
      if(value==""){
        value = defaultMovie;
      }
     getMovie(value)
     break;
     default:
     break;
}

function getBands(artist) {
  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
  .then(function(response){
    console.log("Name of the venue:", response.data[0].venue.name);
    console.log("Venue location:", response.data[0].venue.city);
    var eventDate = moment(response.data[0].datetime).format('MM/DD/YYY');
    console.log("Date of the Event:", eventDate);
    
})
     .catch(function(error){
       console.log(error);
     });
}
 function getSongs(songName) {
   if(songName === ""){
     songName = "the Sign by Ace of Base";
    
    }

   spotify.search({ type: 'track', query: songName}, function (err, data){
     if(err) {
       return console.log('Error occured:' + err);
     }
      console.log("Artists:", data.tracks.items[0].album.artists[0].name)
      console.log("Preview link:", data.tracks.items[0].preview_url)
      console.log("Album Name:", data.tracks.item[0].album.name)
   });
 }

 function getMovie(movieName){
   axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=5fd6789e" + movieName)
      .then(function(data){
        console.log(data.data);
        // var results =
        //    Title of the movie: ${data.data.Title}
        //    Year of the movie:${data.data.Year}
        //    IMDB Rating of the movie:${data.data.Rating}
        //    Rotten Tomatoes Rating of the movie: ${data.data.Ratings[1].value}
        //    Country where the movie was produced: ${data.data.Country}
        //    Language of the movie: ${data.data.Languge}
        //    Plot of the movie: ${data.data.Plot}
        //    Actors in the movie: ${data.data.Actors};

      })

      .catch(function(error){
        console.log(error);
      });
      if(movieName==="Mr. Nobody"){
        console.log("---------------");
        console.log("If you haven't watched 'Mr.Nobody', then you should: http://imdb.com/title/tt0485947");
        console.log("It's on Netflix!");
      }
 }
 function doWhatItSays(){
   fs.readFile("random.txt", "utf8", function(err,data){
     data = data.split(",");
     var action = data[0]
     var value =data[1]
     switch(action){
       case "concert-this":
         getBands(value)
         break;
       case "spotify-this-song":
         getSongs(value);
       case "movie-this":
         getMovie(value)
         break;
         default:
         break;
     }
   });
 }
// FUNCTIONS
// =====================================

// Writes to the log.txt file
var writeToLog = function(data) {

  /** FIXME: BONUS
   * 
   * 

      In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.

      Make sure you append each command you run to the log.txt file.

      Do not overwrite your file each time you run a command.
    */ 

    // Append the JSON data and add a newline character to the end of the log.txt file

};

// // Helper function that gets the artist name
// var getArtistNames = function(artist) {
//   return artist.name;
// };

// // Function for running a Spotify search
// var getMeSpotify = function(songName) {
//   if (songName === undefined) {
//     songName = "What's my age again";
//   }

//   function mySpotify(userInput){
//     var song = userInput;
//     if(!song){
//       song = "the Sign by Ace of Base"
//     }
//      spotify.search({type: 'track', query: song}, function(err, data){
//        if(err){
//          return console.log('Error occured:' + err);
//        }

//        console.log("\n---------\Song Name:" + data.tracks.items[0].name);
//        console("Artist(s) Name:" + data.tracks.items[0].artists[0].name);
//        console("Album Name:" + data.tracks.items[0].album.name);
       
       
//      });

//      module.exports = mySpotify;
//   }
//   /** TODO: Write the code to exceute the command below. 
//    * 
//    *      node liri.js spotify-this-song '<song name here>'
//    * 
   
//     * This will show the following information about the song in your terminal/bash window

//         1. Artist(s)

//         2. The song's name

//         3. A preview link of the song from Spotify

//         4. The album that the song is from

//     * If no song is provided then your program will default to "The Sign" by Ace of Base.

//     * You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.

//     * The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:

//   */
//   spotify.search();
// };

// // Function for concert search
// var getMyBands = function(artist) {

//   /** TODO: Write the code to exceute the command below. 
//    * 
//    *        node liri.js concert-this <artist/band name here>
//    * 
//    * This will search the Bands in Town Artist Events API
//         1. Name of the venue
//         2. Venue location
//         3. Date of the Event (use moment to format this as "MM/DD/YYYY")
//       Important: There is no need to sign up for a Bands in Town api_id key. Use the codingbootcamp as your app_id. 
//    * 
//   */
//  //FIXME: 
//   var queryURL = "https://unpkg.com/axios/dist/axios.min.js";

//   axios.get("https://unpkg.com/axios/dist/axios.min.js").then(

    
//     function(response){
//       var jsonData = response.data;

//       if (!jsonData.length) {
//         console.log("No results found for " + artist);
//         return;
//       }

//       var logData = [];

//       logData.push("Upcoming concerts for " + artist + ":");

//       //FIXME: Finish the code below

//     }
//   );
// };

// // Function for running a command based on text file
// var doWhatItSays = function() {
//   fs.readFile("random.txt", "utf8", function(error, data) {
//     console.log(data);

//     var dataArr = data.split(",");

//     if (dataArr.length === 2) {
//       pick(dataArr[0], dataArr[1]);
//     }
//     else if (dataArr.length === 1) {
//       pick(dataArr[0]);
//     }
//   });
// };

// // Function for determining which command is executed
// var pick = function(command, commandData) {
//       //TODO:  Write your code below
//       // This will be the main function to control which method to call. See function "runThis" is calling this pick method

 
// };

// // Function which takes in command line arguments and executes correct function accordingly
// var runThis = function(argOne, argTwo) {
//   pick(argOne, argTwo);
// };

// // MAIN PROCESS
// // =====================================
// runThis(process.argv[2], process.argv.slice(3).join(" "));
