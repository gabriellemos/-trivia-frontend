import axios from 'axios'

import { ITriviaQuery } from '../interface/ITriviaQuery'

const baseService = axios.create({
  baseURL: 'http://localhost:3333'
})

export const get = (query: ITriviaQuery) => {
  return baseService.get('/trivia', {
    params: { amount: query.amount, type: query.type }
  })
}
