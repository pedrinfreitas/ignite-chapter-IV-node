import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { categoryRoutes } from "./category.route";
import { specificationRoutes } from "./specification.route";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/specifications", specificationRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);

export { router };
