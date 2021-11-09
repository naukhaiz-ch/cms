import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNo: { type: String, required: true },
    createdAt: { type: Date, default: new Date() },
    userRole: { type: String, required: true },
    address: { type: String },
    speciality: { type: String },
    education: { type: String },
    country: { type: String },
    city: { type: String },
    postalCode: { type: String },
    location: { type: String },
    gender: { type: String },
    credits: { type: String },
    userStatus: { type: String },
    selectedFile: { type: String },
    user: { type: String },
    id: { type: String }
})

export default mongoose.model("Users", userSchema)