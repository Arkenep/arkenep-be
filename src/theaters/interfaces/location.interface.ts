import { Document } from 'mongoose';
import { Geo } from './geo.interface';
import { Address } from './address.interface';

export interface Location extends Document {
    readonly address: Address;
    readonly geo: Geo;
}
