const cards = document.querySelectorAll('.card-body');

// Função para verificar se um elemento está visível na viewport
const isVisible = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
};

// Função para adicionar/remover classe "show" quando o card está visível
const handleScroll = () => {
    cards.forEach((card) => {
        if (isVisible(card)) {
            card.classList.add('show');
        } else {
            card.classList.remove('show');  // Remove a classe "show" quando o card sai da tela
        }
    });
};

// Adiciona evento de scroll
window.addEventListener('scroll', handleScroll);

// Seleciona elementos
const modal = document.getElementById("modal");
const abrirModal = document.getElementById("abrir-modal");
const fecharModal = document.getElementById("fechar-modal");
const video = document.getElementById("video");

// Abre o modal e reproduz o vídeo
abrirModal.addEventListener("click", () => {
  modal.style.display = "flex"; // Mostra o modal
  video.play(); // Inicia a reprodução do vídeo
});

// Fecha o modal e pausa o vídeo
fecharModal.addEventListener("click", () => {
  modal.style.display = "none"; // Oculta o modal
  video.pause(); // Pausa o vídeo
  video.currentTime = 0; // Reinicia o vídeo
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    video.pause(); // Pausa o vídeo
    video.currentTime = 0; // Reinicia o vídeo
  }
});
