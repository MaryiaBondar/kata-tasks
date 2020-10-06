
/*
//1

let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/g, '!'))

*/


/*
//2

let date = '2025-12-31';
console.log(date.replace(/-/g, ':'));
console.log(date.replace(/(31) (12) (2025)/, '$3$2$1'));
*/

/*
//3 допилить замену символов

let str = 'Я учу javascript!';
console.log(str.substring(2,16));
console.log(str.substr(2,14));
console.log(str.slice(2,16));
*/

/*
4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for.



//4

let arr = [4, 2, 5, 19, 13, 0, 10]
//console.log(Math.sqrt()) //извлекает квадратный корень из числа
//console.log(Math.pow(12,3)) //возводит число в степень - т.е. 12 в третьей ст

console.log(arr)

*/

/*
//5

let a = 6,
    b = 1,
    c = Math.abs(a-b);

    console.log(c);
*/


/*

//6 

let dateNow = new Date(),
    hours = dateNow.getHours(),
    minutes = dateNow.getMinutes(),
    seconds = dateNow.getSeconds(),
    number = dateNow.getDate(),
    month = dateNow.getMonth(),
    year = dateNow.getFullYear();

    console.log(hours + '.' + minutes + '.' + seconds + '.' + '   ' + number + '.' + month + '.' + year + '.')

*/


/*
    //7

    let str = 'aa aba abba abbba abca abea';
    console.log(str.match(/ab+a/g));

*/


/*
//8

let phone = prompt('Введите номер Вашего телефона');
let regexp = /('+375')+(29|44|33|25)+([0-9]{3})+([0-9]{2})+([0-9]{}2)/g;
console.log(regexp.test(phone));
*/

/*
//9
let email = prompt('Введите ваш e-mail');
let regexp = /([a-z0-9._-]{2,})+('@')+([._-a-z].[a-z]{2,11})/g;  //я не знаю почему он не работает-все время false
  console.log(regexp.test(email));
*/
