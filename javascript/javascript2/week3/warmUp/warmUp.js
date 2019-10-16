// warmUp exercise ## 01 ##
setTimeout(() => {
        console.log("Called after 2.5 seconds")
    }, [(2 * 1000) +500]);


// ## 02 ##

function nal (delay, stringToLog){
    setTimeout(()=> {
        console.log(stringToLog);
    }, (delay * 1000))
}

nal(5, "This string logged after 5 seconds");
nal(3, "This string logged after 3 seconds");

//## 03 ##
document.getElementById("clickbtn").addEventListener("click", () => {
    nal(5, "This string logged after 5 seconds")
});


// ## 04 ##
function earthLogger () {
  console.log("Earth");
}

function saturnLogger(){
  console.log("Saturn");
}

function planetLogFunction(earthLogger) {
  return earthLogger;
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);


//## 05 ##
var x = document.getElementById("output");

function getLocation (){
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Browser not supporting"
  }
    
    }

    function showPosition(position){
      x.innerHTML = "Latitude = " +position.coords.latitude;
      x.innerHTML += "<br />"
      x.innerHTML += "Longitude = " +position.coords.longitude;
    }
//## 07 ##
  function runAfterDelay(delay, callback){
    setTimeout(()=>{
      callback()
    }, (delay * 1000))
  }

  runAfterDelay(5, function(){
    console.log("should be logged after 5 seconds");
  });


//## 08 ##
  function doubleClick (){
    document.getElementById("doubleClick").innerHTML = "double click detected!";
    }

    
//## 09 ##

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke){
  if(shouldTellFunnyJoke === true){
      return logFunnyJoke();
  } else {
      return logBadJoke();
  }    

  function logFunnyJoke(){
      console.log("Doctor: I m sorry but you suffer from a terminal illness and have only 10 to live. what do you mean by 10? 10 days, months or ??, said patient. Doctor: Nine!");
  
  }

  function logBadJoke(){
      console.log("Doctor: I m sorry but you suffer from a terminal illness and have only 10 to live. what do you mean by 10? 10 days, months or ??, said patient. Doctor: Nine!");

  }
}
jokeCreator(true);
jokeCreator(false);

  





