import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { AvatarUserController } from "../modules/accounts/useCases/avatarUser/AvatarUserController";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const avatarUserController = new AvatarUserController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
    "/avatar",
    ensureAuthenticated,
    uploadAvatar.single("avatar"),
    avatarUserController.handle
);

export { usersRoutes };
