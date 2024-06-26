import {Request, Response, NextFunction} from 'express'
import { CustomError } from '../errors/custom-errors';

export const errorHandler = (
    err: Error, 
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    if (err instanceof CustomError){
        console.log("handling this error as a request validation error");
          return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }

    res.status(400).send({
        errors: [{message: "something went wrong"}]
    });

};