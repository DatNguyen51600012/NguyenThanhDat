import { Router } from "express";
import { TestController } from "@controllers/test.controller";
import { TestRepository } from "@repositories/TestRepository";
import { TestServices } from "@services/TestServices";
import { apiKeyMiddleware } from "@middlewares/apikey.middleware";

const testRoute = Router();
const testRepository = new TestRepository();
const testServices = new TestServices(testRepository);

const testController = new TestController(testServices);
testRoute.get("/", testController.getAll.bind(testController));
testRoute.get("/authorized",apiKeyMiddleware, testController.getAll.bind(testController));
testRoute.get("/:id", testController.getById.bind(testController));
testRoute.post("/", testController.create.bind(testController));
testRoute.put("/:id", testController.update.bind(testController));
testRoute.delete("/:id", testController.delete.bind(testController));
export { testRoute };
