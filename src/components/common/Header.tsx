import { NavLink, useLocation } from 'react-router-dom'

interface HeaderProps {
    color?: string
}

export const Header = ({color}: HeaderProps) => {
  const {pathname} = useLocation()
  return (
    <header className={`max-w-5xl mx-auto`}>
      <nav className="flex justify-between items-center font-orbitron">
        <NavLink to="/">
          <img src="/balon.webp" alt="Logo" className='size-18'/>
        </NavLink>
        <ul className={`flex gap-4 font-semibold ${color === 'white' ? 'text-gray-100' : 'text-gray-800'}`}>
          {pathname !== '/' && (
            <li>
              <NavLink to="/" className={`transition ${color === 'change' ? 'hover:text-gray-700/80' : 'text-white hover:text-gray-300/80'}`}>
                Inicio
              </NavLink>
            </li>
          )}
          <li>
            <NavLink to="/fields" className={`transition ${color === 'change' ? 'hover:text-gray-700/80' : 'text-white hover:text-gray-300/80'}`}>
              Canchas
            </NavLink>
          </li>
          <li>
            <NavLink to="/reservations" className={`transition ${color === 'change' ? 'hover:text-gray-700/80' : 'text-white hover:text-gray-300/80'}`}>
              Reservas
            </NavLink>
          </li>
          <li>
            <NavLink to="/tournaments" className={`transition ${color === 'change' ? 'hover:text-gray-700/80' : 'text-white hover:text-gray-300/80'}`}>
              Torneos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={`transition ${color === 'change' ? 'hover:text-gray-700/80' : 'text-white hover:text-gray-300/80'}`}>
              Contacto
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-2 font-semibold text-sm text-gray-800">
          <NavLink
            to="/"
            className="px-3 py-2 rounded-lg bg-btn-dark hover:bg-btn-dark/70 transition-colors focus:outline-none focus:ring-2 focus:ring-btn-dark"
          >
            Iniciar Sesión
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
