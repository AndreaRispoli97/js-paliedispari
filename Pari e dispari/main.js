//- Creare una variabile con un prompt che chiede all'utente un numero da 1 a 5 e uno che chiede per pari o dispari.
//- Usando una funzione dobbiamo creare un numero random per il computer(sempre da 1 a 5)
//- Sommiamo i due numeri
//- Usando un'altra funzione definiamo se i numeri sono dispari o pari
//- Dichiariamo il vincitore


// Chiedo all'utente di inserire un numero da 1 a 5

const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

// Chiedo all'utente di scegliere tra pari e dispari

const userChoice = prompt('Scegli tra pari e dispari');

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
