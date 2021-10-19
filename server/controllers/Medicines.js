import express from 'express'
import mongoose from 'mongoose'

import Medicine from '../models/Medicines.js'

const router = express.Router()

export const getMedicines = async (req, res) => {
    try {
        const medicine = await Medicine.find()
        res.status(200).json(medicine)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createMedicine = async (req, res) => {
    const medicine = req.body

    const newMedicine = new Medicine({ ...medicine, createdAt: new Date().toISOString() })

    try {
        await newMedicine.save()
        res.status(201).json(newMedicine)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}


export default router