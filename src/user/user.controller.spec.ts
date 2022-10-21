import { Test, TestingModule } from "@nestjs/testing";
import { ResponsekitModule } from "@responsekit/nestjs";
import { UserController } from "./user.controller";

describe("UserController", () => {
    let controller: UserController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ResponsekitModule.forRoot()
            ],
            controllers: [UserController]
        }).compile();

        controller = module.get<UserController>(UserController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
