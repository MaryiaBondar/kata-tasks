<<<<<<< HEAD
// Задание 1
// let str = 'aaa@bbb@ccc';
// alert(str.replace(/@/g, '!'));

// Задание 2 
// let str = '2025-12-31';
// let arr = str.split('-');
// let newStr = arr[2] + '/' + arr[1] + '/'+ arr[0];
// alert(newStr);

// Задание 3
// let str = 'Я учу javascript!';

// console.log(str.substring(2,5));
// console.log(str.substring(6,16));

// console.log(str.substr(2,4));
// console.log(str.substr(6,10));

// console.log(str.slice(2,5));
// console.log(str.slice(6,16));

// Задание 4
// let arr = [4, 2, 5,19 ,13 ,0 ,10];
// let b = 0;
// for(let i=0; i<arr.length; i++) {
//     b+=Math.pow(arr[i],3);
// }
// alert('Квадратный корень из суммы кубов - ' + Math.sqrt(b));

// Задание 5 
// let a = 3;
// let b = 5;
// let c = Math.abs(a-b);
// alert(c);

// let a = 6;
// let b = 1;
// let c = Math.abs(a-b);
// alert(c);

// Задача 6 
let date = new Date();
function getZero(num){
	if (num > 0 && num < 10) { 
		return '0' + num;
	} else {
		return num;
	}
}

alert(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear());

// Задача 7 
// let str = 'aa aba abba abbba abca abea';
// console.log(str.search(/aba/gi));
// console.log(str.search(/abba/gi));
// console.log(str.search(/abbba/gi));

// Задача 8 

// let phone = prompt('Ваш номер телефона?');
// let regexp = /[+375]&[017]{9}/gi;
// console.log(regexp.test(phone)); // Я пытался....
=======

const a = [1, 1, 1,  3, 7, 8]



console.log(
    a.reduce((acc, item) => acc.includes(item) ? (acc) : [...acc, item], [])
)
>>>>>>> aaec360627cd1fd4072163a98af6d940e62d64d9
