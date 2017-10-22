"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const companies_controller_1 = require("./companies.controller");
const authentication_middleware_1 = require("./authentication.middleware");
let ApplicationModule = class ApplicationModule {
    constructor() {
        this.configure = (consumer) => {
            consumer.apply(authentication_middleware_1.AuthenticationMiddleware).forRoutes({ path: '/**', method: common_1.RequestMethod.ALL });
        };
    }
};
ApplicationModule = __decorate([
    common_1.Module({
        modules: [],
        controllers: [companies_controller_1.companiesController]
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=app.module.js.map