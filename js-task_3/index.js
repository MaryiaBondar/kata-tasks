
//Задание 1

for (i=1; i<=50; i++) {
    console.log(i);
}

for (j=35; j>=8; j--) {
    console.log(j);
}

//Задание 2 

let i = 89;

while (i >= 11) {
    console.log(i);
    i--;
}


// Задание 3

for(let i = 0; i <= 100; i++) {
    console.log(i);
}

// Задание 4

let a = 5;
let sum = 0;

for(let i = 1; i <=a; i++) {
    sum = 0;
    for(let j = 1; j <= i; j++) {
        sum += j;
    }
    console.log(i + '=' + sum);
}

// Задание 5

for(let i = 8; i <= 56; i++) {
    if (i % 2 == 1) continue;
    console.log(i);
}

// Задание 6

for (let j = 2; j <= 10; j++){  
    for (let i = 1; i <=10; i++)  
    { 
    console.log(i + "*" + j + "=" +(i*j)); 
    }  
} 

// Задание 7 

let n = 1000,
    num=0;
while (n>=50) {
    n=n/2;
    num++;
}
console.log(n);

