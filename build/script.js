"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var jogadores_1 = require("./jogadores");
var showMenu_1 = require("./showMenu");
var Music_1 = require("./Music");
var prompt = PromptSync();
var option = 0;
do {
    console.clear();
    (0, showMenu_1.showMenu)();
    option = Number(prompt(' >> '));
    console.clear();
    switch (option) {
        case 1:
            var nomeJogador = prompt(' Digite seu nome: ');
            var jogador = new jogadores_1.Jogador(nomeJogador);
            break;
        case 2:
            new Music_1.Music();
            // TODO Colocar a função da música
            break;
        case 3:
            console.log('GAME OVER');
            break;
        default:
            console.log('Opção Inválida.');
    }
} while (option != 3);
