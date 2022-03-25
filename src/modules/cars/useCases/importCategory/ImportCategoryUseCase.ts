import { parse } from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "../../repositories/ICategory.repository";

interface IImportCategory {
    name: string;
    description: string;
}
@injectable()
class ImporCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository
    ) {}

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = [];

            const parseFile = parse({
                delimiter: ",",
            });

            stream.pipe(parseFile);

            parseFile
                .on("data", async (line) => {
                    const [name, description] = line;
                    categories.push({
                        name,
                        description,
                    });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(categories);
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);

        // eslint-disable-next-line array-callback-return
        categories.map(async (category: IImportCategory) => {
            const { name, description } = category;

            const existCategory = await this.categoryRepository.findByName(
                name
            );

            if (!existCategory) {
                await this.categoryRepository.create({
                    name,
                    description,
                });
            }
        });
    }
}

export { ImporCategoryUseCase };
