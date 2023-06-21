"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./user-controller");
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const app = express_1.default.Router();
app.get('/', user_controller_1.getUser);
app.post('/register', user_controller_1.registerUser);
app.get('/auth/google', passport_1.default.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport_1.default.authenticate('google', { failureRedirect: '/login' }), function (req, res) {
    // Successful authentication, redirect home.
    console.log('RAYMOND');
    res.redirect('/healthcheck');
});
exports.default = app;
//# sourceMappingURL=user-router.js.map