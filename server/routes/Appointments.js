import express from 'express'
import auth from '../middleware/auth.js'

import { getAppointments, createAppointment, deleteAppointment, changeAppointmentStatus } from '../controllers/Appointments.js'

const router = express.Router()

router.get('/', getAppointments)
router.post('/', auth, createAppointment)
router.patch('/:id', auth, deleteAppointment)
router.patch('/:id/changeAppointmentStatus', auth, changeAppointmentStatus)

export default router