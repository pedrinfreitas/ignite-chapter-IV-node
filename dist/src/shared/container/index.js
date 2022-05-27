"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var Users_repository_1 = require("@modules/accounts/infra/typeorm/repositories/Users.repository");
var Car_repository_1 = require("@modules/cars/infra/typeorm/repositories/Car.repository");
var Categories_repository_1 = require("@modules/cars/infra/typeorm/repositories/Categories.repository");
var Specification_repository_1 = require("@modules/cars/infra/typeorm/repositories/Specification.repository");
tsyringe_1.container.registerSingleton("CategoryRepository", Categories_repository_1.CategoryRepository);
tsyringe_1.container.registerSingleton("SpecificationRepository", Specification_repository_1.SpecificationRepository);
tsyringe_1.container.registerSingleton("UsersRepository", Users_repository_1.UsersRepository);
tsyringe_1.container.registerSingleton("CarsRepository", Car_repository_1.CarsRepository);