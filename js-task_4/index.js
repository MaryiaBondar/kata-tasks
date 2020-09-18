//task_1
/*
let arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

//task_2

let arr1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < 0 && arr1[i] > -10 && arr1[i] < -3) {
        console.log(arr1[i])
    }
}

//task_3
*/
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
