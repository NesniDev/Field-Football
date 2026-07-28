import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const FILE_PATH = path.join(__dirname, '../reservations.json')

export class ReservationsModel {
  static async readFile() {
    const data = await fs.readFile(FILE_PATH, 'utf-8')
    return JSON.parse(data)
  }

  static async getReservationsModel() {
    const reservations = await this.readFile()

    return {
      total: reservations.length,
      data: reservations
    }
  }
  static async createReservationsModel({ place, day, field, time, price }) {
    const reservations = await this.readFile()

    const exists = reservations.find(
      (r) => r.field === field && r.day === day && r.time === time
    )

    if (exists) {
      throw new Error('Slot already reserved')
    }

    const newReservation = {
      id:
        reservations.length > 0
          ? Math.max(...reservations.map((r) => r.id)) + 1
          : 1,
      place,
      day,
      field,
      time,
      price
    }

    reservations.push(newReservation)

    await fs.writeFile(FILE_PATH, JSON.stringify(reservations, null, 2))

    return newReservation
  }
}
