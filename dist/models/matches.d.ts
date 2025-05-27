import { Model } from "sequelize-typescript";
import { User } from '.';
export declare class Matches extends Model {
    status: number;
    user: User;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
