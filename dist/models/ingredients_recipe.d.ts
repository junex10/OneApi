import { Model } from "sequelize-typescript";
import { Recipes } from '.';
export declare class IngredientsRecipes extends Model {
    recipe: Recipes;
    ingredient_description: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
