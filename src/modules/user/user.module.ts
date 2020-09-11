import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthGuard } from '../auth/auth.guard';


@Module({
    imports: [
      TypeOrmModule.forFeature([UserRepository]), AuthGuard
      
    ],
    providers: [UserService,],
    controllers: [UserController],
  })
  export class UserModule {}