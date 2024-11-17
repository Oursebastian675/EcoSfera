const carrito = []
function añadirAlCarrito(idMensaje) {
    // Obtener el elemento del mensaje de confirmación usando el ID específico para cada producto.
    const mensajeConfirmacion = document.getElementById(idMensaje);
    
    // Mostrar el mensaje de confirmación, quitando la clase "hidden" que lo oculta.
    mensajeConfirmacion.classList.remove("hidden");
    
    // Ocultar el mensaje después de 2 segundos.
    esperaUnMomento(() => {
        mensajeConfirmacion.classList.add("hidden");
    }, 2000); // Espera de 2 segundos (2000 milisegundos)
    let producto = {
        nombreProducto: idMensaje
    }
    carrito.push(producto)
}

// Función de espera personalizada que utiliza "setTimeout" para ejecutar una acción después de un tiempo.
function esperaUnMomento(callback, tiempo) {  //callback: una función a ejecutar después de cierto tiempo.
    setTimeout(callback, tiempo);
}

