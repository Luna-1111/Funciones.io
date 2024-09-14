function calcularPromedio() {
    // Obtener los valores de las materias
    const materia1 = parseFloat(document.getElementById('materia1').value) || 0;
    const materia2 = parseFloat(document.getElementById('materia2').value) || 0;
    const materia3 = parseFloat(document.getElementById('materia3').value) || 0;

    // Calcular el promedio
    const promedio = (materia1 + materia2 + materia3) / 3;

    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = `
        <p>Tu promedio es: ${promedio.toFixed(2)}</p>
    `;
}
