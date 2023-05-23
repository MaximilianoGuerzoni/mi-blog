import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const SideBar = () => {

  const navegar = useNavigate();
  const [buscar, setBuscar] = useState();
  const hacerBusqueda = (e) =>{
    let mi_busqueda = e.target.search_field.value;
    navegar("/buscar/"+mi_busqueda, {replace: true});
    

  }

  return (
    <aside className="lateral">
      <div className="search">
        <h3 className="title">Buscador</h3>
        <form onSubmit={hacerBusqueda}>
          <input type="text" id="search_field" />
          <button type='submit' id="search" value ="buscar">Buscar</button>
        </form>
      </div>
    </aside>
  )
}
