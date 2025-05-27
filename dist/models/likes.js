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
exports.Likes = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const _1 = require(".");
let Likes = class Likes extends sequelize_typescript_1.Model {
};
exports.Likes = Likes;
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Likes.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => _1.User, 'like_user_id'),
    __metadata("design:type", _1.User)
], Likes.prototype, "like_user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => _1.User, 'user_id'),
    __metadata("design:type", _1.User)
], Likes.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Likes.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Likes.prototype, "created_at", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Likes.prototype, "updated_at", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Likes.prototype, "deleted_at", void 0);
exports.Likes = Likes = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        paranoid: true,
        tableName: 'likes'
    })
], Likes);
//# sourceMappingURL=likes.js.map