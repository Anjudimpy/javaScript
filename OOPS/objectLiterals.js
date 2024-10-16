// Object Literals

const movie = {                    //All key are properties
    title: "The Avengers", 
    year: 2012,
    genre: "Action, Sci-Fi, Thriller",
    cast: ["Robert Downey Jr. , Chris Evans"],
    cast2: {                             //object inside object
        main_lead: 'Robert Downey Jr. ',
        other: 'ksdisd'   
    },
    getDetails : function (){
        console.log(
            `Title:${movie.title}\n Year: ${movie.year}\n Genre: ${movie.genre}\n Cast: ${movie.cast}`
       
        );
    },

    getMovieDetails: function(detail){
        console.log(movie[detail]);
    },
};

console.log(movie.cast2.main_lead);
movie.getDetails();
const detail = 'year';

movie.getMovieDetails(detail);