import PromptSync = require("prompt-sync");

const prompt = PromptSync();

//const prompt = PromptSync();

function comecoJogo() {
    let r = 0

    console.clear();

    for (let x = 1; x <= 10; x++) {
        
        console.log(`Questão ${x} \n`)
        console.log(' [1] RESPOSTA ')
        console.log(' [2] RESPOSTA ')
        console.log(' [3] RESPOSTA ')
        console.log(' [4] RESPOSTA \n')
        console.log(' [5] Sair \n')
        r = Number(prompt(' >> '));
    }
        while(r != 5){
    
    }
}

export { comecoJogo }