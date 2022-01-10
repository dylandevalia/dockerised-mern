import { Schema, model } from 'mongoose';

export interface User {
  email: string;
  name: string;
  avatar?: string;
}

const userSchema = new Schema<User>({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  avatar: { type: String, default: '' },
});

export default model('User', userSchema);
