
const vehiculos = [
    {
        marca: "Opel",
        modelo: "Corsa",
        precio: "12.900 €",
        km: "5000 km",
        img: "opelAstra.jpg",
        portada: true,
        venta: true
    },
    {
        marca: "Ford",
        modelo: "Mondeo",
        precio: "15.900 €",
        km: "8500 km",
        img: "fordMondeo.jpg",
        portada: false,
        venta: true
    },
    {
        marca: "Ford",
        modelo: "Mondeo",
        precio: "15.900 €",
        km: "8500 km",
        img: "fordMondeo.jpg",
        portada: false,
        venta: true
    },
    {
        marca: "Ford",
        modelo: "Mondeo",
        precio: "15.900 €",
        km: "8500 km",
        img: "fordMondeo.jpg",
        portada: false,
        venta: true
    },
    {
        marca: "Ford",
        modelo: "Mondeo",
        precio: "15.900 €",
        km: "8500 km",
        img: "fordMondeo.jpg",
        portada: false,
        venta: true
    },
    {
        marca: "Peugeot",
        modelo: "Partner",
        precio: "8.900 €",
        km: "2500 km",
        img: "peugeotPartner.jpg",
        portada: false,
        venta: false
    }
]

const RUTA_INICIAL = "img/";

function dataHTML(marca, modelo, precio, km, img, portada) {
    let portadaHTML = portada ? "active" : "";
    let urlImg = RUTA_INICIAL + img;
    const taskHTML = `
    <div class="carousel-item ${portadaHTML}">
                      <div class="card bg-dark text-white">
                        <img src="${urlImg}" class="card-img" alt="...">
                        <div class="card-img-overlay">
                          <h5 class="card-title">${marca}+${modelo}</h5>
                          <p class="card-text">${precio}</p>
                          <p class="card-text">${km}</p>
                        </div>
                      </div>
                    </div>
    `;
    return taskHTML
}

function taskListHTML(taskArray) {
    let HTMLtext = "";
    for (let item of taskArray) {
        const HTMLelemento = dataHTML(item.marca, item.modelo, item.precio, item.km, item.img, item.portada)
        HTMLtext += HTMLelemento;
    }
    return HTMLtext
}
/**
 * Función que dependiendo del número de botones introducidos devuelve una cantidad 
 * de botones
 * @param {int} boton - Número de botones a introducir
 * @returns Texto HTML 
 */
function botonHTML(boton) {
    let HTMLtext = `
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      `;
    if (boton>1){
        for(let i=1;i<boton;i++){
            HTMLtext+=`
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" aria-label="Slide ${i+1}"></button>
            `;
        }
    }
    return HTMLtext
}

console.log(botonHTML(5));

function insertTasksHTML(taskArray, element) {
    const div = document.querySelector(element);
    div.innerHTML = taskListHTML(taskArray);
}
/**
 * Función que selecciona un elemento del html e invoca 
 * a otra función para indicarle cuantos botones queremos introducir
 * @param {int} boton - Número de botones a insertar
 * @param {string} element - Elemento html donde quiero insertar los botones 
 */
function insertButtoms(boton, element) {
    const div = document.querySelector(element);
    div.innerHTML =botonHTML(boton);
}

taskListHTML(vehiculos);

let vehiculosEleccion = []

/**
 * Función que segrega los vehiculos en función si están en venta o alquiler
 * en un nuevo array
 * @param {Array} vehiculos - Array con todos los vehículos
 * @param {boolean} venta - Booleano, si es true=venta, si 
 * @returns vehiculosEleccion
 */
function segregateVehicule(vehiculos, tipoVenta) {

    for (let i = 0; i < vehiculos.length; i++) {
        if (vehiculos[i].venta == tipoVenta) {
            vehiculosEleccion.push(vehiculos[i]);
        }
    }
    console.log(vehiculosEleccion);
    return vehiculosEleccion;
}

const vehnuevo = segregateVehicule(vehiculos, true);
console.log(vehnuevo);


window.addEventListener('load', insertTasksHTML(vehnuevo, "#ofertasVenta"));

window.addEventListener('load', insertButtoms(vehnuevo.length, "#botonesVenta"));