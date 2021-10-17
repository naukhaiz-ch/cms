import express from 'express'
import auth from '../middleware/auth.js'

import { getPrescriptions, createPrescription, changePrescriptionStatus } from '../controllers/Prescriptions.js'

const router = express.Router()

router.get('/', getPrescriptions)
router.post('/', auth, createPrescription)
router.patch('/:id/changePrescriptionStatus', auth, changePrescriptionStatus)

export default router