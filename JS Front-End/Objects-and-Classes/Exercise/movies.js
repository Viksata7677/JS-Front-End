function moviesInfo(moviesArr) {
    let movies = [];

    for (const str of moviesArr) {
        if (str.includes('addMovie')) {
            let [_, movieName] = str.split('addMovie ');
            let movieObj = { 
                name: movieName,
            };
            movies.push(movieObj);

        } else if (str.includes('directedBy')) {
            let [movieName, director] = str.split(' directedBy ');
            let currentMovie = movies.find(movieObj => movieObj.name === movieName);

            if (currentMovie) {
                currentMovie.director = director;
            }

        } else if (str.includes('onDate')) {
            let [movieName, date] = str.split(' onDate ');
            let currentMovie = movies.find(movieObj => movieObj.name === movieName);

            if (currentMovie) {
                currentMovie.date = date;
            }
        }
    }
    
    let fullMovies = movies.filter(movieObj => movieObj.director && movieObj.date);
    fullMovies.forEach(movieObj => {
        console.log(JSON.stringify(movieObj));
    });
    
}