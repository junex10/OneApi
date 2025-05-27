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
exports.PetitionService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const models_1 = require("../../../models");
const utils_1 = require("../../../utils");
let PetitionService = class PetitionService {
    constructor(petitionModel) {
        this.petitionModel = petitionModel;
        this.getPetitions = async (petition) => {
            const petitions = await this.petitionModel.findAndCountAll({
                distinct: true,
                col: 'Petition.id',
                limit: utils_1.Constants.PER_PAGE_WEB,
                offset: ((petition.page || 1) - 1) * (utils_1.Constants.PER_PAGE_WEB),
                order: [['id', 'desc']],
                attributes: { exclude: ['updated_at', 'deleted_at'] }
            });
            if (petitions.rows.length > 0) {
                let data = {
                    petitions: [],
                    count: petitions.count
                };
                petitions === null || petitions === void 0 ? void 0 : petitions.rows.map((value) => {
                    data.petitions.push({
                        id: value.id,
                        process: value.process.description,
                        date: value.created_at
                    });
                });
                return data;
            }
            else
                return null;
        };
    }
};
PetitionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(models_1.Petition)),
    __metadata("design:paramtypes", [Object])
], PetitionService);
exports.PetitionService = PetitionService;
//# sourceMappingURL=petition.service.js.map