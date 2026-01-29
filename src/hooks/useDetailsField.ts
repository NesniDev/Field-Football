import { getByFieldSlug } from "@/actions/get-slug"
import type { Field } from "@/models/types"
import { reservationSchema } from "@/schemas/reservations"
import { useReservationStore } from "@/store/useReservationStore"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"

const tabs = ['description', 'services', 'location']

export const useDetailsField = () => {
  const { setSelectedField, setStartTime, setReservationDate, setPrice } = useReservationStore()

  const navigate = useNavigate()
  
  const [date, setDate] = useState<Date>(new Date())
  const [time, setTime] = useState<string>('')

  const [searchParams, setSearchParams] = useSearchParams()

  const tab = searchParams.get('tab') ?? 'description'
  
  useEffect(()=>{
    if(!tabs.includes(tab)){
      setSearchParams(prev => {
        prev.set('tab', 'description')
        return prev
      })
    }
  }, [setSearchParams, tab])
  
  const { slug } = useParams()

  const normalizedSlug = slug ?? ''

  const {data: info, isLoading} = useQuery<Field>({
    queryKey: ['fieldSlug', slug],
    queryFn: () => getByFieldSlug(normalizedSlug!),
    staleTime: 1000 * 60 * 5,
    enabled: !!slug
  })

  const normalizeDate = (d: Date) => {
    const date = new Date(d)
    date.setHours(0, 0, 0, 0)
    return date
  }

  const today = normalizeDate(new Date())
  const selectedDate = normalizeDate(date)

  const isFutureDate = selectedDate.getTime() >= today.getTime()

  const handleReserve = (field: Field) => {
  const validation = reservationSchema.safeParse({
    selectedField: field,
    date,
    time
  })

  if (!validation.success) return

  setSelectedField(field)
  setStartTime(time!)
  setReservationDate(date)
  setPrice(field.price)

  navigate('/receipt')
}

return {
  date,
  time,
  info,
  isFutureDate,
  tab,
  isLoading,
  handleReserve,
  setDate,
  setTime,
  setSearchParams
}

}