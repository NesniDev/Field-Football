import useTournamentStore from "@/store/useTournament.store"
import { useEffect} from "react"

export const useFetchApiTournaments = () => {
  const {data,isLoading,fetchData} = useTournamentStore()

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return{
    isLoading,
    data    
  }
}