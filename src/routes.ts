import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'

const createUserController = new CreateUserController()

const router = Router()

router.post('/users', createUserController.handle)

export { router }