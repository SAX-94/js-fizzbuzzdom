
const squaresCont = document.getElementById('squares-cont');

let basicSquare = '<div class="square"></div>';
let fizzBuzz = '<div class="square fizzbuzz">FizzBuzz</div>';
let buzz = '<div class="square buzz">Buzz</div>';
let fizz = '<div class="square fizz">Fizz</div>';


for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz");
        squaresCont.innerHTML += fizzBuzz;
    } else if (i % 5 == 0) {
        console.log("Buzz");
        squaresCont.innerHTML += buzz;
    } else if (i % 3 == 0) {
        console.log("Fizz");
        squaresCont.innerHTML += fizz;
    } else {
        console.log(i);
        squaresCont.innerHTML += `<div class="square">${i}</div>`;
    }
}



