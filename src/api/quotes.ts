import axios, { AxiosResponse } from 'axios'
import { Quote } from '../models/Quote'

type GetQuotesResponse = {
    quotes: Quote[]
}

export function getQuotes (): Promise<AxiosResponse<GetQuotesResponse>> {
  return axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
}
