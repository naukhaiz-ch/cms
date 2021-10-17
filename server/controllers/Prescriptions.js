import express from 'express'
import mongoose from 'mongoose'

import Prescription from '../models/Prescriptions.js'

const router = express.Router()

export const getPrescriptions = async (req, res) => {
    try {
        const prescription = await Prescription.find()
        res.status(200).json(prescription)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPrescription = async (req, res) => {
    const prescription = req.body

    const newPrescription = new Prescription({ ...prescription, createdAt: new Date().toISOString() })

    try {
        await newPrescription.save()

        res.status(201).json(newPrescription)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const changePrescriptionStatus = async (req, res) => {
    const { id } = req.params

    // res.userId

    // if (!req.userId) return res.JSON({ message: 'Unauthenticated' })

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No prescription with id: ${id}`)

    const prescription = await Prescription.findById(id)

    if (prescription.prescriptionStatus === 'active') {
        prescription.prescriptionStatus = 'inactive'
    } else {
        prescription.prescriptionStatus = 'active'
    }

    const updatedPrescription = await Prescription.findByIdAndUpdate(id, prescription, { new: true })

    res.json(updatedPrescription)
}


export default router