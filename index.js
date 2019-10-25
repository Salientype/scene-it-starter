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
                    <button class="add-movie-btn btn btn-secondary align-right float-right">Add</button>
                </div>
            </div>\n`

            return movieElement;

        });

        finalHTML = movieHTML.join(" ");

        // console.log(movieHTML);
        console.log(finalHTML);
        return finalHTML;

    };

    var movieConatiner = document.getElementById("movie-container");

    movieConatiner.innerHTML = renderMovies(movieData);

});