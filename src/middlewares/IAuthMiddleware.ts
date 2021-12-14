import { Request } from 'express';
import { Role } from '@role/Role.enum';

export class IAuthMiddleware extends Request {
    user: {
        payload: {
            id: number,
            role: Role
        }
    }
}