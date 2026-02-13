export const Footer = () => {
    return (
        <footer className="max-w-5xl mx-auto px-10 py-4">
            <div className="flex justify-center items-center w-full gap-4 text-gray-500/90 text-sm font-orbitron flex-col text-center md:flex-row md:text-left">
                <p className="flex flex-col justify-center"><span>© {new Date().getFullYear()} Canchas Futbol, Chiquinquirá.</span> <span>Todos los derechos reservados.</span></p>
                <div className="flex justify-between items-center gap-4">
                    <ul className="flex flex-col items-center justify-center md:flex-row gap-4 text-black font-semibold">
                        <li><a href="/" className="hover:text-gray-500/70 transition">Soporte</a></li>
                        <li><a href="/" className="hover:text-gray-500/70 transition">Política de Privacidad</a></li>
                        <li><a href="/faq" className="hover:text-gray-500/70 transition">Preguntas Frecuentes</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}