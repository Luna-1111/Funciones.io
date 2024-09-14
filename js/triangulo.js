function calcularSuperficie() {
    const base = document.getElementById('base').value;
    const altura = document.getElementById('altura').value;
    
    if (base > 0 && altura > 0) {
        const superficie = (base * altura) / 2;
        document.getElementById('resultado').innerHTML = 
            `<h3>La superficie del triángulo es: ${superficie} cm²</h3>`;
    } else {
        document.getElementById('resultado').innerHTML = 
            `<h3>Por favor, introduce valores válidos para la base y la altura.</h3>`;
    }
}
