import { Header } from "./Header";

export const Hero = () => {
    const styles = {
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.2)), url(/images/hero.avif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
    };
    return (
        <section className="text-white" style={styles}>
            <Header />
            <div className="flex flex-col justify-center gap-3 container max-w-3xl mx-auto h-full text-center">
                <h1 className="text-5xl font-bold capitalize" >Tu próximo partido empieza aquí. Encuentra y reserva tu cancha ideal.</h1>
                <p className="text-sm">Reserva tu cancha favorita.</p>
                <form className="flex justify-center items-center gap-2 bg-emerald-50/30 rounded-xl px-3 py-2">
                    <input type="text" className="w-full h-full rounded-lg px-3 py-2 bg-white text-gray-800 placeholder:text-gray-400" placeholder="Buscar cancha" />
                    <button type="submit" className="whitespace-nowrap cursor-pointer hover:bg-btn-dark/90 transition-colors focus:outline-none focus:ring-2 focus:ring-btn-dark text-gray-800 bg-btn-dark px-3 py-2 rounded-lg flex-1">Buscar Cancha</button>
                </form>
            </div>
        </section>
    )
}