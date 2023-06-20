"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../shared/logger"));
const express_1 = __importDefault(require("./express"));
exports.default = async ({ expressApp }) => {
    await (0, express_1.default)({ app: expressApp });
    logger_1.default.log({
        level: 'info',
        message: 'Express loaded',
    });
};
//# sourceMappingURL=index.js.map