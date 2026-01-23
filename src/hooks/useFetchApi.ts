import useTournamentStore from "@/store/useTournament.store"

export const useFetchApiTournaments = () => {
  const {data,isLoading} = useTournamentStore()

  return{
    isLoading,
    data    
  }
}