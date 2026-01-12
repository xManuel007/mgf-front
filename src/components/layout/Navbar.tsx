import React from 'react'
import Button from '../ui/button'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav className="flex flex-row gap-4 p-4 justify-around bg-blue-100">
      <NavLink to="/home" end>
        <Button variant="ghost" onClick={() => console.log('Incio')}>Incio</Button>
      </NavLink>
      <NavLink to="/practices" end>
        <Button variant="ghost" onClick={() => console.log('Practicas')}>Practicas</Button>
      </NavLink>
      {/* <NavLink to="/games" end>
        <Button variant="ghost" onClick={() => console.log('Juegos')}>Juegos</Button>
      </NavLink> */}
      <NavLink to="/config" end>
        <Button variant="ghost" onClick={() => console.log('Configuracion')}>Configuracion</Button>
      </NavLink>
    </nav>
  )
}
export default Navbar
