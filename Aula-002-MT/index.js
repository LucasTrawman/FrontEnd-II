function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let jogadorPontos = 0
let maquinaPontos = 0
while (jogadorPontos < 2 || maquinaJogador < 2) {

  jogador = Number(prompt(`placar: jogador ${jogadorPontos} maquina ${maquinaPontos}. \nEscolha 1 para pedra, 2 para papel e 3 para tesoura`));

  maquina = getRandomInt(1, 3);

  alert("numero da maquina: " + maquina + "numero do jogador: " + jogador);

  if (jogador === maquina) {
    alert(`Deu empate`);
  }
  else if (jogador > maquina) {
    if (maquina === 1 && jogador === 3) {
      alert(`você Perdeu! a maquina escolheu ${maquina}`);
      maquinaPontos++;
    } else {
      alert(`você ganhou!`);
      jogadorPontos++;
    }
  }
  else {
    if (maquina === 3 && jogador === 1) {
      alert(`você Ganhou!`);
      jogadorPontos++;
    } else {
      alert(`você Perdeu! a maquina escolheu ${maquina}`);
      maquinaPontos++;
    }
  }
}

if (maquinaPontos === 2) {
  alert(`você perdeu o jogo`);
} else if (jogadorPontos === 2) {
  alert(`você ganhou o jogo`);
}
