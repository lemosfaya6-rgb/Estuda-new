const form = document.getElementById("workForm");
const result = document.getElementById("result");
const resultContent = document.getElementById("resultContent");
const newWork = document.getElementById("newWork");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const topic = data.get("topic").trim();
  const pages = data.get("pages");
  const level = data.get("level");
  const description = data.get("description").trim();

  const levelNames = {
    facil: "Fácil",
    medio: "Médio",
    avancado: "Avançado"
  };

  const safeTopic = escapeHtml(topic);
  const safeDescription = escapeHtml(description || "Sem orientações adicionais.");

  resultContent.innerHTML = `
    <div class="result-body">
      <div class="result-meta">Tema: <strong>${safeTopic}</strong> · ${pages} páginas · Linguagem ${levelNames[level]}</div>
      <h3>Introdução</h3>
      <p>Este é o espaço onde o conteúdo do trabalho sobre <strong>${safeTopic}</strong> será gerado pela inteligência artificial. A introdução apresentará o tema, sua relevância e o contexto da investigação.</p>
      <h3>Objetivos</h3>
      <p><strong>Objetivo geral:</strong> compreender e analisar os principais aspectos relacionados com ${safeTopic}.</p>
      <p><strong>Objetivos específicos:</strong> identificar conceitos, analisar informações relevantes e apresentar conclusões fundamentadas.</p>
      <h3>Orientações recebidas</h3>
      <p>${safeDescription}</p>
      <h3>Próxima etapa</h3>
      <p>A geração completa do trabalho, das referências e das perguntas de defesa será ligada ao motor de IA na próxima versão.</p>
    </div>
  `;

  result.classList.remove("hidden");
  result.scrollIntoView({ behavior: "smooth", block: "start" });
});

newWork.addEventListener("click", () => {
  result.classList.add("hidden");
  form.reset();
  document.getElementById("topic").focus();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
