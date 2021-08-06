

const business = 1650;
const minister = 350;
const army = 600;

/*
// if(business>minister){
//     console.log('Business person er pola is bigger');

// }
// else{
//     console.log('Minister er pola is bigger');
// }

if (business > minister && business > army){
    console.log('Business is bigger');
}
else if(minister>business && minister>army){
    console.log('Minister is bigger');
}
else{
    console.log('Army is bigger');
}
*/
/*
var max =Math.max(business,minister,army);
console.log('largest is ', max);
*/

//using function
function findLargest(first ,second){
    if(first>second){
        return first;
    }
    else
    {
        return second;
    }
}

const largest = findLargest(154,245);
console.log('Largest is :', largest);

///using function largest number among 3 numbers

function largestValue(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1;

    }
    else if(num2>num1 && num2>num3){
        return num2;
    }
    else{
        return num3;
    }
}
const maxValue = largestValue(154,945,897);
console.log('Max value  is :', maxValue);


//find the smallest value among 3 numbers
function findSmallestValue(number1,number2,number3){
    if(number1<number2 && number1<number3){
        return number1;
    }
    else if(number2<number1 && number2<number3){
        return number2;
    }
    else{
        return number3;
    }
}
const minValue = findSmallestValue(654,945,573);
console.log('Min value  is :', minValue);
