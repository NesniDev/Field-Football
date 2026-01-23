import type { Tournament } from "@/models/tournament"
import { useEffect, useState } from "react"

export const useFetchApiTournaments = () => {
  const [tournamentList, setTournamentList] = useState<Tournament[]>([])
  

  useEffect(() => {
    async function fetchTour () {
      const response = await fetch('http://localhost:1234/tournaments')
      const data = await response.json()
      setTournamentList(data)
    }

    fetchTour()
  }, [])

  return{
    tournamentList,
    setTournamentList,
    
  }
}