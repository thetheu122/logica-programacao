import Prompt from 'prompt-sync';
let ler = Prompt();


const nomeDig = [];
let letra = '';

console.log('Informe a quantidade de nomes:')
let qtdNome = ler()

for (let cont = 0; cont < qtdNome; cont++) {
    console.log(`Informe o ${cont + 1}º nome:`)
    nomeDig [cont] = ler()
}


console.log()
console.log('Os nomes após o filtro são:')


for (let cont = 0; cont < qtdNome; cont++) {
    nomeDig [cont]
    for (let pos = 0; pos < 1; pos++) {
        letra = nomeDig[cont].charAt(pos)
        if (letra == 'L' || letra == 'l' || letra == 'H' || letra == 'h')
        console.log(`${nomeDig[cont]}`)
        
    }
}
