
// to get todays day
const today = new Date();
const day = today.getDay();
const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

console.log("Today is " + daylist[day] + '  ' + "and");

//to get weekday the event is being held
function getEventWeekday(num) {
const functionday = today.getDay() + num 

if (functionday >= 7) {
console.log ("function will be held on  " + daylist[(functionday % 7)] );
} 

else {
console.log ("function will be held on  " + daylist[(functionday)]);
}

}

return getEventWeekday(6);
