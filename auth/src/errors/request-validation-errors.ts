import { ValidationError } from "express-validator";


export class RequestValicationError extends Error {
    statusCode = 400;

    constructor(public errors: ValidationError[]) {
        super("Invalid request parameters");

        // Only because we are extending a built in class
        Object.setPrototypeOf(this, RequestValicationError.prototype);
    }

    serializeErrors() {
        return this.errors.map((err) => {
          if (err.type === 'field') {
            return { message: err.msg, field: err.path };
          }
        });
      }
}

