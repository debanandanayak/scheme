export class ApiResponse<T> {
  statusCode: number | string
  data: T
  success: boolean
  constructor(statusCode: number, data: T) {
    this.statusCode = statusCode
    this.data = data
    this.success = statusCode < 400
  }
}
