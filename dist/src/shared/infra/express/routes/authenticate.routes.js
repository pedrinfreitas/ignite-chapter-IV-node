"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRoutes = void 0;
var express_1 = require("express");
var AuthenticateUserController_1 = require("@modules/accounts/useCases/authenticateUser/AuthenticateUserController");
var authenticateRoutes = (0, express_1.Router)();
exports.authenticateRoutes = authenticateRoutes;
var authenticateUserController = new AuthenticateUserController_1.AuthenticateUserController();
authenticateRoutes.post("/sessions", authenticateUserController.handle);
