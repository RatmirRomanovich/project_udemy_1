/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };



    // нашли изоб-ия
    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    //чтобы отследить отправку формы используем обработчик событий submit
    addForm.addEventListener('submit', (event) => {
        //отменяем стандатное поведение браузера
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            //обрежем название фильма до 21 символа и в конец добавим троеточие
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            // по чекбоксу добавляем любимый фильм
            if (favorite) {
                console.log("Добавляем в любиме фильмы");
            }
            //пушим в бд набраный пользователем филь
            movieDB.movies.push(newFilm);

            // сортируем полуннные данные
            sortArr(movieDB.movies);

            // добавляем в список
            createMovieList(movieDB.movies, movieList);
        };

        // очищаем форму
        //addForm.reset(); - только обращаемся через event.target к элементу на котором происходит событие 
        event.target.reset();
    });
    // методом forEach перебрали, и удалили с помощью remove
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };


    const makeChanges = () => {
        // изменяем текст в заголовке поста
        genre.textContent = "Драма";
        //меняем bg постера
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };


    // сортируем по алфавиту
    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        //очистим содержимое списка
        parent.innerHTML = "";
        // добавим сортировку
        sortArr(films);
        // далее нам надо перебрать массив
        /* 
        тут понадобится воспользоваться оператором дополнительного присваивания
        a = a + 1;
        a += 1;
         */
        films.forEach((film, i) => {
            // помещаем в освободившийся список
            parent.innerHTML += `
        <li class="promo__interactive-item">
            ${i + 1} ${film}
             <div class="delete"></div>
        </li>
        `;
        });

        // удаляем название фильма при клике на корзину
        document.querySelectorAll('.delete').forEach((btn, i) => {
            // обращаемся к каждой корзинке и навешиваем обработчик события
            btn.addEventListener('click', () => {
                // удаляем родительский эллемент
                btn.parentElement.remove();
                // и удаляем из БД
                movieDB.movies.splice(i, 1);
                // заново создаем список с помощью рекурсии чтобы поправить нумерацию
                createMovieList(films, parent);
            });
        }); 
    };
    makeChanges();
    deleteAdv(adv);
    createMovieList(movieDB.movies, movieList);

});