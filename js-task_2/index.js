let name = prompt('Ваше имя?'); // Пункт 1
    age = prompt('Возраст?');
    city = prompt('Город проживания');
    phone = prompt('Контактый телефон');
    email = prompt('Эл.адрес');
    company = prompt('Компания');
document.write('Меня зовут '+ name +'. Мне '+ age +' лет.<br> Я проживаю в городе '+ city +' и работаю в компании '+ company +'<br>.Мои контактные данные:<br>'+ phone +', '+ email +'<br>');

let birth = 2020 - age; // Пункт 2
document.write(''+ name +' родился в '+ birth +' году.');
