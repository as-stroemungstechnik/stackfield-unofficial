export class StackfieldError extends Error {
  errorCode?: string;
  description?: string;

  constructor({ errorCode, description }: { errorCode?: string; description?: string }) {
    super(`Stackfield Error: ${errorCode} - ${description}`);
    Object.setPrototypeOf(this, StackfieldError.prototype);
    this.name = 'StackfieldError';

    this.errorCode = errorCode;
    this.description = description;
  }
}
