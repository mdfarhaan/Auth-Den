"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth2_1 = require("passport-google-oauth2");
const config_1 = __importDefault(require("../../config"));
exports.handleGetUser = async () => {
    return {
        status: 200,
        name: 'Michael Scott',
    };
};
passport_1.default.use(new passport_google_oauth2_1.Strategy({
    clientID: config_1.default.auth.google.clientID,
    clientSecret: config_1.default.auth.google.clientSecret,
    callbackURL: 'http://localhost:8000/auth/google/callback',
    passReqToCallback: true,
}, async (_accessToken, _refreshToken, profile, cb) => {
    try {
        console.log(profile);
        return cb(null, profile);
    }
    catch (e) {
        throw new Error(e);
    }
}));
//# sourceMappingURL=user-service.js.map