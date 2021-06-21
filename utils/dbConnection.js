import mongoose from 'mongoose'

const MONGODB_URI = 'mongodb://localhost:27017/albli'

// this is to prevent re connecting to mongo on hot reloads, useful in developmeny
let cached = global.mongoose
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }
    if (!cached.promise) {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
            bufferMaxEntries: 0,
            useFindAndModify: false,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 8000
        }
        cached.promise = mongoose.connect(MONGODB_URI, options).then((mongoose) => {
            return mongoose
        })
    }
    cached.conn = await cached.promise
    return cached.conn
}

// use this now on every mongo db usage as await dbConnect()
export default dbConnect