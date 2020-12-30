import { Router } from 'express'
import { getModules, addModule, updateModule, deleteModule } from "../controllers/modules"

const router: Router = Router()

router.get('/modules', getModules)

router.post('/add-module', addModule)

router.put('/edit-module/:id', updateModule)

router.delete('/delete-module/:id', deleteModule)

export default router