import PromptSync = require('prompt-sync')
import { Jogador } from "./jogadores";
import { showMenu } from "./showMenu"
import { Music } from "./Music"
// import {PerguntasRespostas} from './PerguntasRespostas';

try {

const prompt = PromptSync();

//Objetos - Instâncias das Classes
//const music = new Music();
// const perguntas = new PerguntasRespostas();
// const respostas = new PerguntasRespostas();

//Banco de Dados das Perguntas e Respostas
// perguntas.perguntas = [];//Armazenar As Perguntas
// respostas.respostas = [];//Armazenar As Respostas

//music.filePath = './musicas/trilha-sonora.mp3'; //Caminho do Diretório da Trilha Sonora do Jogo

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
            //music.playSound(option);
        break;

        case 3:
            console.log('GAME OVER');
        break;
        default:
            console.log('Opção Inválida.')
    }
}while (option > 0 && option != 3);
} catch (error) {
    //Caso Ocorra Algum Erro
    console.log(`Opss! Algo de errado aconteceu, tente novamente mais tarde :(\n${error}`);
}
