import { ReservationsModel } from '../models/reservations.js'

export class ReservationsController {
  static async getReservations(req, res) {
    try {
      const reservations = await ReservationsModel.getReservationsModel()
      return res.json(reservations)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: error.message })
    }
  }

  static async createReservations(req, res) {
    try {
      const { place, day, field, time, price } = req.body

      if (!place || !day || !field || !time || !price) {
        return res.status(400).json({ error: 'Missing fields' })
      }

      const newReservation = await ReservationsModel.createReservationsModel({
        place,
        day,
        field,
        time,
        price
      })

      return res.status(201).json(newReservation)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: error.message })
    }
  }
}
