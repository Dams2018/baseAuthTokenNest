import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { global } from '../../shared/global';
import { plainToClass } from 'class-transformer';
import { ReadUserDto } from './dto/read-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly _userRepository: UserRepository,
  ) {}

  async get(id: number): Promise<ReadUserDto> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }

    const user: User = await this._userRepository.findOne(id, {
      where: { activo: global.ACTIVE },
    });

    if (!user) {
      throw new NotFoundException();
    }
      return plainToClass(ReadUserDto, user);
  }

  async getAll(): Promise<ReadUserDto[]> {
    const users: User[] = await this._userRepository.find({
      where: { activo: global.ACTIVE },
    });
    return users.map(user => plainToClass(ReadUserDto, user));
  }


}
