//TODO: MÉTODO PARA CONTAR A PONTUAÇÃO
interface NewJogador{
  nome: string;
  pontuacao: number;
  nExperiencia: string;
}
class Jogador { // classe jogador
    public nome: string;
    public pontuacao: number;
    public nivelExperiencia: string;

      constructor({nome,pontuacao}){
        this.nome=nome;
        this.pontuacao=pontuacao;
        this.nivelExperiencia=this.nivelExperiencia;
      }
} export { Jogador }