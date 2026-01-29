import { TournamentModel } from '../models/tournament.js'

export class TournamentController {
  static async getAll(req, res) {
    const { limit = 10, offset = 0 } = req.query

    const tournaments = await TournamentModel.getAll({
      limit,
      offset
    })

    return res.json(tournaments)
  }

  static async getId(req, res) {
    const { id } = req.params

    const tournament = await TournamentModel.getId(id)

    if (!tournament) {
      return res.status(404).json({ error: 'Tournament not found' })
    }

    return res.json(tournament)
  }

  static async create(req, res) {
    const { availability, genre, title, city, place } = req.body

    const newTournament = await TournamentModel.create({
      availability,
      genre,
      title,
      city,
      place
    })

    return res.status(201).json(newTournament)
  }

  static async update(req, res) {}
  static async partialUpdate(req, res) {}
  static async delete(req, res) {}
}
