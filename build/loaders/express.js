"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const api_1 = __importDefault(require("../api"));
const config_1 = __importDefault(require("../config"));
exports.default = ({ app }) => {
    app.get('/healthcheck', (req, res) => {
        const healthcheck = {
            uptime: process.uptime(),
            message: 'OK',
            timestamp: Date.now(),
        };
        try {
            return res.json(healthcheck);
        }
        catch (e) {
            return res.status(503).send();
        }
    });
    app.use((0, morgan_1.default)('dev'));
    app.use((0, helmet_1.default)());
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use((0, express_rate_limit_1.default)({
        windowMs: 1 * 60 * 1000,
        max: 45,
        handler: (req, res, next) => {
            res.status(429).json({
                success: false,
                message: 'Too many requests in a short time. Please try in a minute.',
            });
        },
    }));
    app.use(config_1.default.api.prefix, (0, api_1.default)());
};
//# sourceMappingURL=express.js.map