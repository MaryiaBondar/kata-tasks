// Задание 1

let arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

// Задание 2

let arr1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < 0 && arr1[i] > -10 && arr1[i] < -3) {
        console.log(arr1[i])
    }
}

// Задание 3

let arr2 = [],
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
console.log(`sum = `+result)

// Задание 4

let arr4 = [],
    arr3 = ['10', '20', '30', '50', '235', '3000'];
for (let i = 0; i <= arr3.length -1; i++) {   
    arr4.push(+arr3[i])
}
console.log(typeof arr4, arr4.filter(num=>['1','2','5'].includes(num.toString()[0])))