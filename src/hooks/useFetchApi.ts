import type { Tournament } from "@/models/tournament"
import { useEffect, useState } from "react"

export const useFetchApiTournaments = () => {
  const [tournamentList, setTournamentList] = useState<Tournament[]>([])
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTournament () {
      const response = await fetch('https://backend-eight-rose-88.vercel.app/tournaments')
      const data = await response.json()
      setTournamentList(data)
      setLoading(false)
    }

    fetchTournament()
  }, [])

  return{
    tournamentList,
    setTournamentList,
    loading    
  }
}