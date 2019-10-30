const setTimeoutPromise = sec => {
    return new Promise(res => {
        setTimeout(res, sec)
    })
}
setTimeoutPromise(3000)
    .then(() => {
        console.log('Called after 3 seconds');
    });

const getCurrentLocation = () => {
    return new Promise(position => {
        navigator.geolocation.getCurrentPosition(position)
    })
}
getCurrentLocation().then((position) => { console.log(position); })
    // called when the users position is found
    .catch((error) => { console.log(error); });
// called if there was an error getting the users location
