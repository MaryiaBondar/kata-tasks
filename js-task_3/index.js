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

// Задание 6

for ( i=2; i<=10; i++) {
    for (let b=2; b<=10; b++)
    document.write (i + " * " + b + " = " + (i * b));
}


// Задание 7 

let n = 1000;
    num = 0;
while (n >=50) {
    n /= 2;
    num++;
    console.log('Результат деления:' + n + '<br>'/n);
    console.log('Количество итераций:' + num + '<br>'/n);
}

// Задание 9

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let cur='', min, max;
for (let i = 0; i < str.length; i++) {
  cur += str[i];
  if (+str[i] && !+str[i+1]) {
    if (typeof min !== 'number' || cur < +min) min = +cur;
    if (typeof max !== 'number' || cur > +max) max = +cur;
    cur = '';
  }
}
console.log('Min:', min, 'Max:', max)

