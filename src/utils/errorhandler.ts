import { NextApiResponse } from "next";
import { ZodError } from "zod";

class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public details?: any
  ) {
    super(message);
    this.name = this.constructor.name;
  }
}

class ErrorHandler {
  static handle(res: NextApiResponse, error: any): void {
    if (error instanceof ApiError) {
      const { statusCode, message, details } = error;

      res.status(statusCode).json({
        error: {
          message,
          details,
        },
      });
    } else if (error instanceof ZodError) {
      const errorMessage = "Validation error";
      const errorDetails = error.issues.map((issue) => ({
        code: issue.code,
        message: issue.message,
        path: issue.path.join("."),
      }));

      ErrorHandler.send(res, 400, errorMessage, errorDetails);
    } else if (error instanceof Error) {
      const errorMessage = "An error occurred";

      ErrorHandler.send(res, 500, errorMessage, error.message);
    } else {
      ErrorHandler.send(res, 500, "An unknown error occurred");
    }
  }

  private static send(
    res: NextApiResponse,
    statusCode: number,
    message: string,
    details?: any
  ): void {
    res.status(statusCode).json({
      error: {
        message,
        details,
      },
    });
  }
}

export { ApiError, ErrorHandler };
