import Prompt from 'prompt-sync';
let ler = Prompt();


const numDig = [];

console.log('Informe a quantidade de números que deseja:')
let qtdNum = Number(ler());

for (let cont = 0; cont < qtdNum; cont++) {
    console.log(`Informe o ${cont + 1}º número:`)
    numDig [cont] = Number(ler())
}

console.log()
console.log('Você digitou os números:')

for (let num of numDig) {
    console.log(num)
}

console.log()

console.log(`Os número pares são:`)

for (let num of numDig) {
    if (num % 2 == 0)
    console.log(`||${num}||`)
}