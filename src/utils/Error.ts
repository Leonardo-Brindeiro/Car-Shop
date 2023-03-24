export default class ErrorCustom extends Error {
  constructor(error: string, message: string) {
    super(message);
    this.stack = error;
  }
}