import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";
interface Props {
  totalPages: number 
}

export const Pagination = ({ totalPages = 5}:Props) => {

  const [searchParams, setSearchParams] = useSearchParams()

  const queryPage = searchParams.get('page') ?? '1'

  const page = isNaN(+queryPage) ? 1 : +queryPage

  const handleChangePage = (page: number) => {
    if(page < 1 || page > totalPages) return

    setSearchParams((prev) => {
      prev.set('page', page.toString())
      return prev
    })
    
  }

    return (
        <>
          <nav className="flex justify-center my-7">
            <ul className="flex gap-3 py-5 text-lg items-center justify-center">
              <li>
               
                    <button onClick={()=>handleChangePage(page -1)} className={`${page === 1 ? 'pointer-events-none opacity-20' : ''}`}><ChevronLeft /></button>
                  
                </li>
              {
                Array.from({length: totalPages}).map((_, index) => (
                  <li key={index}>
                    <button onClick={()=>handleChangePage(index + 1)} className={`${page === index + 1 ? 'is-active' : 'hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white '} transition duration-300 px-5 py-3 rounded-2xl cursor-pointer`}>{index + 1}</button>
                  </li>
                ))
              }
              <li>
                <button onClick={()=>handleChangePage(page + 1)} className={`${page === totalPages ? 'pointer-events-none opacity-20' : ''}`}><ChevronRight /></button>
                </li>
            </ul> 
          </nav>
        </>
    )
}