import { useReservationStore } from '@/store/useReservationStore'

const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
]

export const useReservations = () => {
  const { reservations } = useReservationStore()

  const formattedReservations = reservations.map((r) => {
    const date = new Date(r.reservationDate)
    return {
      id: r.id,
      fieldName: r.field.title,
      fieldImage: r.field.image,
      formattedDate: `${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`,
      startTime: r.startTime,
      price: r.price
    }
  })

  return {
    reservations: formattedReservations
  }
}
