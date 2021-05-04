"use strict";
//todo Тема - Условия
//todo Тема - Циклы
//todo Тема - Функции, стрелочные ф-ии
//todo Тема - Методы и свойства строк и чисел
//todo Тема - callback Функции
//todo Тема - объекты, деструктуризация объектов (es6)
//todo Тема - Массивы и псевдомассивы (21, )
//todo Тема - Передача по ссылке или по значению. Spread оператор (ES6 - ES9)
//todo Тема - Основы ООП, прототипно ориентированное наследование (23, )
//todo Тема - debug (25, )
//todo Тема - Динамическая типизация (26, )
//todo Тема - Получение элементов со страницы (28, )
//todo Тема - Действия с эелементами на странице (29, )
//======================================================================================================================================



//todo Тема - Условия
// if (4 == 9) {
// 	console.log('true');
// } else {
// 	console.log('false');
// }

//*условия поддерживают вложенность

// const number = 99;
// if (number < 60) {
// 	console.log('мало');
// } else if (number >= 100) {
// 	console.log('много');
// } else {
// 	console.log('средне');
// }

//*условия можно записывать с помощью тернарного оператора \ ? \
/*синтаксис - записываем условие в круглых скобках, ставим тернарный оператор,
после пишем результат если получаем true,
далее полсе \ : \ пишем что если получаем false*/
/* называется тернарным потому что участвует три аргумента */
// (number === 100) ? console.log('true') : console.log('false');

//* Конструкция switch
/* условия по мере вложенности могут сильно разрастаться, 
что усложняет дальнейшую работу с ними, поэтому иногда лучше использовать switch */
// ВАЖНО конструкция switch всегда идет на строгое сравнение!
// если ни одно условие(case) не верно тогда реализуется default!

// const num = 98;
// switch (num) {
// 	case 100:
// 		console.log('наше число 100!');
// 		break;
// 	case 101:
// 		console.log('наше число 101!');
// 		break;
// 	case 98:
// 		console.log('наше число 98!');
// 		break;
// 	default:
// 		console.log('Тут нет верного числа...');
// 		break;
// }

//todo Тема - Циклы
//используем для повторения однотипных действий

//* цикл while (пока выполняется поставленное условие цикл продолжается)

// let num = 50;
// while (num < 55) {
// 	console.log(num);
// 	num++;
// }

//* цикл do (цикл сначала начнет выполняться а после проверит условие, после можно из него выйти)

// let num = 50;

// do {
// 	console.log(num);
// 	num++;
// }

// while (num < 55);
// сначала выполняется цикл, а после в while проверяется условие.

//* цикл for состоит из 3 необязательных аргументов
// задем переменную, условие при котором цикл остановит свою работу, шаги(что будет происходить каждый шаг)

// for (let i = 0; i < 9; i++) {
// 	console.log(i);
// }

//цикл работает пока соответствует заданному условию, что i < 9, при этом каждый шаг ув-ясь на 1.

// цикл можно остановить принудительно по достижении какого либо условия

// for (let i = 1; i < 100; i++) {
// 	if (i === 11) {
// 		break;
// 	}
// 	console.log(i);
// }
/* получилось, увеличиваем i на 1, пока согласно условию i не стало равно 11, иначе выводили бы до 100 согласно заданному условию цикла */

// Есть еще оператор continue - он не прерывает цикл как break, а пропускает указанный шаг!

// for (let i = 0; i < 12; i++) {
// 	if (i === 10) {
// 		continue;
// 	}
// 	console.log(i);
// }
//todo Тема - Функции, стрелочные ф-ии
// Синтаксис ключевое слово - имя фкции - скобочки(аргументы, аргументы, можно пустые скобочки) - {}
// Т.К. ф-ия это действие, ее имя это должен быть глагол, с припиской того что она делает.
// бывают анонимные функции, выполняются сдесь и сейчас.
//-(!)- переменная(num) обьявленная внутри функции(локальная переменная), снаружи не доступна. 
// Замыкания — это функции, ссылающиеся на независимые (свободные) переменные. Другими словами, функция, определённая в замыкании, «запоминает» окружение, в котором она была создана. Заметка: cвободные переменные — это переменные, которые не объявлены локально и не передаются в качестве параметра.
// return - после этой команды все что ниже в функции(код), не выполнится он мертв.
// return нужен 1 - для окончания функции, и 2 - для ее "возврата на ружу"
/* -(!)-  function declaration (function showMe() {}; ) - создаются до начала выполнения скрипта, можно вызвать перед объявлением (тоесть код до функции еще не дошел, а ее уже можно вызвать)(по факты не важно до объявления переменных или после мы ее создали, она будет работать) */
/* -(!)-  function expression - ф-ое выражение () создается только когда доходит поток кода, можно вызвать только после объявления(когда поток кода до нее дошел и ее считало) 
const logger = function() {
	console.log("hello")
};
logger();
*/

/* -(!)-  function - стрелочные фукции не имеют своего контекста (this) const calc = (a, b) => a + b; если ф-ия короткая можно записывать без { скобок
	даже аргумент можно без скобок если он 1 например    const calc = a => a + b;  */
// let num = 20;

// function showFirstMessage(text) {
// 	console.log(text);
// 	let num = 10;
// 	console.log(num);
// }
// showFirstMessage("Hello!");
// console.log(num);

// function ret() {
// 	let num = 50;
	// типа много кода вского и num много преобразуется и return прекращает функции и дает нам возможность получить num снаружи. и использовать ее где нить // далее 

// 	return num;
// }
// const anotNum = ret();
// console.log(anotNum);


//todo Тема - Методы и свойства строк и чисел
// методы - это вспомогательные функции
// Строки
// М-toLocaleUpperCase() изменения регистра
// const str = 'teSt';

// console.log(str.toLocaleUpperCase());
// console.log(str.toLocaleLowerCase());

// М-indexOf() найти кусок строки и сказать нам с какого регистра она начинается (поиск подстроки)
// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));

// М-slice() получим кусок строки
// const logg = 'Hello world!';
// console.log(logg.slice(6, 12));
// console.log(logg);

// М-substring() метод как слайс, только не поддерживает отрицательные значения
// const logg = 'Hello world!';
// console.log(logg.substring(6, 12));

// М-substr() разница в передаваемых аргументах, выше мы указывали с какого по какой вырезать, а тут с какого и сколько вырезать символов
// const logg = 'Hello world!';
// console.log(logg.substr(6, 1));
// console.log(logg);


// Числа
// М-Math.round округление чисел до ближайшего целого.
// const num = 12.3;
// console.log(Math.round(num));

// М-parseInt() переводит число в другую систему исчсления
// М-parseFloat() вернет в 10-ой системе сохраняя дробное значение
// const num = "12.2px";
// console.log(parseInt(num));
// console.log(parseFloat(num));


// свойства - это вспомогательные значения
// Строки
// Числа
//todo Тема - callback Функции
// если ф-ции в коде идут одна за другой, еще не значит что они выполняются в том же порядке
// callback Функция - это ф-я которая должна быть выполнена после того как другая функция завершила свое выполнение.
// function learnJS(lang, callback) {
// 	console.log(`Я учу: ${lang}`);
// 	callback();
// }

// learnJS('JavaScript', function(){
// 	console.log('callback');
// });

//todo Тема - объекты, деструктуризация объектов (es6)
// объекты мохут сохранять в себе любой тип данных
// поддерживают вложенность
// для перебора используем for in
// есть встроенные методы и свойства
// в объект можем записывать функции и таким образом создавать свои методы.
// деструктуризация объектов пришла со стандартом - (ES6)
// const options = {
// 	name: 'test',
// 	width: 1024,
// 	height: 1024,
// 	colors: {
// 		border: 'black',
// 		bg: 'red'
// 	},
	// прям в объекте можно создавать методы
// 	makeTest: function() {
// 		console.log('tEst');
// 	}
// };
// options.makeTest();
// удалить пару из объекта
// delete options.name;
// console.log(options);

// перебрать все свойства объекта
// for (let key in options) {

// 	if (typeof(options[key]) === 'object') {
// 		for (let i in options[key]) {
// 			console.log(`Свойство ${key} имеет значение ${options[key][i]}`);
// 		}
// 	} else {
// 		console.log(`Свойство ${key} имеет значение ${options[key]}`);
// 	}
// }

// прием счетчика
// let counter = 0;

// for (let key in options) {

// 	if (typeof(options[key]) === 'object') {
// 		for (let i in options[key]) {
// 			console.log(`Свойство ${key} имеет значение ${options[key][i]}`);
// 			counter++;
// 		}
// 	} else {
// 		console.log(`Свойство ${key} имеет значение ${options[key]}`);
// 		counter++;
// 	}
// }

// console.log(counter);

// метод - ключи нашего объекта
// console.log(Object.keys(options));

// получить кол-во элементов
// console.log(Object.keys(options).length);

// деструктуризация объектов пришла со стандартом - (ES6) (что хотим вытащить = откуда хотим вытащить)

// const {border, bg} = options.colors;
// console.log(border);
// console.log(bg);

//todo Тема - Массивы и псевдомассивы
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// метод удаляющий последний эл-ент из массива
// arr.pop();

// метод добавляющий последний эл-ент к массиву
// arr.push(10);
// console.log(arr);

// перебор эл-ов массива циклом for
// for (i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// перебор эл-ов массива методом for of
// for (let massive of arr) {
// 	console.log(massive);
// }
// for of не очень удобен за исключением тех случаев когда есть необходимость остановить цикл
// так как он принимает такие ключевые слова как break и continue.

// метод forEach
// arr.forEach(function(item, i ,arr){
// 	console.log(`${i}: ${item} элементы из массива ${arr}`)
// });

// метод arr.split(); превращает строку в массив.
// const str = promt("", "");
// const products = str.split(", ");
// console.log(products);

// метод arr.join(); превращает массив в строку.
// console.log(products.join('; '));

// метод arr.stor() сортировка массива, если без функции сравнения то сортирует как строки.
// arr.sort();
// console.log(arr);

// arr.sort(compareNum);
// console.log(arr);
// function compareNum(a, b) {
// 	return a - b;
// }

//todo Тема - Передача по ссылке или по значению. Spread оператор (ES6 - ES9)
// статья про клонирование (- https://medium.com/@stasonmars/%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2-%D0%B2-javascript-d25c261a7aff -)
// Object.assign(); (- https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/assign -)
// Spread operator   (- https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax -)

// Передача по значению работает с примитивами (строки, числа, лог-ие значения (редедаются по значению))

// let a = 5,
// 	 b = a;

// 	 b = b + 5;

// console.log(b, a);

// Изменияя что-то внутри копии мы модифицируем наш изначальный объект так как происходит
// передача по ссылке.(при работе с объектами передается не значение объекта а ссылка на сам объект)
// const obj = {
// 	a: 5,
// 	b: 1
// };

// const copy = obj; //ссылка на сам объект

// copy.a = 10; //значит моди-уя нашу копию мы изменяем сам объект, так как работаем не с копией а с ссылкой на него.

// console.log(obj, copy);

// ЧТобы создать копию объекта и модифицируя его не влиять на копируем объект его нужно клонировать
// Способ 1 - с помощью функции (это будет поверхностная копия, которая не повлияет на изменения объекта внутри объекта, тоесть там снова будет передаваться все ссылочно)
// function copy(mainObj) { //функция создать новый объект перебирая с помощью цикла свойства и значения старого объекта
// 	let objCopy = {}; //новый объект
	
// 	let key;
// 	for (key in mainObj) { // у нас есть ключи внутри объекта который передается в функцию
// 		objCopy[key] = mainObj[key]; // делаем копию из главного объекта
// 	}


// 	return(objCopy);
// }

// const numbers = {
// 	a: 2,
// 	b: 5,
// 	c: {
// 		x: 7,
// 		y:4
// 	}
// };

// const newNumbers = copy(numbers); // пользуемся функцией которая примет объект numbers и вернет новый который уже будет являться его копией.
// newNumbers.a = 11;
// newNumbers.c.x = 11;

// console.log(newNumbers);
// console.log(numbers);

// способ объединить несколько объектов  assign при этом создается независимая копия объекта (правда вложенная структура также зависима свойство c например)
// const numbers = {
// 	a: 2,
// 	b: 5,
// 	c: {
// 		x: 7,
// 		y:4
// 	}
// };

// const add = {
	// d: 22,
	// e: 43
// };
// первым передаем тот объект в который хотим поместить

// console.log(Object.assign(numbers, add));
// создаем простой клон объекта

// const add = {
// 	d: 22,
// 	e: 43
// };

// const clone = Object.assign({}, add);

// clone.d = 155;

// console.log(add);
// console.log(clone);

// создаем клон массива
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[0] = 'new value element';

// console.log(oldArray, newArray);


// 4 способ создать поверхностную копию использовать апператор разварота
// спред оператор

// const video = ['youtube', 'vimeo', 'rutube'],
		// blogs = ['wordpress', 'livejournal', 'blogger'],
		// используем спред создаем новый массив с новыми данные и копиями нужных массивов
		// internet = [...video, ...blogs, 'vk', 'facebook'];

		// console.log(internet);
		
// еще вариант спреда
// function spread(a, b, c) {
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// };

// const number = [11, 22, 33];

// spread(...number);

// спреад с объектами
// const obj = {
// 	one: 1,
// 	two: 2
// };

// const copyObj = {...obj};

// copyObj.one = 5;

// console.log(obj);
// console.log(copyObj);


//todo Тема - Основы ООП, прототипно ориентированное наследование (23, ) - ООП это наука о том как делать правильную архитектуру. JS - прототипоно ориентированный язык пр-ия.
// наследование без _proto_(proto устарел) (- https://javascript.info/prototype-methods -)
// const soldier = {
// 	health: 400,
// 	armor: 300,
// 	sayHello: function () {
// 		console.log('Hello');
// 	}
// };

// const jon = {
// 	health: 100
// };
// так можно сделать если объект уже существует, но лучше делать заранее при создании
// Object.setPrototypeOf(jon, soldier); //установили прототип для джона от солдата
// jon.sayHello();

// заранее при создании
// создаем новый объект который будет прототипно наследоваться от soldier
// const jon = Object.create(soldier);

// jon.sayHello();



//todo Тема - Динамическая типизация  
// возможность одного типа данных превращаться в другой
// конкатенация сложение строки с чем либо получим строку 
// console.log(typeof(5 + 'afad'));

//Унарный плюс из строки в число
// console.log(typeof(+'5')); 

// to boolean в  булиновые значения 0, '', null, undefined, NaN;
// let swit = null;
// swit = 1;
// console.log(typeof(swit));

// && И запинается на лжи
// || ИЛИ запинается на правде


//todo Тема - Получение элементов со страницы (- https://habr.com/ru/post/336136/ информация о псевдо массивах-)
// 1 по id
const box = document.getElementById('box');

// 2 по тегу 
const btn = document.getElementsByTagName('button'); // тут мы получили не элемент, а псевдо массив всех тегов button, псевдо массиывы не имеют методов 

const btn = document.getElementsByTagName('button')[1]; // получаем вторую кнопку
// либо
console.log(btn[1]);

// 3 по классу 
const btn = document.getElementsByClassName('button'); // работает также как и по имени тега получаем псевдо массив
console.log(button[1]);

// 4 по селектору
const heart = document.querySelectorAll('.heart'); // лучше так получать тут есть уже метод foreach
heart.forEach(item => {
	console.log(item);
});

const heart = document.querySelector('.heart'); // только первый элемент получим


//todo Тема - Действия с эелементами на странице 
// чтобы понимать что мы можем сделать с тем или иным элементом на странице нужно рассмотреть его в качестве объекта
const heart = document.querySelector('.heart');
console.dir(heart);
// работаем с инлайн стилями
heart.style.backgroundColor = 'red'; 
heart.style.width = '500px'; 
// можно стили сразу записать пачкой
heart.style.cssText	= 'background-color: red; width: 500px';
// если хотим подставить переменную то ставим бэктики
heart.style.cssText	= `background-color: red; width: ${num}px`;


const btn = document.getElementsByTagName('button');
// выберем какую именно кнопку меняем по индексу
btn[1].style.borderRadius = '5%';


// теперь рассмотрим ситуацию когда надо манипуляцию произвести над несколькими элементами из псевдо массива
// это работает c document.querySelectorAll
const heart = document.querySelectorAll('.heart');
for (i = 0; i < heart.length; i++) {
	heart[i].style.backgroundColor = 'red';
}
// но лучше использовать не цикл, а перебирающий элемент forEach c ним проще и короче
heart.forEach(item => {
	item.style.backgroundColor = 'red';
});


// элементы и целые блоки можно создавать на лету
const block = document.createElement('div'); // на странице его нет пока, он создан только внутри js

// текстовые узлы создаем без оболочки
const text = document.createTextNode('какой либо текст');


// для стилизации динамической лучше не инлайн стили использовать а добавлять или удалять css классы 
// подвесим нашему созданому диву класс
block.classList.add('black');

// теперь добавим наш див на страницу, выберем ему родителя и в конец его добавим
document.body.append(block);
// устр вариант document.body.appendChild(block);
// или засунем во врапер какой нить
document.querySelector('.wrapper').append(block);
// если wrapper например используется много раз то лучше вынести его в переменную
wrapper = document.querySelector('.wrapper');

// можем добавить в начало блока
wrapper.prepend(block);

// можем также использовать before, after для определения положения элемента
const heart = document.querySelectorAll('.heart'); // достучались до эелемента
heart[0].before(block);
heart[0].after(block);

// устр вариант  wrapper.insertBefore(div, heart[0]);
// удаляем элемент со страницы

heart[1].remove();
// устр вариант wrapper.removeChild(heart[0]);

// можем один элемент заменить другим, сначала указываем какой элемент надо заменить
heart[0].replaceWith(btn[1]);


// добавляем в блок html элементы
block.innerHTML = "<h1>Заголовок какой нить</h1>"; 

// для работы с текстом лучше использовать этот метод, а метод выше для работы со структурой
block.textContent = "<h1>Заголовок какой нить</h1>"; 

// вставить код перед элементом или после поможет insert

block.insertAdjacentHTML('beforebegin', '<h1>Заголовок какой нить</h1>');