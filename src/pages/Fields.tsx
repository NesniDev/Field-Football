
import { NavLink} from "react-router-dom"
import { TbSoccerField  } from "react-icons/tb";
import { IoMdCloseCircle   } from "react-icons/io";
import { useFields } from "@/hooks/useFields";
import { Pagination } from "@/components/common/Pagination";
import { BreadCrumb } from "@/components/Custom/BreadCrumb";

export const Fields = () => {
  
    const {setInputValue, clean,handleSubmit,inputValue, data, isLoading, limit} = useFields()

    if (!data) return

    const pagesResults = Math.ceil(data.total / limit)

    return (
        <>
            <div className="max-w-5xl container mx-auto">
                <BreadCrumb currentPage="Fields"/>
                <form className="relative flex justify-center font-orbitron items-center transition-all duration-300 max-w-lg mx-auto gap-3 mt-8 bg-gray-400/40  rounded-lg px-4 py-2 group focus-within:ring-2 focus-within:ring-offset-green-200 focus-within:ring-offset-2 focus-within:ring-green-600" onSubmit={handleSubmit}> 
                    <TbSoccerField  className="h-11 w-11 text-green-900 transition-all duration-300 group-focus-within:rotate-45 group-focus-within:text-green-700"/>
                    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" className="w-full h-10 outline-none placeholder:text-gray-500 " placeholder="Nombre de la cancha" />
                    <button  className="bg-btn-dark px-3 py-2 rounded-lg cursor-pointer hover:bg-btn-dark/90 transition text-sm font-medium">Buscar</button>
                    {
                      inputValue && ( <span onClick={() => clean()}  className="absolute -top-2.5 -right-2.5 text-2xl cursor-pointer transition font-bold bg-white rounded-full"><IoMdCloseCircle /></span>)
                    }
                </form>
                <section className="flex flex-wrap items-center justify-center gap-4 my-8 font-orbitron">
                  {isLoading ? (
                    <div className="flex-col gap-4 w-full flex items-center justify-center">
                      <div className="w-20 h-20 border-4 border-transparent text-green-400 text-4xl animate-spin flex items-center justify-center border-t-green-400 rounded-full">
                        <div className="w-16 h-16 border-4 border-transparent text-green-700 text-2xl animate-spin flex items-center justify-center border-t-green-700 rounded-full"></div>
                      </div>
                    </div>
                  ) : (
                    
                      pagesResults > 0 ? data?.data.map((field, index) => (

                        <NavLink to={`/fields/${field.slug}`} key={index} className="flex flex-col items-center gap-2 rounded-lg overflow-hidden relative group hover:-translate-y-1 transition duration-800">
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
                    )}
                </section>
            { !isLoading && <Pagination totalPages={pagesResults}/>}
            </div>
        </>
    )
}