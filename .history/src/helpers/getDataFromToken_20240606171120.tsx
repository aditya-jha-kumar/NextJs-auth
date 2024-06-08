import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export const getDataFromTokent = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    c);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
