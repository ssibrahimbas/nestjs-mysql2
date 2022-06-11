import { Injectable } from '@nestjs/common';
import { MySqlService } from '@ssibrahimbas/nestjs-mysql2';
import { Query } from '@ssibrahimbas/query';
import { FetchUserDto } from './../dtos/fetch-user.dto';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserEntity, UserFields } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private mysqlService: MySqlService) {}

  async create(user: CreateUserDto): Promise<void> {
    await this.mysqlService.exec(Query.table('users').insert(user));
  }

  async getAll(): Promise<Array<UserEntity>> {
    return await this.mysqlService.exec<UserEntity>(
      Query.table('users')
        .select([UserFields.id, UserFields.fullName, UserFields.email])
        .getAll(),
    );
  }

  async getById(id: number): Promise<UserEntity> {
    return this.mysqlService.execSingle<UserEntity>(
      Query.table('users')
        .select([UserFields.id, UserFields.fullName, UserFields.email])
        .where('id', '=', id)
        .getAll(),
    );
  }
}
