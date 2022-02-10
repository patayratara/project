"use strict";

let numberOfFilms;

function start() {
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('Как вы его оцените?','');
    
        if (a != null && b != null && a != '' && b != '' && a.length <50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error!');
            i--;
        }
    }
}
// rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count <= 30){
        console.log('Вы классический зритель');
    } else {
        console.log('Вы киноман!');
    }
}
// detectPersonalLevel();


// let numkek = 0;
// while (numkek < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('Как вы его оцените?','');

//     if (a != null && b != null && a != '' && b != '' && a.length <50){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         numkek++;
//     } else {
//         console.log('error!');
//     }
// }

// let numdo = 0;
// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('Как вы его оцените?','');

//     if (a != null && b != null && a != '' && b != '' && a.length <50){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         numdo++;
//     } else {
//         console.log('error!');
//     }
// }
// while(numdo < 2);



function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        const a = prompt(`Ваш любимый жанр под номером ${i+1}?`);

        if (a != null && a != '' && a.length <50 && isNaN(a)){
            personalMovieDB.genres[i] = a;
            console.log('genres done');
        } else {
            console.log('genres error');
            i--;
        }
    }
}
writeYourGenres();
