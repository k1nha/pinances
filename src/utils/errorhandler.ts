import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
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

export function HandleError(error: any) {
  if (error instanceof ApiError) {
    const { statusCode, message, details } = error;

    const errorObject = {
      message,
      details,
    };

    return NextHandleResponse(errorObject, statusCode);
  } else if (error instanceof ZodError) {
    const errorMessage = "Validation error";
    const errorDetails = error.issues.map((issue) => ({
      code: issue.code,
      message: issue.message,
      path: issue.path.join("."),
    }));

    const errorObject = {
      errorMessage,
      details: errorDetails,
    };

    return NextHandleResponse(errorObject, 400);
  } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
    console.log("error prisma");
    return NextResponse.json(
      {
        error: {
          cause: error.cause,
          message: error.message,
          meta: error.meta,
        },
      },
      { status: 400 }
    );
  } else if (error instanceof Error) {
    return NextResponse.json(
      {
        error: {
          cause: error.cause,
          message: error.message,
        },
      },
      { status: 400 }
    );
  } else {
    const error = new Error("Um erro desconhecido ocorreu");
    return NextResponse.json({ error }, { status: 400 });
  }
}

export function NextHandleResponse(data: any, statusCode: number) {
  return NextResponse.json(data, {
    status: statusCode,
  });
}
