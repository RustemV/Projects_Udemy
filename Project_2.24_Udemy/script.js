/* Задание на урок:

/* 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы */

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколко фильмов Вы посмотрели?', '');
        while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколко фильмов Вы посмотрели?'
        }
    },
    rememberMyFilms: function() {
        for (let i = 1; i <= 2; i++) {
            do {
                //aa = '';
                aa = prompt('Один из последних просмотренных фильмов?', '');
            } while ((aa == '') || aa == null || (aa.length > 50));
            do {
                //bb = '';
                bb = prompt('На сколько оцените его?', '');
            } while (bb == '' || bb == null)
            personalMovieDB.movies[aa] = bb;
        }
    },
    detectPersonalLevel: function() {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');

let cnt = personalMovieDB.count;
if (cnt < 10) {
    alert('мало');
} else if (cnt > 30) {
    alert('много');
} else if (cnt >=10 && cnt <=30) {
    alert('классика');
} else {
    alert('ошибка'); 
} */
    }
};

for (let i = 1; i <= 2; i++) {
    do {
        //aa = '';
        aa = prompt('Один из последних просмотренных фильмов?', '');
    } while ((aa == '') || aa == null || (aa.length > 50));
    do {
        //bb = '';
        bb = prompt('На сколько оцените его?', '');
    } while (bb == '' || bb == null)
    personalMovieDB.movies[aa] = bb;

/* 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/ */

'use strict';

// Код возьмите из предыдущего домашнего задания