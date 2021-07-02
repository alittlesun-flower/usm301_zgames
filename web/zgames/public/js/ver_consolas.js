const cargarTabla = (consolas)=>{
    //1. obtener una referencia al cuerpo de la tabla
    let tbody = document.querySelector("#tbody-consola");
    //2. recorrer todas las tablas
    for(let i=0; i < consolas.length; ++i){
        //3. por cada consola generar una fila
        let tr = document.createElement("tr");
        //4. generar por cada atributo de la consola, un td
        let tdNombre = document.createElement("td");
        tdNombre.innerText = consolas[i].nombre;
        let tdMarca = document.createElement("td");
        tdMarca.innerText = consolas[i].marca;
        let tdAnio = document.createElement("td");
        tdAnio.innerText = consolas[i].anio;
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.idConsola = consolas[i].id;
        tdAcciones.appendChild(botonEliminar);
        //5. agregar los td al tr
        tr.appendChild(tdNombre);
        tr.appendChild(tdMarca);
        tr.appendChild(tdAnio);
        tr.appendChild(tdAcciones);
        //6. agregar el tr al cuerpo de la tabla
        tbody.appendChild(tr);
    }

};

document.addEventListener("DOMContentLoaded", async()=>{
    //aqui voy a cargar la tabla de las consolas porque si entra aqui
    // lo que haga en esta parte estoy seguro que se esta ejecutando
    //cuando la pagina esta totalmente cargada
    let consolas = await getConsolas();
    //console.log(consolas);
    cargarTabla(consolas);
});