import { Model } from "sequelize-typescript";
import { Interests, User } from '.';
export declare class InterestsUsers extends Model {
    interest: Interests;
    user: User;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
