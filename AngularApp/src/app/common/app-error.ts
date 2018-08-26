import { ErrorHandler } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
export class AppErrorHandler implements ErrorHandler {
  handleError(error) {
    console.log(error);
  }
}
export class AppError {
  constructor(orginalError?: any) { }
}

export class NotFoundError extends AppError {

}
export class BadInputError extends AppError {

}
export class UnAuthorizedError extends AppError {

}
export function handleError(error: Response) {
  if (error.status === 404) {
    return Observable.throw(new NotFoundError());
  } else if (error.status === 400) {
    return Observable.throw(new BadInputError());
  } else if (error.status === 401) {
    return Observable.throw(new UnAuthorizedError());
  }
  return Observable.throw(new AppError(error));
}
