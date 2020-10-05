let Calc = function() { this.get = function() {
                        this.a = +prompt('введите число а');
                       this.b = +prompt('введите число b');
                        this.oper = prompt('введите операцию: +, -, *') }
                         this.operation = function() { switch(this.oper) { case '+': this.show = this.a + this.b;
                         brear;
                          case '-' : this.show = this.a - this.b;
                         break;
                         case '*' : this.show = this.a * this.b;
                         break;
                        default: this.show = 0;
                          } 
                         this.result();  };

                        this.result = function() { alert(this.a + ' ' + this.oper  + ' ' + this.b + ' = ' + this.show) }; };
let calc = new Calc();
 calc.get();