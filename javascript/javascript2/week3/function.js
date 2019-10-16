// #01#
const functionsArray = [
    () => {console.log ("First function")},
    () => {console.log ("Second function")},
    () => {console.log ("Third function")}
    
    ];
    
    functionsArray.forEach(items => items());

// #02#
const x = () => {
    console.log(5 * 5);
};

function nal(){
    console.log(100 * 5);
}

x();
nal();

// #03# Create an object that has a key whose value is a function. Try calling this function.
const cars = { 
        car: function BMW(){console.log("BMW 2020 Model price is 3 million dkk")}
    };

cars.car();




















