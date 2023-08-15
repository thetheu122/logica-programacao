import prompt from "prompt-sync";
let ler = prompt();


let dobro = []

console.log("Informe Nomes")
let num = ler()


for(let i = 0; i < num; i++){
    console.log("Digite ")
    dobro[i] = ler()
}

for(let i = num - 1 ; i >= 0; i--){
    console.log(dobro[i])
}