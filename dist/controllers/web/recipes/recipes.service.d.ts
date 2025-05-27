import { Person, Recipes, User } from "src/models";
import { GetRecipeDTO, NewRecipeDTO, RemoveRecipeDTO, UpdateRecipeDTO } from './recipes.entity';
export declare class RecipeService {
    private userModel;
    private personModel;
    private recipeModel;
    constructor(userModel: typeof User, personModel: typeof Person, recipeModel: typeof Recipes);
    new: (request: NewRecipeDTO, file: Express.Multer.File) => Promise<any>;
    remove: (request: RemoveRecipeDTO) => Promise<boolean>;
    getRecipes: (request: GetRecipeDTO) => Promise<any[]>;
    update: (request: UpdateRecipeDTO, file: Express.Multer.File) => Promise<any>;
}
