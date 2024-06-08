import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type
    }
});

const User = mongoose.models.users || mongoose.model("Users", userSchema);

export default User;
