"use strict"; // Define o modo estrito para evitar erros comuns.

// Eventos
const convertButton = document.getElementById("convert-button");

// Mapear o evento do Click
convertButton.addEventListener("click", function () {
  const result = document.getElementById("result");
  const valueToConvert = parseFloat(
    document.getElementById("value-to-convert").value
  );

  const unitSelector = document.getElementById("unit-selector").value;

  let calculated;

  switch (unitSelector) {
    case "cm":
      // lógica caso o valor seja CM
      calculated = valueToConvert * 0.393701;
      result.textContent = `${valueToConvert} cm é igual a ${calculated.toFixed(2)} polegadas`
      break;

    case "in":
      // lógica caso o valor seja IN
      calculated = valueToConvert * 2.54;
      result.textContent = `${valueToConvert} in é igual a ${calculated.toFixed(2)} centímetos`
      break;

    case "m":
      // lógica caso o valor seja M
      calculated = valueToConvert * 39.3701;
      result.textContent = `${valueToConvert} m é igual a ${calculated.toFixed(2)} polegadas`
      break;

    case "ft":
      // lógica caso o valor seja FT
      calculated = valueToConvert * 30.48;
      result.textContent = `${valueToConvert} ft é igual a ${calculated.toFixed(2)} centímetos`
      break;

    default:
      // Nenhuma das opções
  }
});
