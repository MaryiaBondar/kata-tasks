//1


let name = prompt( 'Ваше имя'),
    age = prompt( 'Ваш возраст' ), 
    city = prompt( 'Ваш город проживания' ),
    phone = prompt('Ваш номер телефона' ),
    email = prompt( 'Ваш е-мейл' ),
    company = prompt( 'Название Вашей компании' );

document.write( ' Меня зовут ' + name + '. ' + 'Мне ' + age + ' лет. ' );
document.write( ' Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. ' );
document.write( ' Мои контактные данные: ' );
document.write( phone + ', ' + email + '.');

//2

const year = 2020;
let born = year - age;

document.write( name + ' родился в ' + born + ' году. ');



//3

let a = 10,
    b = 2,
    c = 3,
    d = 4,
    e = 5,
    f = 6;

let x = a + b + c,
    y = d + e + f;

if (x === y) {
    console.log('Да');
} else {
    console.log('Неа');
}

//4

if (a > 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//5

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

if (a + b > 0) {
    console.log((a + b) * (a + b));
}

//6

if (a > 2 && a < 11 || b >= 6 && b < 14) {
    console.log('Верно');
} else {
    console.log('Неверно');
}