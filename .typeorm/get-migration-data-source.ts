import { config } from "dotenv";
import { DataSource, DataSourceOptions } from "typeorm";
import { typeormConfig } from "../libs/domain/src/config";

config();

const dataSource = new DataSource({
    ...typeormConfig().options as DataSourceOptions,
    // Override runtime options' empty migrations.
    migrations: [
        ".typeorm/migrations/*.ts"
    ]
});
dataSource.initialize();

export default dataSource;
