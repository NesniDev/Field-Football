import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ReservationItem } from '../models/types'

interface ReservationStore {
  reservations: ReservationItem[];

  addReservation: (item: ReservationItem) => void;
  removeReservation: (id: number) => void;
  clearReservations: () => void;
}


export const useReservationStore = create<ReservationStore>()(persist((set) => ({
    // Estado inicial
  reservations: [] as ReservationItem[],

  // Agregar una reserva al array
  addReservation: (item) => set((state) => ({
    reservations: [...state.reservations, item],
  })),

  // Eliminar una reserva por ID
  removeReservation: (id) => set((state) => ({
    reservations: state.reservations.filter((r) => r.id !== id),
  })),

  // Limpiar todas las reservas
  clearReservations: () => set({ reservations: [] }),

}),
{
  name: 'reservation-storage',
  version: 1,
  migrate: () => ({ reservations: [] as ReservationItem[] }),
}
))
