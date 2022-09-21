"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogador = void 0;
var Jogador = /** @class */ (function () {
    function Jogador(nome) {
        this.pontuacao = 0;
        this.nome = nome;
    }
    Jogador.prototype.pontuar = function (pontuar) {
        this.pontuacao += pontuar;
    };
    return Jogador;
}());
exports.Jogador = Jogador;
