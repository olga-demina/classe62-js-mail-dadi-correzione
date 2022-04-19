// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Generiamo i numeri random
const userNumber = Math.floor(Math.random() * 6) + 1;
const computerNumber = Math.floor(Math.random() * 6) + 1;

console.log(userNumber, computerNumber);

// Definire qual'è il numero più grande
let result = `Il tuo numero è ${userNumber}, il numero del computer è ${computerNumber}. `;
if (userNumber > computerNumber) {
        result += "Hai vinto tu";
} else if (computerNumber > userNumber) {
    result += "Ha vinto il computer";
} else {
    result += "pareggio";
}

// Output
console.log(result);
document.getElementById("result-text").innerHTML = result;