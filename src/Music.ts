import { showMenu } from "./showMenu";

interface NewMusic{

}
class Music{
    //TODO: Terminar implementação da Classe
    public audio = new Audio('./musicas/trilha-sonora.mp3');
    //public filePath:string;

    public playSound(option:number):void{
        console.log('[1] Ativar Som');
        console.log('[2] Desativar Som');
        console.log('[3] Voltar');

        if(option == 1){
            this.audio.play();
        }else if(option == 2){
            this.audio = new Audio('');
        }else if(option == 3){
            showMenu();
        }
    }
} export { Music }