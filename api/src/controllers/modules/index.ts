import { Response, Request } from 'express'
import { IModule } from './../../db/types/module'
import Module from '../../db/models/module'

const getModules = async (req: Request, res: Response): Promise<void> => {
    try {
        const modules: IModule[] = await Module.find()
        res.status(200).json({ modules })
    } catch (error) {
        throw error
    }
}

const addModule = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<IModule, 'name' | 'description' | 'identifier' | 'status'>

        const module: IModule = new Module({
            name: body.name,
            description: body.description,
            identifier: body.identifier,
            status: body.status,
        }) 

        const newModule: IModule = await module.save()
        const allModules: IModule[] = await Module.find()

        res.status(201).json({ message: 'Module added', module: newModule, modules: allModules })
    } catch (error) {
        throw error
    }
}

const updateModule = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updateModule: IModule | null = await Module.findByIdAndUpdate(
            { _id: id },
            body
        )
        const allModules: IModule[] = await Module.find()
        res.status(200).json({
            message: 'Module updated',
            module: updateModule,
            modules: allModules,
        })
    } catch (error) {
        throw error
    }
}

const deleteModule = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedModule: IModule | null = await Module.findByIdAndRemove(
            req.params.id
        )
        const allModules: IModule[] = await Module.find()
        res.status(200).json({
            message: 'Module deleted',
            module: deletedModule,
            modules: allModules,
        })
    } catch (error) {
        throw error
    }
}

export { getModules, addModule, updateModule, deleteModule }
