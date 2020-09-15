function basicOp(operation, value1, value2) {
    switch(operation){
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
      }
}

function bonusTime(salary, bonus) {
    switch(bonus) {
        case true: return '£' + (salary * 10); break;
        case false: return '£'+ salary; break;
    }
}

function getGrade (s1, s2, s3) {
    let avg = (s1+s2+s3)/3;
    if (avg >= 60 && avg < 70) {
      return 'a';
    } else if (avg >= 70 && avg < 80) {
      return 'b';
    } else if (avg >= 80 && avg < 90) {
      return 'c';
    } else if (avg >= 90  && avg <= 100) {
      return 'd';
    }
}
