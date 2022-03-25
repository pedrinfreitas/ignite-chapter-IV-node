import { inject, injectable } from "tsyringe";

import { Specification } from "../../entities/Specification.entities";
import { ISpecificationRepository } from "../../repositories/ISpecification.repository";

@injectable()
class ListSpecificationsUseCase {
    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository
    ) {}

    async execute(): Promise<Specification[]> {
        const specifications = await this.specificationRepository.list();

        return specifications;
    }
}

export { ListSpecificationsUseCase };
