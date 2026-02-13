import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { NavLink, useLocation } from 'react-router-dom'

interface HeaderProps {
  color?: string
}

export const Header = ({ color }: HeaderProps) => {
  const { pathname } = useLocation()

  const isActive = (path: string) => pathname === path

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className={`max-w-5xl mx-auto`}>
      <nav className="hidden md:flex items-center justify-between py-4 px-4 md:px-6 lg:px-8 font-orbitron">
        <NavLink to="/">
          <img src="/balon.webp" alt="Logo" className="size-18" />
        </NavLink>
        <ul
          className={`flex gap-4 font-semibold ${color === 'white' ? 'text-gray-100' : 'text-gray-800'}`}
        >
          {pathname !== '/' && (
            <li>
              <NavLink
                to="/"
                className={`transition ${color === 'change' ? 'hover:text-gray-700/80' : 'text-white hover:text-gray-300/80'}`}
              >
                Inicio
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              to="/fields"
              className={`px-2 py-1 transition duration-300 ${color === 'change' ? ` ${isActive('/fields') ? 'bg-gray-200/15 border border-gray-300 rounded-sm' : 'hover:text-gray-700/80'} ` : 'text-white hover:text-gray-300/80'}`}
            >
              Canchas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reservations"
              className={`px-2 py-1 transition duration-300 ${color === 'change' ? ` ${isActive('/reservations') ? 'bg-gray-200/15 border border-gray-300 rounded-sm' : 'hover:text-gray-700/80'} ` : 'text-white hover:text-gray-300/80'}`}
            >
              Reservas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tournaments"
              className={`px-2 py-1 transition duration-300 ${color === 'change' ? ` ${isActive('/tournaments') ? 'bg-gray-200/15 border border-gray-300 rounded-sm' : 'hover:text-gray-700/80'} ` : 'text-white hover:text-gray-300/80'}`}
            >
              Torneos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={`px-2 py-1 transition duration-300 ${color === 'change' ? ` ${isActive('/contact') ? 'bg-gray-200/15 border border-gray-300 rounded-sm' : 'hover:text-gray-700/80'} ` : 'text-white hover:text-gray-300/80'}`}
            >
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
      {/* Mobile */}
      <nav className="md:hidden flex items-center justify-between py-4 px-6 relative text-black">
        <NavLink to="/">
          <img src="/balon.webp" alt="Logo" className="w-14 h-14" />
        </NavLink>

        <button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          className={`text-3xl z-50 ${ pathname !== '/' ? 'text-black' : ' text-white'}`}
        >
          {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={closeMenu}
        />

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col gap-6 p-6 pt-20 font-semibold">
            {
              pathname !== '/' &&
              <NavLink to="/" onClick={closeMenu}>
                Inicio
              </NavLink>
            }

            <NavLink to="/fields" onClick={closeMenu}>
              Canchas
            </NavLink>

            <NavLink to="/reservations" onClick={closeMenu}>
              Reservas
            </NavLink>

            <NavLink to="/tournaments" onClick={closeMenu}>
              Torneos
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu}>
              Contacto
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}
