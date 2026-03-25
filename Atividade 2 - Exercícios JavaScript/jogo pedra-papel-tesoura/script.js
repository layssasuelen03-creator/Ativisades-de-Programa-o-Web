function jogar() 
{

let opcoes = ["pedra", "papel", "tesoura"];

// escolha do usuário
let usuario = prompt("Escolha: pedra, papel ou tesoura").toLowerCase();

// escolha do computador
let computador = opcoes[Math.floor(Math.random() * 3)];

document.getElementById("usuario").innerHTML = "Usuário escolheu: " + usuario;
document.getElementById("computador").innerHTML = "Computador escolheu: " + computador;

let resultado = "";

if (usuario === computador)
{
    resultado = "Empate!";
}

else if (
(usuario === "pedra" && computador === "tesoura") ||
(usuario === "papel" && computador === "pedra") ||
(usuario === "tesoura" && computador === "papel")
) {
    resultado = "Você venceu!";
}

else if (
(usuario === "pedra" && computador === "papel") ||
(usuario === "papel" && computador === "tesoura") ||
(usuario === "tesoura" && computador === "pedra")
) {
    resultado = "Você perdeu!";
}

document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

}