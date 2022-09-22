"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var jogadores_1 = require("./jogadores");
var showMenu_1 = require("./showMenu");
var Music_1 = require("./Music");
var PerguntasRespostas_1 = require("./PerguntasRespostas");
try {
    var prompt_1 = PromptSync();
    //Objetos - Instâncias das Classes
    //const music = new Music();
    // const perguntas = new PerguntasRespostas();
    // const respostas = new PerguntasRespostas();
    //Banco de Dados das Perguntas e Respostas
    // perguntas.perguntas = [];//Armazenar As Perguntas
    // respostas.respostas = [];//Armazenar As Respostas
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
                (0, PerguntasRespostas_1.PergEResp)();
                break;
            case 2:
                //music.playSound(option);
                new Music_1.Music();
            case 3:
                console.log('GAME OVER');
                break;
            default:
                (0, showMenu_1.showMenu)();
                break;
        }
    } while (option > 0 && option != 3);
}
catch (error) {
    //Caso Ocorra Algum Erro
    console.log("Opss! Algo de errado aconteceu, tente novamente mais tarde :(\n".concat(error));
    (0, showMenu_1.showMenu)();
}
//TODO : usar o finally
