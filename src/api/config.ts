
import axios, {AxiosInstance}  from 'axios'

const BASE_URL = '/api'

class HttpRequest {
  public instance: AxiosInstance

  public constructor() {
    this.instance = axios.create({
      baseURL: `${BASE_URL}`
    })    

    this.instanceBindInterceptor()
  }

  public instanceBindInterceptor () {
    const {instance} = this    
    instance.interceptors.response.use(
      (response) => {
        if (response?.data) {
          return Promise.resolve(response.data)
        } else {
          return Promise.reject(new Error('response not valid'))
        }
      }
    )
  }
}

let http = new HttpRequest()

export default http.instance