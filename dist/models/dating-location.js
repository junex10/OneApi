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
exports.DatingLocation = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const _1 = require(".");
let DatingLocation = class DatingLocation extends sequelize_typescript_1.Model {
};
exports.DatingLocation = DatingLocation;
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], DatingLocation.prototype, "latitude", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], DatingLocation.prototype, "longitude", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], DatingLocation.prototype, "dating_location_text", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => _1.User, 'user_id'),
    __metadata("design:type", _1.User)
], DatingLocation.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], DatingLocation.prototype, "created_at", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], DatingLocation.prototype, "updated_at", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], DatingLocation.prototype, "deleted_at", void 0);
exports.DatingLocation = DatingLocation = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        paranoid: true,
        tableName: 'dating_location'
    })
], DatingLocation);
//# sourceMappingURL=dating-location.js.map