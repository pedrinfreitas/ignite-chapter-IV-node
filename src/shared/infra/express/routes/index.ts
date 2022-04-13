import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { carsRoutes } from "./cars.routes";
import { categoryRoutes } from "./category.route";
import { specificationRoutes } from "./specification.route";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/specifications", specificationRoutes);
router.use("/users", usersRoutes);
router.use("/cars", carsRoutes);
router.use(authenticateRoutes);

export { router };
