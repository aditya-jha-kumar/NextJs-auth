import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(reqBody);

    //check if user exisis
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User does not exists" },
        { status: 500 }
      );
    }

    //check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid Password" }, { status: 500 });
    }

    //create token data -> when user is verified a token is created which saved in user cookies
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    //token creation
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET)

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
