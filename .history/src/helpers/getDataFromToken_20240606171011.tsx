import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export const getDataFromTokent = (response: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || 
  } catch (error: any) {
    throw new Error(error.message);
  }
};
