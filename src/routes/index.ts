import { Router } from 'express'
import { configs } from '~/configs'
import { router as studentRoute } from './externel/student.route'

export const router: Router = Router()

router.use(`${configs.app.prefix}/students`, studentRoute)
