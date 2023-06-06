// 1. Create a function that will be able to convert figures from fahrenheit to celsius.
function convertToC(fahrenheit) {
    var celsius;
    celsius = (fahrenheit - 32) * 5 / 9;
    console.log (celsius);
}
convertToC(45); // 7.222222222222222

// 2. Create a function that will calculate the average of numbers in an array.
function calculateAverage(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        let number = array[i]
        sum += number;
    }
    average = sum / array.length
    console.log (average);
}
calculateAverage([4,6,2,8,5]); // 5

// 3. Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non zero digits.
function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isDivisible(12, 3, 4)); // true
console.log(isDivisible(12, 5, 7)); // false
console.log(isDivisible(24, 6, 5)); // false
console.log(isDivisible(24, 3, 8)); // true

// 4. Create a function that will output the first 100 prime numbers.
function generatePrimeNumbers(limit) {
    const primes = [];

    
    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }

    let num = 2;
    while (primes.length < limit) {
        if (isPrime (num)) {
            primes.push(num);
        }
        num++;
    }

    return primes;
}

const first100Primes = generatePrimeNumbers(100);
console.log(first100Primes); 

// 5. Create a function that would return a boolean specifying if a number is a prime number.
function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7));  //true
console.log(isPrime(10)); //false
console.log(isPrime(17)); //true
console.log(isPrime(1));  //false

// 6. Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.
function getPositiveNumbers(numbers) {
    return numbers.filter(function(number) {
        return number > 0;
    });
}

var numbers = [-5, 10, -3, 0, 8, -1, 2];
var positiveNumbers = getPositiveNumbers(numbers);
console.log(positiveNumbers); // [10, 8, 2]

/* 7. Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples 
of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz". */
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    }else if (i % 5 === 0) {
        console.log("Buzz");
    }else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else {
        console.log(i);
    }
}

/* 8. The marketing team is spending way too much time typing in hashtags. Let's create a hashtag generator for them, our hashtag generator 
will meet the following criteria;
*it must start with a hash symbol, #.
*Ignores all spaces in the input.
*All words must have their first letter capitalized.
*If the final results is going to be longer than 140 characters, it should return false.
*If the input or result is an empty string, it should return false.
*/
function generateHashtag(str) {
    if (str === "" || str.length === 0) {
        return false;
    }

    const words = str.split(" ").filter(word => word.length > 0);

    const capitalizeWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const hashtag = "#" + capitalizeWords.join("");

    if (hashtag.length > 140) {
        return false;
    }

    return hashtag;
}
console.log(generateHashtag("upskill")); // #Upskill
console.log(generateHashtag("programming is fun")); // #ProgrammingIsFun
console.log(generateHashtag("")); // false
console.log(generateHashtag("".repeat(140))); //false

