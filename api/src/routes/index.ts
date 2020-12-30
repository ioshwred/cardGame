import { Router } from 'express'
import { getModules, addModule, updateModule, deleteModule } from "../controllers/modules"

const router: Router = Router()

//Routes for modules
router.get('/modules', getModules)
router.post('/add-module', addModule)
router.put('/edit-module/:id', updateModule)
router.delete('/delete-module/:id', deleteModule)
//Route for welcome
router.get('/rain', getModules)

export default router