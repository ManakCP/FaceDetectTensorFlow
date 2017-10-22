"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt = require("express-jwt");
const jwks_rsa_1 = require("jwks-rsa");
let AuthenticationMiddleware = class AuthenticationMiddleware {
    resolve() {
        return jwt({
            secret: jwks_rsa_1.ExpressJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `https://bkrebs.auth0.com/.well-known/jwks.json`
            }),
            audiance: 'http://localhost:3000/',
            issuer: 'https://bkrebs.auth0.com/',
            algorithm: 'RS256'
        });
    }
};
AuthenticationMiddleware = __decorate([
    common_1.Middleware()
], AuthenticationMiddleware);
exports.AuthenticationMiddleware = AuthenticationMiddleware;
//# sourceMappingURL=authentication.middleware.js.map