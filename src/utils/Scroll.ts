import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    // Al cambiar de ruta, el navegador hará scroll hacia el inicio de la página
    window.scrollTo(0, 0)
  }, [location]) // El efecto se ejecuta cada vez que la ruta cambia

  return null // Este componente no renderiza nada
}
