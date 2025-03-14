'use strict'

// Desafio 10
// Montar o código que retorna números por extenso até 1000

function numPorExtenso(num){
    if (num < 0 && num > 1000){
        return "";
    }

    if (num === 100){
        return 'cem';
    }

    if (num === 1000){
        return 'mil'
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

    const centenaExtenso = []
    centenaExtenso[1] = "cento";
    centenaExtenso[2] = "duzentos";
    centenaExtenso[3] = "trezentos";
    centenaExtenso[4] = "quatrocentos";
    centenaExtenso[5] = "quinhentos";
    centenaExtenso[6] = "seiscentos";
    centenaExtenso[7] = "setecentos";
    centenaExtenso[8] = "oitocentos";
    centenaExtenso[9] = "novecentos";
    
    // definir a unidade
    let unidade = num % 10; 

    // definir a centena
    let resto = num % 100; 
    let centena = num - resto; 
    centena = centena / 100;
    
    // definir dezena
    let dezena = num - (centena*100) - unidade; 
    dezena = dezena / 10;      

    // console.log(unidade, dezena, centena);

    if (centena > 0 && dezena === 0 && unidade > 0){
        return `${centenaExtenso[centena]} e ${extenso[unidade]}`
    }

    if (centena === 0 && dezena > 0 && unidade > 0){
        return `${dezenaExtenso[dezena]} e ${extenso[unidade]}`;
    }

    if (centena === 0 && unidade === 0){
        return dezenaExtenso[dezena];
    }

    if (unidade === 0){
        return `${centenaExtenso[centena]} e ${dezenaExtenso[dezena]}`
    }

    return `${centenaExtenso[centena]} e ${dezenaExtenso[dezena]} e ${extenso[unidade]}`;
}

console.log(numPorExtenso(1000))
console.log(numPorExtenso(100))
console.log(numPorExtenso(99))
console.log(numPorExtenso(401))
console.log(numPorExtenso(785))
console.log(numPorExtenso(340))
console.log(numPorExtenso(444))
