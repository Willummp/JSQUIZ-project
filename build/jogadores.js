"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogador = void 0;
var Jogador = /** @class */ (function () {
    function Jogador(nome) {
        this.nome = nome;
    }
    Jogador.prototype.pontuar = function (pontuacao) {
        this.pontuacao = pontuacao + 1;
        if (this.pontuacao <= 4) {
            console.log("Ol\u00E1 ".concat(this.nome, " !\nParab\u00E9ns, voc\u00EA est\u00E1 no caminho correto !\nSeu n\u00EDvel \u00E9 inciante.\n\"A persist\u00EAncia \u00E9 o caminho do \u00EAxito.\" ~Charles Chaplin"));
        }
        else if (this.pontuacao >= 5 && this.pontuacao <= 7) {
            console.log("Ol\u00E1 ".concat(this.nome, " !\nParab\u00E9ns, voc\u00EA est\u00E1 no caminho para se tornar um programador de sucesso !\nSeu n\u00EDvel \u00E9 Programador.\n\"A persist\u00EAncia \u00E9 o caminho do \u00EAxito.\" ~Charles Chaplin"));
        }
        else if (this.pontuacao >= 8) {
            console.log("Ol\u00E1 ".concat(this.nome, " !\nParab\u00E9ns, voc\u00EA est\u00E1 no caminho correto !\nSeu n\u00EDvel \u00E9 inciante.\n\"A persist\u00EAncia \u00E9 o caminho do \u00EAxito.\" ~Charles Chaplin"));
        }
    };
    return Jogador;
}());
exports.Jogador = Jogador;
