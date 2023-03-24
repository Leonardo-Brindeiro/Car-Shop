import { ErrorRequestHandler } from 'express';
import ErrorCustom from '../utils/Error';

const ErrorHandler: ErrorRequestHandler = (
  error,
  _req,
  res,
  _next,

) => {
  const { status, message } = error as ErrorCustom;
      
  return res.status(status || 500).json({ message });
};
export default ErrorHandler;

// class ErrorHandler {
//   public static handle(
//     error: ErrorCustom,
//     _req: Request,
//     res: Response,
//     _next: NextFunction,
//   ) {
//     if (error instanceof ErrorCustom) {
//       const { status, message } = error as ErrorCustom;
      
//       return res.status(status || 500).json({ message });
//     }
//     return res.status(500).json({ message: (error as Error).message });
//   }
// }
// export default ErrorHandler;