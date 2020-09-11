import { IsString, IsNumber } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ReadUserRoleDto {

  @Expose()
  @IsString()
  readonly name: string;
}