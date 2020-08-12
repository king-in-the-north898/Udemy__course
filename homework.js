let numberOfFilms;

personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    geners : [],
    private: false,
};

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели","");
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели","");
    }
}

start();

function rememberMyFilm(){
for(let i = 0;i<2; i++){

    const a = prompt("Сколько последних фильмов вы посмотрелми", "");
    const b = prompt("Oценка за фильм", "");
    
    if(a!=null && b!=null && a!=""&& b!=""&& a.length<=50){
     personalMovieDB.movies[a] = b;
     console.log("done");
    }

    else{
        console.log("Error");
        i--;
   
    }

}
}

rememberMyFilm();

function detectPersonalLevel(){

if(personalMovieDB.count === 10){
    console.log("Очень мало");
}
else if(personalMovieDB.count>=10 
    || personalMovieDB.count<=30){
        console.log("Нормас");
    }
else{
    console.log("Киноман");
}
}

detectPersonalLevel();

function ShowMyDB(){
  if(personalMovieDB.private === false){
      console.log(personalMovieDB);
  }
}

ShowMyDB();

function AskGener(){
    for(let i = 0; i<3;i++){
        const geners = +prompt(`Ваш любимый жанр фильма ${i}`);
        personalMovieDB.geners[i-1] = geners;
    }
}

AskGener();

console.log(personalMovieDB);
