//Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

function conta() {
    let i = 12;
    let soma = 0;
    let k = 0;
  
    while (k < i) {
      k = k + 1;
      soma = soma + k;
    }
    const resultDiv = document.getElementById('resulto');
    resultDiv.textContent = `Soma: ${soma}`;
  }

conta()