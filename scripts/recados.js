const form = document.getElementById("recado-form");
const nomeInput = document.getElementById("nome");
const mensagemInput = document.getElementById("mensagem-recado");
const muralList = document.getElementById("mural-list");
const characterCount = document.getElementById("character-count");

// contador de caracteres
mensagemInput.addEventListener("input", () => {
  characterCount.textContent = mensagemInput.value.length;
});

// carregar recados
const recados = JSON.parse(localStorage.getItem("recados")) || [];

function renderizarRecados() {
  muralList.innerHTML = "";
  if (recados.length === 0) {
    muralList.innerHTML = `
      <div class="mural-empty">
        <i class="fa-regular fa-heart"></i>
        <p>
          Seja a primeira pessoa a deixar
          um recado para Taís & Ângelo.
        </p>
      </div>
    `;
    return;
  }

  // mais recentes primeiro
  [...recados].reverse().forEach((recado) => {
    const card = document.createElement("article");
    card.classList.add("recado-card");
    card.innerHTML = `
      <div class="recado-icon">
        <i class="fa-regular fa-heart"></i>
      </div>
      <p class="recado-message">
        “${escapeHTML(recado.mensagem)}”
      </p>
      <div class="recado-author">
        <span class="recado-line"></span>
        <strong>
          ${escapeHTML(recado.nome)}
        </strong>
      </div>
    `;
    muralList.appendChild(card);
  });
}

// enviar recado
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = nomeInput.value.trim();
  const mensagem = mensagemInput.value.trim();
  if (!nome || !mensagem) {
    return;
  }

  const novoRecado = {
    nome,
    mensagem,
    data: new Date().toISOString(),
  };
  recados.push(novoRecado);
  localStorage.setItem("recados", JSON.stringify(recados));
  renderizarRecados();
  form.reset();
  characterCount.textContent = "0";
  document.getElementById("mural").scrollIntoView({
    behavior: "smooth",
  });
});

// segurança do texto

// evita que html seja inserido pelo formulário

function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

renderizarRecados();
