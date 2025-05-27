import { Model } from "sequelize-typescript";
export declare class LifeStyle extends Model {
    kids: number;
    smoking: number;
    drinking: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
