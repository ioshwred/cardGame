import axios, { AxiosResponse } from 'axios'

const baseUrl: string = 'http://localhost:9001'

export const getModules = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const modules: AxiosResponse<ApiDataType> = await axios.get(
        baseUrl + '/modules'
      )
      return modules
    } catch (error) {
      throw new Error(error)
    }
}