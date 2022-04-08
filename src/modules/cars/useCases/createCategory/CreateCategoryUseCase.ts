import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "@modules/cars/repositories/implementations/ICategory.repository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    name: string;
    description: string;
}
@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoryRepository.findByName(
            name
        );

        if (categoryAlreadyExists) {
            throw new AppError("Category already exists!");
        }

        this.categoryRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
