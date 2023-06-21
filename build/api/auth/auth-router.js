"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("./auth-controller");
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const app = express_1.default.Router();
app.get('/', auth_controller_1.getUser);
app.post('/register', auth_controller_1.registerUser);
app.get('/google', passport_1.default.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/google/callback', passport_1.default.authenticate('google', { failureRedirect: '/login' }), function (req, res) {
    // Successful authentication, redirect home.
    console.log('RAYMOND');
    console.log(req.user);
    res.redirect('/healthcheck');
});
exports.default = app;
//# sourceMappingURL=auth-router.js.map