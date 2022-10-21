import { User } from "@app/domain/entities";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectDataSource } from "@nestjs/typeorm";
import { CommandResult, Rejection } from "@responsekit/core";
import { Mapper } from "ts-simple-automapper";
import { DataSource } from "typeorm";
import { LinqRepository } from "typeorm-linq-repository";
import { Transactional } from "typeorm-transactional";
import { AddUserCommand } from "./add-user.command";

@CommandHandler(AddUserCommand)
export class AddUserHandler implements ICommandHandler<AddUserCommand> {
    public constructor(
        @InjectDataSource()
        private readonly _dataSource: DataSource
    ) {}

    @Transactional()
    public async execute(command: AddUserCommand): Promise<CommandResult<number>> {
        // Mystery solved... I missed that catching the error
        // rather than letting it throw causes @Transactional
        // to not realize that an error occurred.
        // try {
        const userRepository = new LinqRepository(this._dataSource, User);

        const mapper = new Mapper();

        const addUser = mapper.map(command, new User());

        const addedUser = await userRepository.create(addUser);

        // return new GenericResponse({
        //     value: addedUser.id
        // });

        throw new Error("This error should cause the transaction to roll back the added user.");
        // }
        // catch (error) {
        //     return new Rejection(error);
        // }
    }
}
