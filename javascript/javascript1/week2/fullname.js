

const fullName1 = getFullName("Benjamin", "Hughes", true);
const fullName2 = getFullName("Nazaqat", "Ali");



function getFullName (useFormalName, firstName, lastName ) { 

    if (useFormalName){
    return "Lord" + '  ' + firstName + lastName;
}
else
return firstName + lastName;

}



console.log(fullName1);
console.log(fullName2);
  
 




