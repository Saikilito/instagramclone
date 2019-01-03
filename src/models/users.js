import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username:{type: String, unique: true, required: [true, "Este campo Usuario es requerido"]},
    fullname:String,
    password:String,
    desc: String,
    bio: String,
    email: String,
    thumbnail: String,
    post:{type:[], default:[]},
    followers:{type:[], default:[]}
});

const userModel = mongoose.model('User', userSchema);

export default userModel ;