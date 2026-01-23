import useFieldsFetchStore from '@/store/useFieldsFetch.store'
import { useEffect } from 'react'
import { NavLink} from 'react-router-dom'
import { FieldCard } from '../Cards/FieldCard'
import type { InfoField } from '@/models/types'

export const Field = () => {

  const { data, isLoading, error, fetchData } = useFieldsFetchStore()

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <section className="my-20">
      <h2 className="text-5xl font-bold capitalize text-center mb-6">
        Canchas Destacadas
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {data.slice(0, 3).map((field: InfoField) => (
          <FieldCard key={field.id} field={field} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <NavLink to="/fields" className="group font-lexend relative w-auto cursor-pointer overflow-hidden rounded-full border border-gray-200 bg-white px-5 py-2 text-center font-medium text-gray-900 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:text-white dark:hover:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-btn-dark transition-all duration-300 group-hover:scale-[100.8]" />
            <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
              Ver más canchas...
            </span>
          </div>
          <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-3 bg-btn-dark text-white opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100 dark:bg-btn-dark dark:text-gray-900">
            <div className="flex items-center gap-3 whitespace-nowrap">
              <span className="leading-none font-medium">Ir a las canchas</span>
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
