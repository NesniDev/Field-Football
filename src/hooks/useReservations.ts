import { fields } from "@/lib/fields"
import { useReservationStore } from "@/store/useReservationStore"



export const useReservations = () => {
  const {selectedField, reservationDate, startTime, price} = useReservationStore()

    const info = fields.find(item => item.slug)

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']


    const fieldName = selectedField ? selectedField.title : "No se selecciono una cancha"
    const fieldImage = selectedField ? selectedField.image : 'No se selecciono una cancha' 
    // const fieldAddress = selectedField ? selectedField.address : ""
    const formattedDate = reservationDate ? `${reservationDate.getDate()} de ${months[reservationDate.getMonth()]} de ${reservationDate.getFullYear()}` : 'Fecha no seleccionada';

    return {
      startTime,
      price,
      fieldName,
      fieldImage,
      formattedDate,
      info
    }
}