import { ContactSchema } from '../entity/crmModel';
import { Request, Response } from 'express';
import { getConnection } from 'typeorm';

const Contact = ContactSchema

export class ContactController{



	public addNewContact (req: Request, res: Response) {                
        let newContact = new Contact();
        console.log(req.query)
        newContact.firstName = req.query.firstName
        newContact.lastName = req.query.lastName
        getConnection().manager.save(newContact)
        // res.json(newContact)
       	res.status(200).send(newContact)

    
        // newContact.save((err, contact) => {
        //     if(err){
        //         res.send(err);
        //     }    
        //     res.json(contact);
        // });
    }
}