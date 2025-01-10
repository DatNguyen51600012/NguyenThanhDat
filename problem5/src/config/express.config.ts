import { Express } from "express";
import * as bodyParser from "body-parser";
import { testRoute } from "@routes/test.route";
import { ErrorHandler } from "@middlewares/error.handler.middleware";
import * as cors from "cors";
import { ILogger } from "@interfaces/common/ILogger";
import { Logger } from "@helpers/logger";

export class ExpressConfig {
  private app: Express;
  private port = Number(process.env.PORT) || 3000;
  _logger: ILogger<ExpressConfig> = new Logger<Express>();

  constructor(express: Express) {
    this.app = express;
  }

  public async init(): Promise<void> {
    try {
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({ extended: false }));
      this.app.use(cors());
      this.app.use(testRoute);
      this.app.use(ErrorHandler);
      this.app.listen(this.port, () => {
        this._logger.logInformation(`🚀 Server is running on port ${this.port}... 🔗 Click here to access http://localhost:${this.port}`);
      });
    } catch (error) {
      console.error(error);
    }
  }
}
