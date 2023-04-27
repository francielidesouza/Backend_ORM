import "dotenv/config";
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationPath: string = path.join(__dirname, "./migrations/**.{ts,js}");

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL'");

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationPath],
  };
};

export const AppDataSource = new DataSource(dataSourceConfig());

// import { DataSource, DataSourceOptions } from "typeorm";
// import path from "path";
// import "dotenv/config";

// const DataSourceConfig = (): DataSourceOptions => {
//   const entitiesPath = path.join(__dirname, "entities/**.{js,ts}");
//   const migrationsPath = path.join(__dirname, "migrations/**.{js,ts}");

//   if (process.env.NODE_ENV === "test") {
//     return {
//       type: "sqlite",
//       database: ":memory:",
//       synchronize: true,
//       entities: [entitiesPath],
//     };
//   }

//   if (!process.env.DATABASE_URL)
//     throw new Error("Env var DATABASE_URL does not exists");

//   return {
//     type: "postgres",
//     url: process.env.DATABASE_URL,
//     synchronize: false,
//     logging: true,
//     entities: [entitiesPath],
//     migrations: [migrationsPath],
//   };
// };

// const AppDataSource: DataSource = new DataSource(DataSourceConfig());

// export { AppDataSource };
