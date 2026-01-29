import axios from 'axios'

const BaseURL = 'https://backend-eight-rose-88.vercel.app'
export const FieldsApi = axios.create({
  baseURL: `${BaseURL}/fields`
})