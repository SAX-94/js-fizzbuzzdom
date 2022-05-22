/* Se i è divisibile per 3 (i % 3 === 0), allora console.log mostrerà "Fizz".
Analogo ragionamento per 5, ma con la parola "Buzz". Se un numero è divisibile
sia per 3, sia per 5, allora è divisiile per 15. In tal caso, verrà mostrata la
parola FizzBuzz. */ 



for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}