document.addEventListener('DOMContentLoaded', function () {

    var renderMovies = function (movieArray) {

        var finalHTML = "";

        var movieHTML = movieArray.map(function (movie) {

            var movieElement = `
            <div id="${movie.imdbID}" class="movie">
                <img class="movie-image" src="${movie.Poster}" alt="" />
                <h2 class="movie-title">${movie.Title}</h2>
                <span class="movie-release">${movie.Year}</span>
                <button class="add-movie-btn">Add</button>
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