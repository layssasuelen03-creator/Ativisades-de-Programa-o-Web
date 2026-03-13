function calcularSerie(){

let n = prompt("Digite a quantidade de termos:");

let numero = "";
let soma = 0;
let serie = "";

for(let i = 1; i <= n; i++){

numero += "1";
soma += Number(numero);

if(i < n){
serie += numero + " + ";
}else{
serie += numero;
}

}

document.getElementById("termos").innerHTML = "Quantidade de termos: " + n;

document.getElementById("serie").innerHTML = "Série: " + serie;

document.getElementById("soma").innerHTML = "A soma é: " + soma;

}