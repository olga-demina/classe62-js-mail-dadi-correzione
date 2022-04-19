// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// 

// Dato:
const emails = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com"];
console.log(emails);

// Chiedere email con prompt
const userMail = prompt("Dimmi la tua email");
// pluto@gmail.com

// // Controllare con il for se l'email è nell'array
// let emailFound = false;
// for (let i = 0; i < emails.length; i++) {
//     const thisEmail = emails[i];
// 
//     if (thisEmail === userMail) {
//        emailFound = true;
//     }
// }
// console.log(emailFound);
// 
// // Stampare il rusltato a secondo del esito
// if (emailFound) {
//     console.log("Email trovata, puoi accedere");
// } else {
//     console.log("Accesso negato");
// }

const emailFound = emails.includes(userMail);

if (emailFound) {
    console.log("Email trovata, puoi accedere");
} else {
    console.log("Accesso negato");
}