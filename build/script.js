"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var jogadores_1 = require("./jogadores");
var showMenu_1 = require("./showMenu");
var PerguntasRespostas_1 = require("./PerguntasRespostas");
var inicioJogo_1 = require("./inicioJogo");
try {
    var prompt_1 = PromptSync();
    //Objetos - Instâncias das Classes
    //const music = new Music();
    var perguntas = new PerguntasRespostas_1.PerguntasRespostas();
    var respostas = new PerguntasRespostas_1.PerguntasRespostas();
    //Banco de Dados das Perguntas e Respostas
    perguntas.perguntas = ['O que as variáveis fazem ?',
        'O que os vetores armazenam ?',
        'O que as matrizes armazenan ?',
        'A metodologia Ágil tem quantos valores ?',
        'Quantos princípios a metodologia Ágil tem ?',
        'Quais são os 3 papéis da metodologia ágil ?',
        'O que é HTML ?',
        'O que é HARDWARE ?',
        'O que é SOFTWARE ?',
        'Os exemplos de HARDWARE são ?',
        'Os exemplos de SOFTWARE são ?',
        'Podemos definir informática,como ?',
        'Qual a função da RAM?',
        'Defina o sistema operacional:',
        'O que é um banco de dados?'];
    //Armazenar As Perguntas
    respostas.respostas = ['Armazenam apenas uma informação.',
        'Armazenam várias informações em uma dimensão.',
        'Armazena várias informações em várias dimensões.',
        'Tem 4 valores.',
        'Tem 12 princípios',
        'Product Ower(P.O), Srum Master, Dev TeAm',
        'É uma linguagem escrita',
        'A parte física do computador',
        'A parte lógica do computador',
        'Placa-mãe, Memória e Bateria',
        'Windows, Linux e Calculadora',
        'A ciência que trata logicamente os dados',
        'Armazenar temporariamente os programas e arquivos aberto para que o processador possa acessa-los',
        'Aplicativo que interage entre o usuário e o sistema',
        'Bancos de dados são coleções de informações que se relacionam de forma a criar um sentido'
    ]; //Armazenar As Respostas
    //music.filePath = './musicas/trilha-sonora.mp3'; //Caminho do Diretório da Trilha Sonora do Jogo
    var option = 0;
    do {
        console.clear();
        (0, showMenu_1.showMenu)();
        option = Number(prompt_1(' >> '));
        console.clear();
        switch (option) {
            case 1:
                var nomeJogador = prompt_1(' Digite seu nome: ');
                var jogador = new jogadores_1.Jogador(nomeJogador);
                (0, inicioJogo_1.começoJogo)();
                break;
            case 2:
                //music.playSound(option);
                break;
            case 3:
                console.log('GAME OVER');
                break;
            default:
                console.log('Opção Inválida.');
        }
    } while (option > 0 && option != 3);
}
catch (error) {
    //Caso Ocorra Algum Erro
    console.log("Opss! Algo de errado aconteceu, tente novamente mais tarde :(\n".concat(error));
}
