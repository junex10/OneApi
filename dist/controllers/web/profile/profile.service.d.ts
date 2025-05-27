import { Person, User } from "src/models";
import { UpdateUserDTO } from './profile.entity';
export declare class ProfileService {
    private userModel;
    private personModel;
    constructor(userModel: typeof User, personModel: typeof Person);
    update: (request: UpdateUserDTO, file: Express.Multer.File) => Promise<User>;
}
