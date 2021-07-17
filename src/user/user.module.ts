import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { AddUserHandler } from "./commands/add-user/add-user.handler";
import { UserController } from "./user.controller";

@Module({
    imports: [CqrsModule],
    controllers: [UserController],
    providers: [
        // Command handlers.
        AddUserHandler
    ]
})
export class UserModule {}
