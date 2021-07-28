import { ServiceErrorCode } from '../../constants/service-error';
import { CustomError } from 'ts-custom-error';

export class ServiceError extends CustomError {
  code: ServiceErrorCode;
  message: string;
  constructor(code: ServiceErrorCode, message: string) {
    super(`${code}: ${message}`);
    this.code = code;
    this.message = message;
  }

  getError() {
    return { code: this.code, message: this.message };
  }

  getMessage() {
    return this.message;
  }

  getCode() {
    return this.code;
  }
}
