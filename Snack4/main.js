//Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

let arr1 = [1,2,3,4]
let arr2 = [7]

let bigArray
let smallArray

if (arr1.length > arr2.length){
    bigArray = arr1
    smallArray = arr2
    console.log(bigArray)
}   else if (arr1.length == arr2.length) {
    console.log('same length')
}   else {
    bigArray = arr2
    smallArray = arr1
}

let arrDifference = bigArray.length - smallArray.length

for (i = 0; i < arrDifference; i++){
    let randomNumber = Math.floor(Math.random() * 100)
    console.log(`numero ciclo: ${i} e il numero random è ${randomNumber}`)
    smallArray.push(randomNumber)
}
console.log(smallArray)