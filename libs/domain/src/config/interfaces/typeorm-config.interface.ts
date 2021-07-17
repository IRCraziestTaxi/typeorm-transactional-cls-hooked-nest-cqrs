import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export interface TypeormConfig {
    options: TypeOrmModuleOptions;
}
