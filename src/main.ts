import { NestFactory } from "@nestjs/core";
import { RejectionFilter, rejectionPipe } from "@responsekit/nestjs";
import { initializeTransactionalContext, patchTypeORMRepositoryWithBaseRepository } from "typeorm-transactional-cls-hooked";
import { AppModule } from "./app.module";

initializeTransactionalContext();
patchTypeORMRepositoryWithBaseRepository();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalFilters(new RejectionFilter());
    app.useGlobalPipes(rejectionPipe);
    app.setGlobalPrefix(process.env.API_GLOBAL_PREFIX);

    app.enableCors();

    await app.listen(3000);
}

bootstrap();
