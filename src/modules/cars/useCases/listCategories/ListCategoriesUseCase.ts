import { inject, injectable } from "tsyringe";

import { Category } from "@modules/cars/infra/typeorm/entities/Category.entities";
import { ICategoryRepository } from "@modules/cars/repositories/implementations/ICategory.repository";

@injectable()
class ListCategoriesUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository
    ) {}

    async execute(): Promise<Category[]> {
        const categories = await this.categoryRepository.list();

        return categories;
    }
}

export { ListCategoriesUseCase };
