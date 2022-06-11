import {
  Inject,
  Injectable,
  type OnApplicationBootstrap,
} from "@nestjs/common";
import {
  type Connection,
  type ConnectionOptions,
  type RowDataPacket,
} from "mysql2/promise";
import { MysqlConstants } from "./mysql.constants";

@Injectable()
export class MySqlService implements OnApplicationBootstrap {
  private connection: Connection;

  constructor(
    @Inject(MysqlConstants.MYSQL_OPTIONS) private options: ConnectionOptions
  ) {}

  async onApplicationBootstrap() {
    await this.connect();
  }

  private async connect(): Promise<void> {
    const mysql = require("mysql2/promise");
    this.connection = await mysql.createConnection(this.options);
  }

  async exec<T extends RowDataPacket>(query: string): Promise<Array<T>> {
    if (!this.connection) {
      await this.connect();
    }
    const [rows] = await this.connection.query<Array<T>>(query);
    return rows;
  }

  async execSingle<T extends RowDataPacket>(query: string): Promise<T> {
    const rows = await this.exec<T>(query);
    return rows[0];
  }
}
