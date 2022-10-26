//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo ( del numero inserito dall'utente: esempio se il numero dell'utente è 2, il numero successivo è 3  ).

let number = parseInt(prompt('scrivi un numero'))


if ( number % 2 == 0 ) {
    console.log(number);
    document.getElementById('even').innerText = `${number}`
  } else if ( number % 2 != 0 ) {
    console.log(number + 1);
    document.getElementById('oddPlusOne').innerText = `${number + 1}`
  }
