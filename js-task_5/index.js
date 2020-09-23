// Задание 1
// var t1 = function(a, b, c){
//     return (a - b) / c;
//     }
// console.log(t1(10, 1, 3));


// Задание 2
// function cube(num) {
//     return num * num * num;
//     }
// console.log(cube(4));


// Задание 3
// var a = prompt('Введите число 1'),
//     b = prompt('Введите число 2');
// var c = Math.max(a, b);
// var d = Math.min(a, b)
// console.log('Большее число ' + c);
// console.log('Меньшее число ' + d);


// Задание 4
// function createArray(length) {
//     var array = [];
//     for (var i = +prompt('Введите начальное число диапозона'); i <= length; i++) {
//         array.push(i);
//     }
//     console.log(array);
// }
// createArray(10);


// Задание 5
// function isEven(num) {
//     if(num > 0 && num % 2 == 0) {
//         return true;
//     }else return false;
// }    
// console.log(isEven(44));


// Задание 6
// var arr = [1, 4, 3, 9, 5, 6, 12, 8, 9, 0, 15, 3, 5];
// var newArr = [];
// for (var i = 0; i < arr.length; i++) {
//     if (isEven(arr[i])) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);


// Задание 7
function pyramid(n, s) {
    if (+n == NaN) return;
    for (let i = 1; i <= n; i++) {
      let m = '';
      for (let j = 0; j < i; j++) {
        m += s == undefined || s == '' ? i : s;
      };
      console.log(m + '\n')
    }
  };
  pyramid(prompt('число строк'), prompt('символ'))


// Задание 8
// let arr = [6, 12, 35, -4, 5, 6];
// function arrCall(arr, n) {
//     if (n < arr.length) {
//         console.log(arr[n]);
//         return arrCall(arr, n + 1);
//     }
// }
// arrCall(arr, 0);