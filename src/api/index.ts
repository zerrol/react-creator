import {AxiosPromise} from 'axios'
import http from './config'

export interface ResponseData<T> {
  success: boolean
  data: T
  message?: string
}

export const queryTest = 
  (params?: any): AxiosPromise => http.get('/test', params)