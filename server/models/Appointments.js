import mongoose from "mongoose"

const appointmentsSchema = mongoose.Schema({
    doctorId: { type: String, required: true },
    patientId: { type: String, required: true },
    totalBill: { type: String, required: true },
    appointmentTime: { type: String, required: true },
    appointmentDate: { type: String, required: true },
    appointmentStatus: { type: String, required: true },
    createdAt: { type: Date, default: new Date() }
})
export default mongoose.model("appointments", appointmentsSchema)