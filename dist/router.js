"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = require("express");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    return res.status(200).send("Route home");
});
router.get("/api", (req, res) => {
    return res.status(200).send("Route api");
});
router.get("/api/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma.user.findMany();
    return res.status(200).json(users);
}));
router.post("/api/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const user = yield prisma.user.create({
        data: userData,
    });
    return res.status(200).json(user);
}));
router.get("/api/users/:username", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.user.findUnique({
        where: {
            username: "ap999nea",
        },
    });
    return res.status(200).send(user);
}));
exports.default = router;
