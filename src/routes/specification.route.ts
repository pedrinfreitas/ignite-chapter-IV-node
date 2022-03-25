import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "../modules/cars/useCases/listSpecification/listSpecificationsController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationsController();

specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post("/", createSpecificationController.handle);

specificationRoutes.get("/", listSpecificationController.handle);

export { specificationRoutes };
