<p align="center"><br><img src="https://avatars.githubusercontent.com/u/76786120?v=4" width="128" height="128" style="border-radius: 50px;" /></p>
<h3 align="center">@ssibrahimbas/nestjs-mysql2</h3>
<p align="center">
  mysql2 module and service for nest
</p>

### What is it?

This package aims to use `nestjs` and `mysql2` package without any extra requirements. Includes 100% compatibility with `mysql2` and `@ssibrahimbas/query` package.

### Installation

To include this package in your project, run the following command:

```
npm install @ssibrahimbas/nestjs-mysql2 mysql2
```

> or with yarn
>
> ```
> yarn add @ssibrahimbas/nestjs-mysql2 mysql2
> ```

### Getting Started

Let's register the MySqlModule in `app.module.ts`
```typescript
import {Module} from "@nestjs/common"
import {MySqlModule} from "@ssibrahimbas/nestjs-mysql2"

@Module({
    imports: [
        MySqlModule.forRoot({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '12345',
            database: 'myDb',
        })
    ]
})
export class AppModule {}
```

Use entity for mysql2 raw:

```typescript
// user.entity.ts
import { RowDataPacket } from 'mysql2';

export interface UserEntity extends RowDataPacket {
  id: number;
  fullName: string;
}
```

And your any injectable file:

```typescript
import { Injectable } from '@nestjs/common';
import { MySqlService } from '@ssibrahimbas/nestjs-mysql2'

@Injectable()
export class UserRepository {
    constructor(private mysqlService: MySqlService) {}

    async getAll() : Promise<Array<UserEntity>> {
        return this.mysqlService.exec<UserEntity>("SELECT * FROM users");
    }

    async getById(id) : Promise<UserEntity> {
        return this.mysqlService.execSingle<UserEntity>("SELECT * FROM users WHERE id = 1")
    }
}
```

Or With `@ssibrahimbas/query` package:

> install package:
> ```
> npm install @ssibrahimbas/query
> ```

```typescript
import { Injectable } from '@nestjs/common';
import { MySqlService } from '@ssibrahimbas/nestjs-mysql2'
import { Query } from '@ssibrahimbas/query'

@Injectable()
export class UserRepository {
    constructor(private mysqlService: MySqlService) {}

    async getAll() : Promise<Array<UserEntity>> {
        return this.mysqlService.exec<UserEntity>(Query.table('users').getAll());
    }

    async getById(id) : Promise<UserEntity> {
        return this.mysqlService.execSingle<UserEntity>(Query.table('users').where('id', '=', id).getAll());
    }
}
```

That's it!

Check out the github repo for example usage!