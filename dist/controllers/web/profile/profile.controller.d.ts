import { ProfileService } from './profile.service';
import { UpdateUserDTO } from './profile.entity';
import { Response } from 'express';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    update(request: UpdateUserDTO, response: Response, file: Express.Multer.File): Promise<Response<any, Record<string, any>>>;
}
