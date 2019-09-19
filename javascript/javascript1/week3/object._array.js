
//object oriented programming
const user = {
    name: "Nynne",
    nickname: "nice",
    age: 34,
    nationality: "DK",
    gender: "woman",
    languages: ["DK", "EN", "DE", "JavaScript", "Ruby"],
    education: "university",
    isMarried: false,
    friends: {
        bestFriends: ["gizem", "Rasmus"],
        acquaintences: [ "christopher", "birte"]
    }
}

const user2 = {
    name: "Rasmus",
    nickname: "Rassi",
    age: 29,
    nationality: "DK/EN",
    gender: "man",
    languages: ["DK", "EN", "DE", "JavaScript", "Ruby", "Python", "MATLAB", "C/C++", "Julia", "PHP", "Java"],
    education: "PhD",
    isMarried: false,
    friends: {
        bestFriends: ["Mark", "Nynne"],
        acquaintences: ["Christopher", "Marie"]
    }
}

const user3 = {
    name: "Marie",
    nickname: "M",
    age: 33,
    nationality: "DK",
    gender: "woman",
    languages: ["DK", "EN"],
    education: "university",
    isMarried: false,
    friends: {
        bestFriends: ["Thomas", "Rasmus"],
        acquaintences: ["Christopher", "Nynne"]
    }
}
//validation part** key is used to access object properties
// console.log(user);
const isGreetedFormally = true
let key;
if (isGreetedFormally){
    key = `name`
    

}else {
    key = `nickName`

}

// print/output part
// console.log(`Hello, ${user[key]}`);
// console.log(user.friends.acquaintences); //alternative
// console.log(user[`friends`][`acquaintences`]) // alternative
// console.log(user[`friends`].acquaintences)
// console.log(user.languages.slice(-1))
// console.log(user.languages.pop(-1))
// console.log(user[`languages`]. slice(-1))

// delete user.age;
// console.log(user);

//average age of three users mentioned above
// const users = [user, user2, user3]

// let sum=0;

// for (let i = 0; i<users.length; i ++){
//     // console.log(users[i].name)
//     // console.log(users[i].age)
//     sum += users[i].age
    
// }
// const avg = sum /users.length
// console.log (avg)

//xzxzxzxzxzxzzxzxzxzzxxz
const users = [user, user2, user3]

for (let i=0; i<users.length; i++){
    for (let j=0; j<users[i].languages.length; j++){
        console.log(users[i].languages[j])
    }

}

//JavaScript Array concat() Method* Google ** to avoid values in one array from different arrays
// Set in javascript** Google to avoid duplicates in array



