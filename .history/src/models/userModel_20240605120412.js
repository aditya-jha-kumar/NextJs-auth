import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        requried: [true, "Please provide a username"],
        unique: true,
    },
    email:{
        ty
    }
});

const User = mongoose.models.users || mongoose.model("Users", userSchema);

export default User;
