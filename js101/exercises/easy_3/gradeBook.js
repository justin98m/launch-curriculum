function gradeAverage(classA,classB,classC){
  average = (classA + classB + classC)/3
  return average
}
function letterGrade(grade){
  switch(true){
    case grade >= 90:
      return 'A';
    case grade >= 80 && grade <= 90:
      return 'B';
    case grade >= 70 && grade <= 80:
      return 'C';
    case grade >= 60 && grade <= 70:
      return 'D';
    default:
      return 'F';
  }
}

console.log(letterGrade(gradeAverage(90,90,90)));
console.log(letterGrade(gradeAverage(90,40,20)));
console.log(letterGrade(gradeAverage(90,70,80)));
console.log(letterGrade(gradeAverage(80,60,60)));
console.log(letterGrade(gradeAverage(0,50,90)));
