
import {RouterProvider } from 'react-router-dom'

import { useEffect } from 'react'
import useFieldsFetchStore from './store/useFieldsFetch.store.ts'
import useTournamentStore from './store/useTournament.store.ts'
import { appRouter } from './router/app.router'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'



const queryClient = new QueryClient()

function App() {

  const {fetchData} = useFieldsFetchStore()
  const {fetchData: fetchTournamentData} = useTournamentStore()

  useEffect(()=>{
    fetchData()
  }, [fetchData])
  
  useEffect(()=>{
    fetchTournamentData()
  }, [fetchTournamentData])
 
     

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={appRouter} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
