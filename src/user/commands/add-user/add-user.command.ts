import { Exclude, Expose } from "class-transformer";

@Exclude()
export class AddUserCommand {
    @Expose()
    public name: string;
}
