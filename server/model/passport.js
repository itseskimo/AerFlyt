import mongoose from "mongoose";


const PassportSchema = new mongoose.Schema({
    data: {
        type: Array,
        required: true
    },
})

const Passport = mongoose.model('passport', PassportSchema);

export default Passport;