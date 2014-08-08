//Use loops to repeat one same block of instructions multiple times
//The 'while' loop
function whileLoop() {
    var number = 1;
    var total = 0;

    while (number <= 10) {
        total = total + number;
        number = number + 1;
    }

    console.log("Total: " + total);
}

//The 'for' loop
function forLoop() {
    /*
      Note: the index can be integrated within the loop
      The code within the brackets is made of 3 steps:
      'Initialization', 'Condition' and 'Step'.
    */
    var total = 0;
    for (var number = 1; number <= 20; number = number + 1) {
        total = total + number;
    }

    console.log("Total: " + total);
}

//Arrays are data structures that hold multiple elements
var things = ["house","dog","plane","kid"];
//We use the index to access the elements
var house = things[0];
//Loops are useful to traverse the arrays(Some loops like while will do it in one direction, but other loops like for
// could also do it backwards)
function goingThroughAnArray() {
    for(var index = (things.length- 1); index >= 0; --index) {
        console.log(things[index]);
    }
}

function basicArrayManipulations() {
    //We can add and remove elements to the array using some methods
//push adds an element to the end of the array
    things.push("number");
//unshift adds an element at the beginning of the array
    things.unshift("player");
//pop removes and  returns the last element from the array
    var lastElement = things.pop();
//shift removes and  returns the first element from the array
    var firstElement = things.shift();

//Sorting arrays
//an array of strings can be shorted alphabetically using sort(), but be careful becayse the case of the letter may
//affect the result.
    var sortedArray = things.sort();
    console.log(sortedArray);
//for arrays of numbers sort will return them in ascending order, but it iwll not work for numbers longer than 1 character(see how 37 is not sorted correctly)
    var someNumbers = [9,2,37,3];
    console.log(someNumbers.sort());
}


/*
 The sort order can be either alphabetic or numeric, and either ascending or descending.
 Default sort order is alphabetic and ascending.
 Note: When numbers are sorted alphabetically, "40" comes before "5".
 To perform a numeric sort, you must pass a function as an argument when calling the sort method.
 The function specifies whether the numbers should be sorted ascending or descending.
 It can be difficult to understand how this function works, but see the examples at the bottom of this page.
 Note: This method changes the original array.
*/
function sortNumbersDescending() {
    var points = [40, 100, 1, 5, 25, 10];
    var result = points.sort(function (a, b) {
        return b - a
    });
    console.log(result);
}

//to revert the order of an string array you can use reverse
function reversigArray() {
    var vocals = ["a", "e", "i", "o", "u"];
    console.log(vocals.reverse());
}

//Exercise to practice the loops
function filterOutAbocados() {
    var fruitAndVeg = [ "apple", "orange", "banana", "kiwi", "avocado", "celery", "aubergine" ];
    var noAvocados = [];

    for (var i = 0; i < fruitAndVeg.length; i = i + 1) {
        if (fruitAndVeg[i] !== "avocado") {
            noAvocados.push(fruitAndVeg[i]);
        }
    }
}

//Objects are constructs to hold data and organize data
    var city = {
        name: "London",
        population: 8308369,

        tallestBuilding: {
            name: "Shard",
            height: "310m"
        },

        numberOfUniversities: 43,
        averageRent: 1106,
        dailyTubePassengerJourney: 3500000,
        olympics: [ 1908, 1948, 2012]
    };

function practiceObjects() {
//the objects data can be accessed easily folowing the object's model
    console.log("Population of London: " + city.population);
    console.log("The tallest building in London is the " + city.tallestBuilding.name + " with a height of " + city.tallestBuilding.height);
    var i;

    console.log("The olympics took place in London in:\n");

    for (i = 0; i < city.olympics.length; i = i + 1) {
        console.log(city.olympics[i]);
    }
}

/*
Interacting with the DOM(Document object model)
The nodes of the html document the script is attached too, can be accessed using the object called "document"
This is an example of how could we access the object model:
 console.log(document.body.parentNode);

The only problem is that the script is called before the web page is loaded, so this makes the script return a null value.
To get around this, the practice is to create page triggers, that will call the function from the script only when a certain event occurs.
    //Have a look at how this is triggered in the HTML page.
*/
function showParentNode() {
    console.log(document.body.parentNode);
}

//This will list the hild elements of the element body(Just one level of nesting)
function listDomElements() {
    var children = document.body.childNodes;
    var i;

    for (i = 0; i <  children.length; i = i + 1) {
        console.log(children[i]);
    }
}

//The elements from the dom can be accessed by their tag name
function byTag() {
    //Note that when accessing by tag name the return is an array
    console.log(document.getElementsByTagName("h1")[0].innerHTML);
}

function byId() {
    console.log(document.getElementById("theid").innerHTML);
}

/*
Modifying the HTML
You can dynamically ad content to the page, here an example how to do it:
*/

function displayPopulation() {
    //Create an element(e.g Paragraph)
    var paragraph = document.createElement("p");
    //Make some content for the element
    var content = document.createTextNode("Population " + city.population);
    //Put the content into the paragraph
    paragraph.appendChild(content);
    //Append the paragraph to the body of the page
    document.body.appendChild(paragraph);
}

//Exercise for practice: create functions to load all the functions in the object 'city'

//Instructions(ennable and dissable here)
//whileLoop();
//forLoop();
//goingThroughAnArray();
//sortNumbersDescending();
//reversigArray();
//filterOutAbocados();
//practiceObjects();
//basicArrayManipulations();