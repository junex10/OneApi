import { Response } from 'express';
import { PetitionService } from './petition.service';
import { PetitionsDTO } from './petition.entity';
export declare class PetitionController {
    private readonly petitionService;
    constructor(petitionService: PetitionService);
    getPetitions(response: Response, params: PetitionsDTO): Promise<Response<any, Record<string, any>>>;
}
