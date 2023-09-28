// Función para sumar dos fracciones con denominador común
function sumarFraccionesConDenominadorComun(fraccion1, fraccion2, fraccion3) {
    const [num1, den1] = fraccion1.split('/').map(Number);
    const [num2, den2] = fraccion2.split('/').map(Number);
    const [num3, den3] = fraccion3.split('/').map(Number);
    // Encontrar el denominador común (MCM)
    const denominadorComun = lcm(den1, den2, den3);

    // Ajustar los numeradores según el nuevo denominador
    const numeradorSuma = (num1 * denominadorComun / den1) + (num2 * denominadorComun / den2) + (num3 * denominadorComun / den3);

    // Mostrar el resultado
    alert(`El resultado de ${fraccion1} + ${fraccion2} + ${fraccion3} es: ${numeradorSuma}/${denominadorComun}`);
}

// Función para encontrar el Mínimo Común Múltiplo (MCM)
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// Función para encontrar el Máximo Común Divisor (MCD)
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

// Obtener la entrada del usuario
const fraccion1 = prompt("Ingrese la primera fracción (en el formato numerador/denominador):");
const fraccion2 = prompt("Ingrese la segunda fracción (en el formato numerador/denominador):");
const fraccion3 = prompt("Ingrese la segunda fracción (en el formato numerador/denominador):");

// Realizar la suma con denominador común y mostrar el resultado
sumarFraccionesConDenominadorComun(fraccion1, fraccion2, fraccion3);
