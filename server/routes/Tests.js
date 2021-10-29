import express from 'express'
import auth from '../middleware/auth.js'

import { getTests, createTest, changeTestStatus, updateTest } from '../controllers/Tests.js'

const router = express.Router()

router.get('/', getTests)
router.post('/', auth, createTest)
router.patch('/:id/changeTestStatus', auth, changeTestStatus)
router.patch('/:id', auth, updateTest)
export default router