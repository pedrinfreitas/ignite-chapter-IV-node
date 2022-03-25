import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category.entities";
import { ICategoryRepository } from "../../repositories/ICategory.repository";

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
