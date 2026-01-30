import { NavLink } from 'react-router-dom'
import type { Field } from '../../models/types'

interface Props {
  field: Field
}

export const FieldCard = ({ field }: Props) => {
  const handlePrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price)
  }
  return (
    <article
      key={field.id}
      className="group flex flex-col items-start bg-white rounded-xl overflow-hidden shadow-md shadow-emerald-200 transition w-80 hover:-translate-1 duration-800"
    >
      <NavLink
        to={`/fields/${field.slug}`}
        className="flex flex-col items-center rounded-lg overflow-hidden relative h-full"
      >
        <img
          src={field.image}
          alt={field.title}
          className="w-80 h-96 object-cover group-hover:scale-110 transition duration-800"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
        <div>
          <div className="absolute bottom-4 left-4 ">
            <div className="flex justify-evenly items-center ">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {field.title}
                </h2>
                <p className="text-xs text-gray-200/60">{field.address}</p>
              </div>
            </div>
          </div>
          <div className="absolute right-4 bottom-4">
            <p className="text-xs text-white font-semibold">{handlePrice(field.price)}</p>
          </div>
          <span
            className={`absolute top-2 right-2 text-xs rounded-lg px-2 py-1 font-bold ${
              Number(field.punctuation) >= 4
                ? 'inline-flex items-center rounded-md bg-green-400/70 px-2 py-1 font-medium text-white inset-ring inset-ring-green-500/20'
                : Number(field.punctuation) >= 3
                  ? 'inline-flex items-center rounded-md bg-yellow-400/70 px-2 py-1 font-medium text-white inset-ring inset-ring-yellow-500/20'
                  : Number(field.punctuation) >= 1
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
