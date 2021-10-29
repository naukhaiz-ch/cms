import mongoose from "mongoose"

const testsSchema = mongoose.Schema({
    labId: { type: String, required: true },
    patientId: { type: String, required: true },
    totalBill: { type: String, required: true },
    testTime: { type: String, required: true },
    testDate: { type: String, required: true },
    testName: { type: String, required: true },
    testStatus: { type: String, required: true },
    selectedFile: { type: String },
    createdAt: { type: Date, default: new Date() }
})
export default mongoose.model("tests", testsSchema)