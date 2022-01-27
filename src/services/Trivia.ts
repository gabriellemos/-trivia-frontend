import axios from 'axios'

import { ITriviaQuery } from '../interface/ITriviaQuery'

const baseService = axios.create({
  baseURL: 'http://localhost:3333/trivia'
})

export const get = (query: ITriviaQuery) => {
  return baseService.get('/', {
    params: { amount: query.amount, type: query.type }
  })
}

export const getTrivia = (query: ITriviaQuery) => {
  return baseService.get('/match', {
    params: { size: query.amount, type: query.type }
  })
}