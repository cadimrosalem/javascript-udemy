/* 
'use strict';

// Desafio 11 - Objetos e RPG

const jogador1 = {
    nome: "Gandalf",
    ataque: 130,
    nivel: 50,
    classe: "Mago",
    vida: 100,
    atacar: function(atacar){  
        console.log(this);      
        console.log(`O ${this.classe} ${this.nome} realizou um ataque de ${this.ataque} pontos no inimigo!`);
    }
}

const jogador2 = {
    nome: "Legolas",
    ataque: 12,
    nivel: 45,
    classe: "Arqueiro",
    vida: 80,
    atacar: function(atacar){  
        console.log(this);      
        console.log(`O ${this.classe} ${this.nome} realizou um ataque de ${this.ataque} pontos no inimigo!`);
    }
}

const jogador3 = {
    nome: "Aragorn",
    ataque: 40,
    nivel: 60,
    classe: "Guerreiro",
    vida: 120,
    atacar: function(atacar){  
        console.log(this);      
        console.log(`O ${this.classe} ${this.nome} realizou um ataque de ${this.ataque} pontos no inimigo!`);
    }
}

const jogador4 = {
    nome: "Gimli",
    ataque: 13,
    nivel: 40,
    classe: "Anão",
    vida: 90,
    atacar: function(atacar){  
        console.log(this);      
        console.log(`O ${this.classe} ${this.nome} realizou um ataque de ${this.ataque} pontos no inimigo!`);
    }
}

console.log(jogador1.atacar());
console.log(jogador2.atacar());
console.log(jogador3.atacar());
console.log(jogador4.atacar());
*/


