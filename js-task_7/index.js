// // Калькулятор
// let Calc = function () {
//   this.on = function () {
//     this.c = confirm("Включить калькулятор?");
//     if (this.c == false) {
//       alert("Не включен!");
//     } else {
//       alert("Калькулятор включен");
//       this.get();
//     }
//   };
//   this.get = function () {
//     this.a = +prompt("Введите число А");
//     this.oper = prompt("Введите операцию: +, -, *, /");
//     this.b = +prompt("Введите число Б");
//     this.operation();
//   };
//   this.operation = function () {
//     switch (this.oper) {
//       case "+":
//         this.result = this.a + this.b;
//         break;
//       case "-":
//         this.result = this.a - this.b;
//         break;
//       case "*":
//         this.result = this.a + this.b;
//         break;
//       case "/":
//         this.result = this.a / this.b;
//         break;
//       default:
//         this.result = 0;
//     }
//     this.show();
//   };
//   this.show = function () {
//     alert(this.a + " " + this.oper + " " + this.b + " =" + this.result);
//   };
// };
// let calc2 = new Calc();
// calc2.on();


// Лампочка

let Lamp = function(){
    this.setInfo=function(){
        this.a=+prompt("Введите вольтаж лампочки в ваттах");
        this.b=+prompt("Введите сколько часов будет работать лампочка");
        this.c=+prompt("Введите стоимость одного киловатта через точку: 0.2090");
        
        this.consumption()
    }
    this.consumption=function(){ 
        this.d=this.a/1000  //Расход лампочки в киловатт 
        this.result=(this.d*this.b)*this.c
        this.show()
    }
    this.show=function(){
        alert(`Ваша лампочка тратит в час ${this.d} киловатт. За ${this.b} часов она в сумме ${this.d*this.b} киловатт, что будет вам примерно стоить ${Math.round(this.result)} рубля`)
    }
}

let lamp = new Lamp;
lamp.setInfo()


