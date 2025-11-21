export const Header = () => {
    return (
        <header className="p-4 text-gray-100">
            <nav className="flex justify-between items-center container mx-auto ">
                <a href="/"><img src="vite.svg" alt="Logo" /></a>
                <ul className="flex gap-4 font-semibold text-gray-100 ">
                    <li><a href="/" className="hover:text-gray-100/70 transition">Canchas</a></li>
                    <li><a href="/" className="hover:text-gray-100/70 transition">Reservas</a></li>
                    <li><a href="/" className="hover:text-gray-100/70 transition">Eventos</a></li>
                    <li><a href="/" className="hover:text-gray-100/70 transition">Contacto</a></li>
                </ul>
                <div className="flex gap-2 font-semibold text-sm text-gray-800">
                    <a href="/" className="px-3 py-2 rounded-lg bg-btn-dark hover:bg-btn-dark/70 transition-colors focus:outline-none focus:ring-2 focus:ring-btn-dark">Iniciar Sesión</a>
                </div>
            </nav>
        </header>
    )
}