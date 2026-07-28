import { Router } from 'express'
import { ReservationsController } from '../controllers/reservations.js'

export const reservationsRouter = Router()

reservationsRouter.get('/', ReservationsController.getReservations)
reservationsRouter.post('/', ReservationsController.createReservations)
