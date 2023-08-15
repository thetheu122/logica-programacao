import prompt from 'prompt-sync';
let ler = prompt();



console.log("Informe um numero : ")
let num = Number(ler())

console.log("Informe o expoente : ")
let expo = Number(ler())


let x = potencia(num,expo)
console.log("a potencia é " + x)



function potencia (numero,expoente){
    if (expoente == 1)
        return 1

    if(numero < 0 || expoente < 0)
        return "calculo invalido"


    let pot = 1
    for(let cont = 1; cont <= expoente; cont++){
        pot *= numero 
    }
        return pot

}