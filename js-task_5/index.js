

// Задание 1

//  let f = function(a, b, c){
//      return (a - b) / c;
//      }
//  console.log(f(15, 5, 2));

// Задание 2

// function cub(num) {
//     return num * num * num;
//     }
// console.log(cub(4));


// Задание 3

// let a = prompt('число 1'),
//     b = prompt('число 2');
//     c = Math.max(a, b);
//     d = Math.min(a, b)
// console.log('max' + c);
// console.log('min' + d);

// Задание 4

// function createArray (length) {
//     let array = [];
//     for (let i = +prompt ('начальное число диапозона'); i <= length; i++ ) {
//         array.push (i);
//     }
//     console.log (array);
// }
// createArray(15);

// Задание 5
// function isEven(num) {
//     if(num > 0 && num % 2 == 0) {
//         return true;
//     }else return false;
// }    
// console.log(isEven(12));

// Задание 6

// let arr = [2, 12, 8, 9, 24, 6, 12, 16, 9, 0, 15, 3, 5];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (isEven(arr[i])) {
//         newArr.push(arr[i]);
//     }
// }
// alert(newArr);

// Задание 7

// function piramid (a, b) {
//     if (+a == NaN) return;
//     for (let i = 1; i <= a; i++) {
//       let c = '';
//       for (let j = 0; j < i; j++) {
//         c += b == undefined || b == '' ? i : b;
//       }
//       console.log(c + '\a');
//     }
//   }
//   piramid(prompt('Кол-во рядов'), prompt('символ'));

// Задание 8 

// let arr = [7, 10, 4, 7, 3, 8, -2];
// function func(arr, a) {
//     if (a < arr.length) {
//         console.log(arr[a]);
//         return func(arr, a + 1);
//     }
// }
// func(arr, 0);

