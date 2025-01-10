const DB_TYPE:
  | "mysql"
  | "mariadb"
  | "postgres"
  | "mssql"
  | "oracle"
  | "sqlite" = "postgres";

export const DB_CONFIG = {
  type: DB_TYPE,
  host: 'postgres',
  port: Number(5432),
  username: 'postgres',
  password: 'root',
  database: 'test',
};
