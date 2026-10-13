// Convierte 1800 en "$1.800" (formato argentino).
export const formatearPrecio = (numero) => '$' + numero.toLocaleString('es-AR');
