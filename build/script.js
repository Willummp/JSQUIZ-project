"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var jogadores_1 = require("./jogadores");
var showMenu_1 = require("./showMenu");
var PerguntasRespostas_1 = require("./PerguntasRespostas");
try {
    var prompt_1 = PromptSync();
    //Objetos - Instâncias das Classes
    //const music = new Music();
    var perguntas = new PerguntasRespostas_1.PerguntasRespostas();
    var respostas = new PerguntasRespostas_1.PerguntasRespostas();
    //Banco de Dados das Perguntas e Respostas
    perguntas.perguntas = []; //Armazenar As Perguntas
    respostas.respostas = []; //Armazenar As Respostas
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
                if (nomeJogador == null) {
                    console.log('Valor Inválido, tente novamente !');
                }
                else {
                    //IMPLEMENTAR 
                }
                var jogador = new jogadores_1.Jogador(nomeJogador);
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
