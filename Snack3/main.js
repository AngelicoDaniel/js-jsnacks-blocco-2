//Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione (indice) dispari

let numbers = [1, 2, 3, 4, 5, 6, 804987, 1982098];
let sum = 0;
for(let i = 0; i < numbers.length; i ++ ) {
    if ( i % 2 != 0 ){

    sum += numbers[i];
    console.log(sum)
    document.getElementById('tot').innerText = `${sum}`
    }
}


