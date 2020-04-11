import { Document } from 'mongoose';

export interface Geo extends Document {
    readonly type: string;
    readonly coordinates: Array<string>;
}
