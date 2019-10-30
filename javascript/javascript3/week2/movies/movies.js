fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(data => data.json())
    .then(movies => {
        const badMovies = movies.filter(items => items.rating < 4)
        console.log(badMovies);
        return badMovies;
    })
    .then(movies => {
        const countMoviesSinceYear2000 = movies.filter(items => items.year >= 2000)
        console.log(countMoviesSinceYear2000);
        return countMoviesSinceYear2000;
    })
    .then(movies => {
        const titles = movies.filter(items => items.title).map(items => items.title)
        console.log(titles);
        return titles;
    })
    .catch(err => console.log(err));
