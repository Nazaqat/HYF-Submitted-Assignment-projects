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

//Add song to database via function 
const myPlaylist = [];
function addSongToDatabase(title, artist){
    songDatabase.push({
      songId: songDatabase.length + 1,
      title: title,
      artist: artist
  })
}

addSongToDatabase(
   'Meray rashkay kamar',
   'Nusrat Fateh Ali Khan',
   
  );

  addSongToDatabase(
    'Jugni',
    'Arif Lohar',
    
  );

  
console.log(songDatabase);