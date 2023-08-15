import prompt from 'prompt-sync';
let ler = prompt();

console.log("Fale o texto que queira converter para numero binario")
let texto = ler()

let resposta = binario(texto)
console.log(resposta)

function decimal (texto){
    let resultado = ""

    for(let pos = 0; pos < texto.length; pos++){

       let letra = texto.charAt(pos)
       let letraDec = letra.charCodeAt()

        resultado = resultado + " " + letraDec
    }

    return resultado;
}


function binario (texto){
    let resultado = ""

    for(let pos = 0; pos < texto.length; pos++){

       let letra = texto.charAt(pos)
       let letraDec = letra.charCodeAt()
       let letraBin = loopBin(letraDec);

        resultado = resultado + " " + letraBin
    }

    return resultado;
}

function loopBin (decimal) {
    /// divisão focar
    // 33 / 2 ve a sobra guarda sobra
    // 16 / 2 ve a sobra guarda sobra

    let sobra;
    let resultado = ""

    while (decimal > 0) {
        
        sobra = decimal % 2
        resultado = sobra + " " + resultado
        decimal =  parseInt(decimal / 2)

    }
    
    return resultado;
}