import { Response, Request } from "express";
import { container } from "tsyringe";

import { ImporCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;

        const importCategoryUseCase = container.resolve(ImporCategoryUseCase);

        await importCategoryUseCase.execute(file);

        return response.status(201).send();
    }
}

export { ImportCategoryController };
