
let spanText = document.querySelectorAll('.importedHtml');



/* Devo usare .textContent sugli spanText per metterci dentro
del testo, a seconda delle condizoni del ciclo */


for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        spanText.textContent = "FizzBuzz";
    } else if (i % 5 == 0) {
        spanText.textContent = "Buzz";
    } else if (i % 3 == 0) {
        spanText.textContent = "Fizz";
    } else {
        spanText.textContent = i;
    }
}