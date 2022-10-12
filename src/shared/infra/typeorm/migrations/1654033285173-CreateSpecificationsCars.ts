import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CreateSpecificationsCars1654033285173
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "specifications_cars",
                columns: [
                    {
                        name: "car_id",
                        type: "varchar",
                        isNullable: true,
                        generationStrategy: "uuid",
                    },
                    {
                        name: "specification_id",
                        type: "varchar",
                        isNullable: true,
                        generationStrategy: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKCarSpecification",
                        columnNames: ["car_id"],
                        referencedTableName: "cars",
                        referencedColumnNames: ["id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKSpecificationCar",
                        columnNames: ["specification_id"],
                        referencedTableName: "specifications",
                        referencedColumnNames: ["id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            })
        );
        // await queryRunner.createForeignKey(
        //     "specifications_cars",
        //     new TableForeignKey({
        //         columnNames: ["specification_id"],
        //         name: "FKSpecificationCar",
        //         referencedTableName: "specifications",
        //         referencedColumnNames: ["id"],
        //         onUpdate: "SET NULL",
        //         onDelete: "SET NULL",
        //     })
        // );

        // await queryRunner.createForeignKey(
        //     "specifications_cars",
        //     new TableForeignKey({
        //         name: "FKCarSpecification",
        //         referencedTableName: "cars",
        //         referencedColumnNames: ["id"],
        //         columnNames: ["car_id"],
        //         onUpdate: "SET NULL",
        //         onDelete: "SET NULL",
        //     })
        // );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.dropForeignKey(
        //     "specifications_cars",
        //     "FKSpecificationCar"
        // );

        // await queryRunner.dropForeignKey(
        //     "specifications_cars",
        //     "FKCarSpecification"
        // );
        await queryRunner.dropTable("specifications_cars");
    }
}
