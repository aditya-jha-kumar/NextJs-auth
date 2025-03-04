import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String
    }
});

const User = mongoose.models.users || mongoose.model("Users", userSchema);

export default User;
