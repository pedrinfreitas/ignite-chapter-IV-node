"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var CreateCategoryController_1 = require("@modules/cars/useCases/createCategory/CreateCategoryController");
var ImportCategoryController_1 = require("@modules/cars/useCases/importCategory/ImportCategoryController");
var ListCategoriesController_1 = require("@modules/cars/useCases/listCategories/ListCategoriesController");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var categoryRoutes = (0, express_1.Router)();
exports.categoryRoutes = categoryRoutes;
var upload = (0, multer_1.default)({
    dest: "./tmp",
});
var createCategoryController = new CreateCategoryController_1.CreateCategoryController();
var importCategoryController = new ImportCategoryController_1.ImportCategoryController();
var listCategoryController = new ListCategoriesController_1.ListCategoriesController();
categoryRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, createCategoryController.handle);
categoryRoutes.get("/", listCategoryController.handle);
categoryRoutes.post("/import", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, upload.single("file"), importCategoryController.handle);
