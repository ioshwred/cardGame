import { IModule } from '../types/module';
import { model, Schema } from 'mongoose'

const moduleSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    identifier: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

export default model<IModule>('Module', moduleSchema)