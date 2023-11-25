import { v1 } from 'uuid'
import { CreateStudentReqBody } from '~/interfaces'
import Student from '~/models/student.model'
import { Result, success } from '~/utils/app'

export async function createStudent(params: CreateStudentReqBody): Promise<Result> {
    const student = new Student({
        id: v1(),
        name: params.name,
        age: params.age,
        dob: new Date()
    })
    await student.save()
    return success.created(student)
}
