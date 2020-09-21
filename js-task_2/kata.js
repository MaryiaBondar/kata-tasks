//kata 1
function basicOp(operation, value1, value2)
{
  let a;
  switch (operation){
      case '+' :
      a=value1+value2    
      break;
      case '-' :
      a=value1-value2
      break;
      case '*' :
      a=value1*value2
      break;
      case '/' :
      a=value1/value2
      break;
  }  
  return a
  console.log(a)
};

//kata_2

function bonusTime(salary, bonus) {
    let a =salary,
    b = bonus,
    c;
 if (b==true) {
   c=a*10
   return `£${c}`
c
 }else {
   return `£${a}`
 }
}

//kata_3
function getGrade (s1, s2, s3) {
    let a = (s1+s2+s3)/3;
   
    if (a>=90 && a<=100) {
        return 'A';
   }else if (a>=80 && a<90) {
     return 'B'
   
  }else if (a>=70 && a<80) {
     return 'C'
   }else if (a>=60 && a<70) {
     return 'D'
   }else  {
     return 'F'
   }
    }