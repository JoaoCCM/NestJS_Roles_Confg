
import { Injectable, HttpException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { ComparePassword } from '../utils/ComparePassScript';
import { AuthDTO, AuthResponseDTO } from './dto/auth.dto';
import { sign } from 'jsonwebtoken';


@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly utils: ComparePassword,
    ) { }

    private jwt_secret = process.env.SECRET;

    async login(user: AuthDTO): Promise<AuthResponseDTO> {
        try {
            const { email, password } = user;

            const user_info = await this.userService.findOnePassword(email);
            if (!user_info) throw new HttpException('Invalid credentials', 500);

            const compare = await this.utils.comparePass(password, user_info.password);
            if (!compare) throw new HttpException('Invalid credentials', 500);

            const payload = { id: user_info.id, role: user_info.role };

            const token = sign({ payload }, this.jwt_secret, { expiresIn: '1d' });
            const refresh_token = sign({ payload }, this.jwt_secret, { expiresIn: '2d' });

            return { email: user_info.email, token, refresh_token };
        } catch (err) {
            console.log('err', err)
            throw err;
        }
    }
}