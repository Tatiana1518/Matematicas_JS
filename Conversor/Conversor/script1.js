/*Conversor de unidad de longitud

Ejemplo 1: Función para convertir unidades de longitud y mostrar el resultado en un alert
function convertirLongitudYAlert(valor, unidadOrigen, unidadDestino) {
    const factoresConversion = {
        km: {
            hm: 10,
            dam: 100,
            m: 1000,
            dm: 10000,
            cm: 100000,
            mm: 1000000
        },
        hm: {
            km: 0.1,
            dam: 10,
            m: 100,
            dm: 1000,
            cm: 10000,
            mm: 100000
        },
        dam: {
            km: 0.01,
            hm: 0.1,
            m: 10,
            dm: 100,
            cm: 1000,
            mm: 10000
        },
        m: {
            km: 0.001,
            hm: 0.01,
            dam: 0.1,
            dm: 10,
            cm: 100,
            mm: 1000
        },
        dm: {
            km: 0.0001,
            hm: 0.001,
            dam: 0.01,
            m: 0.1,
            cm: 10,
            mm: 100
        },
        cm: {
            km: 0.00001,
            hm: 0.0001,
            dam: 0.001,
            m: 0.01,
            dm: 0.1,
            mm: 10
        },
        mm: {
            km: 0.000001,
            hm: 0.00001,
            dam: 0.0001,
            m: 0.001,
            dm: 0.01,
            cm: 0.1
        }
    };

    if (!factoresConversion[unidadOrigen] || !factoresConversion[unidadDestino]) {
        alert("Unidad de longitud no válida");
        return;
    }

    const factor = factoresConversion[unidadOrigen][unidadDestino];
    const resultado = valor * factor;

    alert(`${valor} ${unidadOrigen} es igual a ${resultado.toFixed(2)} ${unidadDestino}`);
}

// Ejemplo de uso
const valor = parseFloat(prompt("Ingrese un valor:"));
const unidadOrigen = prompt("Seleccione la unidad de origen (km, hm, dam, m, dm, cm, mm):");
const unidadDestino = prompt("Seleccione la unidad de destino (km, hm, dam, m, dm, cm, mm):");

convertirLongitudYAlert(valor, unidadOrigen, unidadDestino);
*/

// Ejemplo 2: Función para convertir unidades de longitud y mostrar el resultado en un alert sin decimales
function convertirLongitudYAlert(valor, unidadOrigen, unidadDestino) {
    const factoresConversion = {
        km: { hm: 10, dam: 100, m: 1000, dm: 10000, cm: 100000, mm: 1000000 },
        hm: { km: 0.1, dam: 10, m: 100, dm: 1000, cm: 10000, mm: 100000 },
        dam: { km: 0.01, hm: 0.1, m: 10, dm: 100, cm: 1000, mm: 10000 },
        m: { km: 0.001, hm: 0.01, dam: 0.1, dm: 10, cm: 100, mm: 1000 },
        dm: { km: 0.0001, hm: 0.001, dam: 0.01, m: 0.1, cm: 10, mm: 100 },
        cm: { km: 0.00001, hm: 0.0001, dam: 0.001, m: 0.01, dm: 0.1, mm: 10 },
        mm: { km: 0.000001, hm: 0.00001, dam: 0.0001, m: 0.001, dm: 0.01, cm: 0.1 }
    };

    if (!factoresConversion[unidadOrigen] || !factoresConversion[unidadDestino]) {
        alert("Unidad de longitud no válida");
        return;
    }

    const factor = factoresConversion[unidadOrigen][unidadDestino];
    const resultado = Math.round(valor * factor);

    alert(`${valor} ${unidadOrigen} es igual a ${resultado} ${unidadDestino}`);
}

// Ejemplo de uso
const valor = parseFloat(prompt("Ingrese un valor:"));
const unidadOrigen = prompt("Seleccione la unidad de origen (km, hm, dam, m, dm, cm, mm):");
const unidadDestino = prompt("Seleccione la unidad de destino (km, hm, dam, m, dm, cm, mm):");

convertirLongitudYAlert(valor, unidadOrigen, unidadDestino);
