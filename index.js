var saveToWatchList = function (imdbID) {

    var movie = movieData.find(function (currentMovie) {

        return currentMovie.imdbID == imdbID;

    });

    var watchListJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchListJSON);

    if (watchlist == null) {

        watchlist = [];

    }

    watchlist.push(movie);
    watchListJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchListJSON)

}

document.addEventListener('DOMContentLoaded', function () {

    var renderMovies = function (movieArray) {

        var finalHTML = "";

        var movieHTML = movieArray.map(function (movie) {

            var movieElement = `
            <div id="${movie.imdbID}" class="movie card p-0 col-md-3">
                <img class="movie-image card-img-top" src="${movie.Poster}" alt="${movie.Title}" />
                <div class="card-body">
                    <h4 class="movie-title card-title">${movie.Title}</h4>
                    <span class="movie-release card-text">${movie.Year}</span>
                    <button class="add-movie-btn btn btn-secondary align-right float-right" onclick="saveToWatchList('${movie.imdbID}');">Add</button>
                </div>
            </div>\n`

            return movieElement;

        });

        finalHTML = movieHTML.join(" ");
        return finalHTML;

    };

    document.getElementById("watchlist").addEventListener("click", function (e) {

        e.preventDefault();
        window.open('watchlist.html', '_self');

    });


    document.getElementById("search-form").addEventListener("submit", function (e) {

        e.preventDefault();
        var searchString = document.getElementById('search-bar').value;
        var urlEncodedSearchString = encodeURIComponent(searchString);

        axios.get('https://www.omdbapi.com/?apikey=3430a78&s=' + urlEncodedSearchString)
            .then(function (response) {

                movieData = response.data.Search;
                var movieContainer = document.getElementById("movie-container");

                if (movieData == undefined) {

                    movieContainer.innerHTML = "<h2>No Search words were entered!</h2>";

                } else {
                    
                    var movieHTML = renderMovies(movieData);
                    movieContainer.innerHTML = movieHTML;
                    
                }

            });

    });

});