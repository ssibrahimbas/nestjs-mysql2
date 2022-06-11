import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(user: CreateUserDto): Promise<void> {
    await this.userRepository.create(user);
  }

  async getAll(): Promise<Array<UserEntity>> {
    return await this.userRepository.getAll();
  }

  async getById(id: number): Promise<UserEntity> {
    return await this.userRepository.getById(id);
  }
}
