import { Model } from "sequelize-typescript";
import { User } from '.';
export declare class Likes extends Model {
    name: number;
    like_user: User;
    user: User;
    status: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
