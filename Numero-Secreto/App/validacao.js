
function verificaSeoChutePossuiUmValorValido(chute) {
  const numero = +chute

  if(chuteForInvalido(numero)) {
    elementoChute.innerHTML +='<div>Valor Inválido</div>'
  }
  if(numeroFormaioroumenor(numero)) {
    elementoChute.innerHTML += `
    <div> Valor invalido: Fale um número entre ${menorValor} e ${maiorValor} </div>`
    return
  }
  if (numero === numeroSecreto) {
    document.body.innerHTML = `
     <h2>Você acertou! </h2>
     <h3>o número secreto era ${numeroSecreto}</h3>

     <botton id="jogar-novamente" class="btn-jogar"> Jogar Novamente </botton> 
    `
    
  }
  else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div> O numero secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i> </div>
    `
  }
  else {
    elementoChute.innerHTML += `
    <div> O numero secreto é Maior <i class="fa-sharp fa-solid fa-arrow-up"></i> </div>
    `
  }

}


function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}
function numeroFormaioroumenor(numero) {
    return numero > maiorValor || numero < menorValor
}
document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})