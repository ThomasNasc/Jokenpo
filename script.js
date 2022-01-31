var regras = document.getElementsByClassName("regras")[0];
function mostraregras() {
  regras.style.display = "flex";
}
function fecharegras() {
  regras.style.display = "none";
}
var jogo = document.getElementsByClassName("jogo")[0];
var selecao = document.getElementsByClassName("gameplay")[0];
var test = document.getElementsByClassName("test")[0];
var opcao = document.getElementsByClassName("opcao")[0];
var pedra = document.getElementsByClassName("pedra")[0];
var tesoura = document.getElementsByClassName("tesoura")[0];
var papel = document.getElementsByClassName("papel")[0];
var test1 = document.getElementsByClassName("test1")[0];
var resultado = document.getElementsByClassName("result")[0]
var refs = [pedra, papel, tesoura];
var pontuacao = document.getElementsByClassName('pontuacao')[0]
var playAgain = document.getElementsByClassName('fim')[0]
var score = 0
function jogar(num) {

  jogo.style.display = "none";
  selecao.style.display = "flex";

  switch (num) {
    case pedra:
      test.innerHTML = pedra.outerHTML;
      test.value = pedra.value
      break;
    case papel:
      test.innerHTML = papel.outerHTML;
      test.value = papel.value
      break;
    case tesoura:
      test.innerHTML = tesoura.outerHTML;
      test.value = tesoura.value
    default:
      break;
  }

  var random = Math.floor(Math.random() * 3);
  var house = refs[random];
  test1.innerHTML = house.outerHTML;
  test1.value = house.value



// PARTIDA

setTimeout(() => {
  if(test.value == "pedra" && test1.value == "tesoura" || test.value == "tesoura" && test1.value == "papel"|| test.value == "papel" && test1.value == "pedra"){
    resultado.innerHTML = "YOU WIN"
    score += 1
    pontuacao.innerHTML = score
   }else if(test.value == "pedra" && test1.value == "papel" || test.value == "tesoura" && test1.value == "pedra"|| test.value == "papel" && test1.value == "tesoura"){
     resultado.innerHTML = "YOU LOSE"
   }else{
    resultado.innerHTML = "EMPATE"
   }
playAgain.style.display = "block"
}, 500);
}

function reset( ){
  jogo.style.display = "flex";
  selecao.style.display = "none";
  resultado.innerHTML = ""
  playAgain.style.display = "none"
}