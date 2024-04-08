import type { NextFunction, Request, Response } from 'express'

const asyncHandler = (requestHandler: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error: Error) =>
      next(error)
    )
  }
}

export { asyncHandler }
