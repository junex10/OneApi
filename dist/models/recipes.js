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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipes = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const _1 = require(".");
let Recipes = class Recipes extends sequelize_typescript_1.Model {
};
exports.Recipes = Recipes;
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => _1.User, 'user_id'),
    __metadata("design:type", _1.User)
], Recipes.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Recipes.prototype, "cooking_time_type", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Recipes.prototype, "cooking_time", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Recipes.prototype, "photo", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Recipes.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Recipes.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Recipes.prototype, "difficulty", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Recipes.prototype, "prep_time_type", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Recipes.prototype, "prep_time", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Recipes.prototype, "meal_people", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Recipes.prototype, "created_at", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Recipes.prototype, "updated_at", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Recipes.prototype, "deleted_at", void 0);
exports.Recipes = Recipes = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        paranoid: true,
        tableName: 'Recipes'
    })
], Recipes);
//# sourceMappingURL=recipes.js.map