import type { Tournament } from '@/models/tournament'
import { useFetchApiTournaments } from '@/hooks/useFetchApi'
import { Pagination } from '@/components/common/Pagination'
import { CardTournaments } from '@/components/Cards/CardTournaments'
import { BreadCrumb } from '@/components/Custom/BreadCrumb'



export const Tournaments = () => {
  const { data: infoData, isLoading, limit } = useFetchApiTournaments()
  
  const data = infoData?.data ?? []
  const total = infoData?.total ?? 0
  
  const totalPages = Math.ceil(total / limit)
  
  return (
    <section className="max-w-5xl mx-auto mt-5">

      <BreadCrumb currentPage='Torneos' />
      <h1 className="my-4 text-3xl font-bold text-center">Explora Nuestros Torneos</h1>
      <p className="text-center text-gray-500 mb-6 text-sm w-xl mx-auto">
        Descubre los torneos activos, inscríbete con tu equipo y compite por grandes premios. ¡Demuestra tu talento en la cancha!
      </p>

      {isLoading ? (
        <div className="flex-col gap-4 w-full flex items-center justify-center">
          <div className="w-20 h-20 border-4 border-transparent text-green-400 text-4xl animate-spin flex items-center justify-center border-t-green-400 rounded-full">
            <div className="w-16 h-16 border-4 border-transparent text-green-700 text-2xl animate-spin flex items-center justify-center border-t-green-700 rounded-full"></div>
          </div>
        </div>
      ) : (
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-self-center mb-10 gap-5`}
        >
          {total === 0 ? (
            <div>
              <p className="text-center mx-auto">
                No hay torneos disponibles...
              </p>
            </div>
          ) : (
            data.map((tournament: Tournament) => {
              return (
                <CardTournaments
                  key={tournament.id}
                  tournament={tournament}
                />
              )
            })
          )}
        </div>
      )}

      {!isLoading && (total) > 0 && (
        <Pagination
          totalPages={totalPages}
        />
      )}
    </section>
  )
}
