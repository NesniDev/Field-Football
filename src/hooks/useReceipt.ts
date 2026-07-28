import { useReservationStore } from '@/store/useReservationStore'
import { useParams } from 'react-router-dom'

export const useReceipt = () => {
  const { reservations } = useReservationStore()
  const { id } = useParams()

  const reservation = reservations.find((r) => r.id === Number(id))

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

  const fieldName = reservation
    ? reservation.field.title
    : 'Ninguna cancha seleccionada'
  const fieldAddress = reservation
    ? reservation.field.address
    : 'Dirección no disponible'
  const date = reservation ? new Date(reservation.reservationDate) : null
  const formattedDate = date
    ? `${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`
    : 'Fecha no seleccionada'
  const startTime = reservation?.startTime ?? null
  const price = reservation?.price ?? null

  return {
    fieldName,
    fieldAddress,
    formattedDate,
    startTime,
    price
  }
}
