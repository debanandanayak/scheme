import { NextFunction, Request, Response } from 'express'
import { ApiError } from '../utils/ApiError.js'

const home = (req: Request, res: Response, next: NextFunction) => {
  throw new ApiError(200, 'anything')
}

export { home }
