import emailValidator from "@/validators/email";
import { NextResponse } from "next/server";
import Subscriber from "@/model/Subscriber";
import {connect} from "@/services/connectDb" 
export async function POST(req: Request) { 
    try {
        const body = req.json();
        const  {email} = await body;
        const validation = emailValidator.safeParse(email);
        if(!validation.success) return NextResponse.json({ message: "Invalid Email Provided" }, {status: 400});
        await connect();
        const foundEmail = await Subscriber.findOne({email});
        if(foundEmail) return NextResponse.json({ message: "Provided Email Already Exists." }, {status: 400});
        const newEmail = {email}
        const newSubscriber = new Subscriber(newEmail);
        newSubscriber.save();
        return NextResponse.json({ message: "Email sent successfully" }, {status: 201});
      }
      catch(e) {
        return NextResponse.json({ message: "Something went wrong" }, {status: 500});
      }
}