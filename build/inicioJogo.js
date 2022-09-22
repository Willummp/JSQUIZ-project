"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.começoJogo = void 0;
var prompt2 = require('prompt-sync')();
//const prompt = PromptSync();
function começoJogo() {
    var r = 0;
    console.clear();
    for (var x = 1; x <= 10; x++) {
        console.log("Quest\u00E3o ".concat(x, " \n"));
        console.log(' [1] RESPOSTA ');
        console.log(' [2] RESPOSTA ');
        console.log(' [3] RESPOSTA ');
        console.log(' [4] RESPOSTA \n');
        console.log(' [5] Sair \n');
        r = Number(prompt2(' >> '));
    }
    while (r != 5) {
    }
}
exports.começoJogo = começoJogo;
