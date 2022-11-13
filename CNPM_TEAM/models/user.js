let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    ma_nhan_khau : { type: String, unique: true},
    ten_nhan_khau : String,
    age: Number,
    cmndNumber: String,
    phoneNumber : String,
    ma_ho_khau: String,
    relation: String,
})

module.exports = mongoose.model('User', userSchema);