function basicOp(operation, value1, value2)  //1
{
  let result
  switch(operation) {
      case '+':
      result = value1 + value2;
      break;
      case '-':
      result = value1 - value2;
      break;
      case '*':
      result = value1 * value2;
      break;
      case '/':
      result = value1 / value2;
  }
  
  return result
}


function bonusTime(salary, bonus) {
    return '£${bonus ? salary * 10 : salary}'
}

function getGrade (s1, s2, s3) {
    function getGrade (s1, s2, s3) {
        const avg = (s1 + s2 + s3) / 3
        let result = 'F'
        
        switch(true) {
            case (avg >= 90) :
            result = 'A'
            break;
            
            case (avg >= 80) :
            result = 'B'
            break;
            
            case (avg >= 70) :
            result = 'C'
            break;
            
            case (avg >= 60) :
            result = 'D'
            break;  
        }
        
        return result
      }
}
