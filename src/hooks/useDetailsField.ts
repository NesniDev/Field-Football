import type { InfoField } from "@/models/types"
import { reservationSchema } from "@/schemas/reservations"
import { useReservationStore } from "@/store/useReservationStore"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const useDetailsField = () => {
  const { setSelectedField, setStartTime, setReservationDate, setPrice } = useReservationStore()

  const navigate = useNavigate()
  
  const [date, setDate] = useState<Date>(new Date())
  const [info, setInfo] = useState<InfoField | null>(null)
  const [time, setTime] = useState<string>('')
  const [activeTab, setActiveTab] = useState<'description' | 'services' | 'ubication'>('description')

  const { slug } = useParams()

  useEffect(() => {
    const fetchField = async () => {
      const response = await fetch(`https://backend-eight-rose-88.vercel.app/fields/${slug}`)
      if (!response.ok) throw new Error('Error al obtener el detalle')

      const data: InfoField = await response.json()

      // const queryField = data.find((item: InfoField) => item.slug === slug)
      // if(!queryField) return
      setInfo(data)
    }
    fetchField()
  }, [slug])

  const normalizeDate = (d: Date) => {
    const date = new Date(d)
    date.setHours(0, 0, 0, 0)
    return date
  }

  const today = normalizeDate(new Date())
  const selectedDate = normalizeDate(date)

  const isFutureDate = selectedDate.getTime() >= today.getTime()

  const handleReserve = (field: InfoField) => {
  const validation = reservationSchema.safeParse({
    selectedField: field,
    date,
    time
  })

  // const hoursIncluse = horarios.includes(time)

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
  activeTab,
  info,
  isFutureDate,

  handleReserve,
  setDate,
  setTime,
  setActiveTab

}

}