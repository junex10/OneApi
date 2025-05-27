"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeController = void 0;
const common_1 = require("@nestjs/common");
const recipes_service_1 = require("./recipes.service");
const utils_1 = require("../../../utils");
const platform_express_1 = require("@nestjs/platform-express");
const recipes_entity_1 = require("./recipes.entity");
const swagger_1 = require("@nestjs/swagger");
const interceptors_1 = require("../../../interceptors");
let RecipeController = class RecipeController {
    constructor(recipeService) {
        this.recipeService = recipeService;
    }
    async new(request, response, file) {
        try {
            const newRecipe = await this.recipeService.new(request, file);
            return response.status(common_1.HttpStatus.OK).json({
                recipe: newRecipe
            });
        }
        catch (e) {
            throw new common_1.UnprocessableEntityException('Could not add the recipe', e.message);
        }
    }
    async update(request, response, file) {
        try {
            const recipe = await this.recipeService.update(request, file);
            return response.status(common_1.HttpStatus.OK).json({
                recipe
            });
        }
        catch (e) {
            throw new common_1.UnprocessableEntityException('Could not update the recipe', e.message);
        }
    }
    async remove(request, response) {
        try {
            const remove = await this.recipeService.remove(request);
            if (remove) {
                return response.status(common_1.HttpStatus.OK).json({
                    message: 'Recipe was eliminated'
                });
            }
            else {
                return response.status(common_1.HttpStatus.UNPROCESSABLE_ENTITY).json({
                    message: 'Could not remove the recipe'
                });
            }
        }
        catch (e) {
            throw new common_1.UnprocessableEntityException('Could not remove the recipe', e.message);
        }
    }
    async get(request, response) {
        try {
            const recipes = await this.recipeService.getRecipes(request);
            return response.status(common_1.HttpStatus.OK).json({
                recipes
            });
        }
        catch (e) {
            throw new common_1.UnprocessableEntityException('Could not add the recipe', e.message);
        }
    }
};
exports.RecipeController = RecipeController;
__decorate([
    (0, common_1.Post)('/new'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('photo', (0, utils_1.UploadFile)('recipes'))),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recipes_entity_1.NewRecipeDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "new", null);
__decorate([
    (0, common_1.Post)('/update'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('photo', (0, utils_1.UploadFile)('recipes'))),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recipes_entity_1.UpdateRecipeDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('/remove'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recipes_entity_1.RemoveRecipeDTO, Object]),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recipes_entity_1.GetRecipeDTO, Object]),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "get", null);
exports.RecipeController = RecipeController = __decorate([
    (0, swagger_1.ApiTags)('Recipe'),
    (0, common_1.Controller)('api/recipe'),
    (0, common_1.UseInterceptors)(interceptors_1.RecipeInterceptor),
    __metadata("design:paramtypes", [recipes_service_1.RecipeService])
], RecipeController);
//# sourceMappingURL=recipes.controller.js.map