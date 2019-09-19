const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  const travelTime = travelInformation[`destinationDistance`]/travelInformation[`speed`]*[60];

  // total time in minutes ll be displayed as hours and minutes
  function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return "Time to destination is"+ " " + rhours + " hour(s) and " + rminutes + " minute(s).";
    }
    console.log(timeConvert(travelTime));

