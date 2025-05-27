import { Model } from "sequelize-typescript";
import { User } from '.';
export declare class DatingLocation extends Model {
    latitude: string;
    longitude: string;
    dating_location_text: string;
    user: User;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
