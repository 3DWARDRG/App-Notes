const bcrypt = require('bcryptjs');
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    nombres: { type: String, required: true },
    apellidoP: { type: String, required: true },
    apellidoM: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    contrasenia: { type: String, required: true },
}, { timestamps: true });

UserSchema.mtehods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

UserSchema.mtehods.decryptPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = model('User', UserSchema);