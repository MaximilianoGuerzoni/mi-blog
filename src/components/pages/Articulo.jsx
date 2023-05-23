import React from 'react'
import { useState, useEffect } from 'react'
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';
import { Listado } from './Listado';
import { useParams } from 'react-router-dom';

export const Articulo = () => {


  const [articulo, setArticulo] = useState([]);
  const [cargando, setCargando] = useState(true)
  const params = useParams();

  useEffect(() => {

    conseguirArticulo();

  }, [])


  const conseguirArticulo = async () => {

    const { datos, cargando } = await Peticion(Global.url + "articulo/" + params.id, "GET");

    if (datos.status == "success") {
      setArticulo(datos.articulo);
      setCargando(false);
    }

  }

  return (
    <>
      {cargando ? "Cargando" :
        (


          <>
            <div className='jumbo'>
              <div className='mascara'>
                {articulo.imagen && <img src={Global.url + "imagen/" + articulo.imagen} />}
                {!articulo.imagen && <img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' />}
              </div>
              <h1> {articulo.titulo} </h1>
              <span> {articulo.fecha} </span>
              <p> {articulo.contenido} </p>
            </div>
          </>


        )
      }
    </>
  )
}
