"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth2_1 = __importDefault(require("passport-google-oauth2"));
const config_1 = __importDefault(require("../../config"));
exports.handleGetUser = async () => {
    return {
        status: 200,
        name: 'Michael Scott',
    };
};
const GoogleStrategy = passport_google_oauth2_1.default.Strategy;
passport_1.default.use(new GoogleStrategy({
    clientID: config_1.default.auth.google.clientID,
    clientSecret: config_1.default.auth.google.clientSecret,
    callbackURL: 'http://localhost:8000/auth/google/callback',
    passReqToCallback: true,
}, async (request, accessToken, refreshToken, profile, done) => {
    try {
        console.log('Creating new user...');
        done(null, profile);
    }
    catch (error) {
        done(null, profile);
    }
}));
//# sourceMappingURL=user-service.js.map