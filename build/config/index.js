"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
exports.default = {
    PORT: parseInt(process.env.PORT) || 8000,
    DB_URL: process.env.DB_URL,
    api: {
        prefix: '/api',
    },
};
//# sourceMappingURL=index.js.map