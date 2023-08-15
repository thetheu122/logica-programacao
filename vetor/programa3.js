import prompt from "prompt-sync";
let ler = prompt();


let dobro = []

console.log("Informe a tabuada")
let num = Number(ler())


for(let i = 0; i <= 10; i++){
    
    dobro[i] = num * i;
}

for(let i = 0; i <= 10; i++){
    console.log(dobro[i])
}