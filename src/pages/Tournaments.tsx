import { useState } from 'react';
import type { Tournament } from '@/models/tournament'
import { useFetchApiTournaments } from '@/hooks/useFetchApi'
import { Pagination } from "@/components/common/Pagination";
import { CardTournaments } from '@/components/Tournaments/CardTournaments'


const RESULT_PER_PAGE = 3

export const Tournaments = () => {
  const {tournamentList } = useFetchApiTournaments()  
  const [currentPage, setCurrentPage] = useState(1)
  const [register, setRegister] = useState<string[]>([])
  const MAX = 3

  const totalPages = Math.ceil(tournamentList.length / RESULT_PER_PAGE)
  const pageResults = tournamentList.slice((currentPage - 1) * RESULT_PER_PAGE, currentPage * RESULT_PER_PAGE)

  const handleOnPageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleRegister = (title: string) => {
    if (register.includes(title)) return
    
    if (register.length >= MAX) {
      alert('Ya has inscrito el máximo de torneos')
      return 
    }

    setRegister((prev) => [...prev, title])
  }

  const handleUnRegister = (title: string) => {
    const filteredItems = register.filter(item => item !== title)
    setRegister(filteredItems)
  }


  
  return (
    <section className="max-w-5xl mx-auto mt-5">
      <h1 className="my-7 text-3xl font-bold">Explora Nuestros Torneos</h1>
      

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-self-center mb-10 gap-5">
      {
        
        pageResults.map((tournament: Tournament) => (
          <CardTournaments 
          key={tournament.id} 
              tournament={tournament}
              isRegistered={register.includes(tournament.title)}
              onRegister={() => handleRegister(tournament.title)}
              onUnRegister={() => handleUnRegister(tournament.title)}
              
            />
          ))
      }
        
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handleOnPageChange}/>
    </section>
  )
}
