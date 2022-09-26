function part1() {
    /* Write a hello world program below using the console */
    console.log("Hello world!");
}

function part2() {
    /* Write a program that asks for your name and then prints it out using the console */
    console.log(prompt("What is your name?"));
}

function part3() {
    /* Write a program that asks for your name and then prints it out with extra text using the console */
    console.log("Your name is " + prompt("What is your name?"));
}

function part4() {
    /* Ask the user for their name, store it in a variable, and print it out using the console */
    const name = prompt("What is your name?");
    console.log("Your name is " + name);
}

function part5() {
    /* Ask the user for 2 numbers, add them together, and print the sum with an alert */
    const a = parseInt(prompt("Type in a number"));
    const b = parseInt(prompt("Type in another number"));
    const sum = a + b;
    alert(a + " + " + b + " = " + (sum));
}

function part6() {
    /* Do the same as part 5 but use backticks */
    const a = parseInt(prompt("Type in a number"));
    const b = parseInt(prompt("Type in another number"));
    const sum = a + b;
    alert(`${a} + ${b} = ${sum}`);
}

function part7() {
    /* Convert human years to dog years */
    const humanYears = parseInt(prompt("Type in an amount of human years"));
    const dogYears = humanYears * 7;
    alert(`${humanYears} human years is ${dogYears} dog years`);
}

function part8() {
    /* Convert fahrenheit to celsius */
    const fahrenheit = parseInt(prompt("Type in a temperature in fahrenheit"));
    const celsius = (fahrenheit - 32) * 5 / 9;
    alert(`${fahrenheit}°F is ${celsius.toFixed(1)}°C`);
}

function part9() {
    /* Use an if statement to determine if 2 inputs are equal and print the result */
    const a = prompt("Type in a number");
    const b = prompt("Type in another number");

    if(a == b) {
        alert(`${a} equals ${b}`);
    }
    else {
        alert(`${a} does not equal ${b}`);
    }
}

function part10() {
    /* Ask the user for a number and determine if it is even */
    const a = prompt("Type in a number");

    if(a % 2 == 0) {
        alert(`${a} is even`);
    }
    else {
        alert(`${a} is odd`);
    }
}