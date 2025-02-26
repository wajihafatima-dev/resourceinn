import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "fisrtName is required"],
    },
    lastName:{
        type: String,
        required: [true, "lastName is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Invalid email'],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, 'Password must be at least 6 characters'],
    },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
