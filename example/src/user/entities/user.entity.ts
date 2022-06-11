import { RowDataPacket } from 'mysql2';

export enum UserFields {
  id = 'id',
  fullName = 'fullName',
  email = 'email',
  password = 'password',
}

export interface UserEntity extends RowDataPacket {
  [UserFields.id]: number;
  [UserFields.fullName]: string;
  [UserFields.email]: string;
  [UserFields.password]?: string;
}
