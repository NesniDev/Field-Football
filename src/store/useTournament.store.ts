import type { Tournament } from '@/models/tournament'
import {create} from 'zustand'


interface TournamentFetchStore {
  data: Tournament[]
  isLoading: boolean
  error: Error | null
  fetchData: () => Promise<void>
}

const useTournamentStore = create<TournamentFetchStore>((set) => ({
  data: [],
  isLoading: false,
  error: null,
  fetchData: async () => {
    try {
      set({isLoading: true})
      const response = await fetch('https://backend-eight-rose-88.vercel.app/tournaments')
      const data = await response.json()
      set({data: data})
    } catch (error) {
      set({error: error as Error})
    }finally{
      set({isLoading: false})
    }
  }
})) 

export default useTournamentStore