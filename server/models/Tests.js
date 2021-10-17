import mongoose from "mongoose"

const testsSchema = mongoose.Schema({
    labId: { type: String, required: true },
    patientId: { type: String, required: true },
    testPrice: { type: String, required: true },
    testTime: { type: String, required: true },
    testDate: { type: String, required: true },
    testName: { type: [String], default: [], required: true },
    testStatus: { type: String, required: true },
    createdAt: { type: Date, default: new Date() }
})
export default mongoose.model("tests", testsSchema)