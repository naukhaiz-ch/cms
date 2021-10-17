import express from 'express'
import mongoose from 'mongoose'

import Test from '../models/Tests.js'

const router = express.Router()

export const getTests = async (req, res) => {
    try {
        const test = await Test.find()

        res.status(200).json(test)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createTest = async (req, res) => {
    const test = req.body

    const newTest = new Test({ ...test, createdAt: new Date().toISOString() })

    try {
        await newTest.save()

        res.status(201).json(newTest)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const changeTestStatus = async (req, res) => {
    const { id } = req.params

    res.userId

    if (!req.userId) return res.JSON({ message: 'Unauthenticated' })

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No test with id: ${id}`)

    const test = await Test.findById(id)

    if (test.testStatus === 'active') {
        test.testStatus = 'inactive'
    } else {
        test.testStatus = 'active'
    }

    const updatedTest = await Test.findByIdAndUpdate(id, test, { new: true })

    res.json(updatedTest)
}


export default router