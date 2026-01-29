import { tournamentApi } from "@/api/tournament.api"
import type { TournamentResponse } from "@/models/tournament"



export const getTournamentsApi = async (page: number, limit: number): Promise<TournamentResponse> => {

  if(isNaN(page)) {
    page = 1
  }

  if(isNaN(limit)) {
    limit = 5
  }

  const {data} = await tournamentApi.get<TournamentResponse>('/', {
    params: {
      limit,
      offset: (page - 1) * limit
    }
  })

  console.log(data)
  return data
}