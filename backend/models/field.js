import fields from '../fields.json' with { type: 'json' }

export class FieldModel {
  static async getAll({ text, limit, offset }) {
    let filteredFields = fields

    if (text) {
      filteredFields = filteredFields.filter(
        (field) => field.title.toLowerCase() === text.toLowerCase()
      )
    }

    const numberLimit = Number(limit)
    const numberOffset = Number(offset)

    const paginatedFields = filteredFields.slice(
      numberOffset,
      numberOffset + numberLimit
    )

    return filteredFields
  }
  static async getId(id) {
    const field = fields.find((item) => item.id === id)

    return field
  }
}
