const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Armazenamento em memória
let feedbacks = [];
let nextId = 1;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ─── Helper: lê um template e substitui variáveis {{VAR}} ───────────────
function renderTemplate(arquivo, variables = {}) {
  let html = fs.readFileSync(path.join(__dirname, 'views', arquivo), 'utf-8');
  for (const [key, value] of Object.entries(variables)) {
    html = html.replaceAll(`{{${key}}}`, value ?? '');
  }
  return html;
}

// ─── Rotas ───────────────────────────────────────────────────────────────

// GET / — Exibe o formulário (index.html)
app.get('/', (req, res) => {
  res.send(renderTemplate('index.html'));
});

// POST /feedbacks/enviar — Armazena o feedback e redireciona
app.post('/feedbacks/enviar', (req, res) => {
  const { nome, comentario } = req.body;
  if (nome && comentario) {
    feedbacks.push({
      id: nextId++,
      nome: nome.trim(),
      comentario: comentario.trim(),
    });
  }
  res.redirect('/feedbacks/lista');
});

// GET /feedbacks/lista — Exibe todos os feedbacks (lista.html)
app.get('/feedbacks/lista', (req, res) => {
  const listaHTML = feedbacks.length === 0
    ? `<div class="empty-state">
        <span class="icon">💬</span>
        <h3>Nenhum feedback ainda</h3>
        <p>Seja o primeiro a compartilhar sua opinião!</p>
        <a href="/">Enviar feedback →</a>
       </div>`
    : feedbacks.map(fb => `
        <div class="feedback-item">
          <div class="feedback-body">
            <div class="feedback-author">
              <span class="author-avatar">${fb.nome.charAt(0).toUpperCase()}</span>
              ${fb.nome}
            </div>
            <div class="feedback-comment">${fb.comentario}</div>
          </div>
          <form action="/feedbacks/remover" method="POST" style="flex-shrink:0">
            <input type="hidden" name="id" value="${fb.id}">
            <button type="submit" class="btn btn-danger">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6l-1 14H6L5 6"/>
                <path d="M10 11v6"/><path d="M14 11v6"/>
                <path d="M9 6V4h6v2"/>
              </svg>
              Remover
            </button>
          </form>
        </div>`
      ).join('');

  const count = feedbacks.length;
  const plural = count !== 1;

  res.send(renderTemplate('lista.html', {
    COUNT_LABEL: `<strong>${count}</strong> feedback${plural ? 's' : ''} registrado${plural ? 's' : ''}`,
    FEEDBACKS_HTML: listaHTML,
  }));
});

// POST /feedbacks/remover — Remove o feedback e redireciona
app.post('/feedbacks/remover', (req, res) => {
  const id = parseInt(req.body.id, 10);
  feedbacks = feedbacks.filter(fb => fb.id !== id);
  res.redirect('/feedbacks/lista');
});

// ─── Start ───────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});