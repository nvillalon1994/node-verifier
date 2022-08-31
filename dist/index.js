"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configuration the .env file
dotenv_1.default.config();
// Create Express APP
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Define the first route of APP
app.get('/', (req, res) => {
    // Send HELLO WORD
    res.send('welcome to APP Express +Nodemon + Jest + TS + Swagger + Mongoose');
});
app.get('/hello', (req, res) => {
    // Send HELLO WORD
    res.send('Buena');
});
app.get('/ejercicio', (req, res) => {
    // Send HELLO WORD
    res.send("message: Goodbye, world");
});
//execute APP and listen Reques to Port
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map