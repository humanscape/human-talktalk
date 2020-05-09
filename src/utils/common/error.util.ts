export enum ErrorCode {
  COMMON = 0,
  METHOD_NOT_ALLOWED = 1,
  UNAUTHORIZED = 2,
  SLACK_API_FAILED = 10,
}

export interface ErrorResponse {
  code: ErrorCode | -1;
  message: string;
}

export class BaseError extends Error implements ErrorResponse {
  message = 'An error occured.';

  code = ErrorCode.COMMON;
}

export class SlackError extends BaseError {
  message = 'An error occured in Slack API.';

  code = ErrorCode.COMMON;
}

export class MethodNotAllowedError extends BaseError {
  code = ErrorCode.METHOD_NOT_ALLOWED;
}

export class UnauthorizedError extends BaseError {
  code = ErrorCode.UNAUTHORIZED;
}

export function makeStandardError({ code, message }: BaseError): ErrorResponse {
  return {
    code,
    message,
  };
}
