import {Schema} from 'mongoose';

export const ImageSchema: Schema = new Schema({
    data: Buffer,
    contentType: String
});

export interface IImage {
    data: Buffer,
    contentType: string
}
