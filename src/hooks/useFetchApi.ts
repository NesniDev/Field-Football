import { getTournamentsApi } from "@/actions/get-tournament"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom"

export const useFetchApiTournaments = () => {

  const [searchParams, setSearchParams] = useSearchParams()

  const page = Number(searchParams.get('page')) || 1
  const limit = Number(searchParams.get('limit')) || 3
  
  const {data, isLoading} = useQuery({
    queryKey: ['tournaments', {page, limit}],
    queryFn: () => getTournamentsApi(page, limit),
    staleTime: 1000 * 60 * 5 
  })

  console.log(data)

  return{
    isLoading,
    data,
    page,
    limit,
    setSearchParams    
  }
}