import { ContactSchema } from '../entity/crmModel';
import { Request, Response } from 'express';
import { getConnection } from 'typeorm';

// const Contact = ContactSchema

//// what I had was pretty good. Should probably go back to it. 

export class ContactController{




	public async addNewContact (req: Request, res: Response) {   
		console.log('here')
		console.log(req.body)
		const connection = getConnection()
		const ContractRepository = connection.getRepository(ContactSchema);
        const newContact = ContractRepository.create(req.body);
        const save = await ContractRepository.save(newContact)
        console.log(save)
        res.status(200).send(save);
        // console.log(req.body)
        // newContact.firstName = req.query.firstName
        // newContact.lastName = req.query.lastName
        // return getConnection().manager.save(newContact)
        // res.json(newContact)
       	// res.status(200).send(newContact)

    
        // newContact.save((err, contact) => {
        //     if(err){
        //         res.send(err);
        //     }    
        //     res.json(contact);
        // });
    }
}