import type { Tournament } from '@/models/tournament'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { GiTrophy } from 'react-icons/gi'
import { MdLocationPin } from 'react-icons/md'

interface Props {
  tournament: Tournament
  isRegistered: boolean
  onRegister: () => void
  onUnRegister: () => void
}

export const CardTournaments = ({ tournament, isRegistered, onRegister, onUnRegister }: Props) => {

  return (
    <>
      <article
        className="flex flex-col items-start bg-white rounded-xl overflow-hidden shadow-md shadow-emerald-200 transition w-72 h-full"
      >
        <img
          src={tournament.image}
          alt={tournament.title}
          loading="lazy"
          className="w-full h-40 object-cover"
        />
        <div className="flex flex-col items-center gap-4 w-full px-3 flex-1">
          <div className="flex justify-between items-center gap-2 w-full mx-3 flex-1 ">
            <div className="py-2 flex flex-col gap-2">
              <div className="flex items-center gap-2 font-orbitron">
                <span
                  className={`text-[9px] rounded-lg px-2 py-1 font-bold ${
                    tournament.availability === 'Abierto'
                      ? 'inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 font-medium text-green-400 inset-ring inset-ring-green-500/20'
                      : tournament.availability === 'Últimos cupos'
                        ? 'inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 font-medium text-red-400 inset-ring inset-ring-red-500/20'
                        : tournament.availability === 'Finalizado'
                          ? 'inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 font-medium text-gray-400 inset-ring inset-ring-gray-400/20'
                          : tournament.availability === 'Próximamente'
                            ? 'inline-flex items-center rounded-md bg-teal-400/10 px-2 py-1 font-medium text-teal-400 inset-ring inset-ring-teal-500/20'
                            : ''
                  }`}
                >
                  {tournament.availability}
                </span>
                <span
                  className={`text-[9px] rounded-lg px-2 py-1 font-bold ${
                    tournament.genre === 'Femenino'
                      ? 'inline-flex items-center rounded-md bg-rose-400/10 px-2 py-1 font-medium text-rose-400 inset-ring inset-ring-rose-500/20'
                      : tournament.genre === 'Masculino'
                        ? 'inline-flex items-center rounded-md bg-amber-400/10 px-2 py-1 font-medium text-amber-400 inset-ring inset-ring-amber-500/20'
                        : tournament.genre === 'Mixto'
                          ? 'inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 font-medium text-blue-400 inset-ring inset-ring-blue-400/20'
                          : ''
                  }`}
                >
                  {tournament.genre}
                </span>
              </div>
              <h3 className="text-base font-semibold capitalize font-orbitron">
                {tournament.title}
              </h3>
              <div className="flex flex-col gap-2">
                <span className="text-xs text-green-900/60 flex justify-start items-center gap-1">
                  <FaRegCalendarAlt /> {tournament.date}
                </span>
                <span className="text-xs text-green-900/60 flex justify-start items-center gap-1">
                  <MdLocationPin /> {tournament.location.city},{' '}
                  {tournament.location.address}
                </span>
                <span className="text-xs text-green-900/60 flex justify-start items-center gap-1">
                  <GiTrophy /> Precio: ${tournament.income}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 px-3 py-2 mx-auto">
          <button
            onClick={onRegister}
            disabled={
              isRegistered ||
              tournament.availability === 'Finalizado'
            }
            className={` ${isRegistered || tournament.availability === 'Finalizado' ? 'cursor-not-allowed bg-gray-400/80 text-gray-200 select-none' : 'cursor-pointer bg-btn-dark/80 hover:bg-btn-dark'} block mx-auto  transition-colors focus:outline-none focus:ring-2 focus:ring-btn-dark px-3 py-2 text-xs rounded-lg`}
          >
            {tournament.availability === 'Finalizado'
              ? 'Finalizado'
              : isRegistered
                ? 'Inscrito'
                : 'Inscribirse'}
          </button>
          {isRegistered && (
            <button
              onClick={onUnRegister}
              className="bg-red-400 hover:bg-red-500 transition-colors text-white text-xs px-3 py-2 rounded-lg cursor-pointer"
            >
              Cancelar
            </button>
          )}
        </div>
      </article>
    </>
  )
}
