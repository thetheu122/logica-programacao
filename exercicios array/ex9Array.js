import Prompt from 'prompt-sync';
let ler = Prompt();


const notasDig = [];
let soma = 0;

console.log('Informe a quantidade de notas que deseja:')
let qtdNotas = Number(ler());

for (let cont = 0; cont < qtdNotas; cont++) {
    console.log(`Informe o ${cont + 1}º nota:`)
    notasDig [cont] = Number(ler())
}

console.log()
console.log('Notas digitadas:')
console.log()

for (let notas of notasDig) {
    process.stdout.write(`||${notas}|| `)
}

for(let cont = 0; cont < notasDig.length; cont++) {
    soma = soma + notasDig[cont];
}

let media = soma / notasDig.length;
let maiorNota = Math.max.apply(null, notasDig);
let menorNota = Math.min.apply(null, notasDig);


console.log(`A média é :||${media}||`);
console.log(`A maior nota é:||${maiorNota}||`)
console.log(`A menor nota é:||${menorNota}||`)

