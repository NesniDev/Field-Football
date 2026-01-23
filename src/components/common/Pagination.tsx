import { ChevronLeft, ChevronRight } from "lucide-react";
interface Props {
  currentPage: number 
  totalPages: number
  onPageChange: (page: number) => void

}

export const Pagination = ({currentPage = 1, totalPages = 5, onPageChange}:Props) => {

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  const handlePreviousPage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (!isFirstPage) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextPage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (!isLastPage) {
      onPageChange(currentPage + 1)
    }
  }

  const handleChangePage = (e: React.MouseEvent<HTMLAnchorElement>, page: number) => {
    e.preventDefault()
    if (page !== currentPage) {
      onPageChange(page)
    }
  }

    return (
        <>
          <nav className="flex justify-center my-7">
            <ul className="flex gap-3 py-5 text-lg items-center justify-center">
              <li>
               
                    <a href="#" onClick={handlePreviousPage} className={`${isFirstPage ? 'pointer-events-none opacity-20' : ''}`}><ChevronLeft /></a>
                  
                </li>
              {
                pages.map((page) => (
                  <li key={page}>
                    <a href="#" onClick={(e) => handleChangePage(e, page)} className={`${currentPage === page ? 'is-active' : 'hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white '} transition duration-300 px-5 py-3 rounded-2xl cursor-pointer`}>{page}</a>
                  </li>
                ))
              }
              <li>
                <a href="#" onClick={handleNextPage} className={`${isLastPage ? 'pointer-events-none opacity-20' : ''}`}><ChevronRight /></a>
                </li>
            </ul> 
          </nav>
        </>
    )
}