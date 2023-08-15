import Prompt from 'prompt-sync';
let ler = Prompt();


const numDig = [];

for (let cont = 0; cont < 5; cont++) {
    console.log(`Informe o ${cont + 1}º número:`)
    numDig [cont] = Number(ler())
}

console.log()

for (let num of numDig) {
    console.log(`||${num}||`)
}