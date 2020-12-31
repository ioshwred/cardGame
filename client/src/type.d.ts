interface IModule {
    _id: string
    name: string
    description: string
    identifier: string
    status: boolean
    createdAt?: string
    updatedAt?: string
}

type ModuleProps = {
    module: IModule
}

type ApiDataType = {
    message: string
    status: string
    modules: IModule[]
    module: IModule
}