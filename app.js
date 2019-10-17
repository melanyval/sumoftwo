const sumTwoSmallestNumbers = numbers => {

  if(numbers.length === 0) return 0;  
  if(numbers.length === 1) return numbers[0];

  let num1 = numbers[0];
  let num2 = numbers[1];

  for(const value of numbers){
    if(value < num1){
      num2 = num1; 
      num1 = value;
    }
    if(value < num2 && value !== num1) num2 = value;
  }

  return num1 + num2;
}