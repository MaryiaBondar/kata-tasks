function basicOp(operation, value1, value2){
    if(operation == '+')return value1 + value2;
    if(operation == '-')return value1 - value2;
    if(operation == '*')return value1 * value2;
    if(operation == '/')return value1 / value2;
}

function bonusTime(salary, bonus) {
    if (bonus === true) {
      return '£' + (salary * 10)
    } else {return '£' + salary
    }
}

function getGrade (s1, s2, s3) {
    let avg = (s1 + s2 + s3) / 3;
    if (avg >= 90 && avg <= 100) {
      return 'A';
  } else if (avg >= 80 && avg < 90) {
    return 'B';
  } else if (avg >= 70 && avg < 80) {
    return 'C';
  } else if (avg >= 60  && avg < 70) {
    return 'D';
  } else {
    return 'F';
  }
}
