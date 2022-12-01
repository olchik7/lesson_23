"use strict";
//Оператори

console.log('35' + - "22");

console.log('35' * "22");
/* Інкремент/декремент працює тільки зі змінними 
console.log('558' > 22++);
*/

let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);

console.log(!false && 11 || 18 && !'');

let name = 0;
console.log(name ?? "Без имени ");

//IF ELSE в JAVASCRIPT.

if (1 === "1") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}

if (5 == "5") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}

let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
console.log(message);

if (0) {
	console.log('Ложь!');
} else {
	console.log('Истина!');
}

//Циклы FOR и WHILE в JavaScript.
/*
let num = 5;
while (num < 6) {
	console.log(num);
	num++;
}

for (let num = 1; num < 6; num++) {
	console.log(num);
}

let num = 8;
while (num) {
	console.log(num);
	num--;
}
*/
for (let num = 0; num < 3; num++) {
	console.log('Число: ${num}');
}

let num = 0;
while (num < 3) {
	console.log('Число: ${num}')
	num++;
}

firsfor: for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		if (size == 1) { break firsfor; } console.log(size);
	}
}

//Числа в JAVASCRIPT.

let numTwo = 1.005 + Number.EPSILON;
let numOne = Math.round(numTwo * 100) / 100;
console.log(numOne);

/*let value = "135.58px";
let value = parseFloat("135.58px");
console.log(value);
*/

let value = 58 + "Фрилансер";
if (value == NaN); console.log(Number(value)); console.log(isNaN(value));

console.log(Math.max(10, 58, 39, -150, 0));

console.log(Math.floor(58.858));

//Строки в JAVASCRIPT. 
/*
let fls = "фрилансер";
let text = 'Привет! Я ${fls}';
console.log(text);
*/
/*
let text = "фрилансер";
console.log(text[5]);
*/

/*
let text = 123 + "456";
console.log(text);
*/

/*
let text = "фрилансер";
console.log(text.toUpperCase());
*/

/*
let text = "фрилансер";
console.log(text.slice(3, 6));
*/

let text = "фрилансер";
console.log(text.includes('лан', 4));

