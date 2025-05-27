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
exports.WorkEducation = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let WorkEducation = class WorkEducation extends sequelize_typescript_1.Model {
};
exports.WorkEducation = WorkEducation;
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], WorkEducation.prototype, "work", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], WorkEducation.prototype, "company", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], WorkEducation.prototype, "high_school", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], WorkEducation.prototype, "college", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], WorkEducation.prototype, "created_at", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], WorkEducation.prototype, "updated_at", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], WorkEducation.prototype, "deleted_at", void 0);
exports.WorkEducation = WorkEducation = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        paranoid: true,
        tableName: 'work_education'
    })
], WorkEducation);
//# sourceMappingURL=work-education.js.map