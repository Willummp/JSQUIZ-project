import PromptSync = require('prompt-sync')
import { Jogador } from "./jogadores";


let option = 0;
        console.clear();
do {
    console.log(' -- Java Game -- \n')
    console.log(' [1] Novo Jogo ')
    console.log(' [2] Tocar / Desativar Música')
    console.log(' [3] Sair ')

    option = Number(prompt(' >> '));

    switch (option){
        case 1:
            const nomeJogador = prompt(' Digite seu nome: ');
            const jogador = new Jogador (nomeJogador)
            console.log(
            
        break;
        case 2:
            // TODO Colocar a função da música
        break;
        case 3:
            // TODO SAIR DO JOGO
        break;
    }
}while (option != 3)