function Fibonacci(numero) {
    let num1 = 0;
    let num2 = 1;
    let proximo_Num = num2;

    while (proximo_Num < numero) {
        proximo_Num = num1 + num2;
        num1 = num2;
        num2 = proximo_Num;
    }

    if (proximo_Num === numero) {
        return `${numero} faz parte da sequência de Fibonacci`;
    } else {
        return `${numero} não faz parte da sequência de Fibonacci`;
    }
}

document.getElementById('fibonacci-formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let numero = Number(document.getElementById('numero-input').value);
    let resultado = Fibonacci(numero);

    document.getElementById('resultado').textContent = resultado;
});
