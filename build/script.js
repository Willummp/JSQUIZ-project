"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var showMenu_1 = require("./showMenu");
var Music_1 = require("./Music");
var PerguntasRespostas_1 = require("./PerguntasRespostas");
try {
    var prompt_1 = PromptSync();
    //Objetos - Instâncias das Classes
    //const music = new Music();
    //music.filePath = './musicas/trilha-sonora.mp3'; //Caminho do Diretório da Trilha Sonora do Jogo
    var option = 0;
    do {
        console.clear();
        (0, showMenu_1.showMenu)();
        option = Number(prompt_1(' >> '));
        console.clear();
        switch (option) {
            case 1:
                //console.log('Carregando...');
                console.clear();
                (0, PerguntasRespostas_1.PergEResp)();
                console.clear();
                prompt_1('\n');
                break;
            case 2:
                //music.playSound(option);
                new Music_1.Music();
                (0, showMenu_1.showMenu)();
                break;
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
    console.log("Opss! Algo de errado aconteceu, tente novamente mais tarde.\n".concat(error));
    (0, showMenu_1.showMenu)();
}
//TODO: usar o finally
