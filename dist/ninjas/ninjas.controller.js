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
exports.NinjasController = void 0;
const common_1 = require("@nestjs/common");
const ninjas_service_1 = require("./ninjas.service");
const create_ninja_dto_1 = require("./dto/create-ninja.dto");
let NinjasController = class NinjasController {
    constructor(ninjasService) {
        this.ninjasService = ninjasService;
    }
    getAllNinjas(weapon) {
        return this.ninjasService.getNinjas(weapon);
    }
    addNinja(CreateNinjaDto) {
        return this.ninjasService.create(CreateNinjaDto);
    }
    deleteNinja(id) {
        return this.ninjasService.deleteNinja(+id);
    }
};
exports.NinjasController = NinjasController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('weapon')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NinjasController.prototype, "getAllNinjas", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ninja_dto_1.CreateNinjaDto]),
    __metadata("design:returntype", void 0)
], NinjasController.prototype, "addNinja", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NinjasController.prototype, "deleteNinja", null);
exports.NinjasController = NinjasController = __decorate([
    (0, common_1.Controller)('ninjas'),
    __metadata("design:paramtypes", [ninjas_service_1.NinjasService])
], NinjasController);
//# sourceMappingURL=ninjas.controller.js.map