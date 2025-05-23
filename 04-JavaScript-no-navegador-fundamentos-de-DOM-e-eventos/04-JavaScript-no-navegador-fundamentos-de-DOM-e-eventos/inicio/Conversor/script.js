"use strict"; // Define o modo estrito para evitar erros comuns.

// Dry (don´t repeat yourself / não repita você mesmo)

// Capturar os elementos
const historyText = document.getElementById("historyText");
const result = document.getElementById("result");
const convertButton = document.getElementById("convert-button");
const clearButton = document.getElementById("clear-button");
const unitSelector = document.getElementById("unit-selector");

// Mapear o click do botão de limpeza
clearButton.addEventListener("click", function () {
  historyText.innerText = "";
  result.innerText = "";
  document.getElementById("value-to-convert").value = "";
  unitSelector.options.selectedIndex = 0;
});

// Mapear o evento do Click
convertButton.addEventListener("click", function () {
  const historyText = document.getElementById("historyText");
  const result = document.getElementById("result");
  const valueToConvert = parseFloat(
    document.getElementById("value-to-convert").value
  );

  if (valueToConvert === 0 || valueToConvert === "" || isNaN(valueToConvert)) {
    result.textContent = "Informe um valor diferente de 0";
    result.style.color = "red";
    result.classList.add(".normalMessage");
    result.classList.remove(".errorMessage");
    refreshScreen(valueToConvert, calculated);
    return;
  }

  function refreshScreen(valueToConvert, calculated, unit, unitOrigin) {
    result.classList.remove(".errorMessage");
    result.classList.add(".normalMessage");
    result.style.color = "blue";

    result.textContent = `${valueToConvert} ${unitOrigin} é igual a ${calculated.toFixed(
      2
    )} ${unit}`;

    historyText.innerText = historyText.innerText + "\n" + result.textContent;
  }

  let calculated;

  switch (unitSelector.value) {
    case "cm":
      // lógica caso o valor seja CM
      calculated = valueToConvert * 0.393701;
      refreshScreen(valueToConvert, calculated, "polegadas", unitSelector.value);
      break;

    case "in":
      // lógica caso o valor seja IN
      calculated = valueToConvert * 2.54;
      refreshScreen(valueToConvert, calculated, "centímetros", unitSelector.value);
      break;

    case "m":
      // lógica caso o valor seja M
      calculated = valueToConvert * 39.3701;
      refreshScreen(valueToConvert, calculated, "polegadas", unitSelector.value);
      break;

    case "ft":
      // lógica caso o valor seja FT
      calculated = valueToConvert * 30.48;
      refreshScreen(valueToConvert, calculated, "centímetros", unitSelector.value);
      break;

    default:
      // Nenhuma das opções
      result.textContent = `Selecione uma opção válida`;
  }
});
