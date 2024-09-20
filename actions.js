window.onload = function() {
  name();
};

function name() {
  let nome1 = localStorage.getItem("nome1");
  let nome2 = localStorage.getItem("nome2");

  document.getElementById("jogador").innerHTML = nome1 ? nome1 : "Jogador 1";
  document.getElementById("jogador2").innerHTML = nome2 ? nome2 : "Jogador 2";
}

var matriz = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

var jogadorAtual = 'X';
var jogoAtivo = true;

var nome1 = localStorage.getItem('nome1');
var nome2 = localStorage.getItem('nome2');

function jogada(posicao) {
  let linha = Math.floor(posicao / 3);
  let coluna = posicao % 3;

  if (matriz[linha][coluna] !== '' || !jogoAtivo) {
      return; 
  }

  matriz[linha][coluna] = jogadorAtual;
  document.getElementById(posicao).innerText = jogadorAtual;

  let resultado = checarVitoria();

  if (resultado !== "Sem vencedor") {
      document.getElementById('resultado').innerText = resultado;
      jogoAtivo = false;
      return;
  }

  jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X'; 
}

function checarVitoria() {
 
  for (let i = 0; i < 3; i++) {
      if (matriz[i][0] === matriz[i][1] && matriz[i][1] === matriz[i][2] && matriz[i][0] !== '') {
          return `Vencedor: ${matriz[i][0] == 'X' ? nome1 : nome2}` ;
      }
  }


  for (let i = 0; i < 3; i++) {
      if (matriz[0][i] === matriz[1][i] && matriz[1][i] === matriz[2][i] && matriz[0][i] !== '') {
          return `Vencedor: ${matriz[0][i] == 'X' ? nome1 : nome2}`;
      }
  }

 
  if (matriz[0][0] === matriz[1][1] && matriz[1][1] === matriz[2][2] && matriz[0][0] !== '') {
      return `Vencedor: ${matriz[0][0] == 'X' ? nome1 : nome2}`;
  }

 
  if (matriz[0][2] === matriz[1][1] && matriz[1][1] === matriz[2][0] && matriz[0][2] !== '') {
      return `Vencedor: ${matriz[0][2] == 'X' ? nome1 : nome2}`;
  }

  
  let empate = true;
  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          if (matriz[i][j] === '') {
              empate = false;
          }
      }
  }

  if (empate) {
      return "Empate!";
  }

  return "Sem vencedor";
}

function reiniciarJogo() {
  matriz = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
  ];
  jogadorAtual = 'X'; 
  jogoAtivo = true;
  document.getElementById('resultado').innerText = '';

  for (let i = 0; i < 9; i++) {
      document.getElementById(i).innerText = '';
  }
}
