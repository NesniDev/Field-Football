import axios from 'axios'

const BaseURL = 'https://backend-eight-rose-88.vercel.app'

export const tournamentApi = axios.create({
  baseURL: `${BaseURL}/tournaments`
})