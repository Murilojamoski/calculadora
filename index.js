let numero1 = Number(prompt("numero 1"))
let numero2 = Number(prompt("numero 2"))
let resultado = 
document.getElementById("numero1id").textContent = numero1
document.getElementById("numero2id").textContent = numero2



function mais() {
 resultado = numero1 + numero2
 document.getElementById("resultado").textContent += resultado + "  /  "
}

function menos() {
    resultado = numero1 - numero2
    document.getElementById("resultado").textContent += resultado + "  /  "
}

function vezes() {
    resultado = numero1 * numero2
    document.getElementById("resultado").textContent += resultado + "  /  "
}

function divisao() {
    resultado = numero1 / numero2
    document.getElementById("resultado").textContent += resultado + "  /  "

}