const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

function mean(housePrices) {
  var sum = 0;
  for (var i = 0; i < housePrices.length; i++) {
    sum = sum + housePrices[i];
    
  }

  return (sum / housePrices.length); // returns mean
}

function median (housePrices){
  if(housePrices.length ===0) return 0;
  
  housePrices.sort(function(a,b){
    return a-b;});

  var half = Math.floor(housePrices.length / 2);

  if (housePrices.length % 2)
    return housePrices[half];
    
  return (housePrices[half - 1] + housePrices[half]) / 2.0;// returns median
}


function meanMedianFunction(housePrices){
const meanMedian = {mean: mean(housePrices), median: median(housePrices)}
return meanMedian;
}

console.log(meanMedianFunction(housePrices));

const ul = document.createElement('ul');
ul.textContent = 'House Prices';
document.body.appendChild(ul);

housePrices.forEach(housePrices => {
   const li = document.createElement('li');
   li.textContent = housePrices;
   ul.appendChild(li);// renders house prices in html page
});



const p1 = document.createElement('p1');
p1.textContent = mean(housePrices);
document.body.appendChild(p1);// renders mean value in html page

const p2 = document.createElement('p2');
p2.textContent = median(housePrices);
document.body.appendChild(p2);// renders median value in html page




















