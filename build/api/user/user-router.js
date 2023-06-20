"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./user-controller");
const express_1 = __importDefault(require("express"));
const app = express_1.default.Router();
app.get('/', user_controller_1.getUser);
exports.default = app;
//# sourceMappingURL=user-router.js.map