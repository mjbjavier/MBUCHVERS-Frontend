async function cargarClientes() {
    // 1. Traemos los datos de Python
    let respuesta = await fetch("http://127.0.0.1:8000/clientes");
    let clientes = await respuesta.json();
    
    // 2. Enganchamos el contenedor HTML
    let contenedor = document.getElementById("contenedor-clientes");
    
    // 3. Borramos el texto de "Cargando..."
    contenedor.innerHTML = "";
    
    // 4. Recorremos la lista y diseñamos una tarjeta por cada cliente
    for (let cliente of clientes) {
        
        // Usamos comillas invertidas (backticks) para escribir HTML multilínea
        let tarjetaHTML = `
            <div class="bg-slate-700 p-4 rounded-lg border-l-4 border-cyan-500 shadow-md flex justify-between items-center hover:bg-slate-600 transition-colors">
                <div>
                    <h2 class="text-xl font-bold text-white">${cliente.nombre}</h2>
                    <p class="text-slate-300 text-sm">Motivo: <span class="font-semibold text-cyan-300">${cliente.motivo}</span></p>
                </div>
                <button onclick="atenderCliente('${cliente.nombre}')" class="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-lg text-sm transition-transform active:scale-95">
                    Atender
                </button>
            </div>
        `;
        
        // Inyectamos la tarjeta en la pantalla
        contenedor.innerHTML += tarjetaHTML;
    }
}

cargarClientes();

async function atenderCliente(nombreCliente) {
    console.log(`Avisando al servidor que atendimos a ${nombreCliente}...`);
    
    // Hacemos un fetch, pero le aclaramos que es un ataque tipo DELETE
    await fetch(`http://127.0.0.1:8000/clientes/${nombreCliente}`, {
        method: 'DELETE'
    });
    
    // Como el cliente ya se borró del servidor, volvemos a cargar la lista limpia
    cargarClientes();
}