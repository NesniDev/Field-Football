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
  const [query, setQuery] = useState<string>('')
  const [fieldData, setFieldData] = useState<FieldItem[]>([])
  const [loading, setLoading] = useState(true)  
  const navigate = useNavigate()
    const location = useLocation()

  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            if(!query.trim()) return // evita consulats vacias
            navigate(`/fields?q=${query}`)
        }
    
    const clean = () => {
        setQuery('')
        navigate('/fields')
    }

    useEffect(()=>{
      async function fetchField(){
        const response = await fetch('https://backend-eight-rose-88.vercel.app/fields')
        const data = await response.json()
        
        setFieldData(data)
        setLoading(false)
      }

      fetchField()
    }, [])

    const params = new URLSearchParams(location.search)

    const queryParams = params.get('q') || ""
    
    const results:FieldItem[] = fieldData.filter((item: FieldItem) =>
    item.title.toLowerCase().includes(queryParams.toLowerCase())
    );


    return {
      results,
      query,
      fieldData,
      loading,
      setQuery,
      handleSubmit,
      clean
    }
}

