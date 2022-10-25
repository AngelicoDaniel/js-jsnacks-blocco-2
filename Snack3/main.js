//Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione (indice) dispari

let numeri = [1, 2, 3, 4, 5, 6];
let somma = 0;
for(let i = 1; i < numeri.length; i += 2 ) {
    somma += numeri[i];
    console.log(somma)
}


