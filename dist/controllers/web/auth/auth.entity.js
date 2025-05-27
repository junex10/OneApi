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
exports.PagesDTO = exports.VerifyEmailDTO = exports.PermissionDTO = exports.VerifyUserDTO = exports.ResetParams = exports.CheckCodeParams = exports.RecoverParams = exports.RegisterParams = exports.LoginParams = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class LoginParams {
}
exports.LoginParams = LoginParams;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_transformer_1.Transform)(({ value }) => value.toLowerCase().trim()),
    __metadata("design:type", String)
], LoginParams.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], LoginParams.prototype, "password", void 0);
class RegisterParams {
}
exports.RegisterParams = RegisterParams;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], RegisterParams.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], RegisterParams.prototype, "lastname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email field is required' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Invalid Email' }),
    (0, class_transformer_1.Transform)(({ value }) => value.toLowerCase().trim()),
    __metadata("design:type", String)
], RegisterParams.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], RegisterParams.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo contraseña es requerido' }),
    (0, class_validator_1.MinLength)(6, { message: 'La contraseña debe tener mínimo 6 caracteres' }),
    __metadata("design:type", String)
], RegisterParams.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], RegisterParams.prototype, "password_confirmation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], RegisterParams.prototype, "level_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], RegisterParams.prototype, "verified", void 0);
class RecoverParams {
}
exports.RecoverParams = RecoverParams;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_transformer_1.Transform)(({ value }) => value.toLowerCase().trim()),
    __metadata("design:type", String)
], RecoverParams.prototype, "email", void 0);
class CheckCodeParams {
}
exports.CheckCodeParams = CheckCodeParams;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], CheckCodeParams.prototype, "code", void 0);
class ResetParams {
}
exports.ResetParams = ResetParams;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo nueva contraseña es requerido' }),
    (0, class_validator_1.MinLength)(6, { message: 'La contraseña debe tener mínimo 6 caracteres' }),
    __metadata("design:type", String)
], ResetParams.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], ResetParams.prototype, "password_confirmation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], ResetParams.prototype, "code", void 0);
class VerifyUserDTO {
}
exports.VerifyUserDTO = VerifyUserDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo de código es requerido' }),
    __metadata("design:type", String)
], VerifyUserDTO.prototype, "url", void 0);
class PermissionDTO {
}
exports.PermissionDTO = PermissionDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], PermissionDTO.prototype, "token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], PermissionDTO.prototype, "code", void 0);
class VerifyEmailDTO {
}
exports.VerifyEmailDTO = VerifyEmailDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], VerifyEmailDTO.prototype, "email", void 0);
class PagesDTO {
}
exports.PagesDTO = PagesDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PagesDTO.prototype, "pages", void 0);
//# sourceMappingURL=auth.entity.js.map