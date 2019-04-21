"use strict";
// /lib/routes/crmRoutes.ts
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
class Routes {
    constructor() {
        this.contactController = new crmController_1.ContactController();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
        // Contact 
        app.route('/contact')
            // GET endpoint 
            .get((req, res) => {
            // Get all contacts            
            res.status(200).send({
                message: 'GET contact worked!'
            });
        })
            // POST endpoint
            .post(this.contactController.addNewContact);
        // Contact detail
        app.route('/contact/:contactId')
            // get specific contact
            .get((req, res) => {
            // Get a single contact detail            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        })
            .put((req, res) => {
            // Update a contact           
            res.status(200).send({
                message: 'PUT request successfulll!!!!'
            });
        })
            .delete((req, res) => {
            // Delete a contact     
            res.status(200).send({
                message: 'DELETE request successfulll!!!!'
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map