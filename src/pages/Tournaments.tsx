import type { Tournament } from '@/models/tournament'
import { useFetchApiTournaments } from '@/hooks/useFetchApi'
import { Pagination } from '@/components/common/Pagination'
import { CardTournaments } from '@/components/Cards/CardTournaments'
import { BreadCrumb } from '@/components/Custom/BreadCrumb'

export const Tournaments = () => {
  const { data: infoData, isLoading, limit = 1 } = useFetchApiTournaments()

  const data = infoData?.data ?? []
  const total = infoData?.total ?? 0
  const totalPages = total > 0 ? Math.ceil(total / limit) : 0

  return (
    <section className="px-5 mt-6 max-w-5xl mx-auto">

      <BreadCrumb currentPage="Torneos" />

      {/* Título */}
      <h1 className="mt-4 text-2xl font-bold text-center md:text-3xl">
        Explora Nuestros Torneos
      </h1>

      {/* Descripción */}
      <p className="mt-3 text-sm text-gray-500 text-center  mx-auto ">
        Descubre los torneos activos, inscríbete con tu equipo y compite por
        grandes premios. ¡Demuestra tu talento en la cancha!
      </p>

      {/* Loading */}
      {isLoading && (
        <div className="flex justify-center py-12">
          <div className="w-14 h-14 border-4 border-transparent border-t-green-500 rounded-full animate-spin" />
        </div>
      )}

      {/* Sin datos */}
      {!isLoading && total === 0 && (
        <div className="flex justify-center py-12">
          <p className="text-gray-500 text-center">
            No hay torneos disponibles...
          </p>
        </div>
      )}

      {/* Grid */}
      {!isLoading && total > 0 && (
        <>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {data.map((tournament: Tournament) => (
              <CardTournaments
                key={tournament.id}
                tournament={tournament}
              />
            ))}
          </div>

          <div className="mt-10">
            <Pagination totalPages={totalPages} />
          </div>
        </>
      )}

    </section>
  )
}
