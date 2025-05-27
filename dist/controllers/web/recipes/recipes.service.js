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
exports.RecipeService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const models_1 = require("../../../models");
const utils_1 = require("../../../utils");
const fs = require("fs");
const sequelize_2 = require("sequelize");
let RecipeService = class RecipeService {
    constructor(userModel, personModel, recipeModel) {
        this.userModel = userModel;
        this.personModel = personModel;
        this.recipeModel = recipeModel;
        this.new = async (request, file) => {
            const newRecipe = await this.recipeModel.create({
                user_id: request.user_id,
                name: request.name,
                photo: file ? ('recipes/' + file.filename) : null,
                description: request.description,
                cooking_time_type: request.cooking_time_type || utils_1.Constants.COOKING_TYPE_TIME.MINUTES,
                cooking_time: request.cooking_time || 0,
                difficulty: request.difficulty_field || utils_1.Constants.DIFFICULTY.EASY,
                prep_time_type: request.preparation_time_type || utils_1.Constants.COOKING_TYPE_TIME.MINUTES,
                prep_time: request.preparation_time || 0,
                meal_people: 1
            });
            return newRecipe;
        };
        this.remove = async (request) => {
            const recipe = await this.recipeModel.findOne({
                where: {
                    id: request.id
                }
            });
            if (recipe === null || recipe === void 0 ? void 0 : recipe.photo) {
                const PATH = `./public/storage/${recipe.photo}`;
                if (fs.existsSync(PATH))
                    fs.unlinkSync(PATH);
            }
            this.recipeModel.destroy({
                where: {
                    id: request.id
                }
            });
            return true;
        };
        this.getRecipes = async (request) => {
            let recipes = [];
            if (!request.search) {
                recipes = await this.recipeModel.findAll({
                    where: {
                        user_id: request.user_id
                    }
                });
            }
            else {
                recipes = await this.recipeModel.findAll({
                    where: {
                        [sequelize_2.Op.or]: [
                            {
                                name: {
                                    [sequelize_2.Op.like]: `%${request.search}%`
                                }
                            },
                            {
                                description: {
                                    [sequelize_2.Op.like]: `%${request.search}%`
                                }
                            },
                            {
                                cooking_time: {
                                    [sequelize_2.Op.like]: `%${request.search}%`
                                }
                            },
                            {
                                meal_people: {
                                    [sequelize_2.Op.like]: `%${request.search}%`
                                }
                            }
                        ]
                    }
                });
            }
            return recipes;
        };
        this.update = async (request, file) => {
            const recipe = await this.recipeModel.findOne({ where: { id: request.id } });
            if (file !== undefined && (recipe === null || recipe === void 0 ? void 0 : recipe.photo) !== null) {
                const PATH = `./public/storage/${recipe === null || recipe === void 0 ? void 0 : recipe.photo}`;
                if (fs.existsSync(PATH))
                    fs.unlinkSync(PATH);
            }
            this.recipeModel.update({
                name: request.name,
                photo: file ? ('recipes/' + file.filename) : null,
                description: request.description,
                cooking_time_type: request.cooking_time_type || utils_1.Constants.COOKING_TYPE_TIME.MINUTES,
                cooking_time: request.cooking_time || 0,
                difficulty: request.difficulty_field || utils_1.Constants.DIFFICULTY.EASY,
                prep_time_type: request.preparation_time_type || utils_1.Constants.COOKING_TYPE_TIME.MINUTES,
                prep_time: request.preparation_time || 0,
                meal_people: 1
            }, {
                where: {
                    id: request.id
                }
            });
            const recipeChanged = await this.recipeModel.findOne({ where: { id: request.id } });
            return recipeChanged;
        };
    }
};
exports.RecipeService = RecipeService;
exports.RecipeService = RecipeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(models_1.User)),
    __param(1, (0, sequelize_1.InjectModel)(models_1.Person)),
    __param(2, (0, sequelize_1.InjectModel)(models_1.Recipes)),
    __metadata("design:paramtypes", [Object, Object, Object])
], RecipeService);
//# sourceMappingURL=recipes.service.js.map