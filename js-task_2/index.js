//Задача 1
//  let name=prompt('Ваше имя?','');
//  let age=prompt('Ваш возраст?','');
//  let city= prompt('Ваш город проживания?','');
//  let phone=prompt('Ваш номер телефона?','');
//  let email=prompt('Ваш email?','');
//  let company=prompt('В какой компании Вы работаете?','');
//  let txt='Меня зовут '+ name+ '. Мне '+age+` лет.
//  Я проживаю в городе `+city+' и работаю в компании '+company+'.Мои контактные данные:'+phone+','+email+'.';
//alert(txt);

// Задача 2
// let date=new Date();
// let year=date.getUTCFullYear()
// alert(name+' родился в '+ (year-age)+' году.');

//Задача 3
let line='123322';
let lineSum1=+line[0] + +line[1] + +line[2];
let lineSum2=+line[3] + +line[4] + +line[5];
(lineSum1 == lineSum2) ? console.log('да') : console.log("нет");

// Задача 4
let a=-3;
(a>0) ? console.log('Верно'):console.log('Неверно')

// Задача 5
a=11;
let b=2;
console.log('a='+a+ ', b='+b);
console.log("Сумма a и в = "+ (a+b));
console.log("Разность a и в = "+ (a-b));
console.log("Произведение a и в = "+ (a*b));
console.log("Частное a и в = "+ (a/b));
((a+b)>1) ? console.log("Сумма в квадрате "+ ((a+b)**2) ): '';

//Задача 6
 ( ((a>2) && (a<11)) || ((b>=6) && (b<14)) ) ? console.log('Верно'):console.log('Неверно');



// Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания 5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите
// 'Неверно'.