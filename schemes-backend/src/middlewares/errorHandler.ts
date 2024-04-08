import express, { NextFunction, Request } from 'express'
import { ApiError } from '../utils/ApiError.js'
import mongoose, { MongooseError } from 'mongoose'
import logger from '../logger/winston.logger.js'

const errorHandler = (
  err: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const customError = new ApiError()
  customError.stack = err.stack
  if (err instanceof mongoose.Error) {
    customError.statusCode = 400
    customError.message = err.message || 'Something went wrong'
  } else if (err instanceof ApiError) {
    customError.statusCode = err.statusCode || 500
    customError.message = err.message || 'Something went wrong'
    customError.errors = err.errors
  } else {
    customError.statusCode = 500
  }
  const response = {
    ...customError,
    message: customError.message,
    ...(process.env.NODE_ENV === 'development' ? { stack: err.stack } : {})
  }
  logger.error(
    `${process.env.NODE_ENV} ${req.method} ${req.url} Error message - ${customError.message}`
  )

  return res.status(customError.statusCode).send(response)
}

export { errorHandler }
