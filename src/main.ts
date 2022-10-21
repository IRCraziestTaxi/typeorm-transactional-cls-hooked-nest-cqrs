import { NestFactory } from "@nestjs/core";
import { RejectionFilter, rejectionPipe } from "@responsekit/nestjs";
import { initializeTransactionalContext } from "typeorm-transactional";
import { AppModule } from "./app.module";

initializeTransactionalContext();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalFilters(new RejectionFilter());
    app.useGlobalPipes(rejectionPipe);
    app.setGlobalPrefix(process.env.API_GLOBAL_PREFIX);

    app.enableCors();

    await app.listen(3000);
}

bootstrap();
