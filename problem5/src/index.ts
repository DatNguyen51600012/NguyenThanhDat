import { AppDataSource } from "./infrastructure/typeorm.config";
import { ExpressConfig } from "./config/express.config";
import * as express from "express";
import { config } from "dotenv";

const main = async () => {
  const typeORM = await AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
  })
  const app = express();
  const Express = new ExpressConfig(app);
  await Express.init();
};

config({ path: "src/.env", debug: true,encoding:'latin1' });
main();
