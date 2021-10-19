import express from 'express'
import auth from '../middleware/auth.js'

import { getMedicines, createMedicine } from '../controllers/Medicines.js'

const router = express.Router()

router.get('/', getMedicines)
router.post('/', auth, createMedicine)

export default router