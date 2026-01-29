import { getFieldsAPI } from "@/actions/get-field";
import type { InfoField } from "@/models/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

export const useFields = () => {
  const [searchParams, setSearchParams] = useSearchParams()  
  
  const navigateTo = useNavigate()
  
  const searchField = searchParams.get('search') ?? ''
  const page = Number(searchParams.get('page')) || 1
  const limit = Number(searchParams.get('limit')) || 5
  
  const [inputValue, setInputValue] = useState(searchField)

   useEffect(() => {
    setInputValue(searchField)
  }, [searchField])
  
  const {data, isLoading} = useQuery<InfoField>({
    queryKey: ['fields', {page, searchField}],
    queryFn: () => getFieldsAPI(+page, +limit, searchField),
    staleTime: 1000 * 60 * 5
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!inputValue.trim()) return // evita consulats vacias
    setSearchParams({
      search: inputValue,
      page: '1'
    })
  }
  
  const clean = () => {
    setInputValue('')
    navigateTo('/fields')
  }

  const changePage = (newPage: number) => {
    setSearchParams({
      search: searchField,
      page: String(newPage)
    })
  }

  return {
    data,
    limit,
    isLoading,
    searchField,
    inputValue,
    page,
    setInputValue,
    handleSubmit,
    clean,
    changePage
  }
}

