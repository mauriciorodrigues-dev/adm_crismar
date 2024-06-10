// TROCA DE ABAS
document.addEventListener("DOMContentLoaded", function () {
  // Mapeie os botões para suas seções correspondentes
  const buttonSectionMap = {
    btn_home: "sct_home",
    btn_catequizando: "sct_catequizando",
    btn_encontro: "sct_encontro",
    btn_turma: "sct_turma",
    btn_presenca: "sct_presenca",
    btn_catequista: "sct_catequista",
    btn_biblioteca: "sct_biblioteca",
    btn_aniversariantes: "sct_aniversariantes",
    btn_dashboard: "sct_dashboard",
  };

  // Função para alternar seções
  function switchSection(activeButtonId) {
    // Remover a classe active de todos os botões e seções
    document
      .querySelectorAll(".sidebar_button")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(".section")
      .forEach((sec) => sec.classList.remove("active"));

    // Adicionar a classe active ao botão e seção ativos
    document.getElementById(activeButtonId).classList.add("active");
    document
      .getElementById(buttonSectionMap[activeButtonId])
      .classList.add("active");
  }

  // Adicionar event listeners a todos os botões
  Object.keys(buttonSectionMap).forEach((buttonId) => {
    document.getElementById(buttonId).addEventListener("click", function () {
      switchSection(buttonId);
    });
  });

  // Exibir a primeira seção por padrão
  switchSection("btn_home");
});

// SAUDAÇÃO

document.addEventListener("DOMContentLoaded", function () {
  function atualizarSaudacao() {
    const saudacaoElement = document.getElementById("saudacao");
    const horaAtual = new Date().getHours();
    let saudacao = "";

    if (horaAtual >= 6 && horaAtual < 12) {
      saudacao = "bom dia!";
    } else if (horaAtual >= 12 && horaAtual < 18) {
      saudacao = "boa tarde!";
    } else {
      saudacao = "boa noite!";
    }

    saudacaoElement.textContent = saudacao;
  }

  atualizarSaudacao(); // Atualiza a saudação ao carregar a página
});

// Sidebar
document.addEventListener("DOMContentLoaded", function() {
  const sidebar = document.getElementById("sidebar");
  const toggleButton = document.getElementById("sdb");
  const sidebarButtons = document.querySelectorAll(".sidebar_button");

  toggleButton.addEventListener("click", function() {
      // Alternar a largura da sidebar
      sidebar.classList.toggle("small");

      // Alternar a classe btn-active em todos os botões da sidebar
      sidebarButtons.forEach(button => {
          button.classList.toggle("btn-active");
      });
  });
});

