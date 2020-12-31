import React, { useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import * as Icon from 'react-bootstrap-icons'
import { Container, Row, Col } from 'react-bootstrap'
import { Header } from './components/header'
import ModuleItem from './components/modules/ModuleItem'
import AddModule from './components/modules/AddModule'
import { getModules, addModule, updateModule, disableModule } from './API'
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

  const handleSaveModule = (e: React.FormEvent, formData: IModule): void => {
    e.preventDefault()
    addModule(formData)
    .then(({ status, data }) => {
     if (status !== 201) {
       throw new Error('Error! Module not saved')
     }
     setModules(data.modules)
   })
   .catch((err) => console.log(err))
  }

  const handleUpdateModule = (module: IModule): void => {
    updateModule(module)
    .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Module not updated')
        }
        setModules(data.modules)
      })
      .catch((err) => console.log(err))
  }

  const handleDisableModule = (_id: string): void => {
    disableModule(_id)
    .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Module not set to disabled')
        }
        setModules(data.modules)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
    <Header />
    <Container>
      <Row className="mb-2">
        <Col sm={11}><h5><Icon.Bricks />&nbsp;Game Modules</h5></Col>
        <Col sm={1}><AddModule saveModule={handleSaveModule} /></Col>
      </Row>
      <Row>
        <Col>
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
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App;
