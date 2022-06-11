import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserEntity } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Controller({
  path: 'users',
})
export class UserController {
  constructor(private userService: UserService) {}

  @Get('')
  async getAll(): Promise<Array<UserEntity>> {
    return await this.userService.getAll();
  }

  @Get(':id')
  async getById(@Param() { id }: { id: number }): Promise<UserEntity> {
    return await this.userService.getById(id);
  }

  @Post('create')
  async create(@Body() user: CreateUserDto): Promise<void> {
    await this.userService.create(user);
  }
}
