//TROCA DE ABAS
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
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const toggleButton = document.getElementById("sdb");
  const sidebarButtons = document.querySelectorAll(".sidebar_button");

  toggleButton.addEventListener("click", function () {
    // Alternar a largura da sidebar
    sidebar.classList.toggle("small");

    // Alternar a classe btn-active em todos os botões da sidebar
    sidebarButtons.forEach((button) => {
      button.classList.toggle("btn-active");
    });
  });
});


// Função para carregar o conteúdo de um arquivo HTML em um elemento
function loadHTML(url, elementId, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById(elementId).innerHTML = this.responseText;
      if (callback) callback();
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

// Função para abrir o modal
function openModal(modalId) {
  document.getElementById(modalId).classList.remove("hide");
  document.getElementById("fade").classList.remove("hide");
}

// Função para fechar o modal
function closeModal(modalId) {
  document.getElementById(modalId).classList.add("hide");
  document.getElementById("fade").classList.add("hide");
}

// Carregar e exibir modal 1
document.getElementById("open-modal1").addEventListener("click", function() {
  loadHTML('modais/modal1.html', 'modal-container', function() {
    openModal('modal1');
    document.getElementById("close-modal1").addEventListener("click", function() {
      closeModal('modal1');
    });
  });
});

// Carregar e exibir modal 2
document.getElementById("open-modal2").addEventListener("click", function() {
  loadHTML('modais/modal2.html', 'modal-container', function() {
    openModal('modal2');
    document.getElementById("close-modal2").addEventListener("click", function() {
      closeModal('modal2');
    });
  });
});

// Carregar e exibir modal 3
document.getElementById("open-modal3").addEventListener("click", function() {
  loadHTML('modais/modal3.html', 'modal-container', function() {
    openModal('modal3');
    document.getElementById("close-modal3").addEventListener("click", function() {
      closeModal('modal3');
    });
  });
});
