// /lib/routes/crmRoutes.ts

import {Request, Response } from "express";
import { ContactController } from "../controllers/usersController";
const path = require('path')
const ex = require('express')


export class Routes {   

	public contactController: ContactController = new ContactController(); 

    
    public routes(app): void {   
        
        
        // Users 
        app.route('/users') 
     
        // POST endpoint
        .post(this.contactController.addNewUser);

        app.use(ex.static(path.join(__dirname, '../../client/build')))
       
        app.get('*', (req, res) => {
          res.sendFile(path.join(__dirname, '../../client/build/index.html'))
        })
    }
}