import { DynamicModule } from "@nestjs/common";
import type { ConnectionOptions } from "mysql2/promise";
import { MysqlConstants } from "./mysql.constants";
import { MySqlService } from "./mysql.service";

export class MySqlModule {
  static forRoot(options: ConnectionOptions): DynamicModule {
    return {
      module: MySqlModule,
      global: true,
      providers: [
        {
          provide: MysqlConstants.MYSQL_OPTIONS,
          useValue: options,
        },
        MySqlService,
      ],
      exports: [MySqlService],
    };
  }
}
