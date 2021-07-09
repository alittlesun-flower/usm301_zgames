
const cargarMarcas = async()=>{
    //1. Ir a buscar las marcas a la api
    let marcas = await getMarcas();
    //2. Cargar las marcas dentro del select
    let marcaSelect = document.querySelector("#marca-select");
    marcas.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        marcaSelect.appendChild(option);
    });
    
};
//esto ejecuta un codigo aseurandose que el total de la pagina
//incluidos todos sus recursos este cargado antes de ejecutar
document.addEventListener("DOMContentLoaded", ()=>{
    cargarMarcas();
});
//cargarMarcas();
document.querySelector("#registrar-btn").addEventListener("click", async ()=>{
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let marca = document.querySelector("#marca-select").value.trim();
    let anio = document.querySelector("#anio-txt").value.trim();
    let errores = [];
    if(nombre === ""){ //triple igual es IGUALDAD ABSOLUTA
        errores.push("Debe igresar un nombre")
    }else{
        //Validar si la consola existe en el sistema
        let consolas = await getConsolas();
        //Nintendo SWITCH == nintendo switch == Nintendo Switch
        let consolaEncontrada = consolas.find(c=>c.nombre.toLowerCase()=== nombre.toLowerCase());
        if(ConsolaEncontrada != undefined){
            errores.push("La consola ya existe");
        }
    }

    if(isNaN(anio)){
        errores.push("El año debe ser númerico");
    }else if(+anio < 1958){ //2000 < 1960
        errores.push("El año es incorrecto");
    }

    if(errores.length == 0){
        let consola = {};
        consola.nombre = nombre;
        consola.marca = marca;
        consola.anio = anio;
        //TODO: Falta validar!!!
        //Solo esta linea hace:
        //1. Va al controlador, le pasa los datos
        //2. EL controlador crea el modelo
        //3. El modelo ingresa en la base de datos
        //4. Todos felices
        let res = await crearConsola(consola); 
        await Swal.fire("Consola Creada", "Consola creada exitosamente", "info");
        //la linea que viene despues del swal.fire se va a ejecutar solo cuando la persona aprete ok   
        //aqui a redirigir a otra pagina
        window.location.href = "ver_consolas";
        //abrir nueva pestaña
        //window.open("www.google.cl", "_blank");
    }else{
        //mostrar errores
        Swal.fire({
            title: "Errores de validación",
            icon: "warning",
            html: errores.join("<br />") 
        });
    }


 
});