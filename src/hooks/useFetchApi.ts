import { getTournamentsApi } from '@/actions/get-tournament'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'

export const useFetchApiTournaments = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const page = Number(searchParams.get('page')) || 1
  const limit = Number(searchParams.get('limit')) || 3
  const availability = searchParams.get('availability') || ''
  const genre = searchParams.get('genre') || ''
  const city = searchParams.get('city') || ''

  const { data, isLoading, error } = useQuery({
    queryKey: ['tournaments', { page, limit, availability, genre, city }],
    queryFn: () => getTournamentsApi(page, limit, availability, genre, city),
    staleTime: 1000 * 60 * 5
  })

  return {
    isLoading,
    error,
    data,
    page,
    limit,
    availability,
    setSearchParams
  }
}
