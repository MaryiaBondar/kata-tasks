// Задание 1
let arr1 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

// Задание 2
let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
let arrNum = arr2.filter(function(b) {
    return b > -10 && b < -3;
})
console.log(arrNum);

// Задание 3
let arr3 = [],
    resultSum = 0;
for (let с = 22; с < 57; с++) {
    arr3[с] = с + 1;
    resultSum += arr3[с];  
}
console.log(arr3);
console.log(resultSum);


let start = 23,
    result = [];
while(start <= 57) {
    result.push(start++)
}
console.log(result);


// Задание 4
let arr4 = ['10', '20','30', '50', '235', '3000'];
for (let d = 0; d < arr4.length; d++) {
if (arr4[d][0] == '1' || arr4[d][0] == '2' || arr4[d][0] == '5') {
    console.log(arr4[d]);
}
}

// Задание 5
let arr5 = ['Понедельние', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
for( let i = 0; i < arr5.length; i++) {
    if(i == 5 || i == 6) {
        document.write('<b>' + arr5[i] + '</b>' + '<br/>');
    } else{
        document.write(arr5[i]+'<br/>');
    }
}

// Задание 6
let arr6 = ['Саша', 'Маша', 'Петя', 'Боря'];
arr6.push('Коля');
console.log(arr6[arr6.length - 1]);

// Задание 7
let arr7 = [];
let e;
let arr7Nums;

while (e === undefined) {
    e = prompt('Введите число');
    if (e !== null && e !== '' && !isNaN(e)) {
        arr7.push(Number(e));
        e = undefined;
    }
}
console.log(arr7);
arr7Nums = arr7.sort(function(A,B) {
    return A - B;
});
console.log(arr7Nums);


// Задание 8
let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
console.log(arr8.reverse());

// Задание 9
let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
let sumI = 0;
for( let i = 0; i < arr9.length; i++) {
    sumI += (arr9[i] === undefined) ? 1 : 0;
    }
 console.log(sumI);
 

 // Задание 10
 let arr10 = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];
 let first = arr10.indexOf(0) + 1,
     last = arr10.lastIndexOf(0);
 let total;
  total = arr10.splice(first, last - first).reduce((a, b) => a + b, 0);
  console.log(total);

// Задание 11
let i = 0, j = 0;
let max = prompt('Введите количество строк');
let x = '',
    y = '';
while (i < max) {
    x = '';
    y = '';
    for (j = 0; j < max - i; j++) {
        x += " ";
    }
    for (j = 0; j < 2 * i + 1; j++) {
        y += "^";
    }
    i++;
    console.log(x + y);
}


