import axios, { AxiosInstance } from 'axios'

const API_ROOT = process.env.URL || 'http://localhost:3000/'
const TIMEOUT = 20000
const HEADERS: Headers = {
  "Content-Type": 'application/json',
  Accept: 'application/json'
}

interface Headers {
  'Content-Type': string
  Accept: string
}

interface ApiServiceParams {
  baseURL: string
  timeout: number
  headers: Headers
}

class ApiService {
  private client: AxiosInstance
  
  constructor(params: Partial<ApiServiceParams>) {
    const clientParams: ApiServiceParams = {
      baseURL: params.baseURL || API_ROOT,
      timeout: params.timeout || TIMEOUT,
      headers: params.headers || HEADERS
    }
    this.client = axios.create(clientParams)
  }

  public get = <Data>(path: string) => {
    return this.client.get<Data>(path)
      .then(resposne => resposne.data)
  }
}

export default ApiService