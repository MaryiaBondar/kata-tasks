// Лампочка. Возможные методы: ввод информации о лампочке (мощность, стоимость электроэнергии), 
// вкл./выкл. лампочки, получение расхода за горение лампочки, счетчик горения лампочки.

// let Lightbulb = function () {
//      this.get = function () {
//         this.power = +prompt('Введите мощность лампочки, Вт');
//         this.costEnergy = +prompt('Введите стоимость электроэнергии за 1Квт' + '/' + 'ч');
//         if (confirm('Включить лампочку?')) {
//             this.workTime = +prompt('Сколько времени работает лампочка? , ч');
//         } else {
//             this.workTime = 0;
//         };
 
//         this.operation();
//     };
 
//     this.operation = function () {
//         this.result = (this.power / 1000) * this.costEnergy * this.workTime;
 
//         this.show();
//     };
 
//     this.show = function () {
 
//         if (this.workTime == 0 || this.workTime == undefined) {
//             console.log('Лампочка ' + 'не включена');
//         } else {
//             console.log('Лампочка ' + 'проработала - ' + this.workTime + 'ч, и стоимость потраченой электроэнергии составляет = ' + this.result + 'р.');
//         }
//     };
// };
 
// let totalCost = new Lightbulb();
// totalCost.get();


// Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл. двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), 
// движение вперед и назад (ввод информации о скорости движения), расчет пройденных километров.

// let Auto = function () {
//     this.get = function () {
//         this.name = prompt('Введите марку автомобиля')
//         this.speed = +prompt('Введите скорость движения');
       
//        if (confirm('Включить  двигатель и передачу?')) {
//            this.workTime = +prompt('Сколько времени машина в пути? , ч');
//        } else {
//            this.workTime = 0;
//        };

//        this.operation();
//    };

//    this.operation = function () {
//        this.result = this.speed * this.workTime;

//        this.show();
//    };

//    this.show = function () {

//        if (this.workTime == 0 || this.workTime == undefined) {
//            console.log('Машина ' + this.name + ' не заведена или на нейтральной передаче');
//        } else {
//            console.log('Машина ' + this.name + ' в пути ' + this.workTime + ' ч, и проехала ' + this.result + ' км.');
//        }
//    };
// };

// let totalWay = new Auto();
// totalWay.get();





// Контакты. Возм. методы: добавление нового контакта (ввод ФИО, возраст, телефон, эл.
//     почта), проверка введенной информации, например: проверить возраст – должен быть
//     целым неотрицательным числом больше 18, вывод информации о конкретном
//     контакте, вывод всех контактов.
// 
// let dataMan = function() {
//     this.get = function() {
//         this.first_name = prompt('Введите имя');
//         this.last_name = prompt('Введите фамилию');
//         this.age = function() {
//             let a = +prompt('Сколько вам лет?');
//             if(a > 0 && a >= 18){
//                 this.age = a;
//             } else {
//                 this.age = 0;
//                 alert('Доступ запрещен');
//             }
//        }
//         this.age();
    
//         this.phone = function() {
//         let phone = prompt('Введите ваш номер телефона');
//         let regexp = /(^\+375|80)(29|25|44|33)([0-9]{3})([0-9]{2})([0-9]{2})/;
//         let myphone = regexp.test(phone);
//         if(myphone === true) {
//             this.phone = phone;
//         } else {
//             this.phone = 0;
//             alert('Номер телефона введен неправильно!');
//         }
//     }  
//         this.phone();
        
//         this.operation();
//    };

//    this.operation = function() {
//         if ((this.last_name == '') || (this.first_name == '') ||
//             (this.age == '' || this.age == 0) || (this.phone == '') || (this.phone == 0)) {
//            console.log('Ошибка в воде данных');
//             } else {
//                 this.result = this.last_name + ' ' + this.first_name + 
//                 ' возраст: ' + this.age + ' телефон: ' + this.phone;
//         }
       

//        this.show();
//    };

//    this.show = function() {
//             console.log(this.result);
//                }
//    };

// let man = new dataMan();
// man.get();

