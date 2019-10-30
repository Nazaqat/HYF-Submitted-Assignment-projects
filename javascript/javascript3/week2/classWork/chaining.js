/*Google the followings;

promise.all
promise.race

*/

function getPackage(shouldGetPackage) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldGetPackage) {
                resolve("your package is here");
            } else {
                reject("go get it on yourself");
            }
        }, 1000);
    });
}

getPackage()
    .then(value => console.log(value))
    .catch(err => console.log(err));

getPackage()
    .then(package => package.x)
    .then(package2 => package2.y) //('it could be any thing!)
    .then(package3 => package3.open)
    .catch(err => console.log(err));

navigator
    .getBattery()
    .then(data => console.log(data.level))
    .then(() => fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"))
    .then(data => data.json())
    .then(movies => console.log(movies))

.catch(err => console.log(err));
