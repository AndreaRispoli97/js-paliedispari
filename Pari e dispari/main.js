// Chiedo all'utente di inserire un numero da 1 a 5
//Creo un ciclo che chiede all'utente di inserire un numero da 1 a 5 finchè non lo fa
// Aggiungo un validatore

let userNumber = "";

do {
    userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
        alert('Scelta non valida!');
    }
} while (isNaN(userNumber) || userNumber < 1 || userNumber > 5);

// Chiedo all'utente di scegliere tra pari e dispari
// Aggiungo un validatore e un ciclo


let userChoice = "";

do {
    userChoice = prompt('Scegli tra pari o dispari');
    if (userChoice !== 'pari' && userChoice !== 'dispari') {
        alert('Scelta non valida!');
    }
} while (userChoice !== 'pari' && userChoice !== 'dispari');

// Creo una funzione che genera un numero random da 1 a 5

function randomNumberPc(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const computerNumber = randomNumberPc(1, 5);

console.log(computerNumber);

// Sommiamo i due numeri

const sum = userNumber + computerNumber;

//Creo una funzione per dire se la somma dei numeri è pari o dispari

function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}


// Dichiaro il vincitore

if (isEvenOrOdd(sum) === userChoice) {
    console.log('Hai vinto!');
} else {
    console.log('Hai perso!');
}
