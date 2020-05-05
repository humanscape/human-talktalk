export enum ErrorCode {
  COMMON = 0,
  SLACK_API_FAILED = 10,
}

export interface Error {
  code: ErrorCode;
  message: string;
}

export function makeStandardError(code: ErrorCode, message = ''): Error {
  return {
    code,
    message,
  };
}
