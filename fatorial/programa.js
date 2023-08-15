import prompt from 'prompt-sync';
let ler = prompt();



console.log("Informe o numero que queira saber o fatorial: ")
let num = Number(ler())


let x = fatorial(num)
console.log(`o fatoraiel é ${x}`)


function fatorial (numero){
    let fat = 1; 

    for(let cont = numero; cont > 0; cont--){
        fat *= cont
    }

    return fat
}