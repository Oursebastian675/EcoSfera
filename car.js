// Variables
const carrito = document.querySelector('#carrito');
const listaProductos = document.querySelector('#lista-productos');
const aseoPersonal = document.querySelector('#aseoPersonal');
const bienestarYBelleza = document.querySelector('#bienestarYBelleza');
const hogar = document.querySelector('#hogar');
const mascotas = document.querySelector('#mascotas');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];


cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     listaProductos.addEventListener('click', agregarProducto);

     aseoPersonal.addEventListener('click', agregarProducto);
     
     bienestarYBelleza.addEventListener('click', agregarProducto);

     hogar.addEventListener('click', agregarProducto);

     mascotas.addEventListener('click', agregarProducto);

     // Cuando se elimina un producto del carrito
     carrito.addEventListener('click', eliminarProducto);

     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}


// Función que añade el producto al carrito
function agregarProducto(llave) {
     llave.preventDefault();
     // para agregar al carrito
     if (llave.target.classList.contains('agregar-carrito')) {
          const producto = llave.target.parentElement.parentElement;

         
          // datos del producto
          leerDatosProductos(producto);
     }
}


     


// Leer los datos del producto
function leerDatosProductos(producto) {
     const infoProducto = {
          imagen: producto.querySelector('img').src,
          titulo: producto.querySelector('p').textContent,
          precio: producto.querySelector('.font-medium span ').textContent,
          id: producto.querySelector('button').getAttribute('data-id'),
          cantidad: 1
     }


     if (articulosCarrito.some(producto => producto.id === infoProducto.id)) {
          const productos = articulosCarrito.map(producto => {
               if (producto.id === infoProducto.id) {
                    producto.cantidad++;
                    return producto;
               } else {
                    return producto;
               }
          })
          articulosCarrito = [...productos];
     } else {
          articulosCarrito = [...articulosCarrito, infoProducto];
     }


     carritoHTML();
}

// Elimina el producto del carrito
function eliminarProducto(llave) {
     llave.preventDefault();
     if (llave.target.classList.contains('borrar-producto')) {
          const productoId = llave.target.getAttribute('data-id')

          // Eliminar del arreglo del carrito
          articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);

          carritoHTML();
     }
}


// Muestra el producto seleccionado en el Carrito
function carritoHTML() {

     vaciarCarrito();

     articulosCarrito.forEach(producto => {
          const fila = document.createElement('tr');
          fila.innerHTML = `
              <td>  
                   <img src="${producto.imagen}" width=100>
              </td>
              <td>${producto.titulo}</td>
              <td>${producto.precio}</td>
              <td>${producto.cantidad} </td>
              <td>
                   <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
              </td>
         `;
          contenedorCarrito.appendChild(fila);
     });

}

// Elimina los productos del carrito
function vaciarCarrito() {
     while (contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
     }
}
