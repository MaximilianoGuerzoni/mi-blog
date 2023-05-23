import { useState } from 'react'
import {Inicio} from './components/pages/Inicio'
import {Crear} from './components/pages/Crear'
import {Articulos} from './components/pages/Articulos'
import { Rutas } from './routing/rutas'

function App() {
 
  return (
    <div className="layout">
     
      <Rutas></Rutas>
    </div>
  )
}

export default App
