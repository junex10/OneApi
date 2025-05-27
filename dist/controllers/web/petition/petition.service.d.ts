import { Petition } from "src/models";
import { PetitionsDTO } from './petition.entity';
export declare class PetitionService {
    private petitionModel;
    constructor(petitionModel: typeof Petition);
    getPetitions: (petition: PetitionsDTO) => Promise<{
        petitions: any[];
        count: number;
    }>;
}
