import prompt from 'prompt-sync';
let ler = prompt();


let x = sorteio()


function sorteio (){

    let verificar = false
    let sorteado = Math.random() * 1000
    sorteado = parseInt(sorteado)

    for(let tentativa = 1; tentativa <= 10; tentativa++){

        console.log("Descubra o numero sorteado: ")
        let aluno = Number(ler())

        if(aluno == sorteado){
            console.log(`acertou na tentativa ${tentativa}`)
            verificar == true
        } 
        else if (aluno < sorteado) {
            console.log(`Errou, o numero é Maior`)
        }
        else if(aluno > sorteado){
            console.log(`errou, o numero é menor`)
        }
    } 
    
    if (verificar != true){
        console.log(`o numero sorteado era ${sorteado}`)
    }
}