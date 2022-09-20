


//TODO: MÉTODO PARA CONTAR A PONTUAÇÃO
interface NewJogador{
  nome: string;
  pontuacao: number;

}

class Jogador { // classe jogador
    private nome: string;
    private pontuacao: number;
      
     constructor({nome,pontuacao}){
        this.nome=nome;
        this.pontuacao=pontuacao;
      }
}



 export { Jogador }