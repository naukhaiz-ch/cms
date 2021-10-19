import mongoose from "mongoose"

const medicinesSchema = mongoose.Schema({
    doctorId: { type: String, required: true },
    patientId: { type: String, required: true },
    name: { type: String, required: true },
    quantity: { type: String, required: true },
    days: { type: String, required: true },
    morning: { type: String, required: true },
    afternoon: { type: String, required: true },
    night: { type: String, required: true },
    test: { type: String, required: true },
    createdAt: { type: Date, default: new Date() }
})
export default mongoose.model("medicine", medicinesSchema)