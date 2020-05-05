import {NextFunction, Request, Response} from 'express';

export const sslRedirect = (request: Request, response: Response, next: NextFunction) => {
    if (process.env.NODE_ENV === 'production') {
        if (request.headers['x-forwarded-proto'] !== 'https') {
            response.redirect(`https://${request.hostname}${request.originalUrl}`);
        }
        else {
            next();
        }
    }
    else {
        next();
    }
    console.log(`${request.method} ${request.path}`);
    next();
}
