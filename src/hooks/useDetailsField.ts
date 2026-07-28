import { getByFieldSlug } from '@/actions/get-slug'
import type { Field } from '@/models/types'
// import { reservationSchema } from '@/schemas/reservations'
import { useReservationStore } from '@/store/useReservationStore'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

// const tabs = ['description', 'services', 'location']

export const useDetailsField = () => {
  const { addReservation } = useReservationStore()

  const navigate = useNavigate()

  const [date, setDate] = useState<Date>(new Date())
  const [time, setTime] = useState<string>('Seleccione una hora')

  const [searchParams, setSearchParams] = useSearchParams()

  const tab = searchParams.get('tab') ?? 'description'

  // useEffect(() => {
  //   if (!tabs.includes(tab)) {
  //     setSearchParams((prev) => {
  //       prev.set('tab', 'description')
  //       return prev
  //     })
  //   }
  // }, [setSearchParams, tab])

  const { slug } = useParams()

  const normalizedSlug = slug ?? ''

  const { data: info, isLoading } = useQuery<Field>({
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

  const handleReserve = async (field: Field) => {
    try {
      const response = await fetch(
        'https://backend-eight-rose-88.vercel.app/reservations',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            place: 'Chiquinquirá',
            field: field.title,
            day: date.toISOString().split('T')[0],
            time,
            price: field.price
          })
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al reservar')
      }

      // Guardar en Zustand como item del array de reservas
      addReservation({
        id: data.id,
        field,
        reservationDate: date.toISOString(),
        startTime: time,
        price: field.price
      })

      navigate(`/receipt/${data.id}`)
    } catch (error) {
      console.error('Error:', error)
    }
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
