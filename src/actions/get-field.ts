import { FieldsApi } from "@/api/fields.api"
import type { InfoField } from "@/models/types"

export const getFieldsAPI = async (page:number, limit: number = 5, query: string = ''):Promise<InfoField> => {
  
  if(isNaN(page)) {
    page = 1
  }

  if(isNaN(limit)) {
    limit = 5
  }

  const {data} = await FieldsApi.get<InfoField>('/', {
    params: {
      search: query || undefined,
      limit: limit,
      offset: (page - 1 ) * limit
    }
  })

  console.log(data)

  return data
}