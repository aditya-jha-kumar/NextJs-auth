import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        requried: [tr]
    }
});

const User = mongoose.models.users || mongoose.model("Users", userSchema);

export default User;
