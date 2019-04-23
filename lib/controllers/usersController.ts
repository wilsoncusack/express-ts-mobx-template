import { Users } from '../entity/usersModel';
import { Request, Response } from 'express';
import { getConnection } from 'typeorm';

// const Contact = ContactSchema

//// what I had was pretty good. Should probably go back to it. 

export class ContactController{


	public async addNewUser (req: Request, res: Response) {   
		const connection = getConnection()
		const ContractRepository = connection.getRepository(Users);
        const newContact = ContractRepository.create(req.body);
        const save = await ContractRepository.save(newContact)  
        res.status(200).send(save);
    }
}