//task_1
/*
    for (let i = 1; i < 50; i++)console.log(i);
       
       
    for (let i = 35; i > 8; i--) console.log(i);

//task_2  
let a=89;  
while (a>11) {
    document.write(`${a}<br>`);
    a--;    
}

//task_3
let sum = 0,
    b = 1;
for (let b = 1; b <= 100; b++) {
    console.log(b);
    sum += b;
}
console.log(sum)

//task_4

for (let i = 1; i <= 5; i++) {
    sum = 0;
    for (let h = 1; h <= i; h++) {
        sum += h;
    }
    console.log(i + " = " + sum)
}

//task_5

for (let i = 8; i < 56; i++) {
    if (i % 2!= 0) {
        continue
    }
    console.log(i);
}


//task_6
for (let i = 2; i <= 10; i++)
    {   for (let d = 2; d <= 10; d++) 
     console.log( i + ' * ' + d + ' = ' + (i*d));  }



//task_7


let n = 1000,
    iteration = 0;

while (n > 50) {
    n =n / 2 ;
    iteration++;
    console.log(n)
    console.log(iteration)
}
*/

//task_8
// let x=prompt();
// console.log(x)
let a = 0,
    sum = 0,
    b = 0;
b = +prompt('Введите число')
if (b == NaN) {
    alert("Вы ввели не число")
} else if (b != 0) {
    let i = 0
    while (true) {
        b = +prompt('еще')
        i++
        sum += b
        console.log('summa'+' '+sum)
        if (b == 0) {
            break;
        }
    }
    }




