import prompt from 'prompt-sync';
let ler = prompt();

function decimalParaRomano(decimal) {
    if (decimal === 0) {
      return 'Error';
    }
  
    var romanos = [
      { decimal: 1000, romano: 'M' },
      { decimal: 900, romano: 'CM' },
      { decimal: 500, romano: 'D' },
      { decimal: 400, romano: 'CD' },
      { decimal: 100, romano: 'C' },
      { decimal: 90, romano: 'XC' },
      { decimal: 50, romano: 'L' },
      { decimal: 40, romano: 'XL' },
      { decimal: 10, romano: 'X' },
      { decimal: 9, romano: 'IX' },
      { decimal: 5, romano: 'V' },
      { decimal: 4, romano: 'IV' },
      { decimal: 1, romano: 'I' }
    ];
  
    var resultado = '';
  
    for (var i = 0; i < romanos.length; i++) {
      while (decimal >= romanos[i].decimal) {
        resultado += romanos[i].romano;
        decimal -= romanos[i].decimal;
      }
    }
  
    return resultado;
  }
  
  let numeroDecimal = Number(ler())

  var numeroRomano = decimalParaRomano(numeroDecimal);
  console.log(numeroRomano);  