import Prompt from 'prompt-sync';
let ler = Prompt();


const nomeDig = [];

for (let cont = 0; cont < 5; cont++) {
    console.log(`Informe o ${cont + 1}º nome:`)
    nomeDig [cont] = ler()
}

console.log()
console.log('Você digitou os nomes:')

for (let nome of nomeDig) {
    console.log(`${nome}`)
}