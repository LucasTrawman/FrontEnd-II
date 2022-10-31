let carro = {
    nome: 'fox',
    ano:'2011'
}

// imprimir propriedade
for (let prop in carro){
    console.log(prop)
}

// imprimir valor armazenado na propriedade
for(let prop in carro){
    console.log(carro[prop]);
}