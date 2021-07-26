import { Router } from "express"
const routes = new Router()

import animais from './controller/AnimalController'

routes.post('/animais-c', animais.create)
routes.get('/animais-r', animais.read)
routes.put('/animais-u', animais.update)
routes.delete('/animais-d', animais.delete)


export default routes