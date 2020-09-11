import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { RoleGuard } from '../auth/role.guard';
import { Roles } from '../auth/decorators/role.decorators';
import { AuthGuard } from '../auth/auth.guard';
import { ReadUserDto } from './dto/read-user.dto';


@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get(':id')
  @Roles('ADMINISTRADOR')
  @UseGuards(new AuthGuard(), RoleGuard)
  async getUser(@Param('id', ParseIntPipe) id: number): Promise<ReadUserDto> {
    const user = await this._userService.get(id);
 
    return user;
  }

  @Get()
  @Roles('ADMINISTRADOR')
  @UseGuards(new AuthGuard(), RoleGuard)
  async getUsers(): Promise<ReadUserDto[]> {
    const users = await this._userService.getAll();
    return users;
  }


}
