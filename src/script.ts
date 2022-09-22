import PromptSync = require('prompt-sync')
import { Jogador } from "./jogadores";
import { showMenu } from "./showMenu"
import { Music } from "./Music"
import {PerguntasRespostas} from './PerguntasRespostas';

try {
const prompt = PromptSync();

//Objetos - Instâncias das Classes
//const music = new Music();
const perguntas = new PerguntasRespostas();
const respostas = new PerguntasRespostas();

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
                       'Product Owner(P.O), Srum Master, Dev Team',
                       'É uma linguagem escrita',
                       'A parte física do computador',
                       'A parte lógica do computador',
                       'Placa-mãe, Memória e Bateria',
                       'Windows, Linux e Calculadora',
                       'A ciência que trata logicamente os dados',
                       'Armazenar temporariamente os programas e arquivos aberto para que o processador possa acessa-los',
                       'Aplicativo que interage entre o usuário e o sistema',
                       'Bancos de dados são coleções de informações que se relacionam de forma a criar um sentido'
                        ];//Armazenar As Respostas

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
            new Music();
        break;

        case 3:
            console.log('GAME OVER');
        break;
    }
}while (option > 0 && option != 3);
} catch (error) {
    //Caso Ocorra Algum Erro
    console.log(`Opss! Algo de errado aconteceu, tente novamente mais tarde :(\n${error}`);
    showMenu();
}
//TODO : usar o finally