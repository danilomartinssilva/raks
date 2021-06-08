import { NextFunction, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

export default function addOrPersistRequestId(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const requestId = request.get('RequestId') || uuid();

  response.header('RequestId', requestId);

  request.identifier = requestId;

  return next();
}
