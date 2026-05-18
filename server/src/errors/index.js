export class RouterNotImplementedError extends Error {
  constructor(message = "Router not implemented yet!") {
    super(message);
    (this.name = "RouterNotImplementedError"), (this.status = 501);
  }
}
