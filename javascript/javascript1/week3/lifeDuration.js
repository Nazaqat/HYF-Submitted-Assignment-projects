const seriesDurations = [

    {

      title: 'Home land',

      days: 3,

      hours: 1,

      minutes: 0,  

    },

    {

      title: 'House of cards',

      days: 3,

      hours: 14,

      minutes: 0,

    },

    {

      title: 'Friends',

      days: 2,

      hours: 12,

      minutes: 0,

    }

  ];


lifeDuration();
function lifeDuration(){

const LifeOfPerson = 80;
const YearsInMin= LifeOfPerson * 525600;//  525600 Minuttes in a year
  
   sum = 0;  
  
    for (let i = 0; i<seriesDurations.length ; i++)
  
    {
  
      const daysInMinute = seriesDurations[i].days * 1440;
  
      const hoursInMinute = seriesDurations[i].hours * 60;
        
      const TotalMinutes = daysInMinute + hoursInMinute + seriesDurations[i].minutes;
    
      const Percentage = (TotalMinutes/YearsInMin) * 100;
    
  
      console.log(`The ${seriesDurations[i].title} series took ${Percentage.toFixed(3)} % of my life`);  
  
  
        sum += Percentage; 
  
  
    }
    
  }
  
  console.log(`In total that is ${sum.toFixed(2)}% of my life`);
  
 



