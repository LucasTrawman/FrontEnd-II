// imprime cada um dos valores presentes dentro do array
let series = ['Friends', 'Game of Thrones', 'Breaking Bad'];

for(let valor of series){
    console.log(valor);
}


// imprime cada uma das posições da string
let frase = 'OS três mosqueteiros';

for(let valor of frase){
    console.log(valor);
}

let aula = {
    titulo:'Aula 3',
    horario: '19:00',
    tema: {
        titulo: 'alguma coisa',
        bimestre: '3Bi'
    }
}

for (let propriedade in aula){
    console.log(aula[propriedade])
}