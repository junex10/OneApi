import { Model } from "sequelize-typescript";
import { User } from '.';
export declare class LookingForUsers extends Model {
    type: number;
    user: User;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
