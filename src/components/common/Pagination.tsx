import { ChevronLeft, ChevronRight } from "lucide-react";
interface Props {
  cuantity: number

}

export const Pagination = ({cuantity = 5}:Props) => {
    return (
        <>
          <nav className="flex justify-center my-7">
            <ul className="flex gap-3 py-5 text-lg items-center justify-center">
              <li><a href="#"><ChevronLeft /></a></li>
              {
                Array.from({ length: cuantity }, (_, index) => index + 1).map((page, index) => (
                  <li key={page}>
                    <a href="#" className={`${index === 0 ? 'is-active' : ''} hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white transition duration-300 px-5 py-3 rounded-2xl cursor-pointer`}>{page}</a>
                  </li>
                ))
              }
              <li><a href="#" ><ChevronRight /></a></li>
            </ul> 
          </nav>
        </>
    )
}