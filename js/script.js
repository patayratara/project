"use strict";
let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    counter: function (){
        for (let i = 0; i < 1; i++){
            let a = +prompt('Сколько фильмов вы уже посмотрели?');
            if (a != null && a != '' && !isNaN(a)){
                numberOfFilms = a;
                personalMovieDB.count = a;
                i++;
            } else {
                alert('Вы ввели недопустимое количество!');
                i--;
            }
        }
    },
    detectPersonalLevel: function (){
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count <= 30){
            console.log('Вы классический зритель');
        } else {
            console.log('Вы киноман!');
        }
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('Как вы его оцените?','');
        
            if (a != null && b != null && a != '' && b != '' && a.length <50){
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    writeYourGenres: function(){
        for (let i = 0; i < 3; i++) {
            const a = prompt(`Ваш любимый жанр под номером ${i+1}?`);
    
            if (a != null && a != '' && a.length <50 && isNaN(a)){
                personalMovieDB.genres[i] = a;
            } else {
                i--;
            }
        }
        this.genres.forEach(function(item, i){
            console.log(`Любимый жанр №${i+1} - это ${item}`);
        });
    },
    showMyDB: function(hidden){
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == false){
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;     
        }
    }
};

personalMovieDB.counter();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);


