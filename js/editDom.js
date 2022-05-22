
let spanText = document.getElementsByClassName("importedHtml");

for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        spanText = "FizzBuzz";
    } else if (i % 5 == 0) {
        spanText = "Buzz";
    } else if (i % 3 == 0) {
        spanText = "Fizz";
    } else {
        console.log(i);
    }
}


