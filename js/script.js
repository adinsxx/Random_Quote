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


//10 colors to select from for bg color
var colors = ['#00BA9C',
  '#F77D59',
  '#A14273',
  '#C9DE63',
  '#FFBA9C',
  '#4F5E8C',
  '#FF8A00',
  '#8F2E42',
  '#FC0052',
  '#69524D'
];

var qcopy = []; //init qcopy array for holding onto 'used' quotes from quotes array

//random color.. choose from a 'pool' of pre-chosen colors or somehow generate HEX
//set body background-color property in css
//feels like there is probably a better way to do this now that I'm done with the project and know more..
var randColor = function(carray) {
  var rand = Math.floor(Math.random() * carray.length);
  for (var i = 0; i < carray.length; i++) {
    if (rand === i) {
      return carray[i];
    }
  }
};


var getRandomQuote = function() {
  var random = Math.floor(Math.random() * (qcopy.length)); //generates random number based on length of qcopy to keep things dynamic in case more quotes are added
  if (qcopy.length === 0) { //if qcopy is empty either from init or from being spliced..
    qcopy = quotes.slice(0); //..slice from quotes array beginning at 0 and going through entire length of quotes thus refilling qcopy
  }
  return qcopy.splice(random, 1)[0]; //returns spliced value from qcopy that is equal to the random number at index 0 thus emptying qcopy
};


//this looks like a wreck, sorry
var printQuote = function() {

  var formattedQuote; //initializes formattedQuote for use later on

  var color = randColor(colors); //sets random color
  var selectedQuote = getRandomQuote(); //sets random quote

  if (selectedQuote.year && selectedQuote.citation === " ") { //if both year and citation are missing alter output and so on
    formattedQuote = "<p class='quote'>" + selectedQuote.quote + "</p>" +
      "<p class='source'>" + selectedQuote.source + "</p>";
  } else if (selectedQuote.year === " ") {
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
  console.log(selectedQuote); //logging used quotes to help validate that function does not repeat any

  document.body.style.backgroundColor = color; //set background to randomly chosen color
  document.getElementById('quote-box').innerHTML = formattedQuote;
};


printQuote(); //does it matter if this comes before or after the setInterval method or the getElementByID method?

window.setInterval(printQuote, 3000); //New quote every 30 seconds


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
