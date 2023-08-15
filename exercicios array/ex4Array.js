import Prompt from 'prompt-sync';
let ler = Prompt();


const numDig = [];
const numDigInversa = [];
let contInicial = 0;

console.log('Informe a quantidade de números que deseja:')
let qtdNum = Number(ler());

for (let cont = 0; cont < qtdNum; cont++) {
    console.log(`Informe um número:`)
    numDig [cont] = Number(ler())
}

for (let cont = numDig.length-1; cont >= 0 ; cont--) {
    numDigInversa [contInicial] = numDig [cont]
    contInicial++ 
}

console.log()
console.log('Você digitou os números:')

for (let nume of numDigInversa) {
    console.log(nume)
}