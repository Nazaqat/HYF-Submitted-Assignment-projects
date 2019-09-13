
// what to wear according to weather conditions, a function
function wvear(temperature){
	if (temperature >= 40){
	return "shorts and T-shirt will do"
}

	else if (temperature >= 20){
	return "Very shorts and T-shirt will do"
}
	else if (temperature >= 0){
	return "big boy pants get a sweater and put a heavy coat on"
}
	else if (temperature <= -10){
	return "Stay inside you fool theres no need to freeze to death"
}
	else (temperature >= -20)
	return "Dont mess with weather"
}




const temperature = wvear(5);
console.log(temperature);



