
// Define a function named timesFour that takes in an input and multiples that input by four if it is numeric. If the input is not numeric, then return false.
// timesFour(0) //0
// timesFour("5") //20
// timesFour(-5) //-20
// timesFour('Texas') //false
// timesFour([2,1,0]) //false
// timesFour(true) //false
// timesFour(null) //false

function timesFour(input) {
    if (isNaN(input)){
        return false
    } else if (input === true || input === null) {
        return false;
    } else {
        return input*4;
    }
}

console.log(timesFour(0));
console.log(timesFour("5"));
console.log(timesFour(-5));
console.log(timesFour("Texas"));
console.log(timesFour([2, 1, 0]));
console.log(timesFour(true));
console.log(timesFour(null));


// Define a function named convertDaystoHours that takes in one input Days. Return the conversion of the number of days into total hours. If the input is not numeric or a numeric string, convertDaystoHours, should return false.
// convertDaystoHours(0) //0
// convertDaystoHours('5') // 120
// convertDaystoHours('Texas') //false
// convertDaystoHours([2, 1, 0]) //false
// convertDaystoHours(true) //false
// convertDaystoHours(false) //false


function convertDaystoHours(days) {
    if (isNaN(days) || days === true || days === false){
        return false;
    } else {
        return days*24;
    }
}


console.log(convertDaystoHours(0));
console.log(convertDaystoHours('5'));
console.log(convertDaystoHours('Texas'));
console.log(convertDaystoHours([2, 1, 0]));
console.log(convertDaystoHours(true));
console.log(convertDaystoHours(false));


// Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: “$XX.XX”. If either or both inputs are not numeric or numeric strings, calculateTax should return false.
// calculateTax(25, 8)				 // “$27.00"
// calculateTax(10, 12)             // “$11.20”
// calculateTax(120, 15.5)			 //	“$138.60"
// calculateTax(10, true)           // false
// calculateTax([1, 2, 3], 10)      // false
// calculateTax(“Codeup”, 100)      // false
// calculateTax()                   // false

function calculateTax(totalPaid, taxPercent){
    var finalPrice = totalPaid + (taxPercent/100 * totalPaid)
    if (isNaN(totalPaid) || isNaN(taxPercent)){
        return false;
    } else if (totalPaid || taxPercent === true && false) {
        return false
    } else {
        return finalPrice;
    }
}

console.log(calculateTax(25, 8));
console.log(calculateTax(10, 12));
console.log(calculateTax(120, 15.5));
console.log(calculateTax(10, true));
console.log(calculateTax([1, 2, 3], 10));
console.log(calculateTax("Codeup", 100));
console.log(calculateTax());

//Given arrays of strings that are orders of food in string form to your function, write a function named tacoTuesday that returns TRUE or FALSE if the array provided has any element mention the word ‘taco’ in its value.
    //tacoTuesday(hasTacos) //true
    //tacoTuesday(noTacos) //false

//hint: String.includes() might be useful here. . combined with some kind of iterating structure? Something that might be able to go through each part of our array? .
// var hasTacos = [“blueberry muffin”, “banana”, “yogurt”, “cereal”, “brisket and egg taco”]
// var noTacos = [“parfait”, “omlette de frumage”, “protein shake”, “fasting”]


//function tacoTuesday(arr){ //arr; array
//    //arrays have length < use that for my loop
//    //a FOR loop is good for set numbers of iterations
//    for (var i = 0; i < arr.length; i++) {
//
//        //as we go through the array; check the element to see if it has teh word 'taco'
//        if(arr[i].includes("taco")){
//            //return true if you find a 'taco'
//            return true;
//        }
//
//    }
//    return false;
//}
//
//tacoTuesday(hasTacos);
//tacoTuesday(noTacos);

// Good news! I caught a bunch of FISH, and I got them in my truck:

var fish1 = { type: "channel catfish", sizeInches: 18, locationCaught: "Lions Park", color: "blue"};

var fish2 = { type: "channel catfish", sizeInches: 19, locationCaught: "Lions Park", color: "blue"};

var fish3 = { type: "redfish", sizeInches: 22, locationCaught: "Braunig Lake", color: "red"};

var fish4 = { type: "redfish", sizeInches: 29, locationCaught: "Braunig Lake", color: "red"};

var kensCatch = [fish1, fish2, fish3, fish4];


// Also, well, I caught these - don't ask me where:

var sewerFish1 = { type: "tropical and unknown", sizeInches: 6, locationCaught: "sewer", color: "green"};

var sewerFish2 = { type: "tropical and unknown", sizeInches: 3, locationCaught: "sewer", color: "blue"};

var strangeCatch = [sewerFish1, sewerFish2];

// Bad news - I need some help with knowing what all I caught!

// Write a function named fishingWeekend that takes in an array of fish objects.

// fishingWeekend() will alert me with three separate alerts from that array of fish objects:

// 1. First, program an alert letting me know if I caught a red fish, blue fish, both, or neither in my catch [my array].

// 2. Second, an alert letting me know the average sizes of the total number of fish I caught [“That totals up to 4 fish with an average length of 22 inches.“];

// 3. An alert letting me know if I got any catfish [“You caught some catfish tonight!“]

// HINT: Do NOT try to do all of these in one go.

// Write your function out incrementally, one alert at a time, piece by piece to eventually combine into the larger function desired.

// Happy fishing!

//Write a function that will accept a number parameter as an argument - that number will indicate the amount of times to print out all even numbers up to the argument provided.

//function logEvens(10) //2
                        //4
                        //6
                        //8
                        //10

function logEvens(num){

    for (var i = 0; i <= num; i++) {

        if (i % 2 === 0 && i !== 0){
            console.log(i);
        }
    }
}

console.log(logEvens(30));