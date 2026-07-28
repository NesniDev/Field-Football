import { FieldCard } from '../Cards/FieldCard'
import type { Field } from '@/models/types'
import { useFields } from '@/hooks/useFields'
import { ButtonSeeMore } from '../common/ButtonSeeMore'
import { Spinner } from '../common/Spinner'
import { AlertCircle } from 'lucide-react'

export const FieldMain = () => {
  const { data: infoData, isLoading, error } = useFields()

  const data = infoData?.data ?? []

  return (
    <section className="py-20 px-5">
      <h2 className="text-3xl md:text-5xl font-bold capitalize text-center mb-6">
        Canchas Destacadas
      </h2>
      <p className="text-center text-gray-600/70 mb-8 w-full max-w-2xl mx-auto">
        Encuentra las canchas mejor valoradas por nuestra comunidad y vive la pasión del fútbol en instalaciones de primera calidad.
      </p>

      {isLoading && <Spinner />}

      {error && (
        <div className="flex flex-col items-center gap-3 py-16">
          <AlertCircle className="size-8 text-red-400" />
          <p className="text-sm text-red-500">No se pudieron cargar las canchas. Intentá de nuevo más tarde.</p>
        </div>
      )}

      {!isLoading && !error && (
        <>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {data.slice(0, 3).map((field: Field) => (
              <FieldCard key={field.id} field={field} />
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <ButtonSeeMore to="/fields" title="Ver más canchas" subtitle="Ir a las canchas"/>
          </div>
        </>
      )}
    </section>
  )
}
