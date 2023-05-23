export const Peticion = async (url, metodo, datosGuardar = "", archivos = false) => {

    let cargando = true;

    let opciones = {
        method: "GET"
    };

    if (metodo == "GET" || metodo == "DELETE") {
        opciones = {
            method: metodo,
        };
    }

    if (metodo == "POST" || metodo == "PUT") {

        let body = JSON.stringify(datosGuardar);

        if(archivos){
            opciones = {
                method:metodo,
                body:datosGuardar
            }
            
        } else{
            opciones = {
                method: metodo,
                body: JSON.stringify(datosGuardar),
                headers: { // Corrección aquí: debe ser "headers" en lugar de "header"
                    "Content-Type": "application/json" // Corrección aquí: debe ser "Content-Type" en lugar de "Content Type"
                }
            }
        }

     
    }

    const peticion = await fetch(url, opciones); // Pasar opciones a la función fetch
    const datos = await peticion.json();


    cargando = false;

    return {
        datos,
        cargando
    }
}