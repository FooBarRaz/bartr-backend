import {Schema} from 'mongoose';
import {User} from "./user";

export const UserSchema = new Schema({
    id: String,
    name: String,
    email: String
});
