import mongoose from "mongoose"

const prescriptionsSchema = mongoose.Schema({
    pharmacyId: { type: String, required: true },
    patientId: { type: String, required: true },
    quantity: { type: String, required: true },
    selectedFile: { type: String, required: true },
    prescriptionStatus: { type: String, required: true },
    createdAt: { type: Date, default: new Date() }
})
export default mongoose.model("prescription", prescriptionsSchema)