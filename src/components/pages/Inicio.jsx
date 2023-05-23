import React from 'react'
import { Link } from 'react-router-dom'
export const Inicio = () => {
  return (
    <div className='jumbo'>
      <h1>BLOG CON REACT</h1>
      <img src='mernstack.png' alt='mernstack-icons'/>
      <strong>
      <p>Blog desarrolllado con MERNSTACK MONGO, EXPRESS, REACT, Y NODE</p>
      </strong>
      <Link to="/articulos" className="button">Ver articulos</Link>
    </div>
  )
}
