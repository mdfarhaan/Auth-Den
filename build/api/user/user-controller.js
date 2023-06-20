"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const { handleGetUser } = require('./user-service');
const getUser = async (req, res) => {
    const data = await handleGetUser();
    res.json({ data });
};
exports.getUser = getUser;
//# sourceMappingURL=user-controller.js.map