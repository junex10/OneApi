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
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const models_1 = require("../../../models");
const utils_1 = require("../../../utils");
const fs = require("fs");
const moment = require("moment");
let ProfileService = class ProfileService {
    constructor(userModel, personModel) {
        this.userModel = userModel;
        this.personModel = personModel;
        this.update = async (request, file) => {
            var _a;
            const user = await this.userModel.findOne({ where: { id: request.id } });
            if (file !== undefined && (user === null || user === void 0 ? void 0 : user.photo) !== null) {
                const PATH = `./public/storage/${user === null || user === void 0 ? void 0 : user.photo}`;
                if (fs.existsSync(PATH))
                    fs.unlinkSync(PATH);
            }
            const age = utils_1.Globals.calculateAge(request.birthdate);
            const update = await this.userModel.update({
                email: request.email,
                photo: file !== undefined ? ('users/' + file.filename) : user === null || user === void 0 ? void 0 : user.photo,
                birthdate: request.birthdate !== null ? moment(request.birthdate).toDate() : '',
                age,
                level_id: (_a = request.level_id) !== null && _a !== void 0 ? _a : user.level_id
            }, {
                where: { id: request.id }
            });
            if (update !== null) {
                await this.personModel.update({
                    name: request.name,
                    lastname: request.lastname,
                    phone: request.phone,
                    address: request.address
                }, {
                    where: { user_id: request.id }
                });
                return await this.userModel.findOne({
                    include: [{
                            model: models_1.Level,
                            include: ['permissions']
                        }, 'person'],
                    where: { id: request.id }
                });
            }
            return null;
        };
    }
};
exports.ProfileService = ProfileService;
exports.ProfileService = ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(models_1.User)),
    __param(1, (0, sequelize_1.InjectModel)(models_1.Person)),
    __metadata("design:paramtypes", [Object, Object])
], ProfileService);
//# sourceMappingURL=profile.service.js.map