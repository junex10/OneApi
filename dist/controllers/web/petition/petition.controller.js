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
exports.PetitionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const petition_service_1 = require("./petition.service");
const petition_entity_1 = require("./petition.entity");
let PetitionController = class PetitionController {
    constructor(petitionService) {
        this.petitionService = petitionService;
    }
    async getPetitions(response, params) {
        try {
            const petitions = await this.petitionService.getPetitions(params);
            return response.status(common_1.HttpStatus.OK).json({
                data: petitions
            });
        }
        catch (e) {
            throw new common_1.UnprocessableEntityException('Connection error, please try again', e.message);
        }
    }
};
__decorate([
    (0, common_1.Get)('getPetitions/:page?/:user_id?'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, petition_entity_1.PetitionsDTO]),
    __metadata("design:returntype", Promise)
], PetitionController.prototype, "getPetitions", null);
PetitionController = __decorate([
    (0, swagger_1.ApiTags)('Petition'),
    (0, common_1.Controller)('api/petition'),
    __metadata("design:paramtypes", [petition_service_1.PetitionService])
], PetitionController);
exports.PetitionController = PetitionController;
//# sourceMappingURL=petition.controller.js.map