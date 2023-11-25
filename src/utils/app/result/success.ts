import { HttpStatus } from '../constant/status'
import { ResultSuccess } from './result'

export const ok = (data: any): ResultSuccess => {
  return { status: HttpStatus.OK, data: data }
}

export const created = (data: any): ResultSuccess => {
  return { status: HttpStatus.CREATED, data: data }
}

export const noContent = (): ResultSuccess => {
  return { status: HttpStatus.NO_CONTENT, data: undefined }
}
