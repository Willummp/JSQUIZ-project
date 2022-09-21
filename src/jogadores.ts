//TODO: MÉTODO PARA CONTAR A PONTUAÇÃO
interface NewJogador{
  nome: string;
}
class Jogador { // classe jogador
    private nome: string;
    private pontuacao: number = 0;
      
     constructor(nome:string){
        this.nome=nome;
      }
      public pontuar(pontuar:number){
        this.pontuacao+=pontuar;
      }

} export { Jogador }