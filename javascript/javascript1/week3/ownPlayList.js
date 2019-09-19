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

const myPlaylist = [];
function addSongToDatabase(song){
    myPlaylist.push(song);
}

addSongToDatabase({
    songId: songDatabase.length + 1,
    title: 'Meray rashkay kamar',
    artist: 'Nusrat Fateh Ali Khan',
    link: `https://www.youtube.com/watch?v=B0QEU9gxapk`,
  });

  addSongToDatabase({
    songId: songDatabase.length + 2,
    title: 'Jugni',
    artist: 'Arif Lohar',
    link: `https://www.youtube.com/watch?v=gjaH2iuoYWE`,
  })

  console.log(myPlaylist); 