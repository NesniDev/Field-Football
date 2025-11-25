import { fields } from '@lib/fields'
import { NavLink } from 'react-router-dom'

export const Field = () => {
  return (
    <section className="container mx-auto p-0 my-20">
      <h2 className="text-5xl font-bold capitalize text-center mb-6">
        Canchas Destacadas
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {fields.slice(0, 3).map((field, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-white rounded-xl overflow-hidden shadow-md shadow-emerald-200 transition w-[350px] h-auto"
          >
            <img
              src={field.image}
              alt={field.title}
              loading="lazy"
              className="w-full h-40 object-cover"
            />
            <div className="flex flex-col items-center gap-4 w-full px-3">
              <div className='flex justify-between items-center gap-2 w-full mx-3 flex-1 '>
                <div className="py-2 flex flex-col ">
                  <h3 className="text-lg font-semibold capitalize">
                    {field.title}
                  </h3>
                  <p className="text-gray-500/90 text-xs">{field.address}</p>
                </div>
                <div className="px-2 py-1 bg-btn-dark/10 rounded-xl">
                  <span className="text-sm text-btn-dark/70 font-bold flex items-center whitespace-nowrap">
                    ☆ {field.punctuation}
                  </span>
                </div>
              </div>
              <div className='flex flex-col justify-start font-semibold font-lexend items-start w-full flex-1'>
                <hr className="w-full text-gray-400/20" />
                <span className="text-xs text-gray-500/50 mt-2">Lunes a Domingo</span>
                <span className="text-sm">Desde ${field.price}</span>
              </div>
            </div>
            <div className="flex flex-col px-3 py-2 mx-auto ">
              <a
                href="/"
                className=" block mx-auto bg-btn-dark hover:bg-btn-dark/90 transition-colors focus:outline-none focus:ring-2 focus:ring-btn-dark px-3 py-2 text-xs rounded-lg"
              >
                Reservar
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <NavLink to="/fields" className="group relative w-auto cursor-pointer overflow-hidden rounded-full border border-gray-200 bg-white px-5 py-2 text-center font-medium text-gray-900 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:text-white dark:hover:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-gray-900 transition-all duration-300 group-hover:scale-[100.8] dark:bg-btn-dark" />
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
