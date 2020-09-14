function basicOp(operation, value1, value2){
    switch(operation){
        case '+': 
            return value1 + value2;
        case '*': 
            return value1 * value2;
        case '-': 
            return value1 - value2;
        case '/': 
            return value1 / value2;
      }
}

function bonusTime(salary, bonus) {
    switch(bonus) {
        case true: return '£'+salary*10;
        case false: return '£'+salary;
    }
}

function getGrade (s1, s2, s3) {
    let sum=(s1+s2+s3)/3;
    if (sum>=0 && sum <60) {
      return 'F';
    } else 
    if (sum>=60 && sum <70) {
      return 'D';
    } else 
    if (sum>=70 && sum <80) {
      return 'C';
    } else 
    if (sum>=80 && sum <90) {
      return 'B';
    } else 
    if (sum>=90 && sum <=100) {
      return 'A';
    }
}
