import { typeormConfig } from "@app/domain/config";
import { TypeormConfig } from "@app/domain/config/interfaces";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ResponsekitModule } from "@responsekit/nestjs";
import { DataSource } from "typeorm";
import { addTransactionalDataSource } from "typeorm-transactional";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";

@Module({
    imports: [
        ResponsekitModule.forRoot(),
        TypeOrmModule.forRootAsync({
            imports: [
                ConfigModule.forRoot({
                    load: [typeormConfig]
                })
            ],
            inject: [
                ConfigService
            ],
            useFactory: async (configService: ConfigService<TypeormConfig>) =>
                configService.get("options"),
            async dataSourceFactory(options) {
                return addTransactionalDataSource(new DataSource(options));
            }
        }),
        UserModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
