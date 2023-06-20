"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, timestamp, printf, colorize } = winston_1.format;
const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});
exports.default = (0, winston_1.createLogger)({
    format: combine(colorize(), timestamp({ format: 'HH:mm:ss' }), myFormat),
    transports: [new winston_1.transports.Console()],
});
//# sourceMappingURL=logger.js.map