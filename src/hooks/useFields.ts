import { fields } from "@/lib/fields"
import { useState } from "react"
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
    const navigate = useNavigate()
    const location = useLocation()
    const params = new URLSearchParams(location.search)

    const queryParams = params.get('q') || ""
    
    const results:FieldItem[] = fields.filter((item: FieldItem) =>
    item.title.toLowerCase().includes(queryParams.toLowerCase())
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            if(!query.trim()) return // evita consulats vacias
            navigate(`/fields?q=${query}`)
        }
    
        const clean = () => {
            setQuery('')
            navigate('/fields')
    }

    return {
      results,
      query,
      
      setQuery,
      handleSubmit,
      clean
    }
}

