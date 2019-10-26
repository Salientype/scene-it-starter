var watchListJSON = localStorage.getItem('watchlist');
var watchlist = JSON.parse(watchListJSON);

if (watchlist == null) {

    watchlist = [];

}

var removeFromWatchList = function (imdbID) {

    var movieContainer = document.getElementById("movie-container");
    var movieHTML = document.getElementById(imdbID);
    movieContainer.removeChild(movieHTML);

    var movie = watchlist.findIndex(function (currentMovie) {

        return currentMovie.imdbID == imdbID;

    });

    watchlist.splice(movie, 1);
    watchListJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchListJSON);

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
                    <button class="add-movie-btn btn btn-secondary align-right float-right" onclick="removeFromWatchList('${movie.imdbID}');">Remove</button>
                </div>
            </div>\n`

            return movieElement;

        });

        finalHTML = movieHTML.join(" ");
        return finalHTML;

    };

    var movieConatiner = document.getElementById("movie-container");

    document.getElementById("searchlist").addEventListener("click", function (e) {

        e.preventDefault();
        window.open('index.html', '_self');

    });

    movieConatiner.innerHTML = renderMovies(watchlist);

});