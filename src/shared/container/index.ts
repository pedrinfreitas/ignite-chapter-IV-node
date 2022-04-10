import { container } from "tsyringe";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/Users.repository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsers.repository";
import { CategoryRepository } from "@modules/cars/infra/typeorm/repositories/Categories.repository";
import { SpecificationRepository } from "@modules/cars/infra/typeorm/repositories/Specification.repository";
import { ICategoryRepository } from "@modules/cars/repositories/ICategory.repository";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecification.repository";

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
