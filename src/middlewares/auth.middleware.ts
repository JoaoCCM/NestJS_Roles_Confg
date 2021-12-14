import { Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { IAuthMiddleware } from './IAuthMiddleware';

export function auth(
  req: IAuthMiddleware,
  res: Response,
  next: NextFunction,
) {
  const access_token = req.headers['authorization']?.split(' ')[1];

  if (access_token === null) res.status(401).send();

  verify(access_token, process.env.SECRET, (err, user: any) => {
    if (err) {
      console.log('err', err)
      return res.status(403).json({ message: 'Access Denied.' });
    }

    req.user = user;
    next();
  });
}