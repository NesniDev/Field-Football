import { useReservationStore } from "@/store/useReservationStore";

export const useReceipt = () => {
  
      const {selectedField, reservationDate, startTime, price} = useReservationStore()
  
      const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  
      const fieldName = selectedField ? selectedField.title : 'Ninguna cancha seleccionada'
      const fieldAddress = selectedField ? selectedField.address : 'Dirección no disponible';
      const formattedDate = reservationDate ? `${reservationDate.getDate()} de ${months[reservationDate.getMonth()]} de ${reservationDate.getFullYear()}` : 'Fecha no seleccionada';
  
  
  return {
    fieldName, 
    fieldAddress,
    formattedDate,
    startTime,
    price
  }
}