let numeroSecreto = Math.floor(Math.random() * 20) + 1;
let tentativa = 0;

while (tentativa != numeroSecreto) 
    {
    tentativa = Number(prompt("Adivinhe o número entre 1 e 20:"));

    if (tentativa > numeroSecreto) 
        {
        console.log("O número é MENOR.");
    } 
    else if (tentativa < numeroSecreto) 
        {
        console.log("O número é MAIOR.");
    } 
    else {
        console.log("Parabéns! Você acertou o número.");
    }
}