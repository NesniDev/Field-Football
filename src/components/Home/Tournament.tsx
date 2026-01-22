import { NavLink } from 'react-router-dom'
import type { Tournament } from '@/models/tournament'
import { useFetchApiTournaments } from '@/hooks/useFetchApi'

export const HomeTournament = () => {
  const {tournamentList} = useFetchApiTournaments()
  return (
    <section className="my-20">
      <h2 className="text-5xl font-bold capitalize text-center mb-6">
        Torneos Disponibles
      </h2>
      <p className="text-center text-gray-600/70">
        Compite y demuestra quién es el mejor en la cancha.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 place-self-center mt-5">
        {tournamentList.slice(0, 2).map((tournament: Tournament) => (
          <div
            key={tournament.id}
            className="flex flex-col justify-center items-end bg-white rounded-xl overflow-hidden transition w-[500px] h-full relative group cursor-pointer"
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
                    {tournament.location.city}, {tournament.location.address}
                </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <NavLink to="/tournaments" className="group font-lexend relative w-auto cursor-pointer overflow-hidden rounded-full border border-gray-200 bg-white px-5 py-2 text-center font-medium text-gray-900 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:text-white dark:hover:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-btn-dark transition-all duration-300 group-hover:scale-[100.8]" />
            <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
              Ver más torneos...
            </span>
          </div>
          <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-3 bg-btn-dark text-white opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100 dark:bg-btn-dark dark:text-gray-900">
            <div className="flex items-center gap-3 whitespace-nowrap">
              <span className="leading-none font-medium">Ir a los torneos</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 leading-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12h14"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 6l6 6-6 6"
                />
              </svg>
            </div>
          </div>
        </NavLink>
      </div>
    </section>
  )
}
