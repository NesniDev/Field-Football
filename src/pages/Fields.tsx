import { Header } from "@components/common/Header"

export const Fields = () => {
    return (
        <div>
            <Header/>
            <form className="flex justify-center items-center gap-2 bg-emerald-50/30 rounded-xl px-3 py-2">
                <input type="text" className="w-full h-full rounded-lg px-3 py-2 bg-white text-gray-800 placeholder:text-gray-400" placeholder="Buscar cancha" />
                <button type="submit" className="whitespace-nowrap cursor-pointer hover:bg-btn-dark/90 transition-colors focus:outline-none focus:ring-2 focus:ring-btn-dark text-gray-800 bg-btn-dark px-3 py-2 rounded-lg flex-1">Buscar Cancha</button>
            </form>
        </div>
    )
}