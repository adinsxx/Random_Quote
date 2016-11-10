
//Create an array of JavaScript objects to hold the data for your quotes. 
//Name the array quotes. 
//The quotes array should be accessible in the global scope.

var quotes = [{
  quote: "All hope abandon, ye who enter here.",
  source: "Dante Alighieri",
  citation: "The Divine Comedy: Inferno, Canto III",
  year: "1307",
  tags: ["poem", "epic"]
}, {
  quote: "While there's life there's hope, and only the dead have none.",
  source: "Theocritus",
  citation: "Theocritus",
  year: " ",
  tags: ["philosophy", "death"]
}, {
  quote: "Hope, withering, fled—and Mercy sighed farewell.",
  source: "Lord Byron",
  citation: "Corsair",
  year: " ",
  tags: ["poem", "epic"]
}, {
  quote: "You burn your hopes.",
  source: "Virgil",
  citation: "Æneid",
  year: "19 BC",
  tags: ["poem"]
}, {
  quote: "I hope for nothing. I fear nothing. I am free.",
  source: "Nikos Kazantzakis",
  citation: " ",
  year: " ",
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

//this looks like a wreck
var printQuote = function() {
  var selectedQuote = getRandomQuote(quotes);
  var formattedQuote;

  if (selectedQuote.year && selectedQuote.citation === " ") {
    formattedQuote = "<p class='quote'>" + selectedQuote.quote + "</p>" +
      "<p class='source'>" + selectedQuote.source + "</p>";
  } //if both year and citation are missing
  else if (selectedQuote.year === " ") {
    formattedQuote = "<p class='quote'>" + selectedQuote.quote + "</p>" +
      "<p class='source'>" + selectedQuote.source +
      "<span class='citation'>" + selectedQuote.citation + "</span>" +
      "</p>";
  } else if (selectedQuote.citation === " ") {
    formattedQuote = "<p class='quote'>" + selectedQuote.quote + "</p>" +
      "<p class='source'>" + selectedQuote.source +
      "<span class='year'>" + selectedQuote.year + "</span>" +
      "</p>";
  } else {
    formattedQuote = "<p class='quote'>" + selectedQuote.quote + "</p>" +
      "<p class='source'>" + selectedQuote.source +
      "<span class='citation'>" + selectedQuote.citation + "</span>" +
      "<span class='year'>" + selectedQuote.year + "</span>" +
      "</p>";
  }
  document.getElementById('quote-box').innerHTML = formattedQuote;
};

printQuote();
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//EXTRA CREDIT

//*When the quote changes, randomly change the background color of the page.

//Don't display a random quote more than once until ALL quotes from the array have been displayed. 
//To help reviewers (and yourself) verify that the quotes don’t repeat until they’ve all been displayed, 
//log the quote to the console each time the “Show Another Quote” button is clicked.