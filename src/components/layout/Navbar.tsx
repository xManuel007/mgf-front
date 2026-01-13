import { NavLink } from 'react-router'
import Button from '../ui/button'

const Navbar = () => {
  return (
    <nav
      className="
        fixed bottom-0 left-0
        w-full
        flex
        bg-blue-100
        border-t
        z-50
      "
    >
      <NavLink
        to="/home"
        end
        className="flex-1"
      >
        <Button
          variant="ghost"
          className="w-full h-full py-3"
        >
          Inicio
        </Button>
      </NavLink>

      <NavLink
        to="/practices"
        end
        className="flex-1"
      >
        <Button
          variant="ghost"
          className="w-full h-full py-3"
        >
          Practicas
        </Button>
      </NavLink>
    </nav>
  )
}

export default Navbar
