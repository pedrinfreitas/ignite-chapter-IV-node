import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(
            carsRepositoryInMemory
        );
    });
    it("shoud be able to list all available", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car1",
            description: "Car description",
            daily_rate: 100.0,
            license_plate: "ABC-1234",
            fine_amount: 40,
            brand: "Car brand",
            category_id: "1ea5fafd-7d7f-4ce3-afe6-41906fa638b2",
        });

        const cars = await listAvailableCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available by category_id", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car2",
            description: "Car description",
            daily_rate: 100.0,
            license_plate: "ABC-1234",
            fine_amount: 40,
            brand: "Car brand",
            category_id: "1ea5fafd-7d7f-4ce3-afe6-41906fa638b212",
        });

        const cars = await listAvailableCarsUseCase.execute({
            category_id: "1ea5fafd-7d7f-4ce3-afe6-41906fa638b2",
        });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car3",
            description: "Car description",
            daily_rate: 100.0,
            license_plate: "ABC-1234",
            fine_amount: 40,
            brand: "Car brand",
            category_id: "1ea5fafd-7d7f-4ce3-afe6-41906fa638b2",
        });

        const cars = await listAvailableCarsUseCase.execute({
            brand: "3Car brand23",
        });

        console.log(cars);
        expect(cars).toEqual([car]);
    });
    it("should be able to list all available by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car4",
            description: "Car description",
            daily_rate: 100.0,
            license_plate: "ABC-1234",
            fine_amount: 40,
            brand: "Car brand",
            category_id: "1ea5fafd-7d7f-4ce3-afe6-41906fa638b2",
        });

        const cars = await listAvailableCarsUseCase.execute({
            name: "Car4",
        });

        expect(cars).toEqual([car]);
    });
});
