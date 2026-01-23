import useFieldsFetchStore from "@/store/useFieldsFetch.store";
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const useFields = () => {
  
  
  const [query, setQuery] = useState<string>('')

  const navigateTo = useNavigate()

  const location = useLocation()

  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            if(!query.trim()) return // evita consulats vacias
            navigateTo(`/fields?q=${query}`)
        }
    
    const clean = () => {
        setQuery('')
        navigateTo('/fields')
    }

    const params = new URLSearchParams(location.search)

    const queryParams = params.get('q') || ""
    
    const data = useFieldsFetchStore(state => state.data)
    const results = data.filter(field => field.title.toLowerCase().includes(queryParams.toLowerCase()))

    const isLoading = useFieldsFetchStore(state => state.isLoading)
    const error = useFieldsFetchStore(state => state.error)


    return {
      results,
      query,
      data,
      isLoading,
      error,
      setQuery,
      handleSubmit,
      clean
    }
}

