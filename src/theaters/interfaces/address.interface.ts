import { Document } from 'mongoose';

export interface Address extends Document {
    readonly street1: string;
    readonly city: string;
    readonly state: string;
    readonly zipcode: string;
}
