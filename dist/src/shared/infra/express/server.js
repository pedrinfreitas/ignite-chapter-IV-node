"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
require("@shared/container");
var AppError_1 = require("@shared/errors/AppError");
var swagger_json_1 = __importDefault(require("../../../swagger.json"));
var typeorm_1 = __importDefault(require("../typeorm"));
var routes_1 = require("./routes");
(0, typeorm_1.default)();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(routes_1.router);
app.use(function (err, _request, response) {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server error - ".concat(err.message),
    });
});
app.listen(3333, function () { return console.log("..:::###### SERVIDOR DE PE ######:::.."); });
