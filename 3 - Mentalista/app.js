var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou";
    console.log("acertou");
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
    console.log("Você deve digitar um número de 0 a 10");
  } else
    elementoResultado.innerHTML =
      "Você errou, o número secreto era " + numeroSecreto;
  console.log("errou");
}

/** 1 = ATRIBUIÇÃO
 * 2 == COMPARAÇÃO
 * 
 * Math.random() sorteia um numero aleatorio entre 0 e 1
 * parseInt(Math.random()*n) sorteia um numero aleatorio, multiplica por n e arredonda para inteiro
 */