
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



//random color.. choose from a 'pool' of pre-chosen colors or somehow generate HEX
//set body background-color property in css

var randColor = function(carray){
  var rand = Math.floor(Math.random() * carray.length); 
  for (var i = 0; i < carray.length; i++){
    if (rand === i){
      return carray[i];
    }
  }
};


//takes current list of quotes
//first loop selects a quote that is == rand
  //removes quote object, stores in new array
  //returns removed quote
//when loop runs again, array has been updated and contains one less item
//repeat
//when qarray.length = 0, start process over using new array


var getRandomQuote = function(qarray) {
  var used = [];
  for (var i = 0; i < qarray.length; i++) {
    used = qarray.splice(Math.floor(Math.random()*qarray.length),1)[i];
    return used;
  }
};

//used = qarray.splice(Math.random() * qarray.length, 1)[i];





//this looks like a wreck
var printQuote = function() {
	var formattedQuote;
  var color = randColor(colors);
  var selectedQuote = getRandomQuote(quotes);
  
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
  document.body.style.backgroundColor = color;
  document.getElementById('quote-box').innerHTML = formattedQuote;
};


printQuote();

// window.setInterval(printQuote, 3000); //For example, every 30 seconds, make a new quote appear. 


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

