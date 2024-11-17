import { usuarios } from "./database.js";

//Constantes botones
const btnLogin = document.getElementById("btnLogin");
const btnRegistro = document.getElementById("btnRegistro");
const btnBlog = document.getElementById('btn-blog');
const btnIngresar = document.getElementById('btn-ingresar');
const btnEcoSfera = document.getElementById('index'); //btn logo EcoSfera seccion principal
const btnEcoSferaFormulario = document.getElementById('index-formulario');//btn logo ScoSfera seccion formulario


//Constantes secciones de la pagina
const cabeceraPrincipal = document.getElementById('cabecera-principal');
const mainIndex = document.getElementById('main-index');
const sectionBlog = document.getElementById('section-blog');
const sectionFormulario = document.getElementById('section-formulario-inicioSesion-registro');
const formLogin = document.getElementById("form-login");
const formRegister = document.getElementById("form-register");
const footerPrincipal = document.getElementById('footer-principal');
const aseoPersonal = document.getElementById('aseoPersonal');
const bienestarYBelleza = document.getElementById('bienestarYBelleza');
const hogar = document.getElementById('hogar');
const mascotas = document.getElementById('mascotas');


//Vistas predefinidas por defecto al renderizar la pagina por primera vez
sectionBlog.classList.add('hidden')
sectionFormulario.classList.add('hidden')
aseoPersonal.classList.add('hidden')
bienestarYBelleza.classList.add('hidden')
hogar.classList.add('hidden')
mascotas.classList.add('hidden')


//Evento del btn logo EcoSfera seccion principal
btnEcoSfera.addEventListener('click', mostrarMain)
function mostrarMain() {
    mainIndex.classList.remove('hidden')
    cabeceraPrincipal.classList.remove('hidden')
    footerPrincipal.classList.remove('hidden')
    sectionBlog.classList.add('hidden')
    sectionFormulario.classList.add('hidden')
    aseoPersonal.classList.add('hidden')
    bienestarYBelleza.classList.add('hidden')
    hogar.classList.add('hidden')
    mascotas.classList.add('hidden')
    document.getElementById('categoria').selectedIndex = 0;
    document.getElementById('categoria').style = "color: ##94a3b8;"
}

//Evento del btn logo EcoSfera seccion formulario
btnEcoSferaFormulario.addEventListener('click', mostrarMain)

// Evento del menu desplegable Elegir categoria
document.getElementById('categoria').addEventListener('input', mostrarCatalogoCategoria);
function mostrarCatalogoCategoria() {
    let categoria = document.getElementById('categoria').value
    switch (categoria) {
        case 'aseoPersonal':
            document.getElementById('categoria').style = "color: black;"
            aseoPersonal.classList.remove('hidden')
            mainIndex.classList.add('hidden')
            sectionBlog.classList.add('hidden')
            sectionFormulario.classList.add('hidden')
            hogar.classList.add('hidden')
            bienestarYBelleza.classList.add('hidden')
            mascotas.classList.add('hidden')
            break;
        case 'hogar':
            document.getElementById('categoria').style = "color: black;"
            aseoPersonal.classList.add('hidden')
            mainIndex.classList.add('hidden')
            sectionBlog.classList.add('hidden')
            sectionFormulario.classList.add('hidden')
            hogar.classList.remove('hidden')
            bienestarYBelleza.classList.add('hidden')
            mascotas.classList.add('hidden')
        break;
        case 'bienestarYBelleza':
            document.getElementById('categoria').style = "color: black;"
            aseoPersonal.classList.add('hidden')
            mainIndex.classList.add('hidden')
            sectionBlog.classList.add('hidden')
            sectionFormulario.classList.add('hidden')
            hogar.classList.add('hidden')
            bienestarYBelleza.classList.remove('hidden')
            mascotas.classList.add('hidden')
        break;
        case 'mascotas':
            document.getElementById('categoria').style = "color: black;"
            aseoPersonal.classList.add('hidden')
            mainIndex.classList.add('hidden')
            sectionBlog.classList.add('hidden')
            sectionFormulario.classList.add('hidden')
            hogar.classList.add('hidden')
            bienestarYBelleza.classList.add('hidden')
            mascotas.classList.remove('hidden')
            break;
    
        default:
            break;
    }    
}

// Mostrar vista de la seccion blog
btnBlog.addEventListener('click', mostrarBlog)
function mostrarBlog() {
    sectionBlog.classList.remove('hidden');
    mainIndex.classList.add('hidden');
    aseoPersonal.classList.add('hidden');
    hogar.classList.add('hidden');
    mascotas.classList.add('hidden');
    bienestarYBelleza.classList.add('hidden');
    document.getElementById('categoria').selectedIndex = 0;
    document.getElementById('categoria').style = "color: ##94a3b8;"

}

// Mostrar vista del menu inicio de sesión y registro
btnIngresar.addEventListener('click', mostrarFormularioInicioSesion)
function mostrarFormularioInicioSesion() {
    sectionFormulario.classList.remove('hidden')
    cabeceraPrincipal.classList.add('hidden')
    mainIndex.classList.add('hidden')
    footerPrincipal.classList.add('hidden')
    sectionBlog.classList.add('hidden')
    aseoPersonal.classList.add('hidden');
    hogar.classList.add('hidden');
    mascotas.classList.add('hidden');
    bienestarYBelleza.classList.add('hidden');
}

// Al hacer clic en "¿No tienes cuenta?", mostramos el formulario de registro y ocultamos el de inicio de sesión
btnLogin.addEventListener("click", (event) => {
    event.preventDefault(); // Evita cualquier acción predeterminada, como recargar la página
    formLogin.classList.add("hidden");
    formRegister.classList.remove("hidden");
});

// Al hacer clic en "¿Ya tienes una cuenta?", mostramos el formulario de inicio de sesión y ocultamos el de registro
btnRegistro.addEventListener("click", (event) => {
    event.preventDefault(); // Evita cualquier acción predeterminada, como recargar la página
    formRegister.classList.add("hidden");
    formLogin.classList.remove("hidden");
});

// Evento btn inicio de sesión
document.getElementById('btnIniciarSesion').addEventListener('click', iniciarSesion)
function iniciarSesion() {
    let nombreusuario = document.getElementById('usuario').value
    let contrasena = document.getElementById('contrasena').value

    let confirmarUsuario = usuarios.find((usuario) => {
        if (usuario.nombreUsuario == nombreusuario && usuario.contrasena == contrasena) {
            let timerInterval;
            Swal.fire({
                title: "¡Bienvenido!",
                html: "Iniciando sesión <h1></h1> milliseconds.",
                timer: 1000,
                timerProgressBar: true,
                icon: 'suses',
                didOpen: () => {
                    Swal.showLoading();
                    const timer = Swal.getPopup().querySelector("h1");
                    timerInterval = setInterval(() => {
                        timer.textContent = `${Swal.getTimerLeft()}`;
                    }, 100);
                },
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log("I was closed by the timer");
                }
            });
            mostrarMain()
            formLogin.reset();
        }else{
            Swal.fire({
                title: "Error",
                text: "Usuario y/o contraseña incorrectos o no existen",
                icon: "error"
              });
        }
    })

}

// Evento btn registrar usuario
document.getElementById('btnRegistrarUsuario').addEventListener('click', registrarUsuario)
function registrarUsuario() {
    let nombre = document.getElementById('rNombre').value
    let correo = document.getElementById('rCorreo').value
    let contrasena = document.getElementById('rContrasena').value
    let nombreUsuario = document.getElementById('rUsuario').value
    let confirmarRegistro = usuarios.find((usuario) => {
        if (usuario.nombreUsuario == nombreUsuario) {
            Swal.fire({
                title: "Error",
                text: "Este nombe de usuario ya esta registrado",
                icon: "error"
              });
        }else{
            let usuario = {
                nombre: nombre,
                correo: correo,
                contrasena: contrasena,
                nombreUsuario: nombreUsuario
            }
            usuarios.push(usuario)
            Swal.fire({
                title: "¡Usuario registrado con éxito!",
                text: "Puedes iniciar sesión ahora.",
                icon: "success",
            });
            formRegister.classList.add('hidden')
            formLogin.classList.remove('hidden')
            formRegister.reset();
        }
    })
    
}

//---------------funcion de anadir al carrito








// /*Carol rivera*/
// // Crear una funcion que permita al usuario hacer una busqueda de productos.
// document.getElementById('searchInput').addEventListener('input', filterProducts);
// document.getElementById('categorySelect').addEventListener('change', filterProducts);

// function busquedaDeProductos() {
//     /Carol rivera/
//     // Crear una funcion que permita al usuario hacer una busqueda de productos. 
//     const searchQuery = document.getElementById('searchInput').value.toLowerCase();
//     const selectedCategory = document.getElementById('categorySelect').value;
//     const products = document.querySelectorAll('#productList li');

//     products.forEach(product => {
//         const productName = product.textContent.toLowerCase();
//         const productCategory = product.getAttribute('data-category');

//         const matchesSearch = productName.includes(searchQuery);
//         const matchesCategory = selectedCategory === 'all' || productCategory === selectedCategory;

//         if (matchesSearch && matchesCategory) {
//             product.style.display = 'block';
//         } else {
//             product.style.display = 'none';
//         }
//     });
// }


function agregarAlCarrito(params) {
    /*Sebastian Pedroza */
    //Crear una funcion en la cual el usuario pueda agregar un producto al carrito de compras.
}



