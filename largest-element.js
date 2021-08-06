//largest value finding from an array

function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > largest) {
            largest = element;
        }

    }
    return largest;

}
const ages = [12, 45, 34, 66, 23, 22, 98, 56];
const oldest = largestElement(ages);
const oldest2 =largestElement([-12,-9,-17,-8]);
console.log('Oldest age is:',oldest);
console.log('Oldest age is:',oldest2);

//lowest element of an array

function lowestElement(number) {
    let lowest = number[0];
    for (let i = 0; i < number.length; i++) {
        let elements = number[i];
        if (elements < lowest) {
            lowest = elements;
        }

    }
    return lowest;

}
const age = [12, 45, 34, 6, 23, 22, 98, 56];
const eldest = lowestElement(age);
const eldest2 =lowestElement([-12,-9,-17,-98]);
console.log('Lowest age is:',eldest);
console.log('Lowest age is:',eldest2);