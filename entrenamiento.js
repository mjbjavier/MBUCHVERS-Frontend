const nombreSistema = "MBUCHVERS";
let clientesEnFila = 0;
clientesEnFila = 3;
console.log(nombreSistema);
console.log(clientesEnFila);

// 1. Construimos el tren y metemos a tres clientes en los vagones
const filaDeEspera = ["Andrés", "Camila", "Javier"];

// 2. Le pedimos a la consola que nos muestre el tren completo
console.log(filaDeEspera);

// 3. Le pedimos a la consola que mire ÚNICAMENTE dentro del primer vagón (el vagón CERO)
console.log(filaDeEspera[0]);

// 1. Usamos el brazo robótico para enganchar un nuevo vagón al final
filaDeEspera.push("Paolunchis");

// 2. Le pedimos a la consola que nos muestre cómo quedó el tren completo ahora
console.log(filaDeEspera);

// ... (Aquí arriba sigue estando la creación de tu filaDeEspera y los push/console.log) ...

// 1. Encontramos la pantalla una sola vez
const pantalla = document.getElementById("pantalla-turnos");

// 2. Creamos la máquina que solo se activa al presionar el botón
function atenderSiguiente() {
    // Sacamos al primero de la fila
    filaDeEspera.shift();
    
    // Actualizamos la pantalla con el nuevo cliente que quedó en la posición cero
    pantalla.textContent = "Siguiente en ser atendido: " + filaDeEspera[0];
}