import type { Tournament } from '@/models/tournament'
import { useFetchApiTournaments } from '@/hooks/useFetchApi'
import { CardTournaments } from '../Cards/CardTournaments'
import { ButtonSeeMore } from '../common/ButtonSeeMore'
import { Spinner } from '../common/Spinner'
import { AlertCircle } from 'lucide-react'

export const HomeTournament = () => {
  const {data: infoData, isLoading, error} = useFetchApiTournaments()

  const data = infoData?.data ?? []

  return (
    <section className="py-20 px-5">
      <h2 className="text-4xl md:text-5xl font-bold capitalize text-center mb-6">
        Torneos Disponibles
      </h2>
      <p className="text-center text-gray-600/70">
        Compite y demuestra quién es el mejor en la cancha.
      </p>

      {isLoading && <Spinner />}

      {error && (
        <div className="flex flex-col items-center gap-3 py-16">
          <AlertCircle className="size-8 text-red-400" />
          <p className="text-sm text-red-500">No se pudieron cargar los torneos. Intentá de nuevo más tarde.</p>
        </div>
      )}

      {!isLoading && !error && (
        <>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-5">
            {data.slice(0, 2).map((tournament: Tournament) => (
              <CardTournaments key={tournament.id} tournament={tournament}  />
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <ButtonSeeMore to="/tournaments" title="Ver más torneos" subtitle="Ir a los torneos"/>
          </div>
        </>
      )}
    </section>
  )
}
