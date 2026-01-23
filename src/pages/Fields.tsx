
import { NavLink} from "react-router-dom"
import { TbSoccerField  } from "react-icons/tb";
import { IoMdCloseCircle   } from "react-icons/io";
import { useFields } from "@/hooks/useFields";
import { Pagination } from "@/components/common/Pagination";
import { useState } from "react";

export const Fields = () => {
    
    const {setQuery, clean,handleSubmit,results,query} = useFields()

    const [currentPage, setCurrentPage] = useState<number>(1)
    const totalPages = 5

    const handleOnPageChange = (page: number) => {
      setCurrentPage(page)
    }

    return (
        <>
            <div className="max-w-5xl container mx-auto">
                <form className="relative flex justify-center font-orbitron items-center transition-all duration-300 max-w-lg mx-auto gap-3 mt-8 bg-gray-400/40  rounded-lg px-4 py-2 group focus-within:ring-2 focus-within:ring-offset-green-200 focus-within:ring-offset-2 focus-within:ring-green-600" onSubmit={handleSubmit}> 
                    <TbSoccerField  className="h-11 w-11 text-green-900 transition-all duration-300 group-focus-within:rotate-45 group-focus-within:text-green-700"/>
                    <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" className="w-full h-10 outline-none placeholder:text-gray-500 " placeholder="Nombre de la cancha" />
                    <button  className="bg-btn-dark px-3 py-2 rounded-lg cursor-pointer hover:bg-btn-dark/90 transition text-sm font-medium">Buscar</button>
                    {
                        query && ( <span onClick={() => clean()}  className="absolute -top-2.5 -right-2.5 text-2xl cursor-pointer transition font-bold bg-white rounded-full"><IoMdCloseCircle /></span>)
                    }
                </form>
                <section className="flex flex-wrap items-center justify-center gap-4 my-8 font-orbitron">
                    {
                      results.length > 0 ? results.map((field, index) => (

                        <NavLink to={`/field/${field.slug}`} key={index} className="flex flex-col items-center gap-2 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition duration-800">
                          <img src={field.image} alt={field.title} className="w-80 h-96 object-cover group-hover:scale-110 transition duration-800"/>
                          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
                          <div>
                          <div className="absolute bottom-4 left-4 ">
                              <h2 className="text-xl font-semibold text-white">{field.title}</h2>
                              <p className="text-xs text-gray-200/60">{field.address}</p>
                          </div>
                          </div>
                        </NavLink>
                      )) : (
                        <p className="text-center text-gray-600 font-semibold text-lg mt-8 ">No se encontraron resultados</p>
                      )
                    }
                </section>
            </div>
            <Pagination onPageChange={handleOnPageChange} currentPage={currentPage} totalPages={totalPages}/>
        </>
    )
}