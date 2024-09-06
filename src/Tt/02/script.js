function Analise(){
    const texto = document.getElementById('textoInput').value;
    let Converao = texto.toLowerCase();

    let contador_A = 0;
    for (let i = 0; i < Converao.length; i++) {
      if (Converao[i] === 'a') {
        contador_A++;
      }
    }
    const resultado = document.getElementById('resultado');
    if (contador_A > 0) {
        resultado.textContent = `O texto informado tem ${contador_A}"A"`;
    } else {
        resultado.textContent = `O texto informado não tem a letra "A"`;
    }
}

Analise()