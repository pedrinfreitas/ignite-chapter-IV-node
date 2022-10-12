export = {
    type: "mysql",
    port: 3306,
    host: process.env.ENV_HOST,
    username: process.env.ENV_USERNAME,
    password: process.env.ENV_PASSWORD,
    database: process.env.ENV_DATABASE,
    migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
    entities: ["./src/modules/**/entities/*.ts"],
    cli: {
        migrationsDir: "./src/shared/infra/typeorm/migrations",
    },
};
