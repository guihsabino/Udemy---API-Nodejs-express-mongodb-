const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, select: false },
    created: { type: Date, default: Date.now }
});

UserSchema.pre('save', async function (next) {
    // Se o usuário não for modificado, vida que segue
    let user = this;
    if (!user.isModified('password')) return next();

    // Se for modificado, criptografa a senha
    user.password = await bcrypt.hash(user.password, 10);
    return next();
});

module.exports = mongoose.model('User', UserSchema);
