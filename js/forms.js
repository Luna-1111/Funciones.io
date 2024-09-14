function imprimirDatos() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const correo = document.getElementById('correo').value;
    const direccion = document.getElementById('direccion').value;
    
    if (nombre && apellido && edad && correo && direccion) {
        document.getElementById('resultado').innerHTML = `
            <h3>Datos Ingresados:</h3>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Apellido:</strong> ${apellido}</p>
            <p><strong>Edad:</strong> ${edad} años</p>
            <p><strong>Correo Electrónico:</strong> ${correo}</p>
            <p><strong>Dirección:</strong> ${direccion}</p>
        `;
    } else {
        document.getElementById('resultado').innerHTML = `
            <p style="color: red;">Por favor, completa todos los campos.</p>
        `;
    }
}




