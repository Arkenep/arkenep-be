import { Document } from 'mongoose';
import { Location } from './location.interface';
import { Geo } from './geo.interface';

export interface Theater extends Document {
    readonly theaterId: number;
    readonly location: Location;
    readonly geo: Geo;
}
