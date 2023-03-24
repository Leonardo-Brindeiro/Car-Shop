export default class ErrorCustom extends Error {
  public status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
} // ajuda de Raphael Pacheco