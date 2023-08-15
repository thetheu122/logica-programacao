import prompt from 'prompt-sync';
let ler = prompt();


console.log("Programa Fibonacci: ")
let posicao = Number(ler())

let numFib = fibonacci(posicao)

console.log(`O numero de fibonacci na posição informada é ${numFib}`)


function fibonacci (posicao){
    let ult = 1
    let penult = 1

    for(let cont = 2; cont < posicao; cont++){
        let aux = ult;

        ult = ult + penult
        penult = aux
    }

    return ult
}
