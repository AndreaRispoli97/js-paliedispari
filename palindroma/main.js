//Passaggi da Seguire 
//- Chiedere all'utente una parola
//- Creare una variabile contenente prompt
//- Creare una funzione per valutare se una parola è palindroma o no

const parola = prompt("Inserisci una parola");
console.log(parola);


function palindroma(parola) {
  let parolaInversa = "";
  for (let i = parola.length - 1; i >= 0; i--) {
    parolaInversa += parola[i];
  }
  if (parola === parolaInversa) {
    return "La parola è palindroma";
  } else {
    return "La parola non è palindroma";
  }
}

console.log(palindroma(parola));