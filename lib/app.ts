import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/usersRoutes";
const pino = require('express-pino-logger')();

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();        
        this.routePrv.routes(this.app);
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        // pino logger
        this.app.use(pino);
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    

}

export default new App().app;