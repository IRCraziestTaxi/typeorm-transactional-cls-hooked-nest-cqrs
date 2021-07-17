import { User } from "@app/domain/entities";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CommandResult, Rejection } from "@responsekit/core";
import { Mapper } from "ts-simple-automapper";
import { LinqRepository } from "typeorm-linq-repository";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { AddUserCommand } from "./add-user.command";

@CommandHandler(AddUserCommand)
export class AddUserHandler implements ICommandHandler<AddUserCommand> {
    @Transactional()
    public async execute(command: AddUserCommand): Promise<CommandResult<number>> {
        try {
            const userRepository = new LinqRepository(User);

            const mapper = new Mapper();

            const addUser = mapper.map(command, new User());

            const addedUser = await userRepository.create(addUser);

            // return new GenericResponse({
            //     value: addedUser.id
            // });

            throw new Error("This error should cause the transaction to roll back the added user.");
        }
        catch (error) {
            return new Rejection(error);
        }
    }
}
