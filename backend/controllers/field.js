import { FieldModel } from '../models/field.js'

export class FieldController {
  static async getAll(req, res) {
    const { text, limit = 10, offset = 0 } = req.query

    const fields = await FieldModel.getAll({ text, limit, offset })

    return res.json(fields)
  }

  static async getId(req, res) {
    const { slug } = req.params

    const field = await FieldModel.getId(slug)

    if (!field) {
      return res.status(404).json({ error: 'Field not found' })
    }

    return res.json(field)
  }
}
