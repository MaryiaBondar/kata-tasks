let name = prompt('Ваше имя?'); // Пункт 1
    age = prompt('Возраст?');
    city = prompt('Город проживания');
    phone = prompt('Контактый телефон');
    email = prompt('Эл.адрес');
    company = prompt('Компания');
document.write('Меня зовут '+ name +'. Мне '+ age +' лет.<br> Я проживаю в городе '+ city +' и работаю в компании '+ company +'<br>.Мои контактные данные:<br>'+ phone +', '+ email +'<br>');

let birth = 2020 - age; // Пункт 2
document.write(''+ name +' родился в '+ birth +' году.');

let t1 = 3; // Пункт 3
    t2 = 2;
    t3 = 5;
    e1 = 2;
    e2 = 5;
    e3 = 4;
    t = t1 + t2 + t3;
    e = e1 + e2 + e3;
if (t == e) {
    console.log('да');
}
else if (t > e) {
    console.log('нет');
}
else if(t < e) {
    console.log('нет');
}

let a = 1;         // Пункт 4
if (a < 0) {
    console.log('Неверно');
}
else if (a == 0) {
    console.log('Неверно');
}
else if (a > 0) {
    console.log('Верно');
}
    
