//Задание 1

function num(lenght) {
    let num = [];
    for(let i = 1; i <= lenght; i++) {
        num.push(i);
    }
    console.log(num);
}

num(5);

// Задание 2

let massive = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i = 0; i < massive.length; i++) {
    if (massive[i] > -3) continue;
    if (massive[i] < -9) continue;
    console.log(massive[i]);
}

// Задание 3

let arr = [];
for (let i = 22, j = 0; i < 57, j < 35; i++ , j++) {
    arr[j] = (i + 1);
}
console.log(arr);

let arr1 = [], i = 22, j = 0;
while (i++ < 57, j++ < 35) arr[j - 1] = i;
console.log(arr1);


let a = 57, result = 0;
for (let i = 22; i <= a; i++) {
    result = 0;
    for (let j = 1; j <= i; j++) result += j;
}
console.log('Сумма чисел [23;57] = ' + result);

// Задание 4

let massive = ['10', '20', '30', '50', '235', '3000'];
let d = massive.length;
for (let i = 0; i < d; i++) {
    str = massive[i] + "";
    if (str[0] === '1' || str[0] === '2' || str[0] === '5') {
        console.log(massive[i]);
    }
}

// Задание 5 
let massive = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
for (let i = 0; i < massive.length; i++) {
    if (i == 5 || i == 6) {
        document.write('<b><span>' + massive[i] + '&#32;<span></b>');
    }
    else {
        document.write('<span>' + massive[i] + '</span>' + '  ');
    }
}

// Задание 6

let random = ['a', 'b', 'c', 'd', 'f'];
random.push('e');
console.log(random[random.length- 1]);