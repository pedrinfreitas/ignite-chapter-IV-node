"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var upload_1 = __importDefault(require("@config/upload"));
var AvatarUserController_1 = require("@modules/accounts/useCases/avatarUser/AvatarUserController");
var CreateUserController_1 = require("@modules/accounts/useCases/createUser/CreateUserController");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var usersRoutes = (0, express_1.Router)();
exports.usersRoutes = usersRoutes;
var uploadAvatar = (0, multer_1.default)(upload_1.default.upload("./tmp/avatar"));
var createUserController = new CreateUserController_1.CreateUserController();
var avatarUserController = new AvatarUserController_1.AvatarUserController();
usersRoutes.post("/", createUserController.handle);
usersRoutes.patch("/avatar", ensureAuthenticated_1.ensureAuthenticated, uploadAvatar.single("avatar"), avatarUserController.handle);
