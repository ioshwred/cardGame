import React from 'react'

type Props = ModuleProps & {
    updateModule: (module: IModule) => void
    disableModule: (_id: string) => void
}

const Module: React.FC<Props> = ({ module, updateModule, disableModule }) => {
    const checkModule: string = module.status ? `line-through` : ''
    return (
        <tr>
            <td><span className={checkModule}>{module.name}</span></td>
            <td><span className={checkModule}>{module.description}</span></td>
            <td><span className={checkModule}>{module.identifier}</span></td>
            <td>
                <button
                onClick={() => updateModule(module)}
                type="button"
                className={module.status ? `btn btn-secondary` : 'btn btn-primary'}
                >
                Enable
                </button>&nbsp;
                <button
                type="button"
                onClick={() => disableModule(module._id)}
                className='btn btn-warning'
                >
                Disable
                </button>
            </td>
        </tr>
    )
}

export default Module