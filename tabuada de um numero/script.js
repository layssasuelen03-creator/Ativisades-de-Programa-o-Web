function gerarTabuada()
{

let numero = prompt("Digite um número para ver a tabuada:");

let resultado = "";

for(let i = 1; i <= 10; i++)
{
    resultado += numero + " x " + i + " = " + (numero * i) + "<br>";
}

document.getElementById("titulo").innerHTML = "Tabuada do " + numero;

document.getElementById("resultado").innerHTML = resultado;

}