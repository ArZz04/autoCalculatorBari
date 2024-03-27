
function calcular() {
    // Obtener los valores de los campos de entrada
    const password = document.getElementById('password').value;
    const quantity = document.getElementById('quantity').value;

    // Aquí puedes hacer lo que quieras con los valores obtenidos, como mostrarlos en el segundo div o realizar cálculos
    
    // Ejemplo: Mostrar los valores en el segundo div
    const resultBox = document.getElementById('calculations');
    resultBox.innerHTML = `<p>Contraseña: ${password}</p><p>Cantidad de Carne: ${quantity}</p>`;

    // Mostrar el segundo div
    const resultDiv = document.getElementById('calculations');
    resultDiv.classList.remove('hidden');
}