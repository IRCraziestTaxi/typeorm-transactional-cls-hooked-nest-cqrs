import { Body, Controller, Post, Res } from "@nestjs/common";
import { CommandResultController } from "@responsekit/express";
import { CommandResultService } from "@responsekit/nestjs";
import { Response } from "express";
import { AddUserCommand } from "./commands/add-user/add-user.command";

@Controller("users")
export class UserController extends CommandResultController {
    public constructor(private readonly _commandResultService: CommandResultService) {
        super();
    }

    @Post()
    public async addUser(
        @Body() command: AddUserCommand,
            @Res() response: Response
    ): Promise<Response> {
        const addResult = await this._commandResultService.send(command);

        return this.sendResponse(addResult, response);
    }
}
