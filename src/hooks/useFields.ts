import useFieldsFetchStore from "@/store/useFieldsFetch.store";
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

interface FieldItem {
    image: string;
    title: string;
    slug: string;
    address: string;
    description: string;
    characteristics: {
        grassType: string;
        dimensions: string;
        lighting: string;
        availability: string;
    };
    services: string[];
    punctuation: string;
    price: string;
    ubication: string;
}

export const useFields = () => {
  const {data, isLoading, error, fetchData } = useFieldsFetchStore()
  
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

    useEffect(()=>{
      fetchData()
    }, [fetchData])

    const params = new URLSearchParams(location.search)

    const queryParams = params.get('q') || ""
    
    const results = data.filter((item: FieldItem) =>
    item.title.toLowerCase().includes(queryParams.toLowerCase())
    );


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

