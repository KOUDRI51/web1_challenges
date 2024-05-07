//Function to calculate the average of all even numbers in an array:

function averageOfEvenNumbers(numbers) {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    const sum = evenNumbers.reduce((acc, curr) => acc + curr, 0);
    return sum / evenNumbers.length;
}
