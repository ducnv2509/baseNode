import mongoose from 'mongoose'
import { IStudent } from '~/interfaces/models'

const studentSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            require: true
        },
        name: {
            type: String,
            require: true
        },
        age: {
            type: Number,
            require: true
        },
        dob: {
            type: Date,
            require: true
        }
    },
    {
        versionKey: false
    }
)

const Student = mongoose.model<IStudent>('Auto', studentSchema)
export default Student
