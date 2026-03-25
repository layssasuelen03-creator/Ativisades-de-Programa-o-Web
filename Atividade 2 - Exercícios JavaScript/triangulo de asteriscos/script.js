function desenharTriangulo()
{

let numeroLinhas = prompt("Digite o número de linhas do triângulo:");

let resultado = "";

for(let i = 1; i <= numeroLinhas; i++)
{

    let estrelas = "";

for(let j = 1; j <= i; j++)
    {
        estrelas += "*";
    }

resultado += estrelas + "<br>";

}

document.getElementById("linhas").innerHTML = "Número de linhas: " + numeroLinhas;

document.getElementById("resultado").innerHTML = resultado;

}