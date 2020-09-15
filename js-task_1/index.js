document.write('<h1>первый таск</h1>');

// 1

let str = 'Привет',
    sum = 123,
    num = 15.8,
    flag = true,
    txt = 'true';

console.log(str, typeof str);
console.log(sum, typeof sum);
console.log(num, typeof num);
console.log(flag, typeof flag);
console.log(txt, typeof txt);

//2

let a1 = 5 % 3,
    a2 = 3 % 5,
    a3 = 5 + '3',
    a4 = '5' - 3,
    a5 = 75 + 'кг',
    a6 = 785 * 653,
    a7 = 100 / 25,
    a8 = 0 * 0,
    a9 = 0 / 2,
    a10 = 89 / 0,
    a11 = 98 + 2,
    a12 = 5 - 98,
    a13 = (8 + 56 * 4) / 5,
    a14 = (9 - 12) * 7 / (5 + 2),
    a15 = +"123",
    a16 = 1 || 0,
    a17 = false || true,
    a18 = true > 0;

console.log(a1, typeof a1);
console.log(a2, typeof a2);
console.log(a3, typeof a3);
console.log(a4, typeof a4);
console.log(a5, typeof a5);
console.log(a6, typeof a6);
console.log(a7, typeof a7);
console.log(a8, typeof a8);
console.log(a9, typeof a9);
console.log(a10, typeof a10);
console.log(a11, typeof a11);
console.log(a12, typeof a12);
console.log(a13, typeof a13);
console.log(a14, typeof a14);
console.log(a15, typeof a15);
console.log(a16, typeof a16);
console.log(a17, typeof a17);
console.log(a18, typeof a18);

//3

let h = 10,
    d = a7 / 2,
    R = a7;
const pi = 3.14,
    S = pi * (R * R),
    VCilindra = S * h;

console.log(VCilindra);

//4

let r = 5; 
    r2 = r * r,
    SKruga = pi * r2;

    console.log(SKruga);

//5

let a = 5,
    b = 7,
    STrap = 0.5 * (a + b) * h;

    console.log(STrap);

//6


let x = (16 - a + 2 * b)/2;

    console.log( x );


//7

let text1 = `индо земля зашаталась под ногами-и вырос,`,
    text2 = `и заревел он голосом диким...`,
    text3 = `блеснула молния и ударил гром,`,
    text4 = `а так какое-то чудище, страшное и мохнатое,`,
    text5 = `как будто из-под земли, перед купцом:`,
    text6 = `Он подошёл и сорвал аленький цветочек.`,
    text7 = `зверь не зверь, человек не человек,`,
    text8 = `В ту же минуту, безо всяких туч,`;
    text = text6 + text8 + text3 + text1 + text5 + text7 + text4 + text2;

    console.log(text);
