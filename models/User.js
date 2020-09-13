import mongoose from 'mongoose';
import { isEmail } from 'validator';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'please enter a password'],
        minlength: [6,'minimum password length is 6 char']
    },
});

const User = mongoose.model('user', userSchema);

export default User;
