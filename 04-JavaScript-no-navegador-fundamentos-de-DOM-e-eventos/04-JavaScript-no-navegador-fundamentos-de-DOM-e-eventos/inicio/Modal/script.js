"use strict"; // Define o modo estrito para evitar erros comuns.

// Selecionar os elementos

const openModalBtn1 = document.getElementById("openModalBtn1");
const openModalBtn2 = document.getElementById("openModalBtn2");
const modal = document.getElementById("myModal");
const modalText = document.getElementById("modalText");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const closeBtn = document.getElementsByClassName("close")[0];
const overlay = document.getElementById("overlay");
const content = document.getElementById("content");

function showModal(textToShow) {
  console.log("botão clicado");
  modal.style.display = "block";
  overlay.style.display = "block";
  content.style.filter = "blur(2px)";
  modalText.innerText = textToShow;
}

// Evento de clique para abrir o botão
openModalBtn1.addEventListener("click", function () {
  showModal("Este é o modal 1.\n Pressione Sim ou Não");
});

// Evento de clique para abrir o botão
openModalBtn2.addEventListener("click", function () {
  showModal("Este é o modal 2.\n Pressione Sim ou Não");
});

function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
  content.style.filter = "blur(0px)";
}

// Evento do botão fechar
closeBtn.addEventListener("click", function() {
  console.log("Botão fechar foi clicado");
  closeModal();
});

// Evento do click do Sim
yesBtn.addEventListener("click", function() {
  console.log("Botão Sim foi pressionado");
  closeModal();
});

// Evento do click do Não
noBtn.addEventListener("click", function() {
  console.log("Botão Não foi pressionado");
  closeModal();
});

// Função para pegar tecla pressionada
window.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && modal.style.display === "block"){
         console.log("Esc pressionado");
         closeModal();
    }
});
