
// what is promise and how we create this ? 
// consumption 
// .catch
// resolve.all

const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("you did it")
    }, 2 * 1000);


});

console.log(promise);

promise.then(value => console.log(value));


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

const promisex = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('you can do this, woo')
    }, 2 * 1000)



});
promisex.then((value) => console.log(value));

const promisex = new Promise((reject) => {
    setTimeout(() => {
        reject('you can do this, woo')
    }, 2 * 1000)

});
promisex.then((value) => console.log(value));
