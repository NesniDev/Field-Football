import { fields } from "../lib/fields"

export const Field = () => {
    return (
        <section className="container mx-auto mb-10">
            <h2 className="text-5xl font-bold capitalize text-center mb-6">Canchas Destacadas</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {fields.slice(0, 3).map((field, index) => (
                    <div key={index} className="flex flex-col items-start bg-white rounded-xl overflow-hidden shadow-md shadow-emerald-200 transition w-96 h-auto" >
                        <img src={field.image} alt={field.title} loading="lazy" className="w-full h-40 object-fill" />
                        <div className="flex justify-between items-center gap-4 w-full pr-3 flex-1">
                            <div className="px-3 py-2 flex flex-col ">
                                <h3 className="text-lg font-semibold capitalize">{field.title}</h3>
                                <p className="text-gray-500/90 text-xs">{field.address}</p>
                            </div>
                            <div className="px-2 py-1 bg-btn-dark/10 rounded-xl">
                                <span className="text-sm text-btn-dark/70 font-bold flex items-center whitespace-nowrap">☆ {field.punctuation}</span>
                            </div>
                        </div>
                        <div className="flex flex-col px-3 py-2 mx-auto ">
                            <a href="/" className=" block mx-auto bg-btn-dark hover:bg-btn-dark/90 transition-colors focus:outline-none focus:ring-2 focus:ring-btn-dark px-3 py-2 text-xs rounded-lg">Reservar</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}