// Задание 1

/*let arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) console.log(arr[i]);  */

// Задание 2

/*let arr1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < 0 && arr1[i] > -10 && arr1[i] < -3) {
        console.log(arr1[i])
    }
}*/

// Задание 3

/*let arr2 = [],
    result = 0;
for (let i = 23; i < 58; i++) {
    arr2.push(i);    
}

let arr3 = [];
let i = 23;
while (i < 58) {
    arr3.push(i);
    i++;
}
for (let i=0 ; i < arr2.length; i++) {
    result +=arr2[i];
}
console.log(arr3)
console.log(arr2)
console.log(`sum = `+result)*/

// Задание 4

/*let arr4 = [];
    arr3 = ['10', '20', '30', '50', '235', '3000'];
for (let i = 0; i <= arr3.length -1; i++) {   
    arr4.push(+arr3[i])
}
console.log(typeof arr4, arr4.filter(num=>['1','2','5'].includes(num.toString()[0]))) */

// Задание 5

/*let x = 'ПН, ВТ, СР, ЧТ, ПТ, СБ, ВС',
    arr6 = x.split(', '),
    arr7 = [0],
    arr8 = [0];
for (let i = 0; i < arr6.length; i++) {
    arr7.push(arr6[i])
}
for (let i = 1; i < arr7.length - 2; i++) {
    arr8.push(arr7[i])
    document.write(`${arr8[i]}<br>`);
}
for (let i = 1; i <= arr7.length - 1; i++) {
    if (arr7.length - 1 == i || arr7.length - 2 == i)
        document.write(`<font color="red"><strong>${arr7[i]}</strong></font><br>`)
}*/

// Задание 6

/*let arr6 = ['Саша', 'Маша', 'Петя', 'Боря'];
arr6.push('Коля');
console.log(arr6[arr6.length - 1]);*/

// Задание 7

/*let arr7 = [];
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
console.log(arr7Nums); */

// Задание 8

/*let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
console.log(arr8.reverse());*/

// Задание 9

/*let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
let sumI = 0;
for( let i = 0; i < arr9.length; i++) {
    sumI += (arr9[i] === undefined) ? 1 : 0;
    }
 console.log(sumI);*/
 

 // Задание 10

 /*let arr10 = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];
 let first = arr10.indexOf(0) + 1,
     last = arr10.lastIndexOf(0);
 let total;
  total = arr10.splice(first, last - first).reduce((a, b) => a + b, 0);
  console.log(total);*/
