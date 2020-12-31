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

export const addModule = async (
  formData: IModule
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const module: Omit<IModule, '_id'> = {
      name: formData.name,
      description: formData.description,
      identifier: formData.identifier,
      status: true,
    }
    const saveModule: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + '/add-module',
      module
    )
    return saveModule
  } catch (error) {
    throw new Error(error)
  }
}

export const updateModule = async (
  module: IModule
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const moduleUpdate: Pick<IModule, 'status'> = {
      status: true,
    }
    const updatedModule: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit-module/${module._id}`,
      moduleUpdate
    )
    return updatedModule
  } catch (error) {
    throw new Error(error)
  }
}

export const disableModule = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedModule: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-module/${_id}`
    )
    return deletedModule
  } catch (error) {
    throw new Error(error)
  }
}