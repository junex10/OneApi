import { Model } from "sequelize-typescript";
import { User } from '.';
export declare class Recipes extends Model {
    user: User;
    cooking_time_type: number;
    cooking_time: string;
    photo: string;
    name: string;
    description: string;
    difficulty: number;
    prep_time_type: number;
    prep_time: string;
    meal_people: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
