
import {RouterProvider } from 'react-router-dom'

import { useEffect } from 'react'
import useFieldsFetchStore from './store/useFieldsFetch.store.ts'
import useTournamentStore from './store/useTournament.store.ts'
import { appRouter } from './router/app.router'


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
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
