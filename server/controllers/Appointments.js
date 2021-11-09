import express from 'express'
import mongoose from 'mongoose'

import Appointment from '../models/Appointments.js'

const router = express.Router()

export const getAppointments = async (req, res) => {
    try {
        const appointment = await Appointment.find()

        res.status(200).json(appointment)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createAppointment = async (req, res) => {
    const appointment = req.body

    const newAppointment = new Appointment({ ...appointment, createdAt: new Date().toISOString() })

    try {
        await newAppointment.save()

        res.status(201).json(newAppointment)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const deleteAppointment = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No appointment with id: ${id}`)

    await Appointment.findByIdAndRemove(id)

    res.json({ message: "Appointment deleted successfully." })
}

export const updateAppointment = async (req, res) => {
    const { id } = req.params
    const { description } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No appointment with id: ${id}`)

    const updatedAppointment = { description, _id: id }

    await Appointment.findByIdAndUpdate(id, updatedAppointment, { new: true })

    res.json(updatedAppointment)
}

export const changeAppointmentStatus = async (req, res) => {
    const { id } = req.params

    // res.userId

    // if (!req.userId) return res.JSON({ message: 'Unauthenticated' })

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No appointment with id: ${id}`)

    const appointment = await Appointment.findById(id)

    if (appointment.appointmentStatus === 'active') {
        appointment.appointmentStatus = 'inactive'
    } else {
        appointment.appointmentStatus = 'active'
    }

    const updatedAppointment = await Appointment.findByIdAndUpdate(id, appointment, { new: true })

    res.json(updatedAppointment)
}


export default router