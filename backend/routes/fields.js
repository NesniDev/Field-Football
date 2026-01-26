import { Router } from 'express'
import { FieldController } from '../controllers/field.js'

export const fieldsRouter = Router()

fieldsRouter.get('/', FieldController.getAll)
fieldsRouter.get('/:slug', FieldController.getId)
