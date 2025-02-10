        /*
        Alerta de Olá, Mundo! 
        alert("Olá, Mundo!");

        console.log("Olá, Mundo!");

        let mensagem = "Olá, Mundo!";
         alert(mensagem);
         console.log(mensagem);

         let nome = "Ricardo";
         console.log("Olá, " + nome + "!")
         alert("Olá, " + nome + "!");
        

        Adição
        let soma = 5 + 4;
        console.log("A soma é",soma);
        console.log(soma + 1);

        Subtração
        let subtracao = 10 - 4;
        console.log("A subtração é",subtracao);

        */

        /*
        let idade;
        idade = 25;

        console.log(idade);

        idade = 32;
        console.log(idade);

        idade = idade + 1;
        console.log(idade);
        */

        // Declaração de variável
        
        /*
        var nome = "João";
        console.log(nome);

        console.log("Bom dia, "+nome);
        console.log("O nome é "+nome);
                
        var idade = 25;
        var altura = 1.80;
        var possuiCarro = true;
        var nome = "João";
        */

        // Exibir os valores das variáveis

        /*
        console.log("Nome: ",nome);
        console.log("Idade: ",idade);
        console.log("Altura: ",altura);
        console.log("Possui carro? ",possuiCarro)

        var idade = 30;
        var altura = 1.65;
        var possuiCarro = false;
        var nome = "Maria";

        console.log("Nome: ",nome);
        console.log("Idade: ",idade);
        console.log("Altura: ",altura);
        console.log("Possui carro? ",possuiCarro);
        */
        

        /*
        CamelCase

        UpperCamelCase 
        lowerCamelCase
        */

        /*
        // Variáveis numéricas        
        let idade = 25;
        let altura = 1.75;
        console.log(typeof idade);

        // Variáveis de texto
        let nome = "Ricardo";
        let cidade = 'Aracruz';
        let carro = `Honda Civic`;
        console.log(typeof nome);
        console.log(typeof cidade);
        console.log(typeof carro);

        // Variável booleana (valor lógico: verdadeiro ou falso)
        let possuiCarro = true;
        let maiorIdade = false;
        console.log(typeof possuiCarro);
        console.log(typeof maiorIdade);

        // Variável indefinida 
        let marca; 
        console.log(marca);

        // Nula 
        let tipo = null;
        console.log(typeof tipo);

        // Symbol
        let id = Symbol("id");
        console.log(typeof id);

        // Bigint
        let valorEnorme = 12321904812908214n;
        console.log(typeof valorEnorme);
        */

        /*
        var: possui um valor global que funciona em qualquer parte do código. (não muito utilizável)
        let: usada para reatribuir um valor.
        const (constante): indica uma variável que não vai mudar.
        */

        /*
        let nome = "Maria";
        nome = "José";
        console.log(nome)

        const pi = 3.1415;
        */

        // Operadores Aritméticos
        /*
        Soma:
        const a = 5;
        const b = 3;
        const soma = a + b;
        console.log(soma);
        */

        /*
        Subtração:
        const a = 8;
        const b = 3;
        const subtracao = a - b;
        console.log(subtracao);
        */

        /*
        Multiplicação:
        const a = 4;
        const b = 5;
        const multiplicacao = 5 * 4;
        console.log(multiplicacao);
        */

        /*
        Divisão:
        const a = 10;
        const b = 2;
        const divisao = a / b;
        console.log(divisao);
        */
        
        /*
        Módulo (%):
        const a = 10;
        const b = 3;
        const modulo = a % b;
        console.log(modulo);
        */

        /*
        Índice de massa corporal
        const peso = 56; // peso em quilogramas
        const altura = 1.70; // altura em metros
        const imc = peso / (altura * altura);
        console.log(imc);
        console.log(imc.toFixed(2));
        */

        /*
        Cálculo de média de notas
        const nota1 = 8.75;
        const nota2 = 2.02;
        const nota3 = 9.01;
        const media = (nota1 + nota2 + nota3) / 3;
        console.log(media.toFixed(1));
        */

        /*
        Converter Celsius -> Farenheit
        const celsius = 100;
        const farenheit = (celsius * 9 / 5) + 32;
        console.log(farenheit);
        */

        /*
        Cálculo do perímetro e a área de um Círculo
        const pi = 3.14159;
        const raio = 5;
        const perimetro = 2 * pi * raio;
        const area = pi * (raio ** 2); // (** - Potência / Elevado a)
        console.log(perimetro);
        console.log(area);
        */

        /*
        Concatenar String (+)
        const nome = "João";
        const sobrenome = "Silva";
        const nomeCompleto = nome + " " + sobrenome; 
        console.log(nomeCompleto);
        */

        /*
        const produto = "canetas";
        const quantidade = 5
        const msg = "Você comprou " + quantidade + " " + produto;
        console.log(msg);
        */

        /*
        Operador de Incremento (++)
        let a = 5;
        console.log(a);
        a++; // a = a + 1;
        console.log(a);
        */

        /*
        Operador de Decremento (--)
        let a = 5;
        a--; // a = a - 1;
        console.log(a);
        */

        /*
        Operador de Atribuição (=)
        let a = 10;
        */

        /*
        Operador de Atribuição com Incremento (+=)
        let a = 10;
        console.log(a);

        a += 2;
        console.log(a);
        */

        /*
        Operador de Atrbuição com Decremento (-=)
        let a = 10;
        a -= 4;
        console.log(a);
        */

        /*
        let num = 20;
        num /= 5; // num = num / 5;        
        console.log(num);
        */

        /*
        let num = 10;
        num *= 2; // num = num * 2;
        console.log(num);
        */

        // Operadores de Comparação:
        /*
        Igualdade (==)
        const a = 5;
        const b = 6;
        console.log(a == b); // false (a não é igual a b);
        console.log(a == a); // true
        */

        /*
        Diferente (!=)
        const a = 5;
        const b = 6;
        const c = 6;
        console.log(a != b); // true (a é diferente de b);
        console.log(b != c); // false (b não é diferente de c);
        */

        /*
        Menor (<)
        const a = 2;
        const b = 1;
        console.log(a < b); // false (a não é menor que b);
        console.log(b < a); // true (b é menor que a);
        */

        /*
        Maior (>) / Maior igual (>=)
        const a = 2;
        const b = 1;
        console.log(a > b); // true (a é maior que b);
        console.log(b > a); // false (b não é maior que a);

        const c = 2;
        console.log(a >= c); // true (a é maior ou igual a c);

        const d = 4;
        console.log(a >= c + b); // false
        */

        /*
        Menor igual (<=)
        const a = 2;
        const b = 2;
        const c = 3;
        const d = 4;
        console.log(a < b); // false
        console.log(b <= a); // true
        console.log(c <= d); // true
        console.log(d <= c - a); // false
        */

        /*
        Verificar se um número é positivo
        let num = 5;
        let positivo = (num > 0);
        console.log("O número é positivo?", positivo); // true
        */

        /*
        Verificar se um número é par
        let num = 5;
        let par = (num % 2) == 0
        console.log("O número", num, "é par?", par); // false
        */

        /*
        const res = (5 + 3) * 2;
        console.log(res);

        const msg = "Olá, " + "Mundo!";
        console.log(msg);

        const potencia = 2 ** 3 ** 2; // da direita para a esquerda
        console.log(potencia);
        */

        /*
        Analisando a Precedência de Operadores
        const res = 10 - 2 + 3 > 5; // true
        console.log(res);

        let potencia = ((2 ** (3 ** 2)) > 100); // true
        console.log(potencia);

        const divisao = (((10 / 2) / 5) < 2); // true
        console.log(divisao);
        */

        /*
        Strings e Templates Literais
        const mensagem = "Olá, Mundo!";
        const nome = "Maria";
        const cumprimento = "Bem vinda"
        const mensagem = cumprimento + ", " + nome +"!";
        console.log(mensagem);
        */

        /*
        const cumprimento = "Olá";
        const nome = "João";
        const mensagem = `${cumprimento} ${nome}, Seja bem vindo!`;
        console.log(mensagem);
        */

        /*
        const idade = 25;
        const texto = `Eu tenho ${idade} anos.`;
        console.log(texto);
        */

        /*
        Prompt
        const nome = prompt('Qual é o seu nome?');
        console.log(`Olá, ${nome}, seja bem vindo!`);
        
        const numero = prompt('Digite um número:');
        const quadrado = numero ** 2;
        console.log(`O número informado é ${numero} e o seu quadrado é ${quadrado}.`);
        */

       /*

       If - Estrutura condicional

       const num = 18;

       console.log('Início');

       if (num > 0){
        // Só será executado se a condição for verdadeira
        console.log('O número é positivo')
       }

       console.log('Fim');
       */

       /*
       let logado = true;
       if (logado){
        console.log('Bem vindo, usuário!');
       }
       */
      
       /*
       let num = 1;
       if (num != 0){
        console.log('Diferente de zero')
       }
       */
      
       /*
       let idade = 18;
       if (idade >= 18){
        console.log('Você é maior de idade');
       } else {
        console.log('Você é menor de idade')
       }
       */
      
       /* 
       Exemplos do IF

       let tecla = " "; // Atribuir um valor
       if (tecla == " "){ // Comparar os valores
        console.log("O personagem pula");
       } else {
        console.log("O personagem continua correndo");
       }
       */

       /*
       Verificar se um número é par
       
       const num = 140;
       if (num % 2 == 0){
        console.log(`O número ${num} é par`)
       } else {
        console.log(`O número ${num} é ímpar`)
       }
       */
      
       /*
       Passou de ano?

       const mGeral = 60; // de 0 a 100
       if (mGeral >= 60){
        console.log('Parabéns!')
        console.log('Você passou de ano!')
       } else {
        console.log('Que pena!')
        console.log('Você não passou de ano!')
       }
       */
      
       /*
        Conferir a senha

       const palavraSecreta = "8j7w";
       const senhaDig = prompt('Qual é a senha?')
       if (palavraSecreta == senhaDig){
        console.log('Você acertou a senha!')
        console.log('Acesso ao sistema liberado')
       } else {
        console.log('Você não acertou a senha!')
        console.log('Acesso ao sistema bloqueado')
       }
       */ 

       /*
       Conversão e Coerção de tipos
       const preco = '50';
       const juros = 2
       console.log(preco + juros);

       Converter para Número
       console.log(typeof(Number(preco) + juros));       

       const num = 42; // Número
       const texto = "10"; // Texto (String)
       console.log(num + Number(texto));       

       const res = "10" - 5;
       console.log(res);
       */

       /*
       Brincar de adivinhação     
       let res = 10;
       console.log(res);  
       
       res = res + 5;
       console.log(res);

       res = res - 3;
       console.log(res);

       res = res * "2";
       console.log(res)

       res = res / "4";
       console.log(res);

       res = res + Number("5"); // O sinal de + não server só para somar dois valores, mas também para concatenar duas strings.
       console.log(res);
       */
      
       
       /*
       Conversão e Coersão de Booleanos

       let verdadeiro = true;
       let falso = false;

       Booleano para número

       let numVerdadeiro = Number(verdadeiro);
       let numFalso = Number(falso);

       console.log(numVerdadeiro); // 1
       console.log(numFalso);      // 0          

       let num = 42;
       let booleanoNum = Boolean(num);

       console.log(booleanoNum); // true, qualquer número diferente de 0 é true.

       num = 0;
       booleanoNum = Boolean(num); 

       console.log(booleanoNum);
       */

       /*
       Coersão de Booleano para String

       let booleanoV = true;
       console.log(booleanoV);

       let stringBooleanoV = "O valor é " + booleanoV + ".";
       console.log(stringBooleanoV); // true

       let booleanoF = false;
       console.log(booleanoF);

       let stringBooleanoF = "O valor é " + booleanoF + ".";
       console.log(stringBooleanoF); // false
       */

       /*
       String para Booleano 

       const txt = "Olá!"; // Com a string vazia = false
       const booleanoTxt = Boolean(txt);
       console.log(booleanoTxt); // true
       */

       /*
        Valores Falsos
       0
       undefined
       null
       NaN
       ""

       let var1;
       console.log(typeof var1);   // undefined
       console.log(Boolean(var1)); // false

       let var2 = null;
       console.log(typeof var2);   // object
       console.log(Boolean(var2)); // false

       let var3 = 10 / "ricardo";
       console.log(var3);          // NaN
       console.log(typeof var3);   // number
       console.log(Boolean(var3)); // false

       let var4 = "";
       console.log(var4);
       console.log(typeof var4);   // string
       console.log(Boolean(var4)); // false


       let num = 4; 

       if (num){
        console.log("entrou no IF");
       } else {
        console.log("entrou no ELSE");
       }

       let txt = "";

       if (txt){
        console.log("entrou no IF");
       } else {
        console.log("entrou no ELSE");
       }

       let valorDeTeste;
       
       if (valorDeTeste){
        console.log("entrou no IF");
       } else {
        console.log("entrou no ELSE");
       }
       */

       /*
       Diferença entre == e ===
       == igualdade abstrata (compara os valores)
       === igualdade absoluta / estrita (compara o tipo)
       

       const num = 5;
       const string = "5";
       console.log(typeof num);
       console.log(typeof string);

       console.log(num == string); // true
       console.log(num === string); // false (não considera iguais os valores que são de tipos diferentes)
       

       const idade = '18';
       if (idade == 18){
        console.log("Você já pode tirar a carta.");
       }

       const senha = 1231244;
       const valorDig = prompt('Digite a senha');

       if (Number(valorDig) === (senha)){
        console.log('Acesso concedido');
       } else{
        console.log('Acesso negado');
       }
       */
      
       /*
       Lógica Booleana
       And Or Not
       && || !
       
       
       // And &&

       const possuiCnh = true;
       const maisDe21Anos = true;

       console.log(possuiCnh && maisDe21Anos); // true

       if (possuiCnh && maisDe21Anos){
        console.log('Você pode ser motorista profissional');
       } else{
        console.log('Não pode');
       }
       
       // Or ||

       const escuro = true;
       const chovendo = true;

       console.log(escuro || chovendo);

       if (escuro || chovendo){
        console.log('Ligue os faróis!');
       } else{
        console.log('Não precisa ligar os faróis');
       }
       
      
       // Not !

       const possuiAntecedentesCriminais = true;
       console.log(possuiAntecedentesCriminais);
       console.log(!possuiAntecedentesCriminais);

       if (!possuiAntecedentesCriminais){
        console.log('Pode tirar passaporte!');
       } else{
        console.log('Não pode tirar passaporte!');
       }
       */
      
       /*
       const possuiIdentidade = true;
       const br = true;
       const maiorIdade = true;
       const possuiAntecedentesCriminais = false;
       const taxasPagas = true;

       if (possuiIdentidade && br && maiorIdade && !possuiAntecedentesCriminais && taxasPagas){
        console.log('Pode tirar o passaporte!');
       } else{
        console.log('Não pode tirar o passaporte!');
       }
       */
      
       /* 
       Operadores lógicos - Ampliação

       // Declaração das variáveis
       const idade = 25;
       const carteira = true;
       const carro = false;
       const bicicleta = true;
       const pressa = false;

       // Verificar se a pessoa tem idade e se possui carteira de motorista
       if (idade >= 18 && carteira){
        console.log("Pode dirigir legalmente!");
       } else {
        console.log('Não pode dirigir legalmete!');
       }

       // Possui carro e carteira
       if (carro && carteira){
        console.log('Pode dirigir!');
       } else{
        console.log('Não pode dirigir!');
       }

       // Não possui carro e nem carteira
       if (!carro && !carteira){
        console.log('Procure outra forma de se locomover!');
       }
       
       // Tem pressa, idade e carro... vá de carro
       if (pressa && carro && carteira && idade >= 18){
        console.log('Vá de carro');
       }

       // Tem pressa, mas não tem carro
       if (pressa && !carro){
        console.log('É melhor chamar um taxi!');
       }

       // Não tem pressa e não tem carro
       if (!pressa && !carro){
        console.log('Melhor ir a pé');
       }

       if (!pressa && carro && carteira && idade >= 18){
        console.log("Pegue seu carro e vá devagar");
       }

       // Tem meio de transporte?
       if (carro || bicicleta){
        console.log('Você possui um meio de transporte');
       } else{
        console.log('Você não possui um meio de transporte');
       }
       */
      
       /*
       If, Else e Else if

       let idade = 18;

       if (idade > 18){ // maior de 18
        console.log('Você tem mais de 18 anos.');
       } else if (idade == 18){ // 18 ou menos
        console.log('Você tem exatamente 18 anos.');        
       } else{
        console.log('Você tem menos de 18 anos.');
       }
       */
      
       /*
       acima de 100 reais, desconto de 10%
       entre 100 e 50, desconto de 5%
       abaixo de 50, sem desconto

       let preco = 100;

       if (preco >= 100){
        console.log(`Desconto de 10% para protudos acima de ${preco} reais.`);
       } else if (preco >= 50){
        console.log(`Desconto de 5% para produtos acima de ${preco} reais.`);
       } else{
        console.log(`Não temos desconto para produtos de ${preco} reais.`)
       }
       */

       /*      
       let preco = 51;

       if (preco > 100){
        console.log(`Desconto de 10%`);
       }

       if (preco > 50 && preco <= 100){
        console.log(`Desconto de 5%`);
       }

       if (preco <= 50){
        console.log(`Sem desconto`);
       }
       */

       /*
       // media > 7 bom
       // entre 5 e 7 razoável
       // abaixo de 5 ruim

       let media = 9;

       if (media >= 9){
        console.log('Você é um ótimo aluno');
       } else if (media > 7){
        console.log('Você é um bom aluno');
       } else if (media >= 5){
        console.log('Você é um aluno razoável');
       } else if (media > 2){
        console.log('Você é um aluno ruim');
       } else{
        console.log('Você é um aluno péssimo');
       }
       */

       /*
       Switch

       switch (valor){
        case opcao1:
                // Código a ser executado se valor for igual a opção1
                break;
        case opcao2:
                // Código a ser executado se valor for igual a opção
                break;
        case opcao3:
                // Código a ser executado se valor for igual a opção3
                break;
        default:
                // Código a ser executado se valor não corresponder a nenhuma opção
                break;        
       }
       
  
       const carro = "wv";
        
       switch (carro){
        case 'ford':
                console.log('Você escolheu um Ford');
                break;
        case 'chevrolet':
                console.log('Você escolheu Chevrolet');
                break;
        case 'bmw':
                console.log('Você escolheu uma BMW');
                break;
        case 'honda':
                console.log('Você escolheu um Honda');
                break;
        default:
                console.log('Você não escolheu nenhuma opção válida')
                break;
       }
       */ 

       


       







       

       
      
        





        



        














        