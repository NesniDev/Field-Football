import { NavLink } from 'react-router-dom'
import type { Field } from '../../models/types'

interface Props {
  field: Field
}

export const FieldCard = ({ field }: Props) => {
  return (
    <article
      key={field.id}
      className="flex flex-col items-start bg-white rounded-xl overflow-hidden shadow-md shadow-emerald-200 transition w-80 h-auto hover:-translate-y-1 transition duration-800"
    >
      <NavLink
        to={`/fields/${field.slug}`}
        className="flex flex-col items-center gap-2 rounded-lg overflow-hidden relative group "
      >
        <img
          src={field.image}
          alt={field.title}
          className="w-80 h-96 object-cover group-hover:scale-110 transition duration-800"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
        <div>
          <div className="absolute bottom-4 left-4 ">
            <h2 className="text-xl font-semibold text-white">{field.title}</h2>
            <p className="text-xs text-gray-200/60">{field.address}</p>
          </div>
          
        <span
            className={`absolute top-2 right-2 text-xs rounded-lg px-2 py-1 font-bold ${
              Number(field.punctuation) <= 5
                ? 'inline-flex items-center rounded-md bg-green-400/70 px-2 py-1 font-medium text-white inset-ring inset-ring-green-500/20'
                : Number(field.punctuation) <= 4
                  ? 'inline-flex items-center rounded-md bg-yellow-400/70 px-2 py-1 font-medium text-white inset-ring inset-ring-yellow-500/20'
                  : Number(field.punctuation) <= 3
                    ? 'inline-flex items-center rounded-md bg-red-400/70 px-2 py-1 font-medium text-white inset-ring inset-ring-red-500/20'
                    : ''
            }`}
          >
            {Number(field.punctuation).toFixed(1)}
          </span>
        </div>
      </NavLink>
    </article>
  )
}

// K

{
  /* <div
            key={tournament.id}
            className="flex flex-col justify-center items-end bg-white rounded-xl overflow-hidden transition w-[500px] h-full relative group cursor-pointer"
          >
            <div className="relative">
                <img
                    src={tournament.image}
                    alt={tournament.title}
                    loading="lazy"
                    className="object-cover w-full h-full group-hover:scale-110 transition duration-800"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
            <div className="hidden animated-button flex-col justify-end gap-1 h-full transition absolute bottom-4 left-4 right-4 m-4 group-hover:flex translate-y-28 group-hover:translate-y-0 ">
                <div className="flex items-center gap-2">
                    <span
                        className={`text-xs rounded-lg px-2 py-1 font-bold ${
                        tournament.availability === 'Abierto'
                            ? 'inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 font-medium text-green-400 inset-ring inset-ring-green-500/20'
                            : tournament.availability === 'Últimos cupos'
                            ? 'inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 font-medium text-red-400 inset-ring inset-ring-red-500/20'
                            : tournament.availability === 'Finalizado'
                            ? 'inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 font-medium text-gray-400 inset-ring inset-ring-gray-400/20'
                            : ''
                        }`}
                    >
                        {tournament.availability}
                    </span>
                </div>
                <h3 className="text-2xl font-semibold capitalize text-white">
                    {tournament.title}
                </h3>
                <p className="text-xs text-gray-100/50 ">
                    {tournament.location.city}, {tournament.location.address}
                </p>
            </div>
          </div> */
}
