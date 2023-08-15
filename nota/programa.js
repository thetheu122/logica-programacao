import prompt from 'prompt-sync';
let ler = prompt();

let nota1 = PedirNota()
let nota2 = PedirNota()
let nota3 = PedirNota()


let a = media(nota1,nota2,nota3)

console.log(`Sua media é ${a}`);



function PedirNota (){
    console.log("Informe a nota: ");
    let nota = Number(ler());

    while ( nota < 0 || nota > 10){
        console.log("Nota invalida. ela deve estar entre 0 a 10");
        console.log("Informe a nota");
        nota = Number(ler());
    }

    return nota;
}

function media (nota1,nota2,nota3){
    let calculo = (nota1 + nota2 + nota3) / 3;
    return calculo;
}