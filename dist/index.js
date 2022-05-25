"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const PORT = process.env.port;
const connection = server_1.default.listen(PORT, () => {
    console.log("server is up on http://localhost:8000");
});
/*process.on("SIGINT", () => {
  connection.close(() => {
    console.log("Server down");
  });
});*/
