import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    fullName: String,
    telephone: String,
    email: String,
    profilePic: String,
    password: String
})

export default mongoose.models.User || mongoose.model('User', UserSchema)