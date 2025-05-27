export declare class NewRecipeDTO {
    user_id: number;
    name: string;
    cooking_time: string;
    cooking_time_type: number;
    description: string;
    preparation_time: string;
    preparation_time_type: number;
    difficulty_field: number;
}
export declare class UpdateRecipeDTO {
    id: number;
    user_id: number;
    name: string;
    cooking_time: string;
    cooking_time_type: number;
    description: string;
    preparation_time: string;
    preparation_time_type: number;
    difficulty_field: number;
}
export declare class RemoveRecipeDTO {
    id: number;
}
export declare class GetRecipeDTO {
    user_id: number;
    search?: string;
}
