"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Music = void 0;
var showMenu_1 = require("./showMenu");
var Music = /** @class */ (function () {
    function Music() {
        //TODO: Terminar implementação da Classe
        this.audio = new Audio('./musicas/trilha-sonora.mp3');
    }
    //public filePath:string;
    Music.prototype.playSound = function (option) {
        console.log('[1] Ativar Som');
        console.log('[2] Desativar Som');
        console.log('[3] Voltar');
        if (option == 1) {
            this.audio.play();
        }
        else if (option == 2) {
            this.audio = new Audio('');
        }
        else if (option == 3) {
            (0, showMenu_1.showMenu)();
        }
    };
    return Music;
}());
exports.Music = Music;
