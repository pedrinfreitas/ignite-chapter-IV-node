import { container } from "tsyringe";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/Users.repository";
import { IUsersRepository } from "@modules/accounts/repositories/implementations/IUsers.repository";
import { CategoryRepository } from "@modules/cars/infra/typeorm/repositories/Categories.repository";
import { SpecificationRepository } from "@modules/cars/infra/typeorm/repositories/Specification.repository";
import { ICategoryRepository } from "@modules/cars/repositories/implementations/ICategory.repository";
import { ISpecificationRepository } from "@modules/cars/repositories/implementations/ISpecification.repository";

container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);
