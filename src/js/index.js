
const vehiculos = [
    {
        marca: "Opel",
        modelo: "Corsa",
        precio: "12.900 €",
        km: "5000 km",
        img: "opelAstra.jpg",
        portada: true
    },
    {
        marca: "Ford",
        modelo: "Mondeo",
        precio: "15.900 €",
        km: "8500 km",
        img: "fordMondeo.jpg",
        portada: false
    },
    {
        marca: "Peugeot",
        modelo: "Partner",
        precio: "8.900 €",
        km: "2500 km",
        img: "peugeotPartner.jpg",
        portada: false
    }
]



function dataHTML(marca, modelo, precio, km, img, portada) {
    let portadaHTML = portada ? "active" : "";
    let urlImg="img/"+img;
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

function insertTasksHTML(taskArray, element) {
    const div = document.querySelector(element);
    div.innerHTML = taskListHTML(taskArray);
}

taskListHTML(vehiculos);

window.addEventListener('load', insertTasksHTML(vehiculos, "#ofertasVenta"))