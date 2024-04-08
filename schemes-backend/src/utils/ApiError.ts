export class ApiError extends Error {
  statusCode: number
  errors: any[]
  stack?: string
  success: boolean
  data: null
  constructor(
    statusCode: number = 500,
    message = 'Something went wrong',
    errors = [],
    stack = ''
  ) {
    super(message)
    this.statusCode = statusCode
    this.message = message
    this.success = false
    this.errors = errors
    this.data = null
    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}
