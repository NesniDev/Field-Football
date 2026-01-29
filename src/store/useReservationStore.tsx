import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Field } from '../models/types'

interface ReservationStore {
  selectedField: Field | null;  // Puede ser una cancha (Field) o null
  reservationDate: Date | null;
  startTime: string | null;
  endTime: string | null;
  price: string | null;

  setSelectedField: (field: Field) => void;
  setReservationDate: (date: Date) => void;
  setStartTime: (time: string) => void;
  setEndTime: (time: string) => void;
  setPrice: (price: string) => void;
  clearReservation: () => void;
}


export const useReservationStore  = create<ReservationStore>()(persist((set)=> ({
    // Estado inicial
  selectedField: null,  // Información de la cancha seleccionada
  reservationDate: null,    // Fecha seleccionada
  startTime: null,         // Hora de inicio
  endTime: null,           // Hora de fin
  price: null,             // Precio de la cancha

  // Funciones para actualizar el estado
  setSelectedField: (field) => set({ selectedField: field }),
  setReservationDate: (date) => set({ reservationDate: date }),
  setStartTime: (time) => set({ startTime: time }),
  setEndTime: (time) => set({ endTime: time }),
  setPrice: (price) => set({ price: price }),

  // Función para limpiar los datos de la reserva
  clearReservation: () => set({
    selectedField: null,
    reservationDate: null,
    startTime: null,
    endTime: null,
    price: null,
  })
  
}),
{
  name: 'reservation-storage',
  partialize: (state) => ({
    ...state,
    reservationDate: state.reservationDate?.toISOString(),
  }),
  onRehydrateStorage: () => (state) => {
    if (state?.reservationDate) {
      state.reservationDate = new Date(state.reservationDate)
    }
  },
}
))
