import type { Tournament } from '@/models/tournament'
import { useFetchApiTournaments } from '@/hooks/useFetchApi'
import { Pagination } from '@/components/common/Pagination'
import { CardTournaments } from '@/components/Cards/CardTournaments'
import { BreadCrumb } from '@/components/Custom/BreadCrumb'
import { SelectAlignItem } from '@/components/common/SelectFilter'

export const Tournaments = () => {
  const { data: infoData, isLoading, limit = 1, setSearchParams } = useFetchApiTournaments()

  const data = infoData?.data ?? []
  const total = infoData?.total ?? 0
  const totalPages = total > 0 ? Math.ceil(total / limit) : 0

  const handleFilter = (status: string, nameParams: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev)

      if (status === 'Todos') {
        newParams.delete(nameParams)
      } else {
        newParams.set(nameParams, status)
      }

      newParams.set('page', '1')

      return newParams
  })
}

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

      {/* Filtros */}
      {
        !isLoading && (
          <section className="mt-6 flex gap-2 items-center justify-center">
            <div className="flex flex-col items-center gap-1.5 text-xs">
              <SelectAlignItem category='La Disponibilidad' options={['Todos', 'Abierto', 'Finalizado', 'Últimos cupos', 'Próximamente']} onValueChange={(value) => handleFilter(value, 'availability')}/>
            </div>
            <div className="flex flex-col items-center gap-1.5 text-xs">
              <SelectAlignItem category='El Género' options={['Todos', 'Masculino', 'Femenino', 'Mixto']} onValueChange={(value) => handleFilter(value, 'genre')}/>
            </div>
            <div className="flex flex-col items-center gap-1.5 text-xs">
              <SelectAlignItem category='La Ciudad' options={['Todos', 'Chiquinquirá', 'Duitama', 'Tunja', 'Sogamoso', 'Paipa', 'Tibasosa', 'Bucaramanga', 'Nobsa']} onValueChange={(value) => handleFilter(value, 'city')}/>
            </div>
          </section>
        )
      }

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
