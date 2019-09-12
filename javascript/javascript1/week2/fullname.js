
const fullName1 = "Benjamin Hughes";
const fullName2 = "Nazaqat Ali";
const useFormalName = "Lord";

var namestr = getFullName(useFormalName, fullName2);
console.log(namestr);


function getFullName (Para1, Para2 ) { //function creation

// if else statement/ outside the function
if ($("#fchbx").is(':checked') )
    return Para1 + " " + Para2;
else
    return Para2;

}

  
  
 




