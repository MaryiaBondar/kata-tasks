// Задание 1
// let str = 'aaa@bbb@ccc';
// console.log(str.replace(/@/g, '!'));


// Задание 2
// let date = '2025-12-31';
// let result = date.split('-').reverse().join('/');
// console.log(result);


// Задание 3
// let str = "я учу javascript!";
// console.log(str.substr(2, 4));
// console.log(str.substr(6, 10));
// console.log(str.substring(2, 5));
// console.log(str.substring(6, 16));
// console.log(str.slice(2, 5));
// console.log(str.slice(6, -1));


// Задание 4
// let arr = [4,2,5,19,13,0,10];
// let b = 0;
// for(var i=0; i<arr.length; i++) {
//     b += Math.pow(arr[i],3);
// }
// console.log(Math.sqrt(b));


// Задание 5
// let a = 3,
//     b = 5,
//     c = Math.abs(a-b);
// console.log(c);


// Задание 6
// let date = new Date(),
//     hours = date.getHours(),
//     minute = date.getMinutes(),
//     sec = date.getSeconds(),
//     day = date.getDate(),
//     month = date.getMonth() + Number(1),
//     year = date.getFullYear();
// function zero(numb){
//     if(numb >= 0 && numb < 10){
//         return '0' + numb;
//     }else{
//         return numb;
//     }
// };
// console.log(zero(hours) + ':' + zero(minute) + ':' + zero(sec) + ' ' + '' + zero(day) + '.' + zero(month) + '.' + year);


// Задание 7
// let str = 'aa aba abba abbba abca abea';
// console.log(str.match(/ab+a/));



// Задание 8
// let phone = prompt('Введите ваш номер телефона');
// let regexp = /(\+375|80)(29|25|44|33)([0-9]{3})([0-9]{2})([0-9]{2})/gi;
// console.log(regexp.test(phone));


//Задание 9
// let email = prompt('Введите ваш email');
//  let regexp = /[0-9a-zA-Z._-]{2,}@[._-a-zA-Z].[a-z]{2,11}/gi;
//  console.log(regexp.test(email));


// Задание 10
// function gridIndex(grid, indices) {
//     const arr = grid.flat();
//     return indices.map(item => arr[item-1]).join('');
//   }


// Задание 11
// function testit(a,b){
//     const A = [...new Set(a)];
//     const B = [...new Set(b)];
    
//     return A.concat(B).sort((a, b) => a - b);
//   }