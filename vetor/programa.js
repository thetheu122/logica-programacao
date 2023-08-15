import prompt from "prompt-sync";
let ler = prompt();


let dobro = []

console.log("Informe a quantidade de numeros que queira saber o dobro")
let num = Number(ler())


for(let i = 0; i < num; i++){
    console.log("Digite o numero que queira saber")
    dobro[i] = Number(ler())
}

for(let i = 0; i < num; i++){
    console.log(dobro[i] * 2)
}