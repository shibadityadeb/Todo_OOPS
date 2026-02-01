"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import App from "../app";
// import { Request, Response } from 'express';
// const appInstance = new App();
// appInstance.app.get('/', (req: Request, res: Response) => {
//     res.send('Hello');
// }
const express_1 = __importDefault(require("express"));
class TodoRoutes {
    constructor() {
        this.path = '/todos';
        this.route = express_1.default.Router();
    }
    initializeRoutes() {
        this.route.get(this.path, (req, res) => {
            res.send('Hello world');
        });
    }
}
exports.default = TodoRoutes;
