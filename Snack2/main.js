//Generatore di “nomi cognomi” casuali del grande gatsby: Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" lista di invitati, dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette, scelti in modo casuale.

let arrNomi = ['Andrey', 'Rafael', 'Mike', 'Khvicha', 'Hirving', 'Piotr']

let arrCognomi = ['Shevchenko', 'Leao', 'Maignan', 'Kvaratskhelia', 'Lozano', 'Zielinski']

let randomName = Math.floor(Math.random() * arrNomi.length)
let randomSurname = Math.floor(Math.random() * arrCognomi.length)

console.log(`${randomName, arrNomi[randomName]}` + `${randomSurname, arrCognomi[randomSurname]}`)