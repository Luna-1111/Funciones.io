function calcularNomina() {
    // Obtener los valores de los sueldos
    const sueldo1 = parseFloat(document.getElementById('sueldo1').value) || 0;
    const sueldo2 = parseFloat(document.getElementById('sueldo2').value) || 0;
    const sueldo3 = parseFloat(document.getElementById('sueldo3').value) || 0;
    const sueldo4 = parseFloat(document.getElementById('sueldo4').value) || 0;
    const sueldo5 = parseFloat(document.getElementById('sueldo5').value) || 0;

    // Sumar todos los sueldos
    const totalNomina = sueldo1 + sueldo2 + sueldo3 + sueldo4 + sueldo5;

    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = `
        <p>Total Nómina a Pagar: ${totalNomina.toFixed(2)} MXN</p>
    `;
}
