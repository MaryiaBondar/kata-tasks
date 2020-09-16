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
let a = 100;
let sum = 0;
for (let r = 0; r <= a; r++) {
    sum = 0;
    for (let j = 1; j <= r; j++) {
        sum +=j;
    }
    console.log('Sum' + r + ' = ' + sum);
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
