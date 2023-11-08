const { string } = require("i/lib/util");

// 1.Definire un array di oggetti, ogni oggetto rappresenta un film o serie tv, che è caratterizzato da: title, year, genre, rating, type (movie o tv), seasons (solo per serie tv).
let filmsAndSeries = [
    {
        title: 'Breaking Bad',
        year: 2008,
        genre: ['Crime', 'Drama', 'Thriller'],
        rating: 9.5,
        type: 'Tv Series',
        seasons: 5
    },
    {
        title: 'Game of Thrones',
        year: 2011,
        genre: ['Action', 'Adventure', 'Drama'],
        rating: 9.3,
        type: 'Tv Series',
        seasons: 8
    },
    {
        title: 'Stranger Things',
        year: 2016,
        genre: ['Drama', 'Fantasy', 'Horror'],
        rating: 8.7,
        type: 'Tv Series',
        seasons: 4
    },
    {
        title: 'The Crown',
        year: 2016,
        genre: ['Biography', 'Drama', 'History'],
        rating: 8.7,
        type: 'Tv Series',
        seasons: 4
    },
    {
        title: 'Inception',
        year: 2010,
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        rating: 8.8,
        type: 'Movie'
    },
    {
        title: 'Interstellar',
        year: 2014,
        genre: ['Adventure', 'Drama', 'Sci-Fi'],
        rating: 8.6,
        type: 'Movie'
    }
];

// 2.Creare una classe Movie che contenga le informazioni sopra indicate.
class Movie{
    title; 
    year; 
    genre; 
    rating; 
    type;


    /**
     * @param {string} title
     * @param {number} year
     * @param {string} genre
     * @param {number} rating
     * @param {string} type
     * 
    */

    constructor(title,year,genre,rating,type) {
        
        this.title = title; 
        this.year = year;
        this.genre = genre; 
        this.rating = rating; 
        this.type = type;
    }

// METODI --------------------------------------------------------
// 4..Entrambe le classi dovranno avere un metodo toString() che ritorni una stringa con i dati del film, tipo: 

    toString() {
        return `${this.title} is a ${this.genre} ${this.type}. It was released in ${this.year} and has a rating of ${this.rating}`;
    }

 
}

let movie1 = new Movie("Talk to me", 2023,'Horror',6,'movie');


// 3.Creare una classe TvSeries che estenda la classe Movie e ne aggiunta la proprietà seasons.
class Tv extends Movie{
    seasons;

    /**
     * @param {number} seasons
     */

    constructor(title,year,genre,rating,type,seasons){
          // super invoca il costruttore della classe padre
        super(title,year,genre,rating,type);
        this.seasons = seasons;
    }

    // METODI --------------------------------------------------------
    // 4.Entrambe le classi dovranno avere un metodo toString() che ritorni una stringa con i dati del film, tipo: 

    toString() {
        return `
        ${this.title} is a ${this.genre} ${this.type}. There are ${this.seasons} seasons realeased in ${this.year} . It has a grade of ${this.rating}`;
    }

}

let series1 = new Tv("Guardian: The Lonely and Great God", 2016,'Drama',9.4,'Tv Series', 1);

// 5.Tramite la funzione .map(), creare un nuovo array dove per ogni elemento dell’array di oggetti viene creata un istanza della classe Movie o TvSerie in base al type e salvata nel nuovo array.

let filmsAndSeriesTypes = filmsAndSeries.map((singleFilmAndSeries) => {
    if (singleFilmAndSeries.type === 'Movie') {
        // Se il type è 'Movie', creo un'istanza della classe Movie
        return new Movie(singleFilmAndSeries.title, singleFilmAndSeries.year, singleFilmAndSeries.genre, singleFilmAndSeries.rating);
    } else if (singleFilmAndSeries.type === 'Tv Series') {
        // Se il type è 'Tv Series', creo un'istanza della classe TvSeries
        return new Tv(singleFilmAndSeries.title, singleFilmAndSeries.year, singleFilmAndSeries.genre, singleFilmAndSeries.rating, singleFilmAndSeries.seasons);
    } else {
        // Se il type non è riconosciuto, lancia un errore
        throw new Error('Type non riconosciuto');
    }
});

// 6.Creiamo una funzione che restituisca la lista di tutti i generi dei film, senza che questi si ripetano.
    // Inizializzo un array vuoto per memorizzare i generi univoci
    let genreList = [];

    // ciclo ogni oggetto nell'array
    filmsAndSeries.forEach((el) => {
        // ciclo i generi di ogni oggetto
        el.genre.forEach((genre) => {
            // se il genere non è già presente nell'array dei generi
            if (!genreList.includes(genre)) {
                // lo aggiungo a genreList
                genreList.push(genre);
            }
        });
    });


// 7.Creiamo una funzione che restituisca la media dei voti di tutti i film per un determinato genere. Prevedere un argomento per la lista dei film ed uno per il genere.

function averageRatingByGenre(filmsList, genresList) {
    // setto le var a 0
    let totRating = 0;
    let nFilm = 0;
    // cilo l'array
    filmsAndSeries.forEach((film) => {
        // se la tipologia è movie
        if (film.type === 'Movie') {
            // ciclo la lista dei generi
            genreList.forEach((genre) => {
                 // Controllo se il genere specificato è presente nel film corrente
                if (film.genre.includes(genre)) {
                    // Aggiungo il punteggio del film al punteggio totale e incremento il numero di film
                    totRating += film.rating;
                    nFilm++;
                }
            });
        }
    });

   // Controllo se è stato trovato almeno un film per il genere specificato
    if (nFilm === 0) {
        return "Nessun film trovato per il genere specificato.";
    } 
    else {
        // Calcolo e restituisco la media dei voti
        return totRating / nFilm;
    }
    }

    // Utilizzo della lista dei generi univoci per il calcolo della media dei voti
    let chosenGenre = genreList[1]; 
    let mediaVoti = averageRatingByGenre(filmsAndSeries, chosenGenre);



// 8.Creiamo una funzione che filtri i film in base ad un genere passato come argomento e ne ritorni un array con all’interno il risultato della funzione toString() di ogni film.






// ****************************************** CONSOLE.LOG ******************************************
console.log(movie1);

console.log(`
******** 
${movie1.toString()} 
********
`);

console.log(series1);

console.log(`
******** 
${series1.toString()} 
********`);

console.log(`
******** 
${filmsAndSeriesTypes} 
********`);

console.log(`
******** 
La lista dei generi: ${genreList} 
******** `);

console.log(`
******** 
La media dei voti per il genere ${chosenGenre} è ${mediaVoti} 
******** `);








