import {ResponseData} from '@api'
 
interface TestData {
  hello: string
}

export const ResponseTest: ResponseData<TestData> = {
  success: true,
  data: {
    hello: 'hello mock axios'
  },
  message: 'get response success'
}