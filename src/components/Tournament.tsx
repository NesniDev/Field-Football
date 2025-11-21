import { tournament } from '../lib/tournament'

export const Tournament = () => {
  return (
    <section className="container mx-auto">
      <h2 className="text-5xl font-bold capitalize text-center mb-6">
        Torneos Disponibles
      </h2>
      <p className="text-center text-gray-600/70">
        Compite y demuestra quién es el mejor en la cancha.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 place-self-center mt-5">
        {tournament.slice(0, 2).map((tournament, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-end bg-white rounded-xl overflow-hidden shadow-md shadow-emerald-200 transition w-[500px] h-full relative group cursor-pointer"
          >
            <div className="relative">
                <img
                    src={tournament.image}
                    alt={tournament.title}
                    loading="lazy"
                    className="object-cover w-full h-full group-hover:scale-110 transition duration-800"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
            <div className="hidden animated-button flex-col justify-end gap-1 h-full transition absolute bottom-4 left-4 right-4 m-4 group-hover:flex translate-y-28 group-hover:translate-y-0 ">
                <div className="flex items-center gap-2">
                    <span
                        className={`text-xs rounded-lg px-2 py-1 font-bold ${
                        tournament.availability === 'Abierto'
                            ? 'inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 font-medium text-green-400 inset-ring inset-ring-green-500/20'
                            : tournament.availability === 'Últimos cupos'
                            ? 'inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 font-medium text-red-400 inset-ring inset-ring-red-500/20'
                            : tournament.availability === 'Finalizado'
                            ? 'inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 font-medium text-gray-400 inset-ring inset-ring-gray-400/20'
                            : ''
                        }`}
                    >
                        {tournament.availability}
                    </span>
                </div>
                <h3 className="text-2xl font-semibold capitalize text-white">
                    {tournament.title}
                </h3>
                <p className="text-xs text-gray-100/50 ">
                    {tournament.description}
                </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
