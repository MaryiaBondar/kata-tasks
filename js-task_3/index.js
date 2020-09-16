// Задание 1
let a = 1,
    b = 35;
do {
    console.log(a);
    a++;
} while(a <= 50);

do {
    console.log(b);
    b--;
} while(b >=8);

// Задание 2
let i = 89;
while(i >= 11) {
    document.write(i + '<br/>');
    i--;
}

// Задание 3
let suma = 0;
for (let d = 0; d <= 100; d++) {
    suma += d;
}
console.log(suma);

// Задание 4
let f = 1,
    c = 5;
let sum = 0
for (let f = 1; f <= c; f++) {
    sum = 0;
    for (let j = 1; j <= f; j++) {
        sum += j;
    }
    console.log('sum ' + f + ' = ' + sum);
}

// Задание 5
for (let e = 8; e <= 56; e++) {
    if (e % 2 == 0) {
      console.log(e);
    }
  }


// Задание 6
for (A=2; A<=10; A++) {
    for (B=2; B<=10; B++) 
console.log(A + " * "+ B +" = " + ( A * B));
}


// Задание 7
for (n = 1000, num = 0; n >= 50; n /= 2, num++);
console.log(n);
console.log(num);


// Задание 8
