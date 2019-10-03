const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
const kortestOrd = (right, left) => right.length <= left.length ? right :left  

console.log(danishWords.reduce(kortestOrd)); // returns 'ø
