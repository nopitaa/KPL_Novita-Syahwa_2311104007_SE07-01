const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkLetter() {
    rl.question("Masukkan satu huruf: ", (char) => {
        let huruf = char.toUpperCase();
        let vokal = ["A", "I", "U", "E", "O"];
        
        if (huruf.length !== 1 || !huruf.match(/[A-Z]/)) {
            console.log("Input harus satu huruf kapital.");
        } else if (vokal.includes(huruf)) {
            console.log(`Huruf ${huruf} merupakan huruf vokal`);
        } else {
            console.log(`Huruf ${huruf} merupakan huruf konsonan`);
        }
        
        printEvenNumbers();
    });
}

function printEvenNumbers() {
    let evenNumbers = [2, 4, 6, 8, 10];
    evenNumbers.forEach((num, index) => {
        console.log(`Angka genap ${index + 1} : ${num}`);
    });
    rl.close();
}

checkLetter();
