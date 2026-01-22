import { Router } from 'express'
import { TournamentController } from '../controllers/tournaments.js'

export const tournamentsRouter = Router()

tournamentsRouter.get('/', TournamentController.getAll)
tournamentsRouter.get('/:id', TournamentController.getId)
tournamentsRouter.post('/', TournamentController.create)
tournamentsRouter.put('/:id', TournamentController.update)
tournamentsRouter.patch('/:id', TournamentController.partialUpdate)
tournamentsRouter.delete('/:id', TournamentController.delete)
