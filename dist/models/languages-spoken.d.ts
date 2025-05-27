import { Model } from "sequelize-typescript";
import { User, Languages } from '.';
export declare class LanguagesSpoken extends Model {
    name: number;
    user: User;
    language: Languages;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
