import React from 'react'
import { useState } from 'react'
import { useForm } from '../../helpers/useForm'
import { Peticion } from '../../helpers/Peticion'
import { Global } from '../../helpers/Global'

export const Crear = () => {
  const { formulario, enviado, cambiado } = useForm({});
  const [resultado, setResultado] = useState("no_enviado");


  const guardarArticulo = async (e) => {
    e.preventDefault();
    //Recoger datos formulario
    let nuevoArticulo = formulario;


    //Guardar articulo en el backend
    const { datos } = await Peticion(Global.url + "crear", "POST", nuevoArticulo);

    if(datos.status == "success"){
      setResultado("guarado");
    }else{
      setResultado("error");
    }

    if (datos.status === "success") {
      setResultado("guardado");

      //Subir imagen

      const fileInput = document.querySelector("#file");
      console.log(fileInput);

      const formData = new FormData();
      formData.append('file0', fileInput.files[0]);

      const subida = await Peticion(Global.url + "subir-imagen/" + datos.articulo._id, "POST", formData, true);

    } else {
      setResultado("error");
    }
  }

  return (
    <div className='jumbo'>
      <h1>Crear Articulo</h1>
      <p>Formulario para crear articulo</p>

      <strong>{resultado == "guardado" ? "Articulo Guardado" : ""}</strong>
      <strong>{resultado == "error" ? "Datos invalidos" : ""}</strong>

      <form className='formulario' onSubmit={guardarArticulo}>

        <div className='form-group'>
          <label htmlFor='titulo'>Titulo</label>
          <input type='text' name='titulo' onChange={cambiado} />
        </div>

        <div className='form-group'>
          <label htmlFor='contenido'>Contenido</label>
          <textarea name='contenido' onChange={cambiado} />
        </div>

        <div className='form-group'>
          <label htmlFor='file0'>Imagen</label>
          <input type='file' name='file0' id="file" />
        </div>

        <input className='btn-btn' type="submit" value="Guardar" />

      </form>
    </div>
  )
}
