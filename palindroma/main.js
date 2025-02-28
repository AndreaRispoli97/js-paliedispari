//Passaggi da Seguire 
//- Chiedere all'utente una parola
//- Creare una variabile contenente prompt
//- Creare una funzione per valutare se una parola è palindroma o no

const parola = prompt("Inserisci una parola");
console.log(parola);


function palindroma(parola) {
  let parolaInversa = parola.split("").reverse().join("");
  return parolaInversa;
}

if (parola === palindroma(parola)) {
  console.log("La parola è palindroma");
} else {
  console.log("La parola non è palindroma");
}