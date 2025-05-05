"use strict"; // Define o modo estrito para evitar erros comuns.

const meuBotao = document.getElementById("convert-button");
const result = document.getElementById("result");
console.log(meuBotao.textContent);

// Adicionar evento de alerta quando o mouse passar por cima do botão
meuBotao.addEventListener("mouseover", 
    function () {
  result.textContent = "Mouse por cima";
});

// Adicionar evento de alerta quando o mouse sair de cima do botão
meuBotao.addEventListener("mouseout", 
    function () {
  result.textContent = "";
});
