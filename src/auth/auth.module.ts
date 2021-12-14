
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

// ENTITIES
import { User } from '@entities/User.entity';

// UTILS
import { ComparePassword } from '../utils/ComparePassScript';

// SERVICE
import { UserService } from '../user/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([User]), ComparePassword],
    controllers: [AuthController],
    providers: [AuthService, ComparePassword, UserService],
})
export class AuthModule { }