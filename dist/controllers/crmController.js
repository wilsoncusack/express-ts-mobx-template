"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmModel_1 = require("../entity/crmModel");
const typeorm_1 = require("typeorm");
const Contact = crmModel_1.ContactSchema;
class ContactController {
    addNewContact(req, res) {
        let newContact = new Contact();
        console.log(req.query);
        newContact.firstName = req.query.firstName;
        newContact.lastName = req.query.lastName;
        typeorm_1.getConnection().manager.save(newContact);
        res.json(newContact);
        // newContact.save((err, contact) => {
        //     if(err){
        //         res.send(err);
        //     }    
        //     res.json(contact);
        // });
    }
}
exports.ContactController = ContactController;
//# sourceMappingURL=crmController.js.map