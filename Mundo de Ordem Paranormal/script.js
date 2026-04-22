
const PERSONAGENS = [
  {
    id: "milo", nome: "Milo Castelo", cor: "#4a90a4",
    desc: "Pescador criado pelas marés e pela calma do oceano, Milo tem um lado emocional intenso que esconde sob a fachada tranquila. Seu instinto o guia onde a lógica falha — e na Ilha das Sombras, esse instinto vale mais do que qualquer arma.",
    tracos: ["Intuitivo", "Reservado", "Corajoso", "Leal"]
  },
  {
    id: "amelie", nome: "Amelie Florence", cor: "#a0725a",
    desc: "Filha de um professor de arte e irmã mais nova de Olivier, Amelie carrega consigo uma sensibilidade ao Além que ninguém consegue explicar. Ela sente o que os outros ignoram — e na ilha, isso a torna a mais perigosa de todos.",
    tracos: ["Sensitiva", "Empática", "Determinada", "Misteriosa"]
  },
  {
    id: "olivier", nome: "Olivier Florence", cor: "#6a7a5a",
    desc: "Universitário metódico e analítico, Olivier nunca acreditou em coisas que não pudesse provar. A ilha o obrigou a revisar cada certeza. Agora ele usa sua mente afiada para decifrar o que nenhum livro preparou a humanidade para enfrentar.",
    tracos: ["Analítico", "Metódico", "Curioso", "Cético"]
  },
  {
    id: "barbara", nome: "Barbara Lima", cor: "#a04060",
    desc: "Jardineira que cresceu em contato com a terra e seus ciclos, Barbara sabe que a natureza tem regras próprias — e que quebrá-las tem um preço. Destemida e pragmática, ela é a primeira a agir e a última a recuar.",
    tracos: ["Destemida", "Prática", "Decisiva", "Protetora"]
  }
];


const PERGUNTAS = [
  {
    texto: "Para começar sua jornada para derrotar uma certa criatura paranormal, você precisa escolher uma classe. Qual mais se encaixa com você?",
    opcoes: [
      { texto: "Combatente — Linha de frente, habilidades focadas em combate corpo a corpo e manuseio de armas.",        pontos: { barbara: 3, milo: 2, olivier: 1, amelie: 1 } },
      { texto: "Especialista — Agente investigativo: analisar documentos, interrogar, descobrir segredos.",              pontos: { olivier: 3, barbara: 2, milo: 1, amelie: 1 } },
      { texto: "Ocultista — Estudioso do Paranormal: estudar, entender o outro lado, manusear e criar rituais.",         pontos: { amelie: 3, milo: 2, olivier: 1, barbara: 1 } }
    ]
  },
  {
    texto: "Todos têm uma origem antes de tudo dar errado. Qual destas origens mais se encaixaria com você?",
    opcoes: [
      { texto: "Jardineira — Cuidava de plantas e as vendia nas proximidades junto de sua mãe.",                         pontos: { barbara: 3, amelie: 2, olivier: 1, milo: 1 } },
      { texto: "Pescador — Ajudava o pai para alimentar a ilha e vender os peixes.",                                     pontos: { milo: 3, barbara: 2, olivier: 1, amelie: 1 } },
      { texto: "Universitário — Vida tranquila até que o pai é contratado para analisar pinturas em uma ilha distante.", pontos: { olivier: 3, amelie: 2, milo: 1, barbara: 1 } }
    ]
  },
  {
    texto: "Qual destas personalidades mais se encaixa em você?",
    opcoes: [
      { texto: "Extrovertido(a), bem animado(a), alegra o grupo e sempre entra na primeira briga.",                              pontos: { amelie: 3, barbara: 2, milo: 1, olivier: 1 } },
      { texto: "Extrovertido(a), mas sempre calmo(a) — apoio emocional do grupo, mas defende os amigos com unhas e dentes.",     pontos: { milo: 3, barbara: 2, olivier: 1, amelie: 1 } },
      { texto: "Introvertido(a), reservado(a), com dificuldades de socialização, mas com um bom coração.",                      pontos: { olivier: 3, milo: 2, barbara: 1, amelie: 1 } }
    ]
  },
  {
    texto: "Ao chegar na ilha, é perceptível que algo estranho está acontecendo. O que você faz primeiro?",
    opcoes: [
      { texto: "Caminha observando cada detalhe: marcas no chão, construções, qualquer padrão.",  pontos: { olivier: 3, amelie: 2, barbara: 2, milo: 1 } },
      { texto: "Se deixa levar pela sensação do lugar, tentando sentir o que está acontecendo.",  pontos: { amelie: 3, milo: 2, barbara: 1, olivier: 1 } },
      { texto: "Explora imediatamente, entrando em trilhas e lugares desconhecidos.",             pontos: { milo: 3, barbara: 2, amelie: 1, olivier: 1 } }
    ]
  },
  {
    texto: "Você descobre que a ilha pode ser mais perigosa do que parecia. O que passa pela sua cabeça?",
    opcoes: [
      { texto: '"Precisamos de um plano antes que seja tarde."', pontos: { olivier: 3, barbara: 2, amelie: 1, milo: 1 } },
      { texto: '"Preciso garantir que todos estejam bem."',      pontos: { amelie: 3, barbara: 2, olivier: 1, milo: 1 } },
      { texto: '"Agora ficou interessante de verdade."',         pontos: { milo: 3, amelie: 2, barbara: 1, olivier: 1 } }
    ]
  },
  {
    texto: "Enquanto exploram, vocês encontram um símbolo estranho entalhado em uma pedra, antigo, detalhado… e inquietante. Como você reage?",
    opcoes: [
      { texto: "Se aproxima com cuidado, analisando cada detalhe do símbolo.",            pontos: { olivier: 3, barbara: 2, amelie: 1, milo: 1 } },
      { texto: "Sente que aquilo significa algo maior, como uma mensagem do outro lado.", pontos: { amelie: 3, olivier: 2, barbara: 1, milo: 1 } },
      { texto: "Toca no símbolo para ver se algo acontece.",                              pontos: { milo: 3, barbara: 2, amelie: 1, olivier: 1 } }
    ]
  },
  {
    texto: "Com o passar do tempo, o medo começa a afetar as decisões. Uma discussão surge e ninguém parece concordar. A situação exige uma postura. Você…",
    opcoes: [
      { texto: "Tenta entender cada lado e diminuir o conflito.",     pontos: { amelie: 3, barbara: 2, olivier: 1, milo: 1 } },
      { texto: "Assume a responsabilidade e toma uma decisão clara.", pontos: { barbara: 3, olivier: 2, milo: 1, amelie: 1 } },
      { texto: "Se afasta da discussão e age por conta própria.",     pontos: { milo: 3, barbara: 2, amelie: 1, olivier: 1 } }
    ]
  },
  {
    texto: "O grupo encontra uma estrutura escondida na ilha. Ao entrar, o ar fica mais frio, mais pesado. Sua reação é…",
    opcoes: [
      { texto: "Observar tudo antes de interagir com qualquer elemento.",               pontos: { olivier: 3, barbara: 2, amelie: 1, milo: 1 } },
      { texto: "Tentar interpretar o significado dos símbolos nas paredes.",            pontos: { amelie: 3, olivier: 2, barbara: 1, milo: 1 } },
      { texto: "Interagir diretamente com o ambiente para entender como ele funciona.", pontos: { milo: 3, barbara: 2, olivier: 1, amelie: 1 } }
    ]
  },
  {
    texto: "Vocês precisam passar a noite na ilha. Como você se prepara para dormir?",
    opcoes: [
      { texto: "Monta um sistema de vigilância em turnos e verifica todas as saídas.",      pontos: { barbara: 3, olivier: 2, milo: 1, amelie: 1 } },
      { texto: "Fica acordado(a) ouvindo os sons da ilha, sentindo se algo vai acontecer.", pontos: { amelie: 3, milo: 2, olivier: 1, barbara: 1 } },
      { texto: "Dorme leve, mas com algo à mão — pronto(a) para reagir ao menor sinal.",   pontos: { milo: 3, barbara: 2, amelie: 1, olivier: 1 } }
    ]
  },
  {
    texto: "No momento decisivo, a criatura está diante de vocês. Qual é a sua postura final?",
    opcoes: [
      { texto: "Enfrenta de frente, protegendo quem está atrás de você.",           pontos: { barbara: 3, milo: 2, amelie: 1, olivier: 1 } },
      { texto: "Usa o que aprendeu sobre ela para encontrar sua fraqueza.",          pontos: { amelie: 3, olivier: 2, milo: 1, barbara: 1 } },
      { texto: "Elabora um plano rápido e coordena o grupo para agir em conjunto.", pontos: { olivier: 3, barbara: 2, milo: 1, amelie: 1 } }
    ]
  }
];


class Quiz {
  constructor(perguntas, personagens) {
    this.perguntas        = perguntas;
    this.personagens      = personagens;
    this.perguntaAtual    = 0;
    this.opcaoSelecionada = null;
    this.pontuacoes       = {};

    this.elProgressBar  = document.getElementById("progress-bar");
    this.elProgressText = document.getElementById("progress-text");
    this.elQuestionNum  = document.getElementById("question-number");
    this.elQuestionText = document.getElementById("question-text");
    this.elOptionsList  = document.getElementById("options-list");
    this.elBtnNext      = document.getElementById("btn-next");
    this.elCard         = document.getElementById("question-card");
  }

  iniciar() {
    this.perguntaAtual    = 0;
    this.opcaoSelecionada = null;
    this.personagens.forEach(p => { this.pontuacoes[p.id] = 0; });
    this._renderizarPergunta();
  }

  _renderizarPergunta() {
    const pergunta = this.perguntas[this.perguntaAtual];
    const num      = this.perguntaAtual + 1;
    const total    = this.perguntas.length;

    this.elProgressBar.style.width  = `${(num / total) * 100}%`;
    this.elProgressText.textContent = `${num} / ${total}`;
    this.elQuestionNum.textContent  = `Pergunta ${num < 10 ? "0" + num : num}`;
    this.elQuestionText.textContent = pergunta.texto;

    this.elOptionsList.innerHTML = "";
    this.opcaoSelecionada        = null;
    this.elBtnNext.disabled      = true;

    ["A", "B", "C"].forEach((letra, i) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerHTML = `<span class="option-letter">${letra}</span><span class="option-text">${pergunta.opcoes[i].texto}</span>`;
      btn.addEventListener("click", () => this._selecionarOpcao(i));
      this.elOptionsList.appendChild(btn);
    });

    this.elCard.classList.remove("animating");
    void this.elCard.offsetWidth;
    this.elCard.classList.add("animating");
  }

  _selecionarOpcao(indice) {
    this.opcaoSelecionada = indice;
    this.elOptionsList.querySelectorAll(".option-btn").forEach((b, i) => {
      b.classList.toggle("selected", i === indice);
    });
    this.elBtnNext.disabled = false;
  }

  avancar() {
    if (this.opcaoSelecionada === null) return;

    const pontos = this.perguntas[this.perguntaAtual].opcoes[this.opcaoSelecionada].pontos;
    for (const id in pontos) {
      if (Object.prototype.hasOwnProperty.call(pontos, id)) {
        this.pontuacoes[id] += pontos[id];
      }
    }

    if (++this.perguntaAtual >= this.perguntas.length) {
      this._calcularResultado();
    } else {
      this._renderizarPergunta();
    }
  }

  _calcularResultado() {
    let maiorPontuacao = -1, vencedorId = null;

    for (const id in this.pontuacoes) {
      if (this.pontuacoes[id] > maiorPontuacao) {
        maiorPontuacao = this.pontuacoes[id];
        vencedorId     = id;
      }
    }

    document.dispatchEvent(new CustomEvent("quizFinalizado", {
      detail: {
        vencedor:   this.personagens.find(p => p.id === vencedorId),
        pontuacoes: { ...this.pontuacoes }
      }
    }));
  }
}


class ResultadoRenderer {
  constructor(personagens) {
    this.personagens = personagens;
    this.elName   = document.getElementById("result-name");
    this.elImg    = document.getElementById("result-img");
    this.elDesc   = document.getElementById("result-desc");
    this.elTraits = document.getElementById("result-traits");
    this.elBars   = document.getElementById("score-bars");
  }

  renderizar(vencedor, pontuacoes) {
    this.elName.textContent = vencedor.nome;
    this.elDesc.textContent = vencedor.desc;

    const imagens = { amelie: "img/amelie.jpeg", barbara: "img/barbara.jpeg", olivier: "img/oliver.jpeg", milo: "img/milo.jpeg" };
    this.elImg.src = imagens[vencedor.id] || "img/milo.jpeg";
    this.elImg.alt = vencedor.nome;

    this.elTraits.innerHTML = "";
    vencedor.tracos.forEach(traco => {
      const tag = document.createElement("span");
      tag.className   = "trait-tag";
      tag.textContent = traco;
      this.elTraits.appendChild(tag);
    });

    this._renderizarBarras(vencedor, pontuacoes);
  }

  _renderizarBarras(vencedor, pontuacoes) {
    this.elBars.innerHTML = "";
    const maxVal = Math.max(...Object.values(pontuacoes));

    [...this.personagens]
      .sort((a, b) => pontuacoes[b.id] - pontuacoes[a.id])
      .forEach(p => {
        const pts  = pontuacoes[p.id];
        const pct  = maxVal > 0 ? (pts / maxVal) * 100 : 0;
        const item = document.createElement("div");
        item.className = `score-item${p.id === vencedor.id ? " winner" : ""}`;
        item.innerHTML = `
          <span class="score-name">${p.nome.split(" ")[0]}</span>
          <div class="score-track"><div class="score-fill" data-width="${pct}" style="background:${p.cor};"></div></div>
          <span class="score-val">${pts}pts</span>`;
        this.elBars.appendChild(item);
      });

    requestAnimationFrame(() => {
      document.querySelectorAll(".score-fill").forEach(bar => {
        bar.style.width = bar.dataset.width + "%";
      });
    });
  }
}


const TelaManager = {
  _telas: {
    welcome: document.getElementById("screen-welcome"),
    quiz:    document.getElementById("screen-quiz"),
    result:  document.getElementById("screen-result")
  },
  mostrar(id) {
    for (const key in this._telas) this._telas[key].classList.remove("active");
    const tela = this._telas[id];
    if (tela) { tela.classList.add("active"); tela.scrollTop = 0; }
  }
};


document.addEventListener("DOMContentLoaded", () => {
  const quiz              = new Quiz(PERGUNTAS, PERSONAGENS);
  const resultadoRenderer = new ResultadoRenderer(PERSONAGENS);

  document.getElementById("btn-start").addEventListener("click", () => {
    quiz.iniciar();
    TelaManager.mostrar("quiz");
  });

  document.getElementById("btn-next").addEventListener("click", () => quiz.avancar());

  document.addEventListener("quizFinalizado", ({ detail: { vencedor, pontuacoes } }) => {
    resultadoRenderer.renderizar(vencedor, pontuacoes);
    TelaManager.mostrar("result");
  });

  document.getElementById("btn-restart").addEventListener("click", () => {
    quiz.iniciar();
    TelaManager.mostrar("quiz");
  });
});