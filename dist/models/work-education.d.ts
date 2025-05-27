import { Model } from "sequelize-typescript";
export declare class WorkEducation extends Model {
    work: string;
    company: string;
    high_school: string;
    college: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
