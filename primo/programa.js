import prompt from 'prompt-sync';
let ler = prompt();

let divisores = 0


console.log("Digite um numero: ")
let numero = Number(ler())


for(let cont = 2; cont < numero; cont++){

    if(numero % cont == 0){
        divisores++
    }

}

if (divisores > 0){
    console.log("Não é primo")
}
else {
    console.log("é primo")
}