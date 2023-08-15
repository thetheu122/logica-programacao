import prompt from 'prompt-sync';
let ler = prompt();




function gerarPalavraAleatoria(tamanho) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz';
    let palavra = '';
    for (let i = 0; i < tamanho; i++) {
      let indice = Math.floor(Math.random() * caracteres.length);
      palavra += caracteres.charAt(indice);
    }
    return palavra;
  }
  
  // Exemplo de uso
  let palavra = gerarPalavraAleatoria(5);
  console.log(palavra);
  