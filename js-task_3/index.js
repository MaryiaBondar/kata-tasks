// Задание 1
for (let i = 1; i <= 50; i++) {   
    console.log(i);
}

for (let i = 35; i >= 8; i--) {
    console.log(i);
}
// Задание 2
let e = 89;
while (e >= 11) {
    document.write(e + '<br>');
    e--;
}
// Задание 3 
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
    console.log(sum);
}
// Задание 4 
let b = 5;
let sum1 = 0;
for (let u = 1; u <= b; u++) {
    sum1 = 0;
    for (let y = 1; y <= u; y++) {
        sum1 +=y;
    }
    console.log('Sum' + u + ' = ' + sum1);
}
// Задание 5
for (i = 8; i <= 56; i++) {
    if (i % 2 == 0)
    console.log(i);
}
