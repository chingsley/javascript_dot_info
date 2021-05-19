class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class ValidationError extends CustomError {
  constructor(message) {
    super(message);
    console.log("this.constructor.name = ", this.constructor.name);
    this.status = 400;
  }
}

class NotFoundError extends CustomError {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}

module.exports = {
  ValidationError,
  NotFoundError,
};
