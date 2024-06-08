import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        requried: [true, "P"]
    }
});

const User = mongoose.models.users || mongoose.model("Users", userSchema);

export default User;
