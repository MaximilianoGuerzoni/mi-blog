import React from 'react'
import { useState} from 'react'
import { useEffect } from 'react'
import { useForm } from '../../helpers/useForm'
import { useParams } from 'react-router-dom'
import { Peticion } from '../../helpers/Peticion'
import { Global } from '../../helpers/Global'

export const Editar = () => {
  const { formulario, enviado, cambiado } = useForm({});
  const [resultado, setResultado] = useState("no_enviado");
  const [articulo, setArticulo] = useState([]);
  const params = useParams();

  useEffect(() => {

    conseguirArticulo();

  }, [])

  const conseguirArticulo = async () => {

    const { datos } = await Peticion(Global.url + "articulo/"+params.id, "GET");

    if (datos.status == "success") {
      setArticulo(datos.articulo);
   
    }

  
  }

  const editarArticulo = async (e) => {
    e.preventDefault();
    //Recoger datos formulario
    let nuevoArticulo = formulario;


    //Guardar articulo en el backend
    const { datos } = await Peticion(Global.url + "articulo/"+params.id, "PUT", nuevoArticulo);

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
      <h1>Editar Articulo</h1>
      <p>Formulario para crear Editar: {articulo.titulo} </p>

      <strong>{resultado == "guardado" ? "Articulo Guardado" : ""}</strong>
      <strong>{resultado == "error" ? "Datos invalidos" : ""}</strong>

      <form className='formulario' onSubmit={editarArticulo}>

        <div className='form-group'>
          <label htmlFor='titulo'>Titulo</label>
          <input type='text' name='titulo' onChange={cambiado} defaultValue={articulo.titulo} />
        </div>

        <div className='form-group'>
          <label htmlFor='contenido'>Contenido</label>
          <textarea name='contenido' onChange={cambiado} defaultValue={articulo.contenido} />
        </div>

        <div className='form-group'>
        <div className='mascara'>
              {articulo.imagen && <img src ={Global.url+"imagen/"+articulo.imagen}/>}
              {!articulo.imagen && <img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' />}
            </div>
          <label htmlFor='file0'>Imagen</label>
          <input type='file' name='file0' id="file" />
        </div>

        <input className='btn-btn' type="submit" value="Guardar" />

      </form>
    </div>
  )
}
