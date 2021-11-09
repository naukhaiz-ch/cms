import express from 'express'
import auth from '../middleware/auth.js'

import { getAppointments, createAppointment, deleteAppointment, changeAppointmentStatus, updateAppointment } from '../controllers/Appointments.js'

const router = express.Router()

router.get('/', getAppointments)
router.post('/', auth, createAppointment)
router.delete('/:id', auth, deleteAppointment)
router.patch('/:id', auth, updateAppointment)
router.patch('/:id/changeAppointmentStatus', auth, changeAppointmentStatus)

export default router