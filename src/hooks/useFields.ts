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
    const navigate = useNavigate()
    const location = useLocation()
  
console.log(fieldData)
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
        const response = await fetch('http://localhost:1234/fields')
        const data = await response.json()
        
        setFieldData(data)
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
      
      setQuery,
      handleSubmit,
      clean
    }
}

