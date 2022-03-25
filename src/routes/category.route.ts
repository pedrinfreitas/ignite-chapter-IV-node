import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";

const categoryRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoriesController();

categoryRoutes.post("/", createCategoryController.handle);

categoryRoutes.get("/", listCategoryController.handle);

categoryRoutes.post(
    "/import",
    upload.single("file"),
    importCategoryController.handle
);

export { categoryRoutes };
