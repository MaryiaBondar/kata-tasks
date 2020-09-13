let name = prompt('Ваше имя?'); // Пункт 1
    age = prompt('Возраст?');
    city = prompt('Город проживания');
    phone = prompt('Контактый телефон');
    email = prompt('Эл.адрес');
    company = prompt('Компания');
document.write('Меня зовут '+ name +'. Мне '+ age +' лет.<br> Я проживаю в городе '+ city +' и работаю в компании '+ company +'<br>.Мои контактные данные:<br>'+ phone +', '+ email +'<br>');

let birth = 2020 - age; // Пункт 2
document.write(''+ name +' родился в '+ birth +' году.');

let a1 = 3; // Пункт 3
    a2 = 2;
    a3 = 5;
    b1 = 2;
    b2 = 5;
    b3 = 4;
    a = a1 + a2 + a3;
    b = b1 + b2 + b3;
if (a == b) {
    console.log('true');
}
else if (a > b) {
    console.log('false');
}
else if(a < b) {
    console.log('false');
}
    
