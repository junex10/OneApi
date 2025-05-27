import { RecipeService } from './recipes.service';
import { GetRecipeDTO, NewRecipeDTO, RemoveRecipeDTO, UpdateRecipeDTO } from './recipes.entity';
import { Response } from 'express';
export declare class RecipeController {
    private readonly recipeService;
    constructor(recipeService: RecipeService);
    new(request: NewRecipeDTO, response: Response, file: Express.Multer.File): Promise<Response<any, Record<string, any>>>;
    update(request: UpdateRecipeDTO, response: Response, file: Express.Multer.File): Promise<Response<any, Record<string, any>>>;
    remove(request: RemoveRecipeDTO, response: Response): Promise<Response<any, Record<string, any>>>;
    get(request: GetRecipeDTO, response: Response): Promise<Response<any, Record<string, any>>>;
}
