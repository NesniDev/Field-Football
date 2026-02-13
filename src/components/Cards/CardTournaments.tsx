import type { Tournament } from '@/models/tournament'
import { MdGroups2 } from "react-icons/md";
import { MdAppRegistration } from "react-icons/md";
import { GiTrophiesShelf } from "react-icons/gi";



import { MdLocationPin } from 'react-icons/md'
import { useState } from 'react';

interface Props {
  tournament: Tournament
}

const MAXTOURNAMENT = 3

export const CardTournaments = ({
  tournament
}: Props) => {
  const [register, setRegister] = useState<string[]>([])
    const handleRegister = (title: string) => {
      if (register.includes(title)) return
  
      if (register.length >= MAXTOURNAMENT) {
        alert('Ya has inscrito el máximo de torneos')
        return
      }
  
      setRegister((prev) => [...prev, title])
    }
  
    const handleUnRegister = (title: string) => {
      const filteredItems = register.filter((item) => item !== title)
      setRegister(filteredItems)
    }
  

  const handleDay = (date: string) => {
    const [day, month, year] = date.split(' ')
    
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    let indexMonth = 0
    if(months.includes(month)){
      indexMonth = months.indexOf(month)
    }    
    const nameDay = new Date(+year, indexMonth, +day).toLocaleDateString('es-CO', { weekday: 'long' }).toUpperCase()
    return nameDay
  }


  const formatNumber = (number: number) => {

      const formateador = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0 // Para que no muestre centavos si no los necesitas
      });

      return formateador.format(number)

  }
  return (
    <>
      <article
        className={`flex flex-col items-start bg-white rounded-3xl overflow-hidden shadow-md ${tournament.availability === 'Abierto' ? 'shadow-emerald-300' : tournament.availability === 'Últimos cupos' ? 'shadow-red-300' : tournament.availability === 'Finalizado' ? 'shadow-gray-300' : tournament.availability === 'Próximamente' ? 'shadow-yellow-300' : ''} transition size-full`}
      >
        <div
          className={`flex flex-col justify-center items-center gap-1 mx-auto py-2 size-full ${tournament.availability === 'Abierto' ? 'bg-btn-dark' : tournament.availability === 'Últimos cupos' ? 'bg-red-500' : tournament.availability === 'Finalizado' ? 'bg-gray-500' : tournament.availability === 'Próximamente' ? 'bg-yellow-500' : tournament.availability === 'Finalizado' ? 'bg-gray-500' : ''}`}
        >
          <span className="text-xl font-extrabold font-orbitron">{tournament.date.slice(0, 6)}</span>
          <span className="text-xs font-orbitron font-semibold">
            {handleDay(tournament.date)} {tournament.startTime}
          </span>
        </div>
          <img
            src={tournament.image}
            alt={tournament.title}
            loading="lazy"
            className="w-full md:w-fit mx-auto h-40 sm:h-48 object-cover my-4 rounded-2xl"
          />
          <div className="flex flex-col items-center gap-4 w-full px-3 flex-1">
            <div className="flex justify-between items-center gap-2 w-full mx-3 flex-1 ">
              <div className="mx-1 flex flex-col justify-center gap-2 w-full ">
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
                <h3 className="text-lg font-bold capitalize font-orbitron">
                  {tournament.title}
                </h3>
                
                <div className="flex flex-col gap-2">
                  
                  <span className="text-xs text-green-900/60 flex justify-start items-center gap-1">
                    <MdLocationPin className="size-6 text-green-500" />{' '}
                    {tournament.location.city}, {tournament.location.address}
                  </span>
                  <span className="text-xs text-green-900/60 flex justify-start items-center gap-1">
                    <MdGroups2 className="size-6 text-green-500" />{' '}
                    {tournament.type}
                  </span>
                  <span className="text-xs text-green-900/60 flex justify-start items-center gap-1">
                    <MdAppRegistration className="size-6 text-green-500" /> Inscripción: {formatNumber(+tournament.income)}
                  </span>
                  <span className="text-lg text-green-900/60 flex justify-center items-center gap-1 mt-5 font-medium">
                    <GiTrophiesShelf className="size-8 text-green-500" />{' '}
                    {formatNumber(+tournament.awardWinner)}
                  </span>
                </div>
                <hr className="w-full my-2 text-gray-400/20" />
              </div>
            </div>
          </div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-2 py-2 mx-auto mb-2">
          <button
            onClick={() => handleRegister(tournament.title)}
            disabled={register.includes(tournament.title) || tournament.availability === 'Finalizado'}
            className={` ${register.includes(tournament.title) || tournament.availability === 'Finalizado' ? ' text-center cursor-not-allowed bg-gray-400/80 text-gray-200 select-none' : 'cursor-pointer bg-btn-dark/80 hover:bg-btn-dark'} transition-colors focus:outline-none focus:ring-2 focus:ring-btn-dark px-4 py-3 text-sm rounded-lg font-medium font-orbitron`}
          >
            {tournament.availability === 'Finalizado'
              ? 'Finalizado'
              : register.includes(tournament.title)
                ? 'Inscrito'
                : 'Inscribirse'}
          </button>
          {register.includes(tournament.title) && (
            <button
              onClick={() => handleUnRegister(tournament.title)}
              className="bg-red-500 hover:bg-red-400 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-btn-dark px-4 py-3 text-sm rounded-lg font-medium font-orbitron cursor-pointer"
            >
              Cancelar
            </button>
          )}
        </div>
      </article>
    </>
  )
}
