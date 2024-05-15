let carta1 = cartaaleatoria()
let carta2 = cartaaleatoria()
let soma = carta1 + carta2
let ganhou = false 
let tanojogo = false
let mensagem = ""
let mensagemEL = document.getElementById("mensagemEL")
let somaEL = document.getElementById("somaEL")
let cartasEL = document.getElementById("cartasEL")
let cartas = [carta1,carta2]




function cartaaleatoria() {
   let numeroaleatorio = Math.floor(Math.random() * 13) + 1
   if (numeroaleatorio > 10) {
    return 10 }
    else if (numeroaleatorio === 1) {
        return 11
    }
    else {
        return numeroaleatorio
    }
    
}
function jogar() {
    
    carta1 = cartaaleatoria()
    carta2 = cartaaleatoria()
    soma = carta1 + carta2
    cartas = [carta1,carta2]
    ganhou = false
    tanojogo = true
    rejogar()
}


function rejogar() { 
   cartasEL.innerHTML = "cartas: "
    for (var i = 0; i < cartas.length; i++) {
        cartasEL.innerHTML += cartas[i] + " / "
    }
    somaEL.textContent = "soma: " + soma
if (soma < 21) {
    mensagem = "voce quer pegar uma nova carta??"
    document.getElementById("botaojogar").textContent = "NOVO JOGO"
} 
else if (soma === 21) {
    mensagem = "AEE TU GANHOU!"
    ganhou = true
    document.getElementById("botaojogar").textContent = "REJOGAR"
}   
else{
    mensagem = "ixi, passou de 21, fora do jogo amigo."
    tanojogo = false
    document.getElementById("botaojogar").textContent = "REJOGAR"
}
    
    mensagemEL.textContent = mensagem

}

function nova() {
    if (tanojogo === true && ganhou === false){
    let carta = cartaaleatoria()
    soma += carta
    cartas.push(carta)
    rejogar()}
}
