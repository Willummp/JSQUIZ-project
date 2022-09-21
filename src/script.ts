import PromptSync = require('prompt-sync')
import { Jogador } from "./jogadores";
import { showMenu } from "./showMenu"
import { Music } from "./Music"

const prompt = PromptSync();
let option = 0;
        
do {
    console.clear();
    showMenu();

    option = Number(prompt(' >> '));
    console.clear();
    switch (option){
        case 1:
            const nomeJogador = prompt(' Digite seu nome: ');
            const jogador = new Jogador (nomeJogador);
        break;
        case 2:
            new Music()
            // TODO Colocar a função da música
        break;
        case 3:
            console.log('GAME OVER');
        break;
        default:
            console.log('Opção Inválida.')
    }
}while (option != 3)