// Responsável por buscar os botões
const btnInc = document.getElementById("incrementar");
const btnDec = document.getElementById("decrementar");
const contadorEl = document.getElementById("contador");

const input = document.getElementById("campoTexto");
const contadorCaracteres = document.getElementById("contadorCaracteres");
const paragrafosDiv = document.getElementById("paragrafos");

const tipoLista = document.getElementById("tipoLista");
const btnLista = document.getElementById("adicionarLista");
const listasDiv = document.getElementById("listas");

const btnReset = document.getElementById("resetar");

let contador = 0;

// Responsável pelos botões de incrementar/decrementar
btnInc.addEventListener("click", () => {
    contador++;
    contadorEl.textContent = contador;
});

btnDec.addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        contadorEl.textContent = contador;
    } else {
        alert("O contador já está em zero!");
    }
});

// Responsável pelo botão de contador de caracteres
input.addEventListener("input", () => {
    let texto = input.value.replace(/\s/g, "");
    contadorCaracteres.textContent = texto.length + " caracteres";
});

// Responsável pelo botão de salvar as palavras ao pressionar enter 
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && input.value.trim() !== "") {
        const p = document.createElement("p");
        p.textContent = input.value;
        paragrafosDiv.appendChild(p);

        input.value = "";
        contadorCaracteres.textContent = "0 caracteres";
    }
});

// Responsável pelo botão de adicionar as listas ordenadas/não ordenadas 
btnLista.addEventListener("click", () => {
    let tipo = tipoLista.value;

    let lista = document.createElement(tipo);

    for (let i = 1; i <= 3; i++) {
        let item = document.createElement("li");
        item.textContent = "Item " + i;
        lista.appendChild(item);
    }

    listasDiv.appendChild(lista);
});

// Responsável pelo botão de resetar 
btnReset.addEventListener("click", () => {
    contador = 0;
    contadorEl.textContent = "0";

    paragrafosDiv.innerHTML = "";
    listasDiv.innerHTML = "";

    input.value = "";
    contadorCaracteres.textContent = "0 caracteres";
});