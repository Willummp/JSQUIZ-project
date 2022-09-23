import PromptSync = require('prompt-sync')
import { Jogador } from "./jogadores";
import { showMenu } from "./showMenu"
import { Music } from "./Music"
import { PergEResp } from './PerguntasRespostas';

try {
const prompt = PromptSync();

//Objetos - Instâncias das Classes
//const music = new Music();
//music.filePath = './musicas/trilha-sonora.mp3'; //Caminho do Diretório da Trilha Sonora do Jogo

let option = 0;

do {
    console.clear();
    showMenu();

    option = Number(prompt(' >> '));
    console.clear();

    switch (option){
        case 1:
            //console.log('Carregando...');
            console.clear();
            PergEResp();
            console.clear();
            prompt('\n');
        break;

        case 2:
            //music.playSound(option);
            new Music();
        break;
        case 3:
            console.log('GAME OVER');
        break;
        default:
            showMenu()
        break;
    }
}while (option > 0 && option != 3);
} catch (error) {
    //Caso Ocorra Algum Erro
    console.log(`Opss! Algo de errado aconteceu, tente novamente mais tarde.\n${error}`);
    showMenu();
}
//TODO: usar o finally