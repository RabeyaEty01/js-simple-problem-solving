 //sum of all numbers in an array normal way

 const numbers = [44, 23, 67, 546, 76, 23, 90, 46];
 let sum = 0;
 for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
   sum = sum + element;

 }
console.log('total sum:',sum);


// sum of all numbers in an array using function

function arrayTotal(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
      const element = number[i];
      sum =sum+element;
    }
    return sum;
}

const total= arrayTotal([32,45,76]);
console.log('total sum of array values: ' ,total);