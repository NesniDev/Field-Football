import type { Tournament } from '@/models/tournament'
import { useFetchApiTournaments } from '@/hooks/useFetchApi'
import { CardTournaments } from '../Cards/CardTournaments'
import { ButtonSeeMore } from '../common/ButtonSeeMore'

export const HomeTournament = () => {
  const {data: infoData} = useFetchApiTournaments()

  const data = infoData?.data ?? []
  return (
    <section className="my-20">
      <h2 className="text-5xl font-bold capitalize text-center mb-6">
        Torneos Disponibles
      </h2>
      <p className="text-center text-gray-600/70">
        Compite y demuestra quién es el mejor en la cancha.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 place-self-center mt-5">
        {data.slice(0, 2).map((tournament: Tournament) => (
          <CardTournaments key={tournament.id} tournament={tournament}  />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <ButtonSeeMore to="/tournaments" title="Ver más torneos" subtitle="Ir a los torneos"/>
        
      </div>
    </section>
  )
}
