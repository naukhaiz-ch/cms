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

export const deleteTest = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No test with id: ${id}`)

    await Test.findByIdAndRemove(id)

    res.json({ message: "Test deleted successfully." })
}

export const changeTestStatus = async (req, res) => {
    const { id } = req.params

    // res.userId

    // if (!req.userId) return res.JSON({ message: 'Unauthenticated' })

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

export const updateTest = async (req, res) => {
    const { id } = req.params
    const { selectedFile } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No test with id: ${id}`)

    const updatedTest = { selectedFile, _id: id }

    await Test.findByIdAndUpdate(id, updatedTest, { new: true })

    res.json(Test)
}


export default router