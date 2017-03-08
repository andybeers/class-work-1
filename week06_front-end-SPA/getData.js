fetch('http://www.omdbapi.com/?s=Star%20Wars&plot=short&r=json')
 .then(res => res.json())
 .then(movies => {
     return Promise.all(movies.Search.map(movie => {
        return fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&plot=short&r=json`)
            .then(res => res.json())   
     }))
 })
 .then(movies => {
    console.log(movies);
 });