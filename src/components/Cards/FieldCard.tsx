import { NavLink } from "react-router-dom"
import type { Field } from "../../models/types"

interface Props {
    field: Field
}

export const FieldCard = ({field}: Props) => {
    return (
        <article
            key={field.id}
            className="flex flex-col items-start bg-white rounded-xl overflow-hidden shadow-md shadow-emerald-200 transition w-80 h-auto"
          >
            <img
              src={field.image}
              alt={field.title}
              loading="lazy"
              className="w-full h-40 object-cover"
            />
            <div className="flex flex-col items-center gap-4 w-full px-3 font-orbitron">
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
              <div className='flex flex-col justify-start font-semibold items-start w-full flex-1 '>
                <hr className="w-full text-gray-400/20" />
                <span className="text-xs text-gray-500/50 mt-2">Lunes a Domingo</span>
                <span className="text-sm">Desde ${field.price}</span>
              </div>
            </div>
            <div className="flex flex-col px-3 py-2 mx-auto font-orbitron">
              <NavLink
                to={`/field/${field.slug}`}
                className=" block mx-auto bg-btn-dark hover:bg-btn-dark/90 transition-colors focus:outline-none focus:ring-2 focus:ring-btn-dark px-3 py-2 text-xs rounded-lg"
              >
                Reservar
              </NavLink>
            </div>
          </article>
    )
}