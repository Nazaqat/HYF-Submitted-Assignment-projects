const button = document.querySelector(".button");
const inputValue = document.querySelector(".inputValue");
const name = document.querySelector(".name");
const desc = document.querySelector(".desc");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".windspeed");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const country = document.querySelector(".land");
const iconID = document.querySelector(".icon");


button.addEventListener("click", function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=73ab1767123abe1d70034a842a834a9f&units=metric')
        .then(response => response.json())
        .then(data => {
            const nameValue = data['name'];
            const tempValue = data['main']['temp'];
            const humiValue = data['main']['humidity'];
            const descValue = data['weather'][0]['description'];
            const windValue = data['wind']['speed'];
            const sunriseValue = data['sys']['sunrise'];
            const sunsetValue = data['sys']['sunset'];
            const landValue = data['sys']['country'];
            const icon = `http://openweathermap.org/img/wn/${data['weather'][0]['icon']}@2x.png`;

            name.innerHTML = "City:" + "   " + nameValue;
            temp.innerHTML = Math.floor(tempValue) + "   " + "℃";
            desc.innerHTML = descValue;
            humidity.innerHTML = "Humidity:" + "   " + humiValue + "   " + "%";
            wind.innerHTML = "Wind Speed:" + "   " + windValue + "   " + "m/s";
            sunrise.innerHTML = "Sunrise:" + "   " + new Date(sunriseValue * 1000);
            sunset.innerHTML = "Sunset:" + "   " + new Date(sunsetValue * 1000);
            country.innerHTML = "Country:" + "   " + landValue;
            iconID.innerHTML = `<img src ="${icon}" style="height: 100%" >`;

        })

    .catch(err => alert(err))
});