import { Person, User } from "src/models";
export declare class HomeService {
    private userModel;
    private personModel;
    constructor(userModel: typeof User, personModel: typeof Person);
}
