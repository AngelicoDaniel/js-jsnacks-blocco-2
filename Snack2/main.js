//Generatore di “nomi cognomi” casuali del grande gatsby: Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" lista di invitati, dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette, scelti in modo casuale.

let arrName = ['Andrey', 'Rafael', 'Mike', 'Khvicha', 'Hirving', 'Piotr']

let arrSurname = ['Shevchenko', 'Leao', 'Maignan', 'Kvaratskhelia', 'Lozano', 'Zielinski']

let fullNames = []



for (let i = 0; i < 36; i++){
    let randomName = Math.floor(Math.random() * arrName.length) 
    let randomSurname = Math.floor(Math.random() * arrSurname.length)

    console.log(`${arrName[randomName]}` + `${arrSurname[randomSurname]}`)

    fullNames.push( `${arrName[randomName]}  ${arrSurname[randomSurname]}` )
}

console.log(fullNames)
document.getElementById('guests').innerText = `${fullNames}`