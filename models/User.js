import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: String,
    telephone: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    profilePic: {
        _id: false,
        url: String,
        filename: String
    },
    password: String
})

export default mongoose.models.User || mongoose.model('User', UserSchema)