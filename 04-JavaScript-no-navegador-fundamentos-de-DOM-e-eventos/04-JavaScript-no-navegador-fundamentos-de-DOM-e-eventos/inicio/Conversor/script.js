"use strict"; // Define o modo estrito para evitar erros comuns.

// Eventos
const convertButton = document.getElementById("convert-button");

// Mapear o evento do Click
convertButton.addEventListener("click", function () {
  const historyText = document.getElementById("historyText");
  const result = document.getElementById("result");
  const valueToConvert = parseFloat(
    document.getElementById("value-to-convert").value
  );

  const unitSelector = document.getElementById("unit-selector").value;

  if (valueToConvert === 0 || valueToConvert === "" || isNaN(valueToConvert)){
    result.textContent = "Informe um valor diferente de 0";
    result.style.backgroundColor = "red";
    result.style.color = "white";
    result.classList.remove(".blueMessage");
    result.classList.add(".redMessage");
    return;
  }

  let calculated;

  switch (unitSelector) {
    case "cm":
      // lógica caso o valor seja CM
      calculated = valueToConvert * 0.393701;
      result.textContent = `${valueToConvert} cm é igual a ${calculated.toFixed(2)} polegadas`;
      result.style.color = "blue";
      result.classList.remove(".redMessage");
      result.classList.add(".blueMessage");

      historyText.innerText = historyText.innerText + "\n" + result.textContent;
      break;

    case "in":
      // lógica caso o valor seja IN
      calculated = valueToConvert * 2.54;
      result.textContent = `${valueToConvert} in é igual a ${calculated.toFixed(2)} centímetos`;  
      
      historyText.innerText = historyText.innerText + "\n" + result.textContent;
      break;

    case "m":
      // lógica caso o valor seja M
      calculated = valueToConvert * 39.3701;
      result.textContent = `${valueToConvert} m é igual a ${calculated.toFixed(2)} polegadas`;

      historyText.innerText = historyText.innerText + "\n" + result.textContent;      
      break;

    case "ft":
      // lógica caso o valor seja FT
      calculated = valueToConvert * 30.48;
      result.textContent = `${valueToConvert} ft é igual a ${calculated.toFixed(2)} centímetos`;
      
      historyText.innerText = historyText.innerText + "\n" + result.textContent;
      break;

    default:
      // Nenhuma das opções
      result.textContent = `Selecione uma opção válida`;
  }
});
