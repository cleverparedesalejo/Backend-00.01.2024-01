//Hacer un algoritmo en JavaScript que lea un número 
//entero por el teclado y determinar si es negativo.

// Obtener la entrada del usuario
const dato = 5;

// Verificar si el número es negativo
if (Number.isInteger(dato) && dato < 0) {
    console.log("El número es negativo.");
} else if (Number.isInteger(dato) && dato === 0) {
    console.log("El número es cero.");
} else if (Number.isInteger(dato) && dato > 0) {
    console.log("El número es positivo.");
} else {
    console.log("Por favor, ingrese un número entero válido.");
}
