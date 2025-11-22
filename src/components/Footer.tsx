export const Footer = () => {
    return (
        <footer className="container px-10 py-4">
            <div className="flex justify-between items-center gap-4 text-gray-500/90 text-xs">
                <p className="">© {new Date().getFullYear()} Canchas Futbol Chiquinquirá. Todos los derechos reservados.</p>
                <div className="flex justify-between items-center gap-4">
                    <ul className="flex gap-4">
                        <li><a href="/" className="hover:text-gray-500/70 transition">Soporte</a></li>
                        <li><a href="/" className="hover:text-gray-500/70 transition">Política de Privacidad</a></li>
                        <li><a href="/" className="hover:text-gray-500/70 transition">Preguntas Frecuentes</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}