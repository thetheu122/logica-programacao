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

for (let num of numDig) {
    console.log(`O dobro de ${num} é ${num * 2}`)
}