'use strict';

/*
Desafio 9
Números por extenso (de 0 a 19) com Arrays
*/
function numPorExtenso(num){
    if (num < 0 && num > 100){
        return "";
    }
    const extenso = [];
    extenso[0] = "zero";
    extenso[1] = "um";  
    extenso[2] = "dois";
    extenso[3] = "três";
    extenso[4] = "quatro";
    extenso[5] = "cinco";
    extenso[6] = "seis";
    extenso[7] = "sete";
    extenso[8] = "oito";
    extenso[9] = "nove";
    extenso[10] = "dez";
    extenso[11] = "onze";
    extenso[12] = "doze";
    extenso[13] = "treze";
    extenso[14] = "quatorze";
    extenso[15] = "quinze";
    extenso[16] = "dezesseis";
    extenso[17] = "dezesete";
    extenso[18] = "dezoito";
    extenso[19] = "dezenove";  
    
    if (num > 0 && num <= 19){
        return extenso[num];
    }

    const dezenaExtenso = [];
    dezenaExtenso[2] = "vinte";
    dezenaExtenso[3] = "trinta";
    dezenaExtenso[4] = "quarenta";
    dezenaExtenso[5] = "cinquenta";
    dezenaExtenso[6] = "sessenta";
    dezenaExtenso[7] = "setenta";
    dezenaExtenso[8] = "oitenta";
    dezenaExtenso[9] = "noventa";

    let unidade = num % 10; // 7
    let dezena = num - unidade; // 30
    dezena = dezena / 10; // 3

    console.log(num, unidade, dezena);
    console.log(num, extenso[unidade], dezenaExtenso[dezena]);

    if (unidade === 0){
        return dezenaExtenso[dezena];
    }

    return `${dezenaExtenso[dezena]} e ${extenso[unidade]}`

    
    
}

console.log(numPorExtenso(37));




 
