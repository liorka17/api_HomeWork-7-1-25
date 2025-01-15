const mongoose = require('mongoose'); // חיבור לספריית מונגו
const UserSchema = mongoose.Schema // יצירת סכימה עבור משתמשים
    ({
        _id: mongoose.Schema.Types.ObjectId,
        Uname: String,
        Email: String,
        Password: String,
        Role: String,
        Uid: Number
    }); // יצירת סכימה עבור המשתמשים

const UserModel = mongoose.model('User', UserSchema); // יצירת מודל דרכו נעבוד מול הדיבי עם המשתמשים

module.exports = UserModel;
