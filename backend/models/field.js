import fields from '../fields.json' with { type: 'json' }

export class FieldModel {
  static async getAll({ search = '', limit, offset }) {
    let filteredFields = fields

    if (search) {
      const normalizedSearch = search.toLowerCase()

      filteredFields = filteredFields.filter((field) =>
        field.title.toLowerCase().includes(normalizedSearch)
      )
    }

    const numberLimit = Number(limit)
    const numberOffset = Number(offset)

    const paginatedFields = filteredFields.slice(
      numberOffset,
      numberOffset + numberLimit
    )

    return {
      total: filteredFields.length,
      data: paginatedFields
    }
  }
  static async getId(slug) {
    const field = fields.find((item) => item.slug === slug)

    return field
  }
}
