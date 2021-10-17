import express from 'express'
import auth from '../middleware/auth.js'

import { getTests, createTest, deleteTest, changeTestStatus } from '../controllers/Tests.js'

const router = express.Router()

router.get('/', getTests)
router.post('/', auth, createTest)
router.patch('/:id', auth, deleteTest)
router.patch('/:id/changeTestStatus', auth, changeTestStatus)

export default router