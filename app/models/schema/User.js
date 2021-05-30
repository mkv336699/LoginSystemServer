module.exports = (db, mongoose) => {
    const UserSchema = new mongoose.Schema({
        firstName: String,
        lastName: String,
        mobileNo: Number,
    }, { minimize: false, strictQuery: true, timestamps: { createdAt: 'createdAt' } });

    UserSchema.index({ mobileNo: 1 }, { unique: true });

    // db.model('User', UserSchema);
}