'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'Например: 7, и это только сегодня');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const lastFilm = prompt("Один из последних просмотренных фильмов?", "Наверное Довод?)");
    const opinion = +prompt("На сколько оцените его по пятибальной шкале?", "3");

    if (lastFilm != null && opinion != null && lastFilm != '' && opinion != '' && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = opinion;
        console.log('Done!');
    } else {
        console.log('error');
        i--;
    }
}
 if (personalMovieDB.count < 10) {
     console.log('Просмотрено довольно мало фильмов');
 } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
     console.log('Вы классический зритель');
 } else if (personalMovieDB >= 30) {
     console.log('Вы киноман');
 } else {
     console.log('Произошла ошибка');
 }


console.log(personalMovieDB);