import { NextFunction, Request, Response } from 'express';

class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    if (error.stack) { return res.status(+error.stack).json({ message: error.message }); }
    return res.status(500).json({ message: error.message });
    next();
  }
}
export default ErrorHandler;