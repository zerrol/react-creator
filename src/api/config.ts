
import axios, {AxiosInstance}  from 'axios'

const BASE_URL = '/api'

class HttpRequest {
  instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: `${BASE_URL}`
    })    

    this.instanceBindInterceptor()
  }

  instanceBindInterceptor = () => {
    const {instance} = this    
    instance.interceptors.response.use(
      (response) => {
        if (response && response.data) {
          return Promise.resolve(response.data);
        } else {
          return Promise.reject('response not valid');
        }
      }
    )
  }
}

let http = new HttpRequest()

export default http.instance