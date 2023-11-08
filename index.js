const { string } = require("i/lib/util");

// Definire un array di oggetti, ogni oggetto rappresenta un film o serie tv, che è caratterizzato da: title, year, genre, rating, type (movie o tv), seasons (solo per serie tv).
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

// Creare una classe Movie che contenga le informazioni sopra indicate.
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
// Entrambe le classi dovranno avere un metodo toString() che ritorni una stringa con i dati del film, tipo: 

    toString() {
        return `${this.title} is a ${this.genre} ${this.type}. It was released in ${this.year} and has a rating of ${this.rating}`;
    }

 
}

let movie1 = new Movie("Talk to me", 2023,'Horror',6,'movie');


// Creare una classe TvSeries che estenda la classe Movie e ne aggiunta la proprietà seasons.
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
    // Entrambe le classi dovranno avere un metodo toString() che ritorni una stringa con i dati del film, tipo: 

    toString() {
        return `
        ${this.title} is a ${this.genre} ${this.type}. There are ${this.seasons} seasons realeased in ${this.year} . It has a grade of ${this.rating}`;
    }

}

let series1 = new Tv("Guardian: The Lonely and Great God", 2016,'Drama',9.4,'Tv Series', 1);

// Tramite la funzione .map(), creare un nuovo array dove per ogni elemento dell’array di oggetti viene creata un istanza della classe Movie o TvSerie in base al type e salvata nel nuovo array.
const filmsAndSeriesTypes = filmsAndSeries.map((singleFilmAndSeries)=>{
    return singleFilmAndSeries.type;
});

// Creiamo una funzione che restituisca la media dei voti di tutti i film per un determinato genere. Prevedere un argomento per la lista dei film ed uno per il genere.




// Creiamo una funzione che restituisca la lista di tutti i generi dei film, senza che questi si ripetano.
    // Inizializza un array vuoto per memorizzare i generi univoci
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






console.log(movie1);

console.log(movie1.toString());

console.log(series1);

console.log(series1.toString());

console.log(filmsAndSeriesTypes);

console.log(genreList);
