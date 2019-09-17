
const gameOfThrones = (3.041667/29200*100); // const definition + call to function
const sopranos = (3.58/29200*100);
const theWire = (2.50/29200*100);

function getWholePercent1(percentOf,percentFor){
for (let i=0; i<3; i++){
document.write (percentFor/percentOf*100);

}
}

console.log("The Game of Thrones took" + " " + gameOfThrones + " " + "of my precious life");
console.log("Sopranos took" + " " + sopranos + " " + "of my precious life");
console.log("The Wire took" + " " + theWire + " " + "of my precious life");
console.log("In total that is" + " " + (gameOfThrones + sopranos + theWire) + " "+"of my life");


