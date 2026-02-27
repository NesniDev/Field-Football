import { tournamentApi } from '@/api/tournament.api'
import type { TournamentResponse } from '@/models/tournament'

export const getTournamentsApi = async (
  page: number,
  limit: number,
  availability: string,
  genre: string,
  city: string
): Promise<TournamentResponse> => {
  if (isNaN(page)) {
    page = 1
  }

  if (isNaN(limit)) {
    limit = 5
  }

  if (availability) {
    availability = availability.toLowerCase()
  }
  if (genre) {
    genre = genre.toLowerCase()
  }
  if (city) {
    city = city.toLowerCase()
  }

  const { data } = await tournamentApi.get<TournamentResponse>('/', {
    params: {
      limit,
      offset: (page - 1) * limit,
      availability,
      genre,
      city
    }
  })

  console.log(data)
  return data
}
