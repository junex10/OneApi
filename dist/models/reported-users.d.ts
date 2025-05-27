import { Model } from "sequelize-typescript";
import { User } from '.';
export declare class ReportedUsers extends Model {
    reason: string;
    reported_user: User;
    user: User;
    status: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
