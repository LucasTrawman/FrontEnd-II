// // numero 1 = pedra
// // numero 2 = papel
// // numero 3 = tesoura


// let jogador = 0;
// let jogadorPontos = 0;
// let maquinaPontos = 0;
// let maoMaquina = 0;


// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min); 
// }

// while (jogadorPontos<2 || maquinaPontos<2){
//     jogador = Number(prompt("Escolha 1 para pedra, 2 para papel e 3 para tesoura"));
//     maoMaquina = getRandomInt(1,3)
// if(jogador==maquina){
//     alert("Deu empate")
// }else if (jogador > maquina)   {
//     if(maquina ==1 && jogador == 3 ) {
//         alert("você Perdeu!")
//         maquinaPontos++
//     } else  {
//         alert("você ganhou!")
//         jogadorPontos++ 
//     }
// }  else {
//     if(maquina ==3 && jogador == 1 ) {
//         alert("você Ganhou!")
//         jogadorPontos++
//     }else {
//         alert("você Perdeu!")
//         maquinaPontos++ 
        
//     }
// }
// } 
// if (maquinaPontos == 2 ){
//     alert("você perdeu o jogo")
// }else alert("você ganhou o jogo")


// numero 1 = pedra
// numero 2 = papel
// numero 3 = tesoura


let jogador = 0;
let jogadorPontos = 0;
let maquinaPontos = 0;
let maquina = 0;
let rodada = 0;


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}


while (jogadorPontos<2 && maquinaPontos<2){
    jogador = Number(prompt(`placar: jogador ${jogadorPontos} maquina ${maquinaPontos} \n escolha 1 para pedra, 2 para papel e 3 para tesoura`));
    maquina = getRandomInt(1,3)
if(jogador==maquina){
    alert(`Deu empate`)
}else if (jogador > maquina)   {
    if(maquina == 1 && jogador == 3 ) {
        alert(`você Perdeu! a maquina escolheu ${maquina}` )
        maquinaPontos++
    } else  {
        alert(`você ganhou!`)
        jogadorPontos++ 
    }
}  else {
    if(maquina ==3 && jogador == 1 ) {
        alert(`você Ganhou!`)
        jogadorPontos++
    }else {
        alert(`você Perdeu! a maquina escolheu ${maquina}`)
        maquinaPontos++ 
        
    }
}
 } 
if (maquinaPontos == 2 ){
    alert(`você perdeu o jogo`)
}else alert(`você ganhou o jogo`)



// while (rodada < 2) {
//   jogador = Number(
//     prompt(
//       `placar: jogador ${jogadorPontos} maquina ${maquinaPontos} \n escolha 1 para pedra, 2 para papel e 3 para tesoura`
//     )
//   );
//   maquina = getRandomInt(1, 3);
//   if (jogador == maquina) {
//     alert(`Deu empate`);
//   } else if (jogador > maquina) {
//     if (maquina == 1 && jogador == 3) {
//       alert(`você Perdeu! a maquina escolheu ${maquina}`);
//       maquinaPontos++;
//       rodada++;
//     } else {
//       alert(`você ganhou!`);
//       jogadorPontos++;
//       rodada++;
//     }
//   } else {
//     if (maquina == 3 && jogador == 1) {
//       alert(`você Ganhou!`);
//       jogadorPontos++;
//       rodada++;
//     } else {
//       alert(`você Perdeu! a maquina escolheu ${maquina}`);
//       maquinaPontos++;
//       rodada++;
//     }
//   }
// }
// if (maquinaPontos == 2) {
//   alert(`você perdeu o jogo`);
// } else alert(`você ganhou o jogo`);