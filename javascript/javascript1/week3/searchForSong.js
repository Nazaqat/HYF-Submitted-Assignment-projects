const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];


  // Function getSongByTitle has not been applied but still results are the same :) 
 const searchedSong = function(myTodos, title){
   const index = myTodos.findIndex(function(todo, index){
     return todo.title.toLowerCase() === title.toLowerCase ()
   })
   return myTodos[index]
 }

 const printMe = searchedSong(songDatabase, 'When is enough too little?')
 const printMe2 = searchedSong(songDatabase,'When is enough too');
console.log(printMe, printMe2);



  