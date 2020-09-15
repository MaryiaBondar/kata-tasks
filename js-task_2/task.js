// задание 1

let name = prompt('Ваше имя'),
    age = prompt('Ваш возраст'),
    city = prompt('Ваш город'),
    company = prompt('Ваша компания'),
    phone = prompt('Ваш телефон'),
    email = prompt('Ваша почта');

    document.write('Меня зовут ' + name + '.');
    document.write(' Мне ' + age + ' лет.' + '<br/>');
    document.write('Я проживаю в городе ' + city + ' и работаю в компании ' + company + '.' + '<br/>');
    document.write('Мои контактные данные: ' + '<br/>' + phone + ', ' + email);

// Задание 2

let year = 2020 - age;

document.write(+ name + ' родился в ' + year + ' году.');


// Задание 3

let a = 1;
    b = 2;
    c = 3;
    aa = 4;
    bb = 5;
    cc = 6;
    sum1 = a + b + c;
    sum2 = aa + bb + cc;
if (sum1 == sum2) {
    console.log('да');
} else {console.log('нет');
} 

// Задание 4 

let a1 = 1,
    a2 = 0,
    a3 = -3,
    result1 = (a1 > 0) ? true : false,
    result2 = (a2 > 0) ? true : false,
    result3 = (a3 > 0) ? true : false;

console.log(result1);
console.log(result2);
console.log(result3);

// Задание 5

let a = 10,
    b = 2,
    sum = a + b;

console.log(a - b);
console.log(a * b);
console.log(a / b);

if (sum > 1) {
    console.log(sum * sum);
} 

// Задание 6

(a > 2 &&  a < 11 || b >= 6  && b < 14) ? console.log('Верно')
                                        : console.log('Неверно');

