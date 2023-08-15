import Prompt from 'prompt-sync';
let ler = Prompt();


const tabuada = [];

console.log('Informe o número que deseja saber a tabuada:')
let numTab = Number(ler());

for (let cont = 0; cont < 10; cont++) {
    tabuada [cont] = numTab * cont;
}

console.log()

for (let num of tabuada) {
    console.log(num)
}