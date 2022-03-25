import { Category } from "../entities/Category.entities";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoryRepository {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoryRepository, ICreateCategoryDTO };
