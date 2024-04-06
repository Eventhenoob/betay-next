import { connect } from "@/services/connectDb";
import { NextRequest, NextResponse } from "next/server";
import sandMail from "@/services/mailer";

export async function POST(req: Request) {
     try {
    const body = await req.json();
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return NextResponse
        .json({ message: "Please provide all the required fields" }, {
            status: 401
        });
    }
    await sandMail(name, email, message);
    return NextResponse.json({ message: "Mail sent successfully" }, {status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Something went wrong" }, {status: 500});
  }
 }