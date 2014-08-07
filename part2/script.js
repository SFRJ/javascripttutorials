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


whileLoop();
forLoop();