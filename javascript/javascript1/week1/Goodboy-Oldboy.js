const dogYearOfBirth = 2017
const dogYearFuture = 2027
const dogYearAgeOfDog = (dogYearFuture - dogYearOfBirth) * 7;
const dogYearAgeOfHuman = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears ===true){
    console.log(`Your dog will be ${dogYearAgeOfHuman} human years old in ${dogYearFuture}`)
}

else {
console.log(`Your dog will be ${dogYearAgeOfDog} years old in ${dogYearFuture}`)
}
