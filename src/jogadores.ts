//TODO: MÉTODO PARA CONTAR A PONTUAÇÃO
interface NewJogador{
  nome: string;
}
class Jogador { // classe jogador
    public nome: string;
    public pontuacao: number;
      
     constructor(nome?:string){
        this.nome=nome;
      }

      public pontuar(pontuacao:number){
        this.pontuacao = pontuacao + 1;

        if(this.pontuacao <= 4){
          console.log(`Olá ${this.nome} !\nParabéns, você está no caminho correto !\nSeu nível é inciante.\n"A persistência é o caminho do êxito." ~Charles Chaplin`);
        }else if(this.pontuacao >= 5 && this.pontuacao <= 7){
          console.log(`Olá ${this.nome} !\nParabéns, você está no caminho para se tornar um programador de sucesso !\nSeu nível é Programador.\n"A persistência é o caminho do êxito." ~Charles Chaplin`);
        }else if(this.pontuacao >= 8){
          console.log(`Olá ${this.nome} !\nParabéns, você está no caminho correto !\nSeu nível é inciante.\n"A persistência é o caminho do êxito." ~Charles Chaplin`);
        }
      }

} export { Jogador }