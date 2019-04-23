import { Users } from '../entity/usersModel';
import { Request, Response } from 'express';
import { getConnection } from 'typeorm';

export class ContactController{


	public async addNewUser (req: Request, res: Response) {   
		const connection = getConnection()
		const ContractRepository = connection.getRepository(Users);
        const newContact = ContractRepository.create(req.body);
        const save = await ContractRepository.save(newContact)  
        res.status(200).send(save);
    }
}