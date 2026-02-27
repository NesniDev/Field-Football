import tournaments from '../tournaments.json' with { type: 'json' }

export class TournamentModel {
  static async getAll({ limit = 5, offset = 0, availability, genre, city }) {
    let filteredTournaments = tournaments

    if (availability) {
      filteredTournaments = filteredTournaments.filter((item) =>
        item.availability.toLowerCase().includes(availability.toLowerCase())
      )
    }
    if (genre) {
      filteredTournaments = filteredTournaments.filter((item) =>
        item.genre.toLowerCase().includes(genre.toLowerCase())
      )
    }

    if (city) {
      filteredTournaments = filteredTournaments.filter((item) =>
        item.location.city.toLowerCase().includes(city.toLowerCase())
      )
    }

    const limitNumber = Number(limit)
    const offsetNumber = Number(offset)

    const paginatedTournaments = filteredTournaments.slice(
      offsetNumber,
      offsetNumber + limitNumber
    )

    return {
      total: filteredTournaments.length,
      data: paginatedTournaments
    }
  }

  static async getId(id) {
    const tournament = tournaments.find((tournament) => tournament.id === id)

    return tournament
  }

  static async create({ availability, genre, title, city, place }) {
    const newTournament = {
      id: crypto.randomUUID(),
      availability,
      genre,
      title,
      city,
      place
    }

    tournaments.push(newTournament) //se hace en la base de datos

    return newTournament
  }
}
