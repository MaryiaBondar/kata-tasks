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