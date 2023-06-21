"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = exports.getUser = void 0;
const { handleGetUser, handleRegisterUser } = require('./user-service');
const getUser = async (req, res) => {
    const data = await handleGetUser();
    res.json({ data });
};
exports.getUser = getUser;
const registerUser = async (req, res) => {
    const data = await handleRegisterUser();
    res.json({ data });
};
exports.registerUser = registerUser;
//# sourceMappingURL=user-controller.js.map