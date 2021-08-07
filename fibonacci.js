//fibonacci series : 0,1,1,2,3,5,8,13,21,34,55,89,144...
/*
3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 5th + 4th
119th = 118th + 117th
nth = (n-1)th +(n-2)th
ith = (i-1)th + (i-2)th
*/
const fibo = [0, 1];
for (let i = 2; i <= 20; i++) {
    // nth = (n - 1)th + (n - 2)th
    // ith = (i - 1)th + (i - 2)th
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);

/*
//fibonacci series using function
function fibonacciSeries(num){
    const fibo =[0,1];
    for(let i=2; i<=num; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;

}

const fiboSeries = fibonacciSeries(10);
console.log('Fibonacci series using functions is: ' ,fiboSeries);

*/



function fibonacciSeries(num) {
    if (typeof num != 'number') {
        return 'Please give a number';
    } else if (num < 2) {
        return 'Please enter a positive number greater than 1';
    }
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;

}

const fiboSeries = fibonacciSeries(-10);
console.log('Fibonacci series using functions is: ', fiboSeries);