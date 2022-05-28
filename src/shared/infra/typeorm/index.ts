import { Connection, createConnection, getConnectionOptions } from "typeorm";

// interface IOptions {
//     host: string;
// }

// getConnectionOptions().then((options) => {
//     const newOptions = options as IOptions;
//     newOptions.host = "database_ignite"; // Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
//     createConnection({
//         ...options,
//     });
// });

export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();
    const connenctionPG = {
        type: process.env.ENV_TYPE,
        host: process.env.ENV_HOST,
        port: process.env.ENV_PORT,
        username: process.env.ENV_USERNAME,
        password: process.env.ENV_PASSWORD,
        database: process.env.ENV_DATABASE,
    };

    return createConnection(Object.assign(defaultOptions, connenctionPG));
};
