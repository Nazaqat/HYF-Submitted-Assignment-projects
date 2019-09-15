
const fullname1 = getFullname("Benjamin", "Hughes", true);
const fullname2 = getFullname("Benjamin", "Hughes", false);

function getFullname(firstName, sirName, useFormalName) {

    if (useFormalName) {
   
       return `Lord ${firstName} ${sirName}`;
   
     } else {
   
       return `${firstName} ${sirName}`;
   
     }
   
   }
   

   
   console.log(fullname1);
   console.log(fullname2);
   
   
   