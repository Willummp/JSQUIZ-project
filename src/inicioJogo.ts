const prompt2 = require('prompt-sync')();

//const prompt = PromptSync();

function começoJogo() {
    let r = 0

    console.clear();

    for (let x = 1; x <= 10; x++) {
        
        console.log(`Questão ${x} \n`)
        console.log(' [1] RESPOSTA ')
        console.log(' [2] RESPOSTA ')
        console.log(' [3] RESPOSTA ')
        console.log(' [4] RESPOSTA \n')
        console.log(' [5] Sair \n')
        r = Number(prompt2(' >> '));
    }
        while(r != 5){
    
    }
}

export { começoJogo }