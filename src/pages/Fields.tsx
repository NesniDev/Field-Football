import { fields } from "@lib/fields"
import { NavLink} from "react-router-dom"

export const Fields = () => {
    return (
        <>
            <div className="container mx-auto">
                <form className="flex flex-col justify-center items-center gap-2 max-w-md mx-auto mt-8">
                    <div className="flex gap-1">
                        <input type="text" className="w-full h-full rounded-lg px-3 py-2 bg-gray-400/50 text-black placeholder:text-gray-500" placeholder="Buscar cancha" />
                        <button type="submit" className="whitespace-nowrap cursor-pointer hover:bg-btn-dark/90 transition-colors focus:outline-none focus:ring-2 focus:ring-btn-dark text-gray-800 bg-btn-dark px-3 py-1.5 rounded-lg flex-1">Buscar</button>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1 mt-4">
                        <label htmlFor="" className="text-sm font-semibold">Filtrar por:</label>
                        <select name="" id="" className="w-full h-full rounded-lg px-3 py-1.5 bg-gray-300/50 text-black">
                            <option value="todos">Todos</option>
                            <option value="disponibles">Disponibles</option>
                            <option value="reservadas">Reservadas</option>
                        </select>
                    </div>
                </form>
                <section className="flex flex-wrap items-center justify-center gap-4 my-8">
                    {
                        fields.map((field, index) => (

                            <NavLink to={`/field/${field.slug}`} key={index} className="flex flex-col items-center gap-2 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition duration-800">
                                <img src={field.image} alt={field.title} className="w-64 h-72 object-cover group-hover:scale-110 transition duration-800"/>
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
                                <div>
                                <div className="absolute bottom-4 left-4 ">
                                    <h2 className="text-xl font-semibold text-white">{field.title}</h2>
                                    <p className="text-xs text-gray-200/60">{field.address}</p>
                                </div>
                                </div>
                            </NavLink>
                        ))
                    }
                </section>
            </div>
        </>
    )
}