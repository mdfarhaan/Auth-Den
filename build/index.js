"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loaders_1 = __importDefault(require("./loaders"));
const config_1 = __importDefault(require("./config"));
const logger_1 = __importDefault(require("./shared/logger"));
async function startServer() {
    const app = (0, express_1.default)();
    await (0, loaders_1.default)({ expressApp: app });
    app
        .listen(config_1.default.PORT, () => {
        logger_1.default.info({
            level: 'info',
            message: `Running on port ${config_1.default.PORT}`,
        });
    })
        .on('error', (err) => {
        logger_1.default.error(err);
        process.exit(1);
    });
}
startServer();
//# sourceMappingURL=index.js.map