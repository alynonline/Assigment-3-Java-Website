let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched
    }
}
const resultElement = document.getElementById('result');

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    displayResult("A new movie is added");
};

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    displayResult("Printing all movies....<br>");

    allMovies.forEach(movie => {
        resultElement.innerHTML += `${movie.title}, rating of ${movie.rating}, havewatched: ${movie.haveWatched ? 'true' : 'false'}<br>`;
    });

    displayResult(`You have ${allMovies.length} movies in total`);
}

//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    const highRatedMovies = allMovies.filter(movie => movie.rating > rating);
    resultElement.innerHTML += `<br>printing movie that has a rating higher than ${rating}<br>`;

    highRatedMovies.forEach(movie => {
        resultElement.innerHTML += `${movie.title} has a rating of ${movie.rating}<br>`;
    });
    displayResult(`In total, there are ${highRatedMovies.length} matches`);
};


//Toggle the 'haveWatched' property of the specified movie
let changeWatched = (title) => {
    const movie = allMovies.find(movie => movie.title === title);
    if (movie) {
        movie.haveWatched = !movie.haveWatched;
    }
    displayResult("changing the status of the movie...");

};

function displayResult(message) {
    resultElement.innerHTML += `<br>${message}`;

}


////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
displayResult("----------------<br>running program......");

let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/

displayResult("----------------");
printMovies();

let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
displayResult("----------------");
addMovie(movie1);
displayResult("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
displayResult("----------------");

printMovies();

/*replace console.log with display on web page*/
displayResult("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
displayResult("----------------");

printMovies();
/*replace console.log with display on web page*/
displayResult("----------------");
highRatings(3.5);