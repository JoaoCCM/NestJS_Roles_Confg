import { Controller, Body, Post, ValidationPipe, Res, Get, UseGuards, Param } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';
import { Response } from 'express';
import { Roles } from '../decorators/roles.decorator';
import { Role } from '@role/Role.enum';
import { RolesGuard } from '../guard/roles.guard';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(@Body(new ValidationPipe) userDTO: UserDTO, @Res() res: Response): Promise<void> {
        try {
            const user = await this.userService.createUser(userDTO);
            res.status(200).json(user);
        } catch (e) {
            const { status, response } = e;
            res.status(status || 500).json(response);
        }
    }

    @Get('/list/all')
    @UseGuards(RolesGuard)
    @Roles(Role.Admin)
    async listAll(@Res() res: Response): Promise<void> {
        try {
            const users = await this.userService.listAllUsers();
            res.status(200).json(users);
        } catch (e) {
            const { status, response } = e;
            res.status(status || 500).json(response);
        }
    }

    @Get('/:id')
    async listOne(@Param('id') id: number, @Res() res: Response): Promise<void> {
        try {
            const user = await this.userService.listOneUser(id);
            res.status(200).json(user);
        } catch (e) {
            const { status, response } = e;
            res.status(status || 500).json(response);
        }
    }
}
