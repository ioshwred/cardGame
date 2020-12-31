import React, { useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import * as Icon from 'react-bootstrap-icons';
import { Header } from './components/header';
import ModuleItem from './components/modules/ModuleItem'
import { getModules } from './API'
import './App.css';

const App: React.FC = () => {
  const [modules, setModules] = useState<IModule[]>([])
  
  useEffect(()=> {
    fetchModules()
  }, [])

  const fetchModules = (): void => {
    getModules()
    .then(({ data: { modules }}: IModule[] | any) => setModules(modules))
    .catch((err: Error) => console.log(err))
  }

  const handleUpdateModule = (): void => {
    
  }

  const handleDisableModule = (): void => {
    
  }

  return (
    <>
    <Header />
    <main className='container'>
      <h5><Icon.Bricks />&nbsp;Game Modules</h5>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Identifier</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {modules.map((module: IModule) => (
            <ModuleItem
              key={module._id}
              updateModule={handleUpdateModule}
              disableModule={handleDisableModule}
              module={module}
            />
          ))}
        </tbody>
      </table>
    </main>
    </>
  )
}

export default App;
