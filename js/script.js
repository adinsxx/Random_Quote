// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Create an array of JavaScript objects to hold the data for your quotes. 
//Name the array quotes. 
//The quotes array should be accessible in the global scope.

var quotes = [{
  quote: "All hope abandon, ye who enter here.",
  source: "Dante Alighieri",
  citation: "The Divine Comedy: Inferno, Canto III",
  year: "",
  tags: ["poem", "epic"]
}, {
  quote: "While there's life there's hope, and only the dead have none.",
  source: "Theocritus",
  citation: "Theocritus",
  year: "",
  tags: ["philosophy", "death"]
}, {
  quote: "Hope, withering, fled—and Mercy sighed farewell.",
  source: "Lord Byron",
  citation: "Corsair",
  year: "",
  tags: ["poem", "epic"]
}, {
  quote: "You burn your hopes.",
  source: "Virgil",
  citation: "Æneid",
  year: "",
  tags: ["poem"]
}, {
  quote: "I hope for nothing. I fear nothing. I am free.",
  source: "Nikos Kazantzakis",
  citation: "",
  year: "",
  tags: ["epitaph"]
}];

//Create a function named getRandomQuote which:
// * selects a RANDOM quote object from the quotes array
// * returns the randomly selected quote object
//random number needs to change every time button is clicked or after getRandomQuote runs
//make random number correspond to array[] ?

var getRandomQuote = function(qarray) {
  var rand = Math.floor(Math.random() * qarray.length); //chooses number between 0 and amt of quotes
  for (var i = 0; i < qarray.length; i++) {
    if (rand === i) {
      return qarray[i]; //returns quote object in its entirety
    }
  }
};

//* printQuote calls the getRandomQuote function and stores the returned quote object in a variable
//* printQuote constructs a string containing the different properties of the quote object 
//printQuote doesn't add a for a missing citation or a if the year property is missing
//how to check for citation/year

var printQuote = function() {
  var selectedQuote = getRandomQuote(quotes);
  var formattedQuote = "<p class='quote'>" + selectedQuote.quote + "</p>" +
    "<p class='source'>" + selectedQuote.source + "</p>" +
    "<span class='year'>" + selectedQuote.year + "</span>";

  document.getElementById('quote-box').innerHTML = formattedQuote;
};

printQuote();